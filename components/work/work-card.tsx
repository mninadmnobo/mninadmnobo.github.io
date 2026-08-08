'use client'

import * as React from 'react'
import { ArrowRight, Tag as TagIcon, Sparkles } from 'lucide-react'

import { cn } from '@/lib/utils'
import { KindBadge, StatusBadge, Tag } from '@/components/ui/badge'
import { ResourceLinks } from '@/components/ui/resource-links'
import { useWorkDetail } from './work-detail-context'
import type { WorkItem } from '@/lib/types/work'

/** Chips shown on a card. The rest of the stack is left for the dialog. */
const MAX_VISIBLE_TECH = 4

/**
 * The compact card used for every kind of work.
 *
 * It shows the least a reader needs to decide whether to open the case study —
 * what it is, when, its state, roughly what it is built with, and one route
 * straight to the source. Everything else belongs in the dialog; a card that
 * tries to be the case study is what turns a portfolio into a wall of text.
 *
 * The whole card is clickable, using the standard overlay pattern: the "View
 * Details" button carries an `::after` that covers the card, so there is one
 * real button in the accessibility tree and one large target for a thumb. The
 * external links are lifted above that overlay so they stay independently
 * clickable.
 */
export function WorkCard({
  item,
  className,
  isActive = false,
}: {
  item: WorkItem
  className?: string
  isActive?: boolean
}) {
  const { open } = useWorkDetail()

  const visibleTech = item.techSummary.slice(0, MAX_VISIBLE_TECH)
  const overflowCount = item.techSummary.length - visibleTech.length
  const isProfessional = item.kind === 'professional'

  return (
    <article
      data-kind={item.kind}
      className={cn(
        'surface-card group relative isolate flex w-full flex-col p-5 sm:p-6 transition-all duration-500 transform rounded-2xl',
        isProfessional
          ? isActive
            ? 'z-20 scale-100 sm:scale-105 -translate-y-2 opacity-100 blur-none shadow-[0_0_30px_rgba(249,115,22,0.3)] ring-2 ring-amber-500/80 border-amber-500/70 bg-[var(--panel)]'
            : 'z-0 scale-[0.94] opacity-70 dark:opacity-80 blur-none hover:opacity-100 hover:scale-[0.98]'
          : item.kind === 'research'
            ? isActive
              ? 'z-20 scale-100 sm:scale-105 -translate-y-2 opacity-100 blur-none shadow-[0_0_30px_rgba(6,182,212,0.25)] ring-2 ring-cyan-500/70 border-cyan-500/60 bg-[var(--panel)]'
              : 'z-0 scale-[0.94] opacity-70 dark:opacity-80 blur-none hover:opacity-100 hover:scale-[0.98]'
            : isActive
              ? 'z-20 scale-100 sm:scale-105 -translate-y-2 opacity-100 blur-none shadow-2xl ring-2 ring-blue-500/50 border-blue-500/50 bg-[var(--panel)]'
              : 'z-0 scale-[0.94] opacity-70 dark:opacity-80 blur-none hover:opacity-100 hover:scale-[0.98]',
        className,
      )}
    >
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          {isProfessional && item.categories && item.categories.length > 0 ? (
            <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              <TagIcon className="h-3 w-3 text-amber-500" aria-hidden="true" />
              {item.categories[0]}
            </span>
          ) : (
            <KindBadge kind={item.kind} />
          )}

          {isProfessional && (
            <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/40 bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-bold text-amber-600 dark:text-amber-400">
              Saturn R&amp;D
            </span>
          )}
        </div>

        <StatusBadge status={item.status} label={item.statusLabel} />
      </div>

      <p className="mb-1 font-mono text-xs text-muted-foreground">{item.year}</p>

      <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-[var(--kind-accent)]">
        {item.title}
      </h3>

      <p className="mt-0.5 text-xs sm:text-sm font-medium text-[var(--kind-accent)]">{item.subtitle}</p>

      {/* flex-1 keeps every card in a carousel row the same height regardless of
          how long its summary runs. */}
      <p className="mt-3 flex-1 text-xs sm:text-sm leading-relaxed text-muted-foreground">{item.summary}</p>

      {/* Tech Stack section header */}
      <div className="mt-4">
        {isProfessional && (
          <p className="mb-1.5 flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            <Sparkles className="h-3 w-3 text-amber-500" aria-hidden="true" />
            Tech Stack &amp; Frameworks
          </p>
        )}
        <ul className="flex flex-wrap gap-1.5">
          {visibleTech.map((tech) => (
            <li key={tech}>
              <Tag>{tech}</Tag>
            </li>
          ))}
          {overflowCount > 0 ? (
            <li>
              <Tag className="text-muted-foreground">+{overflowCount}</Tag>
            </li>
          ) : null}
        </ul>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-2.5 border-t border-border pt-4">
        <ResourceLinks
          links={item.links}
          variant="compact"
        />

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            open(item)
          }}
          aria-label={`View details for ${item.title}`}
          className={cn(
            "inline-flex shrink-0 items-center gap-1 rounded-full border px-3 py-1 text-[11px] sm:text-xs font-semibold transition-all duration-300 cursor-pointer shadow-2xs ml-auto",
            isProfessional
              ? "border-amber-500/40 bg-amber-500/15 text-amber-700 dark:text-amber-200 hover:border-amber-500 hover:bg-amber-600 hover:text-white dark:hover:text-white dark:hover:bg-amber-500 hover:shadow-[0_4px_16px_rgba(249,115,22,0.4)]"
              : item.kind === 'research'
                ? "border-cyan-500/40 bg-cyan-500/15 text-cyan-700 dark:text-cyan-200 hover:border-cyan-500 hover:bg-cyan-600 hover:text-white dark:hover:text-white dark:hover:bg-cyan-500 hover:shadow-[0_4px_16px_rgba(6,182,212,0.4)]"
                : "border-blue-500/40 bg-blue-500/15 text-blue-700 dark:text-blue-200 hover:border-blue-500 hover:bg-blue-600 hover:text-white dark:hover:text-white dark:hover:bg-blue-500 hover:shadow-[0_4px_16px_rgba(59,130,246,0.4)]"
          )}
        >
          View Details
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </button>
      </div>
    </article>
  )
}
