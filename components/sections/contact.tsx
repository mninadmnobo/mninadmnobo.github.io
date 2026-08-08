'use client'

import React from 'react'
import { Check, Clock, Copy, Mail, MapPin, Phone } from 'lucide-react'

import { cn } from '@/lib/utils'

import {
  profile,
  professionalProfiles,
  programmingProfiles,
  researchProfiles,
  socialProfiles,
} from '@/lib/data'
import type { ProfileLink } from '@/lib/types/profile'
import { SectionHeader } from '@/components/ui/section-header'
import { Reveal } from '@/components/ui/reveal'
import { Link } from '@/components/ui/link'
import { BrandProfileBadge } from '@/components/ui/icons'
import { ContactForm } from './contact-form'

/**
 * Contact details, message form, and full-width chunked profile networks with copy handle functionality.
 */
export function Contact() {
  return (
    <section id="contact" className="section-spacing relative">
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/25 to-transparent"
        aria-hidden="true"
      />

      <div className="container-page relative space-y-14">
        {/* Section Header */}
        <Reveal>
          <SectionHeader eyebrow="Let's Connect" />
        </Reveal>

        {/* Top Section: Direct Contact & Message Form */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-stretch">
          {/* Left Column: Direct Contact Details */}
          <Reveal className="flex h-full">
            <div className="surface-card p-5 sm:p-6 rounded-2xl border border-[var(--line-strong)] bg-[var(--panel)] shadow-sm w-full h-full flex flex-col justify-between gap-5">
              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between pb-2 border-b border-[var(--line)] mb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[var(--fab-accent)]" aria-hidden="true" />
                    <h3 className="text-xs font-bold tracking-wider text-[var(--ink)] uppercase">
                      Direct Contact Details
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-[var(--ink-muted)]">Primary</span>
                </div>

                <dl className="space-y-3 sm:space-y-3.5">
                  <ContactRow icon={Mail} label="Professional Email" color="teal">
                    <div className="flex items-center justify-between gap-2 min-w-0">
                      <a
                        href={`mailto:${profile.emails.professional}`}
                        className="text-xs sm:text-sm break-all text-[var(--fab-accent)] font-semibold no-underline hover:underline py-0.5"
                      >
                        {profile.emails.professional}
                      </a>
                      <CopyButton text={profile.emails.professional} label="professional email" />
                    </div>
                  </ContactRow>

                  <ContactRow icon={Mail} label="Academic Email (BUET)" color="sky">
                    <div className="flex items-center justify-between gap-2 min-w-0">
                      <a
                        href={`mailto:${profile.emails.academic}`}
                        className="text-xs sm:text-sm break-all text-[var(--fab-accent)] font-semibold no-underline hover:underline py-0.5"
                      >
                        {profile.emails.academic}
                      </a>
                      <CopyButton text={profile.emails.academic} label="academic email" />
                    </div>
                  </ContactRow>

                  <ContactRow icon={Phone} label="Phone Numbers" color="emerald">
                    <div className="flex flex-col gap-2">
                      {profile.phones.map((phone) => {
                        const cleanPhone = phone.replace(/[^\d+]/g, '')
                        return (
                          <div key={phone} className="flex items-center justify-between gap-2 min-w-0">
                            <a
                              href={`tel:${cleanPhone}`}
                              className="text-xs sm:text-sm text-[var(--fab-accent)] font-semibold no-underline hover:underline py-0.5"
                              title={`Call ${phone}`}
                            >
                              {phone}
                            </a>
                            <CopyButton text={phone} label={`phone number ${phone}`} />
                          </div>
                        )
                      })}
                    </div>
                  </ContactRow>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                    <ContactRow icon={MapPin} label="Location" color="amber">
                      <p className="text-xs sm:text-sm text-[var(--ink)] font-semibold truncate">{profile.location}</p>
                    </ContactRow>

                    <ContactRow icon={Clock} label="Timezone" color="purple">
                      <p className="text-xs sm:text-sm text-[var(--ink)] font-semibold truncate">{profile.timezone}</p>
                    </ContactRow>
                  </div>
                </dl>
              </div>

              {/* Bottom Card Callout */}
              <div className="p-2.5 rounded-xl border border-emerald-500/25 bg-gradient-to-r from-emerald-500/10 to-teal-500/5 flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-xs font-bold text-emerald-600 dark:text-emerald-300">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span>Open for R&D & Engineering Roles</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Contact Message Form */}
          <Reveal delay={80} className="flex h-full">
            <ContactForm />
          </Reveal>
        </div>

        {/* Bottom Section: Full-Width Chunked Profile Networks */}
        <Reveal delay={120} className="w-full pt-4 border-t border-[var(--line-strong)] space-y-8">
          <div className="space-y-8">
            {/* Chunk 1: Professional Profiles (2 items) */}
            <ProfileGroup
              title="Professional Profiles"
              links={professionalProfiles}
              cols="grid-cols-1 sm:grid-cols-2"
            />

            {/* Chunk 2: Research Profiles (3 items) */}
            <ProfileGroup
              title="Research Profiles"
              links={researchProfiles}
              cols="grid-cols-1 sm:grid-cols-3"
            />

            {/* Chunk 3: Competitive Programming Profiles (4 items across 2 lines) */}
            <ProfileGroup
              title="Programming Profiles"
              links={programmingProfiles}
              cols="grid-cols-1 sm:grid-cols-2"
            />

            {/* Chunk 4: Social Media (3 items) */}
            <ProfileGroup
              title="Social Media"
              links={socialProfiles}
              cols="grid-cols-1 sm:grid-cols-3"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function CopyButton({ text, label }: { text: string; label?: string }) {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 2000)
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      title={copied ? 'Copied to clipboard!' : `Copy ${label || text}`}
      aria-label={`Copy ${label || text}`}
      className="inline-flex h-7 w-7 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-lg sm:rounded-md border border-[var(--line)] bg-[var(--canvas-alt)] text-[var(--ink-muted)] hover:border-[var(--fab-accent)] hover:text-[var(--fab-accent)] hover:bg-[var(--panel)] transition-all cursor-pointer active:scale-95"
    >
      {copied ? (
        <Check className="h-3.5 w-3.5 text-emerald-500 animate-in fade-in zoom-in" />
      ) : (
        <Copy className="h-3.5 w-3.5" />
      )}
    </button>
  )
}

