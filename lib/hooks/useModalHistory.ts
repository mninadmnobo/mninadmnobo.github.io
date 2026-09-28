'use client'

import { useEffect, useRef, useCallback } from 'react'

interface UseModalHistoryOptions {
  isOpen: boolean
  onClose: () => void
  modalId?: string
}

/**
 * useModalHistory - Manages browser history integration and scroll preservation
 * for full-screen and sheet modals on mobile devices.
 *
 * Solves the critical mobile UX issue where tapping the phone's physical Back button,
 * swipe-back gesture, or browser back button navigates away from the website instead
 * of closing the modal.
 *
 * When the modal opens:
 * 1. Saves exact page scroll position (window.scrollY).
 * 2. Pushes a state into history so the modal becomes the latest history entry.
 * 3. If the user presses the phone's back button / edge swipe, `popstate` fires and
 *    smoothly closes the modal without leaving the website.
 * 4. If the user clicks any on-screen "Back" or "Close" button, `handleClose()` will
 *    pop the history state, cleanly closing the modal.
 * 5. Perfectly restores the saved scroll position so the user returns to the exact
 *    card they were viewing.
 */
export function useModalHistory({ isOpen, onClose, modalId = 'work-details' }: UseModalHistoryOptions) {
  const hasPushedStateRef = useRef(false)
  const savedScrollY = useRef(0)
  const onCloseRef = useRef(onClose)
  onCloseRef.current = onClose

  // Fast, instant close handler for all on-screen buttons (Back, Close ✕, Backdrop, Escape)
  const handleClose = useCallback(() => {
    // 1. Immediately close the modal in UI for instantaneous 0ms response!
    onCloseRef.current()

    // 2. Clean up history entry in background if we pushed one, keeping browser history in sync
    if (hasPushedStateRef.current) {
      hasPushedStateRef.current = false
      if (typeof window !== 'undefined' && window.history.state?.[modalId]) {
        window.history.back()
      }
    }
  }, [modalId])

  useEffect(() => {
    if (!isOpen) {
      hasPushedStateRef.current = false
      return
    }

    savedScrollY.current = window.scrollY

    // Push history entry once so physical back button / swipe-back closes the modal
    try {
      const currentState = window.history.state || {}
      window.history.pushState({ ...currentState, [modalId]: true }, '')
      hasPushedStateRef.current = true
    } catch {
      hasPushedStateRef.current = false
    }

    const handlePopState = () => {
      // User tapped phone physical back button or swiped back
      if (hasPushedStateRef.current) {
        hasPushedStateRef.current = false
      }
      onCloseRef.current()
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose()
      }
    }

    window.addEventListener('popstate', handlePopState)
    window.addEventListener('keydown', handleKeyDown)

    // Lock background scroll cleanly without layout shift
    const originalOverflow = document.body.style.overflow
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`
    }

    const targetY = savedScrollY.current

    return () => {
      window.removeEventListener('popstate', handlePopState)
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = originalOverflow
      document.body.style.paddingRight = ''

      // Restore scroll position precisely if needed
      if (Math.abs(window.scrollY - targetY) > 1) {
        window.scrollTo({ top: targetY, behavior: 'instant' })
      }
    }
  }, [isOpen, modalId, handleClose])

  return { handleClose }
}
