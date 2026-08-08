import { Award, BookOpen, Calendar, GraduationCap, School, Sparkles, Star, Trophy } from 'lucide-react'

import { education, researchInterests } from '@/lib/data'
import { Reveal } from '@/components/ui/reveal'

/**
 * Academic Background & Education subsection inside About Me.
 * Perfectly color-balanced with Emerald, Indigo, Rose, and Cyan matching About Me.
 */
export function Education() {
  const [university, ...earlier] = education

  return (
    <div id="education" className="mt-14 sm:mt-16 pt-10 sm:pt-12 border-t border-[var(--line)]">
      {/* Subsection Title */}
      <div className="mb-8">
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--ink)] flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 shadow-xs">
            <GraduationCap className="h-5 w-5" aria-hidden="true" />
          </span>
          <span>Academic Background &amp; Education</span>
        </h3>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr] items-stretch">
        {/* BUET Undergraduate Degree Card (Featured) */}
        <Reveal className="flex h-full">
          <div className="w-full rounded-2xl border border-[var(--line-strong)] bg-[var(--panel)] p-6 sm:p-7 shadow-sm relative overflow-hidden flex flex-col justify-between h-full gap-6">
            {/* Top Line Accent - Clean emerald to cyan to indigo gradient */}
            <div
              className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500 opacity-80"
              aria-hidden="true"
            />

            <div>
              {/* Header Badges */}
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-700 dark:text-emerald-300">
                  <GraduationCap className="h-3.5 w-3.5 text-emerald-500" />
                  Undergraduate Degree
                </span>

                <span className="inline-flex items-center gap-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-bold text-indigo-700 dark:text-indigo-300 shadow-xs">
                  <Trophy className="h-3.5 w-3.5 text-indigo-500" />
                  {university.grade}
                </span>
              </div>

              {/* Institution & Degree Title */}
              <h4 className="text-lg sm:text-xl font-bold tracking-tight text-[var(--ink)] leading-snug">
                {university.institution}
              </h4>
              <p className="mt-1 text-sm sm:text-base font-semibold text-emerald-600 dark:text-emerald-400">
                {university.qualification}
              </p>

              <div className="mt-3.5 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 px-3.5 py-1 text-xs font-bold text-white shadow-md shadow-emerald-600/25">
                <Calendar className="h-3.5 w-3.5 text-white" />
                <span>{university.period}</span>
              </div>

              {/* Undergraduate Thesis Callout Box */}
              {university.thesis ? (
                <div className="mt-5 rounded-xl border border-indigo-500/25 bg-indigo-500/5 dark:bg-indigo-500/10 p-4 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-1.5">
                    <BookOpen className="h-4 w-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
                      Undergraduate Thesis
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-[var(--ink)] leading-relaxed">
                    {university.thesis}
                  </p>
                </div>
              ) : null}
            </div>

            {/* Relevant Coursework Pills - Clean, subtle chips */}
            {university.coursework ? (
              <div className="pt-4 border-t border-[var(--line)]">
                <p className="mb-3 text-xs font-mono font-bold uppercase tracking-wider text-[var(--ink-muted)] flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-emerald-500" />
                  Relevant Coursework
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {university.coursework.map((course) => (
                    <span
                      key={course}
                      className="inline-flex items-center rounded-lg border border-[var(--line-strong)] bg-[var(--canvas-alt)] px-2.5 py-1 text-xs font-medium text-[var(--ink)] transition-colors hover:border-emerald-500/40"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </Reveal>

        {/* Pre-University & Research Interests Column */}
        <div className="flex flex-col justify-between gap-4 h-full">
          {earlier.map((item, index) => {
            const isRajuk = item.id === 'rajuk'
            const iconBg = isRajuk
              ? 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/25'
              : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/25'
            const textStyle = isRajuk
              ? 'text-cyan-600 dark:text-cyan-400'
              : 'text-emerald-600 dark:text-emerald-400'
            const awardColor = isRajuk ? 'text-cyan-500' : 'text-emerald-500'

            return (
              <Reveal key={item.id} delay={(index + 1) * 60} className="flex-1 flex">
                <div className="w-full rounded-2xl border border-[var(--line-strong)] bg-[var(--panel)] p-5 shadow-2xs transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
                  <div className="flex items-start gap-3">
                    <div className={`mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border ${iconBg}`}>
                      <School className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                        <h4 className="text-sm sm:text-base font-bold text-[var(--ink)]">{item.institution}</h4>
                        <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-mono font-bold text-white shadow-sm ${
                          isRajuk
                            ? 'bg-gradient-to-r from-cyan-600 to-blue-600 shadow-cyan-500/20'
                            : 'bg-gradient-to-r from-teal-600 to-emerald-600 shadow-teal-500/20'
                        }`}>
                          <Calendar className="h-3 w-3 text-white" />
                          {item.period}
                        </span>
                      </div>
                      <p className={`text-xs font-semibold mb-3 ${textStyle}`}>
                        {item.qualification}
                      </p>

                      {item.achievements ? (
                        <ul className="space-y-1.5">
                          {item.achievements.map((achievement) => (
                            <li
                              key={achievement}
                              className="flex items-center gap-2 text-xs text-[var(--ink)]"
                            >
                              <Award className={`h-3.5 w-3.5 shrink-0 ${awardColor}`} aria-hidden="true" />
                              <span className="inline-flex flex-wrap items-center gap-1.5 font-semibold">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}

          {/* Research Interests Box */}
          <Reveal delay={180} className="flex-1 flex">
            <div className="w-full rounded-2xl border border-emerald-500/25 bg-[var(--panel)] p-5 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25">
                    <Star className="h-4 w-4 fill-emerald-500/20 text-emerald-500" />
                  </span>
                  <p className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                    Research Interests
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {researchInterests.map((interest) => (
                    <span
                      key={interest}
                      className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300 shadow-2xs"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
