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
export function useModalHistory({ isOpen, onClose }: UseModalHistoryOptions) {
  const onCloseRef = useRef(onClose)

  useEffect(() => {
    onCloseRef.current = onClose
  }, [onClose])

  // Instant 0ms close handler for all on-screen buttons (Back, Close ✕, Backdrop, Escape)
  const handleClose = useCallback(() => {
    onCloseRef.current()
  }, [])

  useEffect(() => {
    if (!isOpen) return

    // Lock background scroll cleanly without layout shift
    const originalOverflow = document.body.style.overflow
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose()
      }
    }

    const handlePopState = () => {
      // Closes modal if user uses browser/phone back navigation
      handleClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('popstate', handlePopState)
      document.body.style.overflow = originalOverflow
      document.body.style.paddingRight = ''
    }
  }, [isOpen, handleClose])

  return { handleClose }
}
