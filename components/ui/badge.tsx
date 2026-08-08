import * as React from 'react'

import { cn } from '@/lib/utils'
import { WORK_KIND_META } from '@/lib/data/work-kinds'
import type { WorkKind, WorkStatus } from '@/lib/types/work'

/**
 * Neutral chip. Used for technologies, categories and coursework — anything
 * where the text is the information and the container should stay quiet.
 */
export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border border-border bg-secondary/60 px-2 py-1 text-xs font-medium text-secondary-foreground',
        className,
      )}
    >
      {children}
    </span>
  )
}

export function TagList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn('flex flex-wrap gap-1.5', className)}>
      {items.map((item) => (
        <li key={item}>
          <Tag>{item}</Tag>
        </li>
      ))}
    </ul>
  )
}

/**
 * Names which part of the story an item belongs to.
 *
 * Colour comes from `--kind-accent`, which an ancestor sets from its
 * `data-kind` attribute — so this component never branches on the kind itself.
 */
export function KindBadge({ kind, className }: { kind: WorkKind; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full bg-[var(--kind-accent-soft)] px-2.5 py-1 text-[0.6875rem] font-semibold tracking-wide text-[var(--kind-accent)] uppercase',
        className,
      )}
    >
      {WORK_KIND_META[kind].label}
    </span>
  )
}

/**
 * Lifecycle badge. Ongoing work also gets a pulsing dot, which is the one place
 * on the site where a looping animation earns its keep — it marks the single
 * fact a visitor most needs to notice, that this work is live right now.
 */
export function StatusBadge({
  status,
  label,
  className,
}: {
  status: WorkStatus
  label: string
  className?: string
}) {
  return (
    <span
      data-status={status}
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full bg-[var(--status-bg)] px-2.5 py-1 text-[0.6875rem] font-semibold text-[var(--status-fg)]',
        className,
      )}
    >
      {status === 'ongoing' ? (
        <span
          className="animate-status-pulse h-1.5 w-1.5 rounded-full bg-current"
          aria-hidden="true"
        />
      ) : null}
      {label}
    </span>
  )
}
