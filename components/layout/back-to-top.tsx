'use client'

import * as React from 'react'
import { ArrowUp } from 'lucide-react'

export function BackToTop() {
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      setVisible(window.scrollY > 600)
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={[
        'fixed right-5 bottom-5 z-40',
        'inline-flex h-11 w-11 items-center justify-center rounded-full',
        'border border-[var(--line)] bg-[var(--panel)] text-[var(--ink-muted)]',
        'shadow-[var(--shadow-card)] transition-all duration-300',
        'hover:-translate-y-1 hover:border-[var(--fab-accent)] hover:text-[var(--fab-accent)]',
        'hover:[box-shadow:0_12px_28px_-8px_rgba(8,145,178,0.4)]',
        visible
          ? 'opacity-100'
          : 'pointer-events-none translate-y-2 opacity-0',
      ].join(' ')}
    >
      <ArrowUp className="h-4 w-4" aria-hidden="true" />
    </button>
  )
}