function ContactRow({
  icon: Icon,
  label,
  color = 'teal',
  children,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  color?: 'teal' | 'sky' | 'emerald' | 'amber' | 'purple'
  children: React.ReactNode
}) {
  const colorMap = {
    teal: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/25',
    sky: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/25',
    emerald: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/25',
    amber: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/25',
    purple: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/25',
  }

  return (
    <div className="flex gap-3 sm:gap-3.5 items-center p-3 sm:p-3.5 rounded-xl border border-[var(--line-strong)] bg-[var(--canvas-alt)]/50 hover:border-[var(--fab-accent)]/40 hover:bg-[var(--panel)] transition-all duration-200 shadow-2xs w-full min-w-0">
      <div className={cn('flex h-8.5 w-8.5 shrink-0 items-center justify-center rounded-xl border shadow-2xs', colorMap[color])}>
        <Icon className="h-4 w-4" aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1">
        <dt className="text-[10px] font-bold text-[var(--ink-muted)] uppercase tracking-wider">{label}</dt>
        <dd className="mt-0.5 min-w-0">{children}</dd>
      </div>
    </div>
  )
}

function ProfileGroup({
  title,
  links,
  cols = 'grid-cols-1 sm:grid-cols-2',
}: {
  title: string
  links: ProfileLink[]
  cols?: string
}) {
  const [copiedHandle, setCopiedHandle] = React.useState<string | null>(null)

  const handleCopy = (handle: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (navigator.clipboard) {
      navigator.clipboard.writeText(handle)
      setCopiedHandle(handle)
      setTimeout(() => {
        setCopiedHandle(null)
      }, 2000)
    }
  }

  return (
    <div className="w-full space-y-3">
      {/* Chunk Header with Full-Width Separator Line */}
      <div className="flex items-center gap-3">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--fab-accent)]" aria-hidden="true" />
        <h3 className="text-xs font-bold tracking-[0.18em] text-[var(--ink)] uppercase">
          {title}
        </h3>
        <span className="h-px flex-1 bg-[var(--line-strong)]" aria-hidden="true" />
      </div>

      {/* Full-Width Grid of Profile Cards */}
      <ul className={`grid gap-4 ${cols} w-full`}>
        {links.map((link) => {
          const isCopied = copiedHandle === link.handle

          return (
            <li key={link.href} className="w-full">
              <div className="group relative flex w-full items-center gap-3.5 sm:gap-4 rounded-2xl border border-[var(--line-strong)] bg-[var(--panel)] p-3.5 sm:p-4 shadow-2xs transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--fab-accent)]/50 hover:bg-[var(--panel-2)] hover:shadow-md">
                {/* Official Brand Badge with Authentic Color */}
                <BrandProfileBadge name={link.icon} />

                {/* Main Link Details */}
                <div className="min-w-0 flex-1">
                  <Link
                    href={link.href}
                    className="block text-sm font-bold text-[var(--ink)] group-hover:text-[var(--fab-accent)] transition-colors no-underline"
                  >
                    {link.label}
                  </Link>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="truncate text-xs text-[var(--ink-muted)] font-mono">
                      {link.handle}
                    </span>
                    {/* Interactive Copy Handle Button */}
                    <button
                      type="button"
                      onClick={(e) => handleCopy(link.handle, e)}
                      title={isCopied ? 'Copied to clipboard!' : `Copy ${link.handle}`}
                      aria-label={`Copy handle ${link.handle}`}
                      className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-[var(--line)] bg-[var(--canvas-alt)] text-[var(--ink-muted)] hover:border-[var(--fab-accent)] hover:text-[var(--fab-accent)] transition-all cursor-pointer"
                    >
                      {isCopied ? (
                        <Check className="h-3 w-3 text-emerald-500 animate-in fade-in zoom-in" />
                      ) : (
                        <Copy className="h-3 w-3" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
