import * as React from 'react'
import { ExternalLink, FileText, Globe } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Link } from '@/components/ui/link'
import { GitHubIcon, YouTubeIcon } from '@/components/ui/icons'
import type { ResourceLink, ResourceLinkKind } from '@/lib/types/work'

const LINK_ICONS: Record<ResourceLinkKind, React.ComponentType<{ className?: string }>> = {
  code: GitHubIcon,
  site: Globe,
  paper: FileText,
  video: YouTubeIcon,
  external: ExternalLink,
}

/**
 * Ordering for a work item's links.
 *
 * A paper outranks a repository for research and a live site outranks source for
 * a product, but sorting by kind alone would flip that. Instead the array order
 * chosen in the data file wins and this only decides ties, so each entry
 * controls its own emphasis.
 */
const KIND_WEIGHT: Record<ResourceLinkKind, number> = {
  paper: 0,
  site: 1,
  code: 2,
  video: 3,
  external: 4,
}

export function ResourceLinks({
  links,
  className,
  variant = 'default',
}: {
  links: ResourceLink[]
  className?: string
  /** `compact` is the card treatment; `default` is used inside the dialog. */
  variant?: 'default' | 'compact'
}) {
  if (links.length === 0) return null

  const ordered = [...links].sort((a, b) => KIND_WEIGHT[a.kind] - KIND_WEIGHT[b.kind])

  return (
    <ul className={cn('flex flex-wrap gap-2', className)}>
      {ordered.map((link) => {
        const Icon = LINK_ICONS[link.kind]

        return (
          <li key={link.href} className="shrink-0">
            <Link
              href={link.href}
              className={cn(
                'no-underline transition-colors whitespace-nowrap',
                variant === 'compact'
                  ? 'gap-1.5 rounded-full border border-border bg-secondary/50 px-2.5 py-1 text-[11px] sm:text-xs font-semibold text-foreground hover:border-primary/50 hover:text-primary'
                  : 'gap-2 rounded-lg border border-border bg-secondary/50 px-3.5 py-2 text-sm font-medium text-foreground hover:border-primary/50 hover:text-primary',
              )}
            >
              <Icon className={variant === 'compact' ? 'h-3.5 w-3.5' : 'h-4 w-4'} />
              {link.label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
