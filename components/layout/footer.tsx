'use client'

import React from 'react'
import { ArrowUp, Mail, Sparkles } from 'lucide-react'
import { profile } from '@/lib/data'
import { Link } from '@/components/ui/link'
import { GitHubIcon, LinkedInIcon, ScholarIcon } from '@/components/ui/icons'

const FOOTER_LINKS = [
  {
    label: 'GitHub',
    href: profile.primary.github,
    Icon: GitHubIcon,
    baseStyle: 'bg-transparent text-[var(--ink-muted)]',
    hoverStyle: 'hover:text-[var(--ink)] hover:scale-110',
  },
  {
    label: 'LinkedIn',
    href: profile.primary.linkedin,
    Icon: LinkedInIcon,
    baseStyle: 'bg-transparent text-[var(--ink-muted)]',
    hoverStyle: 'hover:text-[#0a66c2] hover:scale-110',
  },
  {
    label: 'Google Scholar',
    href: profile.primary.scholar,
    Icon: ScholarIcon,
    baseStyle: 'bg-transparent text-[var(--ink-muted)]',
    hoverStyle: 'hover:text-[#4285f4] hover:scale-110',
  },
  {
    label: 'Email',
    href: `mailto:${profile.emails.professional}`,
    Icon: Mail,
    baseStyle: 'bg-transparent text-[var(--ink-muted)]',
    hoverStyle: 'hover:text-[#ea4335] hover:scale-110',
  },
]

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative border-t border-[var(--line)] bg-gradient-to-b from-[var(--canvas)] via-[var(--panel)]/70 to-[var(--panel)] overflow-hidden">
      {/* Top Vibrant Multi-Color Gradient Line */}
      <div className="h-1 w-full bg-gradient-to-r from-teal-400 via-cyan-500 via-indigo-500 to-emerald-400 opacity-90 shadow-sm" />

      {/* Background Ambient Color Glows */}
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative py-12 space-y-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          {/* Brand Left */}
          <div className="space-y-2 max-w-md">
            <div className="flex items-center gap-2">
              <span className="text-base font-extrabold tracking-tight bg-gradient-to-r from-[var(--ink)] via-[var(--fab-accent)] to-teal-500 bg-clip-text text-transparent">
                {profile.name}
              </span>
            </div>
            <p className="text-xs text-[var(--ink-muted)] leading-relaxed">
              {profile.titles.join(' · ')} based in {profile.location}. Specialized in Deep Learning, Computer Vision, and Software Engineering.
            </p>
          </div>

          {/* Social Links & Back-To-Top */}
          <div className="flex flex-col gap-4 sm:items-end">
            <div className="flex items-center gap-3">
              <ul className="flex items-center gap-2.5">
                {FOOTER_LINKS.map(({ label, href, Icon, baseStyle, hoverStyle }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      aria-label={label}
                      title={label}
                      className={`group flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 no-underline ${baseStyle} ${hoverStyle}`}
                    >
                      <Icon className="h-4.5 w-4.5 shrink-0 transition-colors" />
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Back to top button */}
              <button
                type="button"
                onClick={scrollToTop}
                title="Scroll to top"
                aria-label="Scroll to top"
                className="flex h-10 w-10 items-center justify-center bg-transparent text-[var(--ink-muted)] hover:text-[var(--fab-accent)] transition-all duration-300 hover:-translate-y-1 hover:scale-110 cursor-pointer"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Divider & Copyright */}
        <div className="pt-6 border-t border-[var(--line)]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--ink-muted)]">
          <div className="flex items-center gap-1.5 font-medium">
            <Sparkles className="h-3.5 w-3.5 text-[var(--fab-accent)]" />
            <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          </div>

          <p className="text-[11px] font-mono text-[var(--ink-muted)]">
            Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
