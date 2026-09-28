'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * Fades a block in smoothly as it enters the viewport.
 * Uses a single-shot trigger by default (once = true) to ensure silky-smooth,
 * lag-free mobile scrolling without constant re-renders or layout jitter.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
  once = true,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'li' | 'article'
  once?: boolean
}) {
  const ref = React.useRef<HTMLElement>(null)
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [once])

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={cn('reveal', className)}
      data-visible={visible ? 'true' : 'false'}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
