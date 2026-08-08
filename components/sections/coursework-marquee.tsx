'use client'

import React, { useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'

export interface CourseItem {
  label: string
  category: string
  icon: string
}

interface CourseworkMarqueeProps {
  items: CourseItem[]
}

export function CourseworkMarquee({ items }: CourseworkMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isHoveredRef = useRef(false)
  const isDraggingRef = useRef(false)
  const startXRef = useRef(0)
  const scrollLeftRef = useRef(0)
  const scrollPosRef = useRef(0)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    // Set initial scroll position to middle set for smooth bi-directional scrolling
    const singleSetWidth = el.scrollWidth / 3
    if (scrollPosRef.current === 0) {
      scrollPosRef.current = singleSetWidth
      el.scrollLeft = singleSetWidth
    }

    let animationFrameId: number

    const step = () => {
      if (!isHoveredRef.current && !isDraggingRef.current && el) {
        // Accumulate floating point offset to prevent browser integer scrollLeft truncation freeze
        scrollPosRef.current += 0.5

        const setWidth = el.scrollWidth / 3
        if (setWidth > 0) {
          if (scrollPosRef.current >= setWidth * 2) {
            scrollPosRef.current -= setWidth
          } else if (scrollPosRef.current <= 0) {
            scrollPosRef.current += setWidth
          }
        }
        el.scrollLeft = scrollPosRef.current
      } else if (el) {
        scrollPosRef.current = el.scrollLeft
      }

      animationFrameId = requestAnimationFrame(step)
    }

    animationFrameId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animationFrameId)
  }, [items])

  const handleMouseDown = (e: React.MouseEvent) => {
    const el = containerRef.current
    if (!el) return
    isDraggingRef.current = true
    startXRef.current = e.pageX - el.offsetLeft
    scrollLeftRef.current = el.scrollLeft
    scrollPosRef.current = el.scrollLeft
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return
    const el = containerRef.current
    if (!el) return
    e.preventDefault()
    const x = e.pageX - el.offsetLeft
    const walk = (x - startXRef.current) * 1.5
    el.scrollLeft = scrollLeftRef.current - walk
    scrollPosRef.current = el.scrollLeft

    const setWidth = el.scrollWidth / 3
    if (setWidth > 0) {
      if (el.scrollLeft >= setWidth * 2) {
        el.scrollLeft -= setWidth
        scrollPosRef.current = el.scrollLeft
        startXRef.current = e.pageX - el.offsetLeft
        scrollLeftRef.current = el.scrollLeft
      } else if (el.scrollLeft <= 0) {
        el.scrollLeft += setWidth
        scrollPosRef.current = el.scrollLeft
        startXRef.current = e.pageX - el.offsetLeft
        scrollLeftRef.current = el.scrollLeft
      }
    }
  }

  const handleMouseUpOrLeave = () => {
    isDraggingRef.current = false
    if (containerRef.current) {
      scrollPosRef.current = containerRef.current.scrollLeft
    }
  }

  // Triple items for seamless circular rolling loop in both left and right directions
  const tripleItems = [...items, ...items, ...items]

  return (
    <div className="mt-10 mx-auto max-w-[1340px] px-4 sm:px-6">
      <div className="w-full rounded-2xl border border-[var(--line-strong)] bg-[var(--panel)] py-2.5 backdrop-blur-md shadow-xs overflow-hidden">
        {/* Header Bar */}
        <div className="px-4 sm:px-5 mb-1.5 flex flex-wrap items-center justify-between gap-2 text-xs font-semibold select-none">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[var(--fab-accent)] animate-pulse" />
            <span className="font-bold tracking-wider text-[var(--ink)] uppercase text-[11px] sm:text-xs">
              Academic Coursework & Research Interests
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line-strong)] bg-[var(--panel-2)] px-2.5 py-0.5 text-[11px] font-semibold text-[var(--ink)] shadow-2xs">
            <span className="text-[var(--fab-accent)] font-bold">ℹ</span>
            <span>Hover to pause · Swipe or drag in any direction</span>
          </div>
        </div>

        {/* Circular Roll Track */}
        <div
          ref={containerRef}
          onMouseEnter={() => { isHoveredRef.current = true }}
          onMouseLeave={() => {
            isHoveredRef.current = false
            isDraggingRef.current = false
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onTouchStart={() => { isHoveredRef.current = true }}
          onTouchEnd={() => { isHoveredRef.current = false }}
          className="relative flex overflow-x-auto touch-pan-x scrollbar-none py-1 cursor-grab active:cursor-grabbing select-none"
        >
          {/* Left gradient fade mask */}
          <div className="pointer-events-none sticky left-0 top-0 bottom-0 z-10 h-full w-12 shrink-0 bg-gradient-to-r from-[var(--panel)] to-transparent" />

          <div className="flex shrink-0 items-center gap-2.5 pr-2.5">
            {tripleItems.map((item, idx) => {
              const isAcademicCoursework = item.category === 'Academic Coursework'
              return (
                <span
                  key={`${item.label}-${idx}`}
                  className="inline-flex shrink-0 whitespace-nowrap items-center gap-2 rounded-full border border-[var(--line-strong)] bg-[var(--panel)] px-3.5 py-1.5 text-xs font-semibold text-[var(--ink)] shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--fab-accent)] hover:shadow-[0_4px_14px_-4px_rgba(8,145,178,0.35)] cursor-default"
                >
                  <span className="text-sm shrink-0">{item.icon}</span>
                  <span className="shrink-0 font-semibold">{item.label}</span>
                  <span
                    className={cn(
                      'text-[9px] uppercase font-mono px-2 py-0.5 rounded-full font-bold tracking-wide border shrink-0 whitespace-nowrap',
                      isAcademicCoursework
                        ? 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/25'
                        : 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-500/25',
                    )}
                  >
                    {item.category}
                  </span>
                </span>
              )
            })}
          </div>

          {/* Right gradient fade mask */}
          <div className="pointer-events-none sticky right-0 top-0 bottom-0 z-10 h-full w-12 shrink-0 bg-gradient-to-l from-[var(--panel)] to-transparent" />
        </div>
      </div>
    </div>
  )
}
