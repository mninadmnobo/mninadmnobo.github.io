import Image from 'next/image'
import { FileBadge } from 'lucide-react'

import { profile } from '@/lib/data'
import { Link } from '@/components/ui/link'
import { GitHubIcon, LinkedInIcon, ScholarIcon } from '@/components/ui/icons'
import { CourseworkMarquee } from '@/components/sections/coursework-marquee'

const QUICK_LINKS = [
  {
    label: 'GitHub',
    href: profile.primary.github,
    Icon: GitHubIcon,
    iconColor: 'text-[#24292e] dark:text-[#f0f6fc]',
  },
  {
    label: 'LinkedIn',
    href: profile.primary.linkedin,
    Icon: LinkedInIcon,
    iconColor: 'text-[#0a66c2]',
  },
  {
    label: 'Google Scholar',
    href: profile.primary.scholar,
    Icon: ScholarIcon,
    iconColor: 'text-[#4285f4]',
  },
  {
    label: 'View CV',
    href: profile.primary.cv,
    Icon: FileBadge,
    iconColor: 'text-[#e11d48]',
  },
]

const COURSEWORK_AND_RESEARCH = [
  { label: 'Data Structures & Algorithms', category: 'Academic Coursework', icon: '⚡' },
  { label: 'Large Language Model Systems', category: 'Research Interest', icon: '🧠' },
  { label: 'Algorithm Engineering', category: 'Academic Coursework', icon: '⚙️' },
  { label: 'AI-Assisted Software Engineering', category: 'Research Interest', icon: '🛠️' },
  { label: 'Database Systems', category: 'Academic Coursework', icon: '🗄️' },
  { label: 'Medical AI', category: 'Research Interest', icon: '🏥' },
  { label: 'Operating Systems', category: 'Academic Coursework', icon: '💻' },
  { label: 'Applied Machine Learning', category: 'Research Interest', icon: '🔬' },
  { label: 'Computer Architecture', category: 'Academic Coursework', icon: '🏗️' },
  { label: 'Computer Networks', category: 'Academic Coursework', icon: '🌐' },
  { label: 'Compiler Design', category: 'Academic Coursework', icon: '🧩' },
  { label: 'Artificial Intelligence', category: 'Academic Coursework', icon: '🤖' },
  { label: 'Machine Learning', category: 'Academic Coursework', icon: '📊' },
  { label: 'Computer Graphics', category: 'Academic Coursework', icon: '🎨' },
]

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-12 md:pt-36 md:pb-16"
      aria-labelledby="hero-name"
    >
      {/* Dot-grid texture fading to transparent below */}
      <div className="hero-grid absolute inset-0" aria-hidden="true" />

      {/* Extra accent glow — top-right */}
      <div
        className="absolute -top-40 -right-24 h-[30rem] w-[30rem] rounded-full blur-3xl"
        style={{ background: 'var(--glow-a)' }}
        aria-hidden="true"
      />

      <div className="container-page relative">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">

          {/* ── Avatar ── */}
          <div className="relative shrink-0">
            {/* Glow ring behind avatar */}
            <div
              className="absolute -inset-1.5 rounded-full blur-md"
              style={{
                background: 'linear-gradient(135deg, var(--btn-from), var(--btn-to))',
                opacity: 0.35,
              }}
              aria-hidden="true"
            />
            <div
              className="relative h-64 w-64 overflow-hidden rounded-full sm:h-80 sm:w-80 lg:h-96 lg:w-96"
              style={{
                border: '3px solid var(--line-strong)',
                background: 'var(--panel-2)',
                boxShadow: 'var(--shadow-lift)',
              }}
            >
              <Image
                src="/Mohammad_Ninad_Mahmud_Nobo.jpg"
                alt={profile.name}
                fill
                sizes="(min-width: 1024px) 384px, (min-width: 640px) 320px, 256px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* ── Text content ── */}
          <div className="flex-1 text-center lg:text-left">

            {/* Status badge */}
            <p
              className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-[var(--panel)] px-3.5 py-1.5 text-xs font-semibold text-[var(--ink)] shadow-xs"
            >
              <span
                className="animate-status-pulse h-2 w-2 rounded-full bg-emerald-500"
                aria-hidden="true"
              />
              AI Software Engineer @ Saturn R&D
            </p>

            {/* Name */}
            <h1
              id="hero-name"
              className="mt-4 text-2xl font-extrabold tracking-tight text-balance sm:text-3xl lg:text-4xl"
              style={{ color: 'var(--ink)' }}
            >
              {profile.name}
            </h1>

            {/* Roles / titles gradient subtitle */}
            <p className="mt-2 text-base font-bold sm:text-lg tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[var(--btn-from)] to-[var(--btn-to)]">
              AI/ML Engineer · Software Engineer · Researcher
            </p>

            {/* Contextual Tagline including ML & AI and Computer Networks & Security */}
            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-[var(--ink)] font-normal text-left lg:text-justify">
              <span className="font-semibold text-[var(--ink)]">CSE graduate from BUET</span> with research & industry experience across Machine Learning & Artificial Intelligence, software engineering, computer vision, computer networks, and computer security.
            </p>


            {/* Quick Links with Real Brand Colors */}
            <ul className="mt-6 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
              {QUICK_LINKS.map(({ label, href, Icon, iconColor }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className={[
                      'inline-flex h-10 items-center gap-2.5 rounded-full px-4 text-xs font-semibold no-underline',
                      'border border-[var(--line-strong)] bg-transparent text-[var(--ink)]',
                      'shadow-2xs transition-all duration-300 active:scale-95',
                      'hover:-translate-y-0.5 hover:border-[var(--fab-accent)]',
                      'hover:bg-[var(--fab-accent-quiet)] hover:shadow-[0_6px_18px_-4px_rgba(8,145,178,0.35)]',
                    ].join(' ')}
                  >
                    <Icon className={`h-4 w-4 shrink-0 ${iconColor}`} />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>

      {/* ── Wide Slim Circular Rolling Academic Coursework & Research Interests Marquee Banner ── */}
      <CourseworkMarquee items={COURSEWORK_AND_RESEARCH} />
    </section>
  )
}