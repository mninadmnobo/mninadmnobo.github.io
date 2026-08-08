'use client'

import * as React from 'react'
import { ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react'

import { profile, research } from '@/lib/data'
import { SectionHeader } from '@/components/ui/section-header'
import { Reveal } from '@/components/ui/reveal'
import { WorkCard } from '@/components/work/work-card'
import { Link } from '@/components/ui/link'
import { GitHubIcon } from '@/components/ui/icons'
import { cn } from '@/lib/utils'

const ALL = 'All'

const RESEARCH_FILTERS = [
  'All',
  'LLM Systems',
  'Medical AI',
  'Speech / Diarization',
] as const

/**
 * Research output — thesis, submitted work and published benchmarks.
 *
 * Uses the same interactive 3D focus/blur carousel and category filter system
 * as Professional Work and Projects.
 */
export function Research() {
  const [activeFilter, setActiveFilter] = React.useState<string>(ALL)
  const [activeCardIndex, setActiveCardIndex] = React.useState<number>(0)
  const scrollContainerRef = React.useRef<HTMLDivElement>(null)

  const visibleResearch = React.useMemo(() => {
    if (activeFilter !== ALL) {
      return research.filter((item) => item.categories.includes(activeFilter))
    }
    return research
  }, [activeFilter])

  // Detect active card index during scroll by finding card nearest center
  const handleScroll = React.useCallback(() => {
    if (!scrollContainerRef.current) return
    const container = scrollContainerRef.current
    const containerLeft = container.scrollLeft
    const containerCenter = containerLeft + container.clientWidth / 2

    const cards = container.querySelectorAll<HTMLElement>('[data-card-index]')
    let closestIndex = 0
    let minDistance = Infinity

    cards.forEach((card) => {
      const cardIndex = Number(card.getAttribute('data-card-index'))
      const cardCenter = card.offsetLeft - container.offsetLeft + card.clientWidth / 2
      const distance = Math.abs(cardCenter - containerCenter)

      if (distance < minDistance) {
        minDistance = distance
        closestIndex = cardIndex
      }
    })

    setActiveCardIndex(closestIndex)
  }, [])

  // Smooth scroll to target card by centering it in the container viewport
  const scrollToCard = React.useCallback((index: number) => {
    setActiveCardIndex(index)
    if (!scrollContainerRef.current) return
    const container = scrollContainerRef.current
    const cards = container.querySelectorAll<HTMLElement>('[data-card-index]')
    const targetCard = cards[index]

    if (targetCard) {
      const targetLeft =
        targetCard.offsetLeft -
        container.offsetLeft -
        (container.clientWidth / 2 - targetCard.clientWidth / 2)
      container.scrollTo({ left: Math.max(0, targetLeft), behavior: 'smooth' })
    }
  }, [])

  // Scroll to default card (AutoTestGenX at index 0) when category filter changes or mounts
  React.useEffect(() => {
    const defaultIndex = 0
    setActiveCardIndex(defaultIndex)
    const timer = setTimeout(() => {
      scrollToCard(defaultIndex)
    }, 50)
    return () => clearTimeout(timer)
  }, [activeFilter, scrollToCard, visibleResearch.length])

  // Attach scroll listener
  React.useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    container.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      container.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll, visibleResearch.length])

  const handlePrev = () => {
    const prevIndex = Math.max(0, activeCardIndex - 1)
    scrollToCard(prevIndex)
  }

  const handleNext = () => {
    const nextIndex = Math.min(visibleResearch.length - 1, activeCardIndex + 1)
    scrollToCard(nextIndex)
  }

  return (
    <section id="research" className="section-spacing relative">
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/25 to-transparent"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <Reveal>
          <SectionHeader
            eyebrow="Research Experience"
            action={
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <Link
                  href="https://github.com/mninadmnobo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-slate-100/90 dark:bg-slate-800/90 px-3.5 py-1.5 text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 no-underline shadow-2xs transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-900 dark:hover:border-white hover:bg-[#181717] hover:text-white dark:hover:bg-white dark:hover:text-slate-900 hover:shadow-md"
                >
                  <GitHubIcon className="h-5 w-5 shrink-0 text-[#181717] dark:text-[#f0f6fc] group-hover:text-white dark:group-hover:text-slate-900 transition-colors" />
                  <span>GitHub Profile</span>
                </Link>
                <Link
                  href="https://github.com/mninadmnobo?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-slate-100/90 dark:bg-slate-800/90 px-3.5 py-1.5 text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 no-underline shadow-2xs transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-900 dark:hover:border-white hover:bg-[#181717] hover:text-white dark:hover:bg-white dark:hover:text-slate-900 hover:shadow-md"
                >
                  <GitHubIcon className="h-5 w-5 shrink-0 text-[#181717] dark:text-[#f0f6fc] group-hover:text-white dark:group-hover:text-slate-900 transition-colors" />
                  <span>All Repositories</span>
                </Link>
              </div>
            }
          />
        </Reveal>

        {/* Category Filter Pills */}
        <div
          role="group"
          aria-label="Filter research work by category"
          className="no-scrollbar -mx-5 mb-8 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
        >
          {RESEARCH_FILTERS.map((filter) => {
            const isActive = activeFilter === filter
            const activeCardCategories = visibleResearch[activeCardIndex]?.categories || []
            const isCategoryOfMiddleCard =
              activeFilter === ALL && activeCardCategories.includes(filter)

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={isActive}
                className={cn(
                  'inline-flex h-9 shrink-0 items-center rounded-full border px-4 text-xs font-semibold transition-all duration-300 cursor-pointer',
                  isActive
                    ? 'border-cyan-600 bg-cyan-600 text-white font-bold shadow-md shadow-cyan-600/20 scale-[1.02]'
                    : isCategoryOfMiddleCard
                      ? 'border-cyan-500/50 bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 font-semibold shadow-xs scale-[1.03]'
                      : 'border-[var(--line-strong)] bg-[var(--panel)] text-[var(--ink)] hover:border-cyan-500/50 hover:text-cyan-600 dark:hover:text-cyan-400',
                )}
              >
                {filter}
              </button>
            )
          })}
        </div>

        {/* Research Work Carousel */}
        {visibleResearch.length > 0 ? (
          <div className="relative group/carousel">
            {/* Prev / Next Arrows */}
            {visibleResearch.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={activeCardIndex === 0}
                  aria-label="Previous research"
                  className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-md backdrop-blur-md transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110 cursor-pointer disabled:opacity-20 disabled:pointer-events-none"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={activeCardIndex >= visibleResearch.length - 1}
                  aria-label="Next research"
                  className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-md backdrop-blur-md transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110 cursor-pointer disabled:opacity-20 disabled:pointer-events-none"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}

            {/* Horizontal Scroll Track */}
            <div
              ref={scrollContainerRef}
              className="no-scrollbar flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-6 py-6 px-[7.5%] sm:px-[calc(50%-240px)] lg:px-[calc(50%-270px)]"
            >
              {visibleResearch.map((item, index) => (
                <div
                  key={`${activeFilter}-${item.id}`}
                  data-card-index={index}
                  onClick={() => index !== activeCardIndex && scrollToCard(index)}
                  className={cn(
                    "w-[85%] sm:w-[480px] lg:w-[540px] shrink-0 snap-center transition-all duration-500 py-2",
                    index !== activeCardIndex && "cursor-pointer"
                  )}
                >
                  <Reveal delay={index * 50}>
                    <WorkCard
                      item={item}
                      className="h-full"
                      isActive={index === activeCardIndex}
                    />
                  </Reveal>
                </div>
              ))}
            </div>

            {/* Carousel Dots & Center Bottom Counter */}
            {visibleResearch.length > 0 && (
              <div className="mt-6 flex flex-col items-center justify-center gap-3">
                {visibleResearch.length > 1 && (
                  <div className="flex items-center justify-center gap-2">
                    {visibleResearch.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => scrollToCard(i)}
                        aria-label={`Go to research ${i + 1}`}
                        className={cn(
                          'h-2 rounded-full transition-all duration-300 cursor-pointer',
                          i === activeCardIndex
                            ? 'w-6 bg-cyan-600 shadow-xs'
                            : 'w-2 bg-[var(--ink-muted)]/30 hover:bg-[var(--ink-muted)]/60',
                        )}
                      />
                    ))}
                  </div>
                )}

                {/* Compact Dynamic Counter Pill */}
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-[var(--panel)] px-3.5 py-1 text-xs font-semibold shadow-2xs backdrop-blur-md transition-all duration-300 hover:border-cyan-500/40">
                  <span className="flex items-center gap-1">
                    <span className="font-mono text-xs sm:text-sm font-bold text-cyan-600 dark:text-cyan-400">
                      {Math.min(activeCardIndex + 1, visibleResearch.length)}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--ink-muted)]/60 px-0.5">
                      of
                    </span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-[var(--ink)]">
                      {visibleResearch.length}
                    </span>
                  </span>

                  <span className="h-3.5 w-px bg-[var(--line-strong)]" aria-hidden="true" />

                  <span className="inline-flex items-center rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/20 px-2.5 py-0.5 text-[10px] font-mono font-extrabold uppercase tracking-wider text-cyan-600 dark:text-cyan-300">
                    {activeFilter}
                  </span>
                </div>
              </div>
            )}
          </div>
        ) : (
          <Reveal>
            <div className="rounded-2xl border border-border bg-secondary/30 p-8 sm:p-12 text-center shadow-xs flex flex-col items-center justify-center gap-3">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-600 mb-1">
                <GraduationCap className="h-6 w-6" aria-hidden="true" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-foreground">
                No research work in {activeFilter} yet
              </h4>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
