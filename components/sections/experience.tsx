'use client'

import { useState } from 'react'
import {
  Calendar,
  MapPin,
  Globe,
  Building2,
  Sparkles,
  Code2,
  Cpu,
  Copy,
  Check,
  Mail,
} from 'lucide-react'

import { experience } from '@/lib/data'
import { SectionHeader } from '@/components/ui/section-header'
import { Reveal } from '@/components/ui/reveal'
import { Link } from '@/components/ui/link'
import { GitHubIcon, LinkedInIcon } from '@/components/ui/icons'

export function Experience() {
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null)

  const handleCopy = (url: string) => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(url)
      setCopiedUrl(url)
      setTimeout(() => {
        setCopiedUrl((current) => (current === url ? null : current))
      }, 2000)
    }
  }
  return (
    <section id="experience" className="section-spacing relative">
      <div className="container-page relative">
        <Reveal>
          <SectionHeader eyebrow="Professional Experience" />
        </Reveal>

        <div className="space-y-6">
          {experience.map((role) => (
            <Reveal key={role.id}>
              <div className="relative rounded-3xl border border-[var(--line-strong)] bg-[var(--panel)]/80 backdrop-blur-md p-6 sm:p-8 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden group">
                {/* Top Subtle Gradient Line */}
                <div
                  className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 opacity-90"
                  aria-hidden="true"
                />

                {/* Subtle Ambient Glows */}
                <div
                  className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl group-hover:bg-cyan-500/15 transition-all duration-500"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl group-hover:bg-emerald-500/15 transition-all duration-500"
                  aria-hidden="true"
                />

                {/* Top Meta: Dates, Location & Active Status */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3.5 pt-0.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-bold text-cyan-600 dark:text-cyan-300 shadow-2xs">
                      <Calendar className="h-3.5 w-3.5 text-cyan-500 shrink-0" aria-hidden="true" />
                      {role.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-xs font-bold text-teal-600 dark:text-teal-300 shadow-2xs">
                      <MapPin className="h-3.5 w-3.5 text-teal-500 shrink-0" aria-hidden="true" />
                      {role.location}
                    </span>
                  </div>

                  {role.current ? (
                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-300">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                      Active Position
                    </span>
                  ) : null}
                </div>

                {/* Role Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--ink)] mb-3">
                  {role.role}
                </h3>

                {/* Company & Department Integration */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-6 text-xs sm:text-sm">
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/35 bg-emerald-500/10 px-3 py-1 font-bold text-emerald-700 dark:text-emerald-300 shadow-2xs">
                    <Building2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                    {role.organization}
                  </span>
                  {role.unit ? (
                    <div className="flex items-center gap-2">
                      <span className="text-[var(--ink-muted)]/40 font-light hidden sm:inline" aria-hidden="true">/</span>
                      <span className="inline-flex items-center gap-1.5 rounded-md border border-[var(--line)] bg-[var(--canvas)]/50 px-2.5 py-1 font-medium text-[var(--ink-muted)]">
                        <Sparkles className="h-3.5 w-3.5 text-cyan-500/80 shrink-0" />
                        {role.unit}
                      </span>
                    </div>
                  ) : null}
                </div>

                {/* Two Distinct Segments (Modeled after CV) */}
                {role.segments && role.segments.length > 0 && (
                  <div className="space-y-4">
                    {role.segments.map((segment) => {
                      const isML =
                        segment.title.toLowerCase().includes('ml') ||
                        segment.title.toLowerCase().includes('vision') ||
                        segment.title.toLowerCase().includes('machine learning')

                      return (
                        <div
                          key={segment.title}
                          className="rounded-2xl border border-[var(--line-strong)] bg-[var(--panel-2)]/60 backdrop-blur-xs p-5 sm:p-6 transition-all duration-300 hover:border-cyan-500/40 hover:bg-[var(--panel-2)]/90 hover:shadow-xs"
                        >
                          {/* Segment Title & Timeline */}
                          <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3">
                            <h4 className="text-base sm:text-lg font-bold text-[var(--ink)] flex items-center gap-2.5">
                              <span
                                className={`flex h-6 w-6 items-center justify-center rounded-lg ${
                                  isML
                                    ? 'bg-cyan-500/15 text-cyan-500'
                                    : 'bg-teal-500/15 text-teal-500'
                                }`}
                              >
                                {isML ? (
                                  <Cpu className="h-3.5 w-3.5 shrink-0" />
                                ) : (
                                  <Code2 className="h-3.5 w-3.5 shrink-0" />
                                )}
                              </span>
                              <span>{segment.title}</span>
                            </h4>
                            {segment.period && (
                              <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-full bg-[var(--canvas)] text-[var(--ink-muted)] border border-[var(--line)] shadow-2xs">
                                {segment.period}
                              </span>
                            )}
                          </div>

                          {/* Subsegments (e.g. separating FABINS and NEVOLYN) */}
                          {segment.subsegments && segment.subsegments.length > 0 ? (
                            <div className="space-y-4 pt-1">
                              {segment.subsegments.map((sub) => {
                                const displayUrl = sub.website
                                  ? sub.website.replace(/^https?:\/\//, '').replace(/\/$/, '')
                                  : ''

                                return (
                                  <div
                                    key={sub.title}
                                    className="rounded-xl border border-[var(--line-strong)] bg-[var(--canvas)]/70 p-4 sm:p-4.5 hover:border-cyan-500/40 transition-all duration-200 shadow-2xs space-y-3"
                                  >
                                    {/* Subsegment Title */}
                                    <div className="flex items-center gap-2">
                                      <span className="h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_6px_rgba(6,182,212,0.6)] shrink-0" />
                                      <h5 className="text-sm sm:text-base font-bold text-[var(--ink)] tracking-tight">
                                        {sub.title}
                                      </h5>
                                    </div>

                                    {/* Subsegment Technologies */}
                                    {sub.technologies && sub.technologies.length > 0 && (
                                      <div className="flex flex-wrap items-center gap-1.5">
                                        {sub.technologies.map((tech) => (
                                          <span
                                            key={tech}
                                            className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-mono font-medium bg-[var(--canvas)] text-[var(--ink-muted)] border border-[var(--line)] hover:border-cyan-500/30 hover:text-[var(--ink)] transition-colors"
                                          >
                                            {tech}
                                          </span>
                                        ))}
                                      </div>
                                    )}

                                    {/* Subsegment Accomplishments Bullet Points */}
                                    {sub.points && sub.points.length > 0 && (
                                      <ul className="space-y-1.5">
                                        {sub.points.map((point) => (
                                          <li
                                            key={point}
                                            className="flex gap-2.5 text-xs sm:text-sm leading-relaxed text-[var(--ink-muted)] font-normal"
                                          >
                                            <span
                                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 ring-2 ring-cyan-500/20"
                                              aria-hidden="true"
                                            />
                                            <span>{point}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    )}

                                    {/* Action Buttons Row */}
                                    {(sub.website || sub.email || sub.linkedin || sub.codebase) && (
                                      <div className="flex flex-wrap items-center gap-2 pt-2.5 border-t border-[var(--line)]">
                                        {/* Live Website (Domain only, clickable + copyable) */}
                                        {sub.website && (
                                          <div className="inline-flex items-center rounded-lg border border-cyan-500/30 bg-cyan-500/10 p-0.5 shadow-2xs">
                                            <Link
                                              href={sub.website}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="group/link inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-cyan-700 dark:text-cyan-300 hover:text-cyan-900 dark:hover:text-white transition-colors no-underline"
                                            >
                                              <Globe className="h-3.5 w-3.5 text-cyan-500 shrink-0" />
                                              <span className="font-mono text-xs font-semibold underline underline-offset-2 opacity-95 group-hover/link:opacity-100">
                                                {displayUrl}
                                              </span>
                                            </Link>
                                            <button
                                              type="button"
                                              onClick={() => handleCopy(sub.website!)}
                                              title={
                                                copiedUrl === sub.website
                                                  ? 'Copied URL!'
                                                  : `Copy URL: ${sub.website}`
                                              }
                                              aria-label={`Copy URL for ${sub.title}`}
                                              className="inline-flex h-6 w-6 items-center justify-center rounded-md text-cyan-600 dark:text-cyan-300 hover:bg-cyan-500/20 transition-all cursor-pointer"
                                            >
                                              {copiedUrl === sub.website ? (
                                                <Check className="h-3.5 w-3.5 text-emerald-500 animate-in fade-in zoom-in" />
                                              ) : (
                                                <Copy className="h-3.5 w-3.5 opacity-70 hover:opacity-100" />
                                              )}
                                            </button>
                                          </div>
                                        )}

                                        {/* Email Address */}
                                        {sub.email && (
                                          <div className="inline-flex items-center rounded-lg border border-teal-500/30 bg-teal-500/10 p-0.5 shadow-2xs">
                                            <a
                                              href={`mailto:${sub.email}`}
                                              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-teal-700 dark:text-teal-300 hover:text-teal-900 dark:hover:text-white transition-colors no-underline"
                                            >
                                              <Mail className="h-3.5 w-3.5 text-teal-500 shrink-0" />
                                              <span className="font-mono text-[11px] font-medium underline underline-offset-2">
                                                {sub.email}
                                              </span>
                                            </a>
                                            <button
                                              type="button"
                                              onClick={() => handleCopy(sub.email!)}
                                              title={
                                                copiedUrl === sub.email
                                                  ? 'Copied Email!'
                                                  : `Copy Email: ${sub.email}`
                                              }
                                              aria-label={`Copy email for ${sub.title}`}
                                              className="inline-flex h-6 w-6 items-center justify-center rounded-md text-teal-600 dark:text-teal-300 hover:bg-teal-500/20 transition-all cursor-pointer"
                                            >
                                              {copiedUrl === sub.email ? (
                                                <Check className="h-3.5 w-3.5 text-emerald-500 animate-in fade-in zoom-in" />
                                              ) : (
                                                <Copy className="h-3.5 w-3.5 opacity-70 hover:opacity-100" />
                                              )}
                                            </button>
                                          </div>
                                        )}

                                        {/* LinkedIn Page */}
                                        {sub.linkedin && (
                                          <Link
                                            href={sub.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/btn inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold bg-[#0A66C2]/10 hover:bg-[#0A66C2] text-[#0A66C2] dark:text-[#70b5f9] hover:text-white dark:hover:text-white border border-[#0A66C2]/30 transition-all duration-200 shadow-2xs active:scale-95 no-underline"
                                          >
                                            <LinkedInIcon className="h-3.5 w-3.5 shrink-0" />
                                            <span>LinkedIn</span>
                                          </Link>
                                        )}

                                        {/* Codebase (GitHub) */}
                                        {sub.codebase && (
                                          <Link
                                            href={sub.codebase}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/btn inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold bg-zinc-800/10 dark:bg-white/10 hover:bg-zinc-900 dark:hover:bg-white text-foreground hover:text-white dark:hover:text-black border border-border transition-all duration-200 shadow-2xs active:scale-95 no-underline"
                                          >
                                            <GitHubIcon className="h-3.5 w-3.5 shrink-0" />
                                            <span>Codebase (GitHub)</span>
                                          </Link>
                                        )}
                                      </div>
                                    )}
                                  </div>
                                )
                              })}
                            </div>
                          ) : (
                            <>
                              {/* Technology Badges */}
                              {segment.technologies && segment.technologies.length > 0 && (
                                <div className="flex flex-wrap items-center gap-1.5 mb-3.5">
                                  {segment.technologies.map((tech) => (
                                    <span
                                      key={tech}
                                      className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] sm:text-xs font-mono font-medium bg-[var(--canvas)] text-[var(--ink-muted)] border border-[var(--line)] hover:border-cyan-500/30 hover:text-[var(--ink)] transition-colors"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              )}

                              {/* Accomplishments Bullet Points */}
                              {segment.points && segment.points.length > 0 && (
                                <ul className="space-y-2 mb-4">
                                  {segment.points.map((point) => (
                                    <li
                                      key={point}
                                      className="flex gap-3 text-xs sm:text-sm leading-relaxed text-[var(--ink-muted)] font-normal"
                                    >
                                      <span
                                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 ring-2 ring-cyan-500/20"
                                        aria-hidden="true"
                                      />
                                      <span>{point}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}

                              {/* Structured Project Links (Live Website with Clickable & Copyable URL + Code (GitHub)) */}
                              {segment.projectLinks && segment.projectLinks.length > 0 && (
                                <div className="pt-3.5 border-t border-[var(--line)]">
                                  <div className="flex flex-col gap-2.5">
                                    {segment.projectLinks.map((item) => {
                                      const displayUrl = item.website
                                        ? item.website.replace(/^https?:\/\//, '').replace(/\/$/, '')
                                        : ''

                                      return (
                                        <div
                                          key={item.project}
                                          className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 rounded-xl border border-[var(--line-strong)] bg-[var(--canvas)]/70 p-3 sm:px-4 sm:py-2.5 hover:border-cyan-500/40 transition-all duration-200 shadow-2xs"
                                        >
                                          <div className="flex items-center gap-2">
                                            <span className="h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_6px_rgba(6,182,212,0.6)] shrink-0" />
                                            <span className="text-xs sm:text-sm font-bold text-[var(--ink)] tracking-tight">
                                              {item.project}
                                            </span>
                                          </div>

                                          <div className="flex flex-wrap items-center gap-2 shrink-0">
                                            {/* Live Website (without redundant external icon) */}
                                            {item.website && (
                                              <div className="inline-flex items-center rounded-lg border border-cyan-500/30 bg-cyan-500/10 p-0.5 shadow-2xs">
                                                <Link
                                                  href={item.website}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className="group/link inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-cyan-700 dark:text-cyan-300 hover:text-cyan-900 dark:hover:text-white transition-colors no-underline"
                                                >
                                                  <Globe className="h-3.5 w-3.5 text-cyan-500 shrink-0" />
                                                  <span className="font-mono text-xs font-semibold underline underline-offset-2 opacity-95 group-hover/link:opacity-100">
                                                    {displayUrl}
                                                  </span>
                                                </Link>
                                                <button
                                                  type="button"
                                                  onClick={() => handleCopy(item.website!)}
                                                  title={
                                                    copiedUrl === item.website
                                                      ? 'Copied URL!'
                                                      : `Copy URL: ${item.website}`
                                                  }
                                                  aria-label={`Copy URL for ${item.project}`}
                                                  className="inline-flex h-6 w-6 items-center justify-center rounded-md text-cyan-600 dark:text-cyan-300 hover:bg-cyan-500/20 transition-all cursor-pointer"
                                                >
                                                  {copiedUrl === item.website ? (
                                                    <Check className="h-3.5 w-3.5 text-emerald-500 animate-in fade-in zoom-in" />
                                                  ) : (
                                                    <Copy className="h-3.5 w-3.5 opacity-70 hover:opacity-100" />
                                                  )}
                                                </button>
                                              </div>
                                            )}

                                            {/* Email Address */}
                                            {item.email && (
                                              <div className="inline-flex items-center rounded-lg border border-teal-500/30 bg-teal-500/10 p-0.5 shadow-2xs">
                                                <a
                                                  href={`mailto:${item.email}`}
                                                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-teal-700 dark:text-teal-300 hover:text-teal-900 dark:hover:text-white transition-colors no-underline"
                                                >
                                                  <Mail className="h-3.5 w-3.5 text-teal-500 shrink-0" />
                                                  <span className="font-mono text-[11px] font-medium underline underline-offset-2">
                                                    {item.email}
                                                  </span>
                                                </a>
                                                <button
                                                  type="button"
                                                  onClick={() => handleCopy(item.email!)}
                                                  title={
                                                    copiedUrl === item.email
                                                      ? 'Copied Email!'
                                                      : `Copy Email: ${item.email}`
                                                  }
                                                  aria-label={`Copy email for ${item.project}`}
                                                  className="inline-flex h-6 w-6 items-center justify-center rounded-md text-teal-600 dark:text-teal-300 hover:bg-teal-500/20 transition-all cursor-pointer"
                                                >
                                                  {copiedUrl === item.email ? (
                                                    <Check className="h-3.5 w-3.5 text-emerald-500 animate-in fade-in zoom-in" />
                                                  ) : (
                                                    <Copy className="h-3.5 w-3.5 opacity-70 hover:opacity-100" />
                                                  )}
                                                </button>
                                              </div>
                                            )}

                                            {/* LinkedIn Page */}
                                            {item.linkedin && (
                                              <Link
                                                href={item.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group/btn inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold bg-[#0A66C2]/10 hover:bg-[#0A66C2] text-[#0A66C2] dark:text-[#70b5f9] hover:text-white dark:hover:text-white border border-[#0A66C2]/30 transition-all duration-200 shadow-2xs active:scale-95 no-underline"
                                              >
                                                <LinkedInIcon className="h-3.5 w-3.5 shrink-0" />
                                                <span>LinkedIn</span>
                                              </Link>
                                            )}

                                            {/* Codebase (GitHub) */}
                                            {item.codebase && (
                                              <Link
                                                href={item.codebase}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group/btn inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold bg-zinc-800/10 dark:bg-white/10 hover:bg-zinc-900 dark:hover:bg-white text-foreground hover:text-white dark:hover:text-black border border-border transition-all duration-200 shadow-2xs active:scale-95 no-underline"
                                              >
                                                <GitHubIcon className="h-3.5 w-3.5 shrink-0" />
                                                <span>Codebase (GitHub)</span>
                                              </Link>
                                            )}
                                          </div>
                                        </div>
                                      )
                                    })}
                                  </div>
                                </div>
                              )}

                              {/* Fallback loose links */}
                              {segment.links && segment.links.length > 0 && !segment.projectLinks && (
                                <div className="flex flex-wrap items-center gap-2.5 pt-3.5 border-t border-[var(--line)]">
                                  {segment.links.map((link) => {
                                    const isGitHub = link.label.toLowerCase().includes('github')

                                    return (
                                      <Link
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/btn inline-flex items-center gap-2 rounded-lg px-3.5 py-1.5 text-xs font-semibold bg-[var(--canvas)] hover:bg-primary text-[var(--ink)] hover:text-primary-foreground border border-[var(--line-strong)] hover:border-primary transition-all duration-200 shadow-2xs hover:shadow-xs active:scale-95 no-underline"
                                      >
                                        {isGitHub ? (
                                          <GitHubIcon className="h-3.5 w-3.5 shrink-0" />
                                        ) : (
                                          <Globe className="h-3.5 w-3.5 text-cyan-500 group-hover/btn:text-primary-foreground shrink-0 transition-colors" />
                                        )}
                                        <span>{link.label}</span>
                                      </Link>
                                    )
                                  })}
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}