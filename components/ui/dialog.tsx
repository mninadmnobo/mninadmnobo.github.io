'use client'

import * as React from 'react'
import { X, ArrowLeft } from 'lucide-react'

import { cn } from '@/lib/utils'
import { useModalHistory } from '@/lib/hooks/useModalHistory'

/**
 * Accessible modal dialog with mobile-first smooth behavior.
 *
 * Guarantees:
 *  - `role="dialog"` + `aria-modal` + accessible label
 *  - Mobile back button / swipe back gesture closes the dialog smoothly without leaving the site
 *  - Preserves exact scroll position so user returns to the exact card they opened
 *  - Focus trapped inside on open and returned to trigger on close
 *  - Tab and Shift+Tab cycle within the dialog
 *  - Escape closes, backdrop click closes, mobile back button closes
 *  - Body scroll locked without layout shift
 *  - Content outside marked inert
 *  - Respects mobile safe areas (notch, dynamic island, home indicator bar)
 */

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

const DialogCloseContext = React.createContext<(() => void) | null>(null)

interface DialogProps {
  open: boolean
  onClose: () => void
  /** Wired to `aria-labelledby`. Must match the id of the visible title. */
  labelledBy: string
  children: React.ReactNode
  className?: string
}

export function Dialog({ open, onClose, labelledBy, children, className }: DialogProps) {
  const panelRef = React.useRef<HTMLDivElement>(null)
  const returnFocusRef = React.useRef<HTMLElement | null>(null)

  // Browser history integration for smooth mobile back-button & edge swipe support
  const { handleClose } = useModalHistory({
    isOpen: open,
    onClose,
    modalId: 'work-details',
  })

  React.useEffect(() => {
    if (!open) return

    returnFocusRef.current = document.activeElement as HTMLElement | null

    const { body } = document

    // Hide the rest of the page from assistive tech
    const siblings = Array.from(body.children).filter(
      (el) => el !== panelRef.current?.parentElement,
    ) as HTMLElement[]
    const previouslyInert = siblings.map((el) => el.hasAttribute('inert'))
    siblings.forEach((el) => el.setAttribute('inert', ''))

    const focusFirst = () => {
      const panel = panelRef.current
      if (!panel) return
      const target = panel.querySelector<HTMLElement>('[data-autofocus]') ?? panel
      target.focus({ preventScroll: true })
    }

    const raf = requestAnimationFrame(focusFirst)

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return

      const panel = panelRef.current
      if (!panel) return

      const focusable = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (el) => el.offsetParent !== null || el === document.activeElement,
      )

      if (focusable.length === 0) {
        event.preventDefault()
        panel.focus()
        return
      }

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const active = document.activeElement

      if (event.shiftKey && (active === first || active === panel)) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && active === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('keydown', onKeyDown)
      siblings.forEach((el, index) => {
        if (!previouslyInert[index]) el.removeAttribute('inert')
      })
      returnFocusRef.current?.focus({ preventScroll: true })
    }
  }, [open])

  if (!open) return null

  return (
    <DialogCloseContext.Provider value={handleClose}>
      <div className="fixed inset-0 z-100 flex items-stretch justify-center sm:items-center sm:p-6">
        {/* Backdrop */}
        <div
          className="animate-backdrop-in absolute inset-0 bg-neutral-950/70 sm:backdrop-blur-md"
          onClick={handleClose}
          aria-hidden="true"
        />

        {/* Dialog panel */}
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={labelledBy}
          tabIndex={-1}
          className={cn(
            'animate-dialog-in relative flex h-full w-full flex-col overflow-hidden bg-background shadow-2xl outline-none',
            // Full-bleed on phones, elegant contained card from sm up
            'sm:h-auto sm:max-h-[calc(100dvh-3rem)] sm:max-w-3xl sm:rounded-2xl sm:border sm:border-border lg:max-w-5xl',
            className,
          )}
        >
          {/* Top Decorative Gradient Accent Bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-cyan-600 via-sky-400 to-blue-500 shrink-0" />

          {children}
        </div>
      </div>
    </DialogCloseContext.Provider>
  )
}

interface DialogHeaderProps {
  children: React.ReactNode
  onClose?: () => void
  className?: string
}

/** Sticky header with safe area padding and quick mobile/desktop Back buttons. */
export function DialogHeader({ children, onClose, className }: DialogHeaderProps) {
  const contextClose = React.useContext(DialogCloseContext)
  const handleClose = contextClose ?? onClose ?? (() => {})

  return (
    <div
      className={cn(
        'relative shrink-0 border-b border-border bg-background/95 px-4 py-3.5 backdrop-blur sm:px-8 sm:py-5',
        'pt-[max(1rem,calc(env(safe-area-inset-top)+0.5rem))]',
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0 pr-2">
          {/* Mobile Back button */}
          <button
            type="button"
            onClick={handleClose}
            aria-label="Back to portfolio"
            className="inline-flex sm:hidden items-center justify-center p-2 rounded-full bg-secondary text-foreground hover:bg-secondary/80 active:scale-95 cursor-pointer shrink-0"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </button>

          <div className="min-w-0 flex-1">{children}</div>
        </div>

        {/* Right side controls: desktop back & close button */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={handleClose}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-secondary text-foreground hover:bg-secondary/80 active:scale-95 text-xs font-semibold transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Back</span>
          </button>

          <button
            type="button"
            onClick={handleClose}
            data-autofocus
            aria-label="Close details"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-secondary text-muted-foreground transition-all active:scale-95 hover:bg-secondary/70 hover:text-foreground sm:h-9 sm:w-9 cursor-pointer touch-manipulation"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}

/**
 * Scrollable body with smooth momentum touch scrolling and overscroll containment.
 */
export function DialogBody({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex-1 overflow-y-auto overscroll-contain px-5 py-6 sm:px-8 touch-pan-y',
        className,
      )}
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      {children}
    </div>
  )
}

/** Footer with safe-area inset support for modern mobile devices. */
export function DialogFooter({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'shrink-0 border-t border-border bg-background/95 px-5 py-4 backdrop-blur sm:px-8',
        'pb-[max(1rem,calc(env(safe-area-inset-bottom)+0.5rem))]',
        className,
      )}
    >
      {children}
    </div>
  )
}
