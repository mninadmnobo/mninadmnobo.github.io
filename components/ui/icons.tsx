import * as React from 'react'
import { cn } from '@/lib/utils'

type IconProps = React.SVGProps<SVGSVGElement>

function Svg({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      {children}
    </svg>
  )
}

export function GitHubIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 0 0 8.21 11.39c.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.02 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
    </Svg>
  )
}

export function YouTubeIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn('text-[#FF0000] shrink-0', className)}
      {...props}
    >
      <path
        fill="currentColor"
        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
      />
      <path fill="#FFFFFF" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

export function LinkedInIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        fill="#0A66C2"
        d="M22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"
      />
      <path
        fill="#FFFFFF"
        d="M20.45 20.45H16.9v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.56V9h3.56v11.45Z"
      />
    </Svg>
  )
}

export function ScholarIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3Zm0 13L3.74 11.5 12 7l8.26 4.5L12 16Z" />
      <path d="M5 13.18V17.5c0 1.38 3.13 3.5 7 3.5s7-2.12 7-3.5v-4.32l-7 3.82-7-3.82Z" />
    </Svg>
  )
}

export function OrcidIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0ZM8.16 17.6H6.7V8.4h1.46v9.2Zm-.73-10.5a.95.95 0 1 1 0-1.9.95.95 0 0 1 0 1.9Zm4.62 10.5h-2.3V8.4h3.72c3.05 0 4.63 2.02 4.63 4.6 0 2.8-1.9 4.6-4.7 4.6h-1.35Zm.02-1.32h1.15c2.1 0 3.34-1.24 3.34-3.28 0-1.9-1.1-3.28-3.32-3.28h-1.17v6.56Z" />
    </Svg>
  )
}

export function ResearchGateIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M19.59 0H4.4A4.4 4.4 0 0 0 0 4.41v15.18A4.4 4.4 0 0 0 4.41 24h15.18A4.4 4.4 0 0 0 24 19.59V4.41A4.4 4.4 0 0 0 19.59 0ZM8.9 15.32c-.83 0-1.6-.2-2.15-.63-.7-.55-1.05-1.4-1.05-2.6V11c0-1.2.35-2.05 1.05-2.6.55-.43 1.32-.63 2.15-.63.8 0 1.5.18 2.02.55.55.4.87 1 .95 1.75h-1.4c-.07-.36-.24-.64-.5-.83-.27-.2-.63-.3-1.07-.3-.5 0-.9.13-1.2.4-.36.32-.54.85-.54 1.6v1.15c0 .75.18 1.28.54 1.6.3.27.7.4 1.2.4.44 0 .8-.1 1.06-.3.27-.2.44-.48.5-.85v-.83H9.03v-1.2h3.05v2c-.08.77-.4 1.37-.96 1.78-.53.37-1.22.55-2.02.55h-.2Zm8.63 3.3-.9-1.6c-.5-.9-.9-1.35-1.4-1.35h-.87v2.95h-1.5V8.2h3.1c1.9 0 3.05.98 3.05 2.6 0 1.28-.72 2.14-1.9 2.4.44.24.77.7 1.15 1.36l1.35 2.36h-1.7Zm-1.6-4.32h-1.57v-3.1h1.5c1.06 0 1.63.53 1.63 1.53 0 1-.55 1.57-1.56 1.57Z" />
    </Svg>
  )
}

export function LeetCodeIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M13.48 0a1.37 1.37 0 0 0-.96.44L7.12 6.23l-3.86 4.13a5.27 5.27 0 0 0-1.2 2.1 5.3 5.3 0 0 0-.13.51 5.53 5.53 0 0 0 .06 2.36 5.84 5.84 0 0 0 .35 1.02 5.94 5.94 0 0 0 1.27 1.82l4.28 4.19.04.04c2.25 2.16 5.85 2.13 8.06-.07l2.4-2.39a1.38 1.38 0 0 0-1.95-1.96l-2.4 2.39a3.02 3.02 0 0 1-4.2.04l-.02-.02-4.28-4.19c-.65-.64-.97-1.47-.95-2.26.01-.18.03-.35.07-.52.1-.43.31-.83.62-1.16l3.72-3.98c1.06-1.13 3.2-1.27 4.43-.28l3.5 2.83a1.38 1.38 0 1 0 1.74-2.15l-3.5-2.83a6.5 6.5 0 0 0-2.77-1.2l2.01-2.16A1.38 1.38 0 0 0 13.48 0Z" />
      <path d="M21.9 12.3H10.6a1.35 1.35 0 0 0 0 2.7h11.3a1.35 1.35 0 0 0 0-2.7Z" />
    </Svg>
  )
}

