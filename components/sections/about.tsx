import { Brain, Code2, Cpu, ShieldCheck, Sparkles } from 'lucide-react'

import { SectionHeader } from '@/components/ui/section-header'
import { Reveal } from '@/components/ui/reveal'
import { Education } from '@/components/sections/education'

const HIGHLIGHTS = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description:
      'Architecting scalable web applications, robust backend services, databases, REST APIs, and modern responsive frontend interfaces.',
    tag: 'Software Engineering',
    iconColor: 'text-emerald-500 dark:text-emerald-400',
    badgeBg: 'bg-emerald-500/10 border-emerald-500/25',
    tagClass: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/25',
    hoverBorder: 'hover:border-emerald-500/60 hover:shadow-[0_8px_24px_-6px_rgba(16,185,129,0.25)]',
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description:
      'End-to-end ML solutions — from real-time computer vision and agentic LLM systems to conflict-aware medical AI models.',
    tag: 'Deep Learning & LLMs',
    iconColor: 'text-indigo-500 dark:text-indigo-400',
    badgeBg: 'bg-indigo-500/10 border-indigo-500/25',
    tagClass: 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-500/25',
    hoverBorder: 'hover:border-indigo-500/60 hover:shadow-[0_8px_24px_-6px_rgba(99,102,241,0.25)]',
  },
  {
    icon: ShieldCheck,
    title: 'Computer Security & Networks',
    description:
      'Designing secure system architectures, evaluating network protocols, software verification pipelines, and fault-tolerant software.',
    tag: 'Systems & Security',
    iconColor: 'text-rose-500 dark:text-rose-400',
    badgeBg: 'bg-rose-500/10 border-rose-500/25',
    tagClass: 'bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-500/25',
    hoverBorder: 'hover:border-rose-500/60 hover:shadow-[0_8px_24px_-6px_rgba(244,63,94,0.25)]',
  },
  {
    icon: Cpu,
    title: 'AI R&D @ Saturn',
    description:
      'Developing computer vision inspection models (FABINS) and full-stack software applications at Saturn Textiles Limited R&D.',
    tag: 'Current Working',
    iconColor: 'text-cyan-500 dark:text-cyan-400',
    badgeBg: 'bg-cyan-500/10 border-cyan-500/25',
    tagClass: 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/25',
    hoverBorder: 'hover:border-cyan-500/60 hover:shadow-[0_8px_24px_-6px_rgba(6,182,212,0.25)]',
  },
]

export function About() {
  return (
    <section id="about" className="section-spacing relative">
      <div className="container-page">
        <Reveal>
          <SectionHeader
            eyebrow="About Me"
            title="Assalamualaikum! I'm Mohammad Ninad Mahmud Nobo"
          />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12 items-stretch">
          {/* Main Story Narrative */}
          <Reveal className="flex">
            <div className="w-full rounded-2xl border border-[var(--line-strong)] bg-[var(--panel)] p-6 sm:p-8 shadow-sm flex flex-col justify-between gap-6 relative overflow-hidden">
              {/* Vibrant Top Line Glow */}
              <div
                className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500 via-indigo-500 via-rose-500 to-cyan-500 opacity-80"
                aria-hidden="true"
              />

              <div className="space-y-4 pt-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Full-Stack
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-bold text-indigo-600 dark:text-indigo-300">
                    <Sparkles className="h-3 w-3" />
                    AI / ML
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1 text-xs font-bold text-rose-600 dark:text-rose-300">
                    <ShieldCheck className="h-3 w-3" />
                    Security
                  </span>
                </div>

                <p className="text-base sm:text-lg leading-relaxed text-[var(--ink)] font-normal">
                  I am an engineer specializing in <strong className="font-semibold text-emerald-600 dark:text-emerald-400">Full-Stack Software Development</strong>, <strong className="font-semibold text-indigo-600 dark:text-indigo-400">Machine Learning &amp; AI</strong>, and <strong className="font-semibold text-rose-600 dark:text-rose-400">Computer Security</strong>. My focus lies in engineering intelligent, secure, and high-performance software systems that solve complex real-world challenges.
                </p>

                <p className="text-base leading-relaxed text-[var(--ink-muted)]">
                  Currently, I work as an <strong className="font-semibold text-[var(--ink)]">AI Software Engineer in Department of Research and Development (R&amp;D) at Saturn Textiles Limited</strong>, where I design and deploy industrial computer vision models for automated fabric inspection system.
                </p>

                <p className="text-base leading-relaxed text-[var(--ink-muted)]">
                  <strong className="font-semibold text-[var(--ink)]">What I love to do:</strong> I love taking tough, complex problems and turning them into clean, dependable software. Whether I am crafting modern full-stack web applications, experimenting with multi-agent AI frameworks, or hardening network security, I enjoy building tools that are fast, secure, and genuinely useful.
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--line)] flex flex-wrap items-center gap-4 text-sm font-bold text-[var(--ink)]">
                <span className="flex items-center gap-2.5">
                  <span className="relative flex h-3 w-3 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                  </span>
                  <span>Available for Full-Stack, AI/ML &amp; R&amp;D Opportunities</span>
                </span>
              </div>
            </div>
          </Reveal>

          {/* Highlights Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {HIGHLIGHTS.map((item, index) => (
              <Reveal key={item.title} delay={index * 60}>
                <div
                  className={[
                    'h-full p-5 flex flex-col justify-between border border-[var(--line-strong)] bg-[var(--panel)] rounded-2xl shadow-2xs',
                    'transition-all duration-300 hover:-translate-y-1',
                    item.hoverBorder,
                  ].join(' ')}
                >
                  <div>
                    {/* Icon Badge */}
                    <div className={`mb-3.5 flex h-10 w-10 items-center justify-center rounded-xl border ${item.badgeBg}`}>
                      <item.icon className={`h-5 w-5 ${item.iconColor}`} aria-hidden="true" />
                    </div>

                    {/* Category Tag Pill - stacked cleanly below icon */}
                    <div className="mb-2.5">
                      <span className={`inline-block text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${item.tagClass}`}>
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="mb-2 text-base font-bold text-[var(--ink)]">{item.title}</h3>
                    <p className="text-xs leading-relaxed text-[var(--ink-muted)]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Academic Background & Education Subsection */}
        <Education />
      </div>
    </section>
  )
}