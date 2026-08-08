'use client'

import { professionalWork, research } from '@/lib/data'
import { Carousel, CarouselItem } from '@/components/ui/carousel'
import { WorkCard } from './work-card'

const SOURCES = {
  professional: professionalWork,
  research,
} as const

/**
 * Carousel of work cards for one section.
 *
 * Takes a source key rather than an array of items so the data never crosses the
 * server/client boundary. The cards and the carousel are already client
 * components, and the whole dataset is in the client bundle regardless (the
 * projects filter and the experience cross-links both import it) — passing the
 * items down as props from a server component only meant serialising every case
 * study into the HTML a second time.
 *
 * The markup is still prerendered: a client component is rendered to static HTML
 * at build time like any other.
 */
export function WorkRail({ source, label }: { source: keyof typeof SOURCES; label: string }) {
  return (
    <Carousel label={label}>
      {SOURCES[source].map((item) => (
        <CarouselItem key={item.id}>
          <WorkCard item={item} />
        </CarouselItem>
      ))}
    </Carousel>
  )
}