export function CodeforcesIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5A1.5 1.5 0 0 1 4.5 21h-3A1.5 1.5 0 0 1 0 19.5V9a1.5 1.5 0 0 1 1.5-1.5h3ZM13.5 3A1.5 1.5 0 0 1 15 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 19.5v-15A1.5 1.5 0 0 1 10.5 3h3ZM22.5 10.5A1.5 1.5 0 0 1 24 12v7.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 18 19.5V12a1.5 1.5 0 0 1 1.5-1.5h3Z" />
    </Svg>
  )
}

export function KaggleIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M18.83 23.72a.34.34 0 0 1-.28.13h-3.2a.55.55 0 0 1-.43-.2l-5.1-6.42-1.42 1.35v4.9a.36.36 0 0 1-.37.37H5.4a.36.36 0 0 1-.37-.37V.37c0-.25.12-.37.37-.37h2.63c.25 0 .37.12.37.37v13.87l5.94-6a.62.62 0 0 1 .46-.2h3.31c.15 0 .25.06.3.2.04.14.02.25-.06.34l-6.27 6.06 6.55 8.28c.1.14.11.26.03.4Z" />
    </Svg>
  )
}

export function FacebookIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.03 4.39 11 10.13 11.93v-8.44H7.08v-3.5h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.96h-1.52c-1.5 0-1.96.93-1.96 1.88v2.26h3.33l-.53 3.5h-2.8V24C19.61 23.07 24 18.1 24 12.07Z" />
    </Svg>
  )
}

export function InstagramIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5Zm0 2h8.5C18.33 4 20 5.67 20 7.75v8.5c0 2.08-1.67 3.75-3.75 3.75h-8.5C5.67 20 4 18.33 4 16.25v-8.5C4 5.67 5.67 4 7.75 4Zm8.75 1a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
    </Svg>
  )
}

export function XIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M18.9 1.15h3.68l-8.04 9.2L24 22.85h-7.4l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.6l5.24 6.93 6.06-6.93Zm-1.29 19.5h2.04L6.49 3.24H4.3l13.31 17.41Z" />
    </Svg>
  )
}

export function NeetCodeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path d="m12 3 9 4.5-9 4.5-9-4.5L12 3Z" strokeLinejoin="round" />
      <path d="m3 12 9 4.5 9-4.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m3 16.5 9 4.5 9-4.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** Maps `ProfileLink.icon` to a component. Unknown keys fall back to GitHub. */
export const PROFILE_ICONS: Record<string, React.ComponentType<IconProps>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  scholar: ScholarIcon,
  orcid: OrcidIcon,
  researchgate: ResearchGateIcon,
  leetcode: LeetCodeIcon,
  neetcode: NeetCodeIcon,
  codeforces: CodeforcesIcon,
  kaggle: KaggleIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  x: XIcon,
}

/**
 * Renders authentic, official brand badge icons with rich original brand colors and official multi-colored vector marks.
 */
