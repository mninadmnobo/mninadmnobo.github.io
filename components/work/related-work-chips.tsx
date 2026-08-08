'use client'

import { ArrowUpRight } from 'lucide-react'

import { findWorkById } from '@/lib/data'
import { useWorkDetail } from './work-detail-context'

/**
 * Opens the case study for work produced in a role, without leaving the
 * experience section.
 *
 * Ids are resolved through `findWorkById` and silently dropped when they do not
 * match — renaming a work item leaves a gap here rather than a chip that opens
 * nothing.
 */
export function RelatedWorkChips({ ids }: { ids: string[] }) {
  const { open } = useWorkDetail()

  const items = ids.map(findWorkById).filter((item) => item !== undefined)

  if (items.length === 0) return null

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs font-medium text-muted-foreground">Work from this role:</span>
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => open(item)}
          className="inline-flex items-center gap-1 rounded-md border border-border bg-secondary/60 px-2.5 py-1 text-xs font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
        >
          {item.title}
          <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
        </button>
      ))}
    </div>
  )
}
