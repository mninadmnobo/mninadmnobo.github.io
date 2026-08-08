import * as React from 'react'

import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  /** Small uppercase mono kicker above the title, e.g. "Professional Experience". */
  eyebrow: string
  title?: string
  description?: string
  /** Optional trailing control, e.g. a "View all on GitHub" link. */
  action?: React.ReactNode
  className?: string
  titleClassName?: string
}

/**
 * Section header — the heading block every section opens with.
 *
 * Updated to match Fabin's design language:
 *   - Eyebrow: mono, uppercase, wide tracking, accent colour, with a leading dot ·
 *   - Heading: tight letter-spacing and strong weight for an editorial feel
 *   - Accent bar replaced by dot prefix inline with the eyebrow
 */
export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  className,
  titleClassName,
}: SectionHeaderProps) {
  return (
    <div className={cn(title ? 'mb-8 md:mb-12' : 'mb-6 md:mb-8', className)}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          {/* Eyebrow — mono label with leading dot */}
          <p className="eyebrow text-base sm:text-lg font-bold uppercase tracking-[0.22em] text-[var(--fab-accent)]">
            <span aria-hidden="true" className="text-[var(--fab-accent)] font-black text-xl">·</span>
            {eyebrow}
          </p>

          {title ? (
            <h2
              className={cn(
                'mt-3 text-xl font-bold tracking-tight text-[var(--ink)]',
                'sm:text-2xl md:text-3xl lg:text-3xl leading-[1.25]',
                titleClassName,
              )}
            >
              {title}
            </h2>
          ) : null}
        </div>

        {action ? <div className="shrink-0">{action}</div> : null}
      </div>

      {description ? (
        <p className="mt-4 max-w-2xl leading-relaxed text-[var(--ink-muted)]">
          {description}
        </p>
      ) : null}
    </div>
  )
}
