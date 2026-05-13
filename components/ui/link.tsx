import * as React from "react"

import { cn } from "@/lib/utils"

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  external?: boolean
}

function isExternalHref(href: string) {
  return /^(https?:)?\/\//i.test(href) || href.startsWith("mailto:") || href.startsWith("tel:")
}

function withBasePath(href: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""
  if (!basePath) return href
  if (isExternalHref(href) || href.startsWith("#")) return href
  if (href.startsWith(basePath + "/") || href === basePath) return href
  if (!href.startsWith("/")) return `${basePath}/${href}`
  return `${basePath}${href}`
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, external, className, target, rel, download, ...props }, ref) => {
    const shouldOpenInNewTab = external ?? isExternalHref(href)
    const isCommunicationLink = href.startsWith("mailto:") || href.startsWith("tel:")
    const finalTarget =
      target ?? (shouldOpenInNewTab && !download && !isCommunicationLink ? "_blank" : undefined)
    const finalRel = rel ?? (finalTarget === "_blank" ? "noopener noreferrer" : undefined)
    const finalHref = withBasePath(href)

    return (
      <a
        ref={ref}
        href={finalHref}
        target={finalTarget}
        rel={finalRel}
        download={download}
        className={cn(
          "glow-link inline-flex items-center gap-1 rounded-sm font-medium underline underline-offset-4 decoration-primary/60 decoration-2 transition-colors hover:decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          className,
        )}
        {...props}
      />
    )
  },
)

Link.displayName = "Link"

export { Link }