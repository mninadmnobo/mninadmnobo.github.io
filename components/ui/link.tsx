import * as React from 'react'

import { cn } from '@/lib/utils'
import { basePath } from '@/lib/config'

/**
 * Anchor with the two behaviours every link on this site needs.
 *
 * 1. **Base path.** The site is exported statically and may be served from a
 *    repository subpath. Internal `href`s are written root-relative in the data
 *    files and rewritten here, so no caller has to know where the site is
 *    mounted. Hashes, `mailto:`, `tel:` and absolute URLs pass through.
 *
 * 2. **Safe new-tab defaults.** Anything off-site opens in a new tab with
 *    `rel="noopener noreferrer"`, applied here rather than left to each call
 *    site — a missed `noopener` gives the opened page a handle on this one via
 *    `window.opener`.
 *
 * `next/link` is not used: every internal destination is either a hash on the
 * current page or one of two documents, so client-side prefetching would add
 * requests without saving a navigation.
 */

type LinkProps = React.ComponentProps<'a'> & {
  href: string
  /** Forces new-tab handling for a link that is not detectably external. */
  external?: boolean
}

function isExternalHref(href: string) {
  return /^(https?:)?\/\//i.test(href) || href.startsWith('mailto:') || href.startsWith('tel:')
}

function withBasePath(href: string) {
  if (!basePath) return href
  if (isExternalHref(href) || href.startsWith('#')) return href
  if (href === basePath || href.startsWith(`${basePath}/`)) return href
  return href.startsWith('/') ? `${basePath}${href}` : `${basePath}/${href}`
}

export function Link({
  href,
  external,
  className,
  target,
  rel,
  download,
  ...props
}: LinkProps) {
  const opensNewTab = external ?? isExternalHref(href)
  // mailto:/tel: hand off to another application; forcing a tab leaves a blank
  // one behind on desktop.
  const handsOff = href.startsWith('mailto:') || href.startsWith('tel:')

  const finalTarget = target ?? (opensNewTab && !download && !handsOff ? '_blank' : undefined)

  return (
    <a
      href={withBasePath(href)}
      target={finalTarget}
      rel={rel ?? (finalTarget === '_blank' ? 'noopener noreferrer' : undefined)}
      download={download}
      className={cn(
        // min-h-6 keeps a standalone link at the 24px WCAG 2.5.8 target size
        // without changing how it sits on a line of text.
        'inline-flex min-h-6 items-center gap-1 rounded-sm underline decoration-primary/50 underline-offset-4 transition-colors hover:decoration-primary',
        className,
      )}
      {...props}
    />
  )
}
