import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { BackToTop } from '@/components/layout/back-to-top'
import { WorkDetailProvider } from '@/components/work/work-detail-context'

import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Experience } from '@/components/sections/experience'
import { FeaturedWork } from '@/components/sections/featured-work'
import { Research } from '@/components/sections/research'
import { Projects } from '@/components/sections/projects'
import { Skills } from '@/components/sections/skills'
import { Contact } from '@/components/sections/contact'

/**
 * Home page — the portfolio single page.
 *
 * ─── BACKGROUND LAYERS ────────────────────────────────────────────────────────
 * Three fixed, non-interactive layers sit behind all content at -z-10:
 *
 *   1. Engineering grid   — faint crosshatch via `.grid-bg`
 *   2. Cyan colour wash   — blurred circle top-centre (glow-a token)
 *   3. Blue colour wash   — blurred circle bottom-right (glow-b token)
 *
 * They are `fixed` rather than `absolute` so they stay put while the page
 * scrolls, and `pointer-events-none` + `aria-hidden` keeps them decorative-only.
 *
 * Section order carries the argument the site is making: who this is, then the
 * job, then what the job produced, then the research behind it, then the
 * engineering underneath that.
 */
export default function HomePage() {
  return (
    <WorkDetailProvider>
      {/* ── Fixed ambient background ── */}

      {/* Engineering grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 grid-bg opacity-70"
      />

      {/* Cyan colour wash — anchored to top-centre */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -top-40 left-1/2 -z-10 h-[420px] w-[820px] -translate-x-1/2 rounded-full blur-[150px]"
        style={{ background: 'var(--glow-a)' }}
      />

      {/* Blue colour wash — anchored to bottom-right */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed bottom-0 right-0 -z-10 h-[380px] w-[520px] rounded-full blur-[150px]"
        style={{ background: 'var(--glow-b)' }}
      />

      <Navigation />

      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <FeaturedWork />
        <Research />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </WorkDetailProvider>
  )
}
