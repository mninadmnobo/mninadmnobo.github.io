import { Briefcase, MapPin, Cpu, Building2 } from 'lucide-react'

import { experience } from '@/lib/data'
import { SectionHeader } from '@/components/ui/section-header'
import { Reveal } from '@/components/ui/reveal'
import { Link } from '@/components/ui/link'

export function Experience() {
  return (
    <section id="experience" className="section-spacing relative">
      <div className="container-page relative">
        <Reveal>
          <SectionHeader eyebrow="Professional Experience" />
        </Reveal>

        <div className="space-y-6">
          {experience.map((role) => (
            <Reveal key={role.id}>
              <div className="relative rounded-2xl border border-[var(--line-strong)] bg-[var(--panel)] p-5 sm:p-6 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden group">
                {/* Top Multi-Color Accent Line Glow (No Violet) */}
                <div
                  className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 opacity-90"
                  aria-hidden="true"
                />

                <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3 pt-0.5">
                  {/* Period & Location Pills (Cyan & Teal - No Violet) */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-0.5 text-xs font-bold text-cyan-600 dark:text-cyan-300 shadow-2xs">
                      <Briefcase className="h-3.5 w-3.5 text-cyan-500" aria-hidden="true" />
                      {role.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-0.5 text-xs font-bold text-teal-600 dark:text-teal-300 shadow-2xs">
                      <MapPin className="h-3.5 w-3.5 text-teal-500" aria-hidden="true" />
                      {role.location}
                    </span>
                  </div>

                  {/* Current Role Indicator */}
                  {role.current ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-bold text-emerald-600 dark:text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Active Position
                    </span>
                  ) : null}
                </div>

                {/* Role Title */}
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[var(--ink)] mb-1.5">
                  {role.role}
                </h3>

                {/* Organization & Unit */}
                <div className="flex flex-wrap items-center gap-2 mb-3.5">
                  <span className="inline-flex items-center gap-1 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs sm:text-sm font-bold text-emerald-700 dark:text-emerald-300">
                    {role.organization}
                  </span>
                  {role.unit ? (
                    <span className="inline-flex items-center gap-1 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs sm:text-sm font-bold text-emerald-700 dark:text-emerald-300">
                      {role.unit}
                    </span>
                  ) : null}
                </div>

                {/* Key Accomplishments Bullet Points */}
                <ul className="space-y-2 mb-4">
                  {role.responsibilities.map((point) => (
                    <li key={point} className="flex gap-2.5 text-xs sm:text-sm leading-normal text-[var(--ink)] font-normal">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500 shadow-[0_0_6px_rgba(6,182,212,0.8)]"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Deliverables Link Buttons */}
                {role.links.length > 0 ? (
                  <div className="pt-3 border-t border-[var(--line)] flex flex-wrap items-center gap-2.5">
                    <span className="text-xs font-bold text-[var(--ink-muted)] uppercase tracking-wider mr-0.5">
                      Deliverables:
                    </span>
                    {role.links.map((link, idx) => {
                      const isFabins = link.label.toLowerCase().includes('fabins')
                      const LinkIcon = isFabins ? Cpu : Building2
                      const isCyan = idx === 0

                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={[
                            'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold transition-all duration-300 hover:-translate-y-0.5 no-underline shadow-2xs hover:shadow-md',
                            isCyan
                              ? 'border border-cyan-500/40 bg-gradient-to-r from-cyan-500/15 to-emerald-500/15 text-cyan-700 dark:text-cyan-300 hover:border-cyan-500 hover:shadow-[0_4px_16px_-4px_rgba(6,182,212,0.35)]'
                              : 'border border-teal-500/40 bg-gradient-to-r from-teal-500/15 to-sky-500/15 text-teal-700 dark:text-teal-300 hover:border-teal-500 hover:shadow-[0_4px_16px_-4px_rgba(20,184,166,0.35)]',
                          ].join(' ')}
                        >
                          <LinkIcon className={`h-3.5 w-3.5 ${isCyan ? 'text-cyan-500' : 'text-teal-500'}`} aria-hidden="true" />
                          <span>{link.label}</span>
                        </Link>
                      )
                    })}
                  </div>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}