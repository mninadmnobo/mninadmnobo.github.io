'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * Fades a block in smoothly as it enters the viewport.
 * Tracks scroll direction (down vs up) to provide natural entrance motion.
 * Set `once = false` by default so animations replay continuously when scrolling back up or down.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
  once = false,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'li' | 'article'
  once?: boolean
}) {
  const ref = React.useRef<HTMLElement>(null)
  const [visible, setVisible] = React.useState(false)
  const [direction, setDirection] = React.useState<'down' | 'up'>('down')
  const lastScrollY = React.useRef(0)

  React.useEffect(() => {
    const node = ref.current
    if (!node) return

    const handleScroll = () => {
      const currentY = window.scrollY
      if (currentY > lastScrollY.current + 3) {
        setDirection('down')
      } else if (currentY < lastScrollY.current - 3) {
        setDirection('up')
      }
      lastScrollY.current = currentY
    }

    lastScrollY.current = window.scrollY
    window.addEventListener('scroll', handleScroll, { passive: true })

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const currentY = window.scrollY
          setDirection(currentY < lastScrollY.current ? 'up' : 'down')
          setVisible(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold: 0.05, rootMargin: '-20px 0px -20px 0px' },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [once])

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={cn('reveal', className)}
      data-visible={visible ? 'true' : 'false'}
      data-direction={direction}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
