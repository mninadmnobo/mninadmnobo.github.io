'use client'

import * as React from 'react'
import { X } from 'lucide-react'

import { cn } from '@/lib/utils'

/**
 * Accessible modal dialog.
 *
 * Written rather than pulled from a component library because the mobile
 * presentation here is not a scaled-down desktop modal — on small screens it
 * fills the viewport and reads as a page, which is a layout decision a generic
 * dialog primitive would fight. The accessibility contract it has to meet is
 * well defined, so implementing it directly is a fair trade for one fewer
 * dependency.
 *
 * What it guarantees:
 *  - `role="dialog"` + `aria-modal` + a label wired to the title element
 *  - focus moves inside on open and returns to the trigger on close
 *  - Tab and Shift+Tab cycle within the dialog
 *  - Escape closes; a click on the backdrop closes
 *  - the page behind cannot scroll, and does not shift when the scrollbar goes
 *  - content outside the dialog is hidden from assistive tech via `inert`
 */

/** Elements that can hold focus, minus anything explicitly removed from the order. */
const FOCUSABLE =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

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

  // Read the latest onClose without re-running the open/close effect, which
  // would otherwise tear down and rebuild the scroll lock on every parent render.
  const onCloseRef = React.useRef(onClose)
  React.useEffect(() => {
    onCloseRef.current = onClose
  }, [onClose])

  React.useEffect(() => {
    if (!open) return

    returnFocusRef.current = document.activeElement as HTMLElement | null

    const { body, documentElement } = document
    const previousOverflow = body.style.overflow
    const previousPaddingRight = body.style.paddingRight

    // Compensate for the removed scrollbar so the page behind does not jump
    // sideways as the dialog opens. Zero on overlay-scrollbar platforms.
    const scrollbarWidth = window.innerWidth - documentElement.clientWidth
    body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`
    }

    // Hide the rest of the page from assistive tech. Siblings of the portal root
    // are marked inert rather than aria-hidden so they also drop out of the tab
    // order if focus ever escapes the trap.
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

    // One frame's delay lets the open animation start before focus lands,
    // avoiding a scroll jump while the panel is still transforming.
    const raf = requestAnimationFrame(focusFirst)

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onCloseRef.current()
        return
      }

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
      document.body.style.overflow = previousOverflow
      document.body.style.paddingRight = previousPaddingRight
      siblings.forEach((el, index) => {
        if (!previouslyInert[index]) el.removeAttribute('inert')
      })
      returnFocusRef.current?.focus({ preventScroll: true })
    }
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-100 flex items-stretch justify-center sm:items-center sm:p-6">
      <div
        className="animate-backdrop-in absolute inset-0 bg-neutral-950/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        tabIndex={-1}
        className={cn(
          'animate-dialog-in relative flex h-full w-full flex-col overflow-hidden bg-background shadow-2xl outline-none',
          // Full-bleed on phones, a contained panel from the sm breakpoint up.
          'sm:h-auto sm:max-h-[calc(100dvh-3rem)] sm:max-w-3xl sm:rounded-2xl sm:border sm:border-border lg:max-w-5xl',
          className,
        )}
      >
        {children}
      </div>
    </div>
  )
}

interface DialogHeaderProps {
  children: React.ReactNode
  onClose: () => void
  className?: string
}

/** Sticky header. The close button stays reachable however far the body scrolls. */
export function DialogHeader({ children, onClose, className }: DialogHeaderProps) {
  return (
    <div
      className={cn(
        'relative shrink-0 border-b border-border bg-background/95 px-5 py-4 backdrop-blur sm:px-8 sm:py-6',
        className,
      )}
    >
      <div className="pr-11 sm:pr-14">{children}</div>

      <button
        type="button"
        onClick={onClose}
        data-autofocus
        aria-label="Close details"
        className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-secondary text-muted-foreground transition-colors hover:bg-secondary/70 hover:text-foreground sm:top-6 sm:right-6 sm:h-10 sm:w-10"
      >
        <X className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  )
}

/**
 * Scrollable body.
 *
 * `overscroll-contain` stops a scroll that reaches the end of this element from
 * chaining to the page behind it, which is the usual source of "the background
 * moved while I was reading the modal" on touch devices.
 */
export function DialogBody({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('flex-1 overflow-y-auto overscroll-contain px-5 py-6 sm:px-8', className)}>
      {children}
    </div>
  )
}

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
        className,
      )}
    >
      {children}
    </div>
  )
}
