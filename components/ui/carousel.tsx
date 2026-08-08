'use client'

import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { cn } from '@/lib/utils'

/**
 * Horizontal card carousel built on native scroll snapping.
 *
 * The scrolling is the browser's own: a flex row inside an `overflow-x: auto`
 * container with `scroll-snap-type: x mandatory`. That gives momentum, touch
 * swipe, trackpad gestures, and per-platform scroll physics for free, and it
 * means the cards are laid out and readable before any JavaScript runs.
 *
 * JavaScript adds only what CSS cannot: the previous/next buttons, arrow-key
 * paging, and the position readout. Nothing here drives the scroll position on
 * a timer — there is no autoplay, because content that moves on its own is
 * hostile to anyone still reading it.
 *
 * Pressing "next" scrolls the rail forward, so the cards travel right-to-left
 * under a stationary viewport, matching the direction of the arrow.
 */

interface CarouselProps {
  /** Names the region for screen readers, e.g. "Featured professional work". */
  label: string
  children: React.ReactNode
  className?: string
}

export function Carousel({ label, children, className }: CarouselProps) {
  const railRef = React.useRef<HTMLDivElement>(null)
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)
  const [activeIndex, setActiveIndex] = React.useState(0)

  const itemCount = React.Children.count(children)

  const sync = React.useCallback(() => {
    const rail = railRef.current
    if (!rail) return

    const { scrollLeft, scrollWidth, clientWidth } = rail
    // A one-pixel tolerance: fractional layout widths mean scrollLeft rarely
    // lands exactly on the maximum, which would leave "next" enabled at the end.
    setCanScrollPrev(scrollLeft > 1)
    setCanScrollNext(scrollLeft < scrollWidth - clientWidth - 1)

    const first = rail.firstElementChild as HTMLElement | null
    if (first) {
      const step = first.offsetWidth + getGap(rail)
      setActiveIndex(step > 0 ? Math.round(scrollLeft / step) : 0)
    }
  }, [])

  React.useEffect(() => {
    const rail = railRef.current
    if (!rail) return

    sync()
    rail.addEventListener('scroll', sync, { passive: true })

    // Card widths are viewport-relative, so the reachable scroll range changes
    // on resize as well as on content change.
    const observer = new ResizeObserver(sync)
    observer.observe(rail)

    return () => {
      rail.removeEventListener('scroll', sync)
      observer.disconnect()
    }
  }, [sync, itemCount])

  const scrollByCard = React.useCallback((direction: 1 | -1) => {
    const rail = railRef.current
    const first = rail?.firstElementChild as HTMLElement | null
    if (!rail || !first) return

    rail.scrollBy({ left: direction * (first.offsetWidth + getGap(rail)), behavior: 'smooth' })
  }, [])

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      scrollByCard(1)
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      scrollByCard(-1)
    }
  }

  return (
    <div
      className={cn('relative', className)}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
    >
      <div
        ref={railRef}
        onKeyDown={onKeyDown}
        // Focusable so the rail can be scrolled with the arrow keys without
        // first tabbing through every card inside it.
        tabIndex={0}
        aria-label={`${label} — use the left and right arrow keys to move between items`}
        className="snap-rail no-scrollbar rail-bleed items-stretch gap-4 py-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ring)] sm:gap-5"
      >
        {children}
      </div>

      <div className="mt-5 flex items-center justify-center gap-4 sm:justify-between">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          {Array.from({ length: itemCount }).map((_, index) => (
            <span
              key={index}
              className={cn(
                'h-1.5 rounded-full transition-all duration-300',
                index === activeIndex ? 'w-6 bg-primary' : 'w-1.5 bg-border',
              )}
            />
          ))}
        </div>

        <p className="sr-only" aria-live="polite">
          Item {activeIndex + 1} of {itemCount}
        </p>

        {/*
          Hidden below `sm`. Swiping is the native gesture on a touch device, and
          keeping the arrows there put them in the bottom-right corner underneath
          the fixed back-to-top button, where the button intercepted the tap.

          `invisible` rather than unmounted when the rail cannot scroll: it drops
          out of the tab order but holds its space, so the row does not resize
          between first paint and the first measurement.
        */}
        <div
          className={cn(
            'hidden items-center gap-2 sm:flex',
            !canScrollPrev && !canScrollNext && 'invisible',
          )}
        >
          <CarouselButton
            direction="prev"
            disabled={!canScrollPrev}
            onClick={() => scrollByCard(-1)}
          />
          <CarouselButton
            direction="next"
            disabled={!canScrollNext}
            onClick={() => scrollByCard(1)}
          />
        </div>
      </div>
    </div>
  )
}

function CarouselButton({
  direction,
  disabled,
  onClick,
}: {
  direction: 'prev' | 'next'
  disabled: boolean
  onClick: () => void
}) {
  const Icon = direction === 'prev' ? ChevronLeft : ChevronRight

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === 'prev' ? 'Previous item' : 'Next item'}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary/50 hover:text-primary disabled:pointer-events-none disabled:opacity-35"
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
    </button>
  )
}

/** Reads the rendered column gap so paging matches whatever the breakpoint set. */
function getGap(rail: HTMLElement): number {
  const gap = Number.parseFloat(getComputedStyle(rail).columnGap)
  return Number.isFinite(gap) ? gap : 0
}

/**
 * Fixed-width carousel cell.
 *
 * The width is viewport-relative on phones so a slice of the next card stays
 * visible — that peek is what tells a first-time visitor the row is swipeable,
 * and it is why the cards are not simply stacked at 100% width on mobile.
 */
export function CarouselItem({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('flex w-[85vw] max-w-[21rem] sm:w-[20rem] lg:w-[21.5rem]', className)}>
      {children}
    </div>
  )
}