export function BrandProfileBadge({ name }: { name: string }) {
  const sizeClass = "h-5 w-5 shrink-0"

  switch (name) {
    case 'github':
      return (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#181717] dark:bg-[#24292e] text-white shadow-xs border border-white/10">
          <svg className={sizeClass} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 0 0 8.21 11.39c.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.02 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
          </svg>
        </div>
      )

    case 'linkedin':
      return (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0A66C2] text-white shadow-xs border border-white/10">
          <svg className={sizeClass} viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.45 20.45H16.9v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
          </svg>
        </div>
      )

    case 'scholar':
      return (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#4285F4] text-white shadow-xs border border-white/10">
          {/* Official Google Scholar Graduation Cap Logo */}
          <svg className={sizeClass} viewBox="0 0 512 512" fill="currentColor">
            <path d="M256 32L32 160l224 128 176-100.57V352h48V160L256 32zM112 284v92c0 30.9 64.5 84 144 84s144-53.1 144-84v-92l-144 82.29L112 284z" />
          </svg>
        </div>
      )

    case 'orcid':
      return (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#A6CE39] text-white shadow-xs border border-white/10">
          {/* Official ORCID iD Logo */}
          <svg className={sizeClass} viewBox="0 0 256 256">
            <path fill="#FFFFFF" d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0zm-43.1 184H67.4V72h17.5v112zm-8.8-128c-6.1 0-11-4.9-11-11s4.9-11 11-11 11 4.9 11 11-4.9 11-11 11zm115.3 75.3c0 30.5-22.3 52.7-55.7 52.7h-36.2V72h38.7c31.8 0 53.2 21.6 53.2 59.3zm-74.4-44.5v72.3h18.8c22.1 0 35.8-12.7 35.8-36.1 0-22.7-13.3-36.2-35.4-36.2h-19.2z" />
          </svg>
        </div>
      )

    case 'researchgate':
      return (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00CCBB] text-white shadow-xs border border-white/10">
          {/* Official ResearchGate RG Logo */}
          <svg className={sizeClass} viewBox="0 0 32 32">
            <text x="15" y="23" fill="#FFFFFF" fontSize="19" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" textAnchor="middle">
              R<tspan dy="-7" fontSize="12" fontWeight="900">G</tspan>
            </text>
          </svg>
        </div>
      )

    case 'facebook':
      return (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1877F2] text-white shadow-xs border border-white/10">
          <svg className={sizeClass} viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </div>
      )

    case 'instagram':
      return (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white shadow-xs border border-white/10">
          {/* Official Instagram Full Vector Logo */}
          <svg className={sizeClass} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </div>
      )

    case 'x':
      return (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#000000] dark:bg-[#15202B] text-white shadow-xs border border-white/10">
          <svg className={sizeClass} viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </div>
      )

    case 'leetcode':
      return (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1E1E1E] border border-[#FFA116]/40 shadow-xs">
          {/* Official LeetCode Dual-Color Logo (Orange Bracket + Yellow Dash) */}
          <svg className={sizeClass} viewBox="0 0 24 24">
            <path fill="#FFA116" d="M13.48 0a1.37 1.37 0 0 0-.96.44L7.12 6.23l-3.86 4.13a5.27 5.27 0 0 0-1.2 2.1 5.3 5.3 0 0 0-.13.51 5.53 5.53 0 0 0 .06 2.36 5.84 5.84 0 0 0 .35 1.02 5.94 5.94 0 0 0 1.27 1.82l4.28 4.19.04.04c2.25 2.16 5.85 2.13 8.06-.07l2.4-2.39a1.38 1.38 0 0 0-1.95-1.96l-2.4 2.39a3.02 3.02 0 0 1-4.2.04l-.02-.02-4.28-4.19c-.65-.64-.97-1.47-.95-2.26.01-.18.03-.35.07-.52.1-.43.31-.83.62-1.16l3.72-3.98c1.06-1.13 3.2-1.27 4.43-.28l3.5 2.83a1.38 1.38 0 1 0 1.74-2.15l-3.5-2.83a6.5 6.5 0 0 0-2.77-1.2l2.01-2.16A1.38 1.38 0 0 0 13.48 0Z" />
            <path fill="#FFFFFF" d="M21.9 12.3H10.6a1.35 1.35 0 0 0 0 2.7h11.3a1.35 1.35 0 0 0 0-2.7Z" />
          </svg>
        </div>
      )

    case 'neetcode':
      return (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#7C3AED] text-white shadow-xs border border-white/10">
          {/* Official NeetCode 3-Layer Stack Logo */}
          <svg className={sizeClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m12 3 9 4.5-9 4.5-9-4.5L12 3Z" strokeLinejoin="round" />
            <path d="m3 12 9 4.5 9-4.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="m3 16.5 9 4.5 9-4.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )

    case 'kaggle':
      return (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#20BEFF] text-white shadow-xs border border-white/10">
          {/* Official Kaggle K Logo */}
          <svg className={sizeClass} viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.83 23.72a.34.34 0 0 1-.28.13h-3.2a.55.55 0 0 1-.43-.2l-5.1-6.42-1.42 1.35v4.9a.36.36 0 0 1-.37.37H5.4a.36.36 0 0 1-.37-.37V.37c0-.25.12-.37.37-.37h2.63c.25 0 .37.12.37.37v13.87l5.94-6a.62.62 0 0 1 .46-.2h3.31c.15 0 .25.06.3.2.04.14.02.25-.06.34l-6.27 6.06 6.55 8.28c.1.14.11.26.03.4Z" />
          </svg>
        </div>
      )

    case 'codeforces':
      return (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#151B26] border border-white/10 shadow-xs">
          {/* Official Codeforces 3-Color Bar Chart Logo */}
          <svg className={sizeClass} viewBox="0 0 24 24">
            <rect x="1.5" y="9" width="4.5" height="12" rx="1" fill="#FFCC00" />
            <rect x="9.5" y="3" width="4.5" height="18" rx="1" fill="#3B5998" />
            <rect x="17.5" y="12" width="4.5" height="9" rx="1" fill="#CC0000" />
          </svg>
        </div>
      )

    default:
      return (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--fab-accent-quiet)] text-[var(--fab-accent)] shadow-xs">
          <GitHubIcon className={sizeClass} />
        </div>
      )
  }
}
