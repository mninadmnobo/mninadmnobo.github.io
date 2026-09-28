'use client'

import * as React from 'react'
import { AlertTriangle, ChevronRight, UserCircle2 } from 'lucide-react'

import { Dialog, DialogBody, DialogFooter, DialogHeader } from '@/components/ui/dialog'
import { KindBadge, StatusBadge, Tag } from '@/components/ui/badge'
import { ResourceLinks } from '@/components/ui/resource-links'
import type { DetailSection, WorkItem } from '@/lib/types/work'

/**
 * The full case study for one work item.
 *
 * Reads as a document rather than a settings panel: a single column at a
 * comfortable measure, headings in source order, and no tabs or accordions
 * hiding content behind another click. Sections render only when the underlying
 * data has them, so nothing shows an empty "Results" heading.
 *
 * `item` going null unmounts the whole subtree, which is what resets the body
 * scroll position between openings.
 */
export function WorkDetailDialog({ item, onClose }: { item: WorkItem | null; onClose: () => void }) {
  const [displayedItem, setDisplayedItem] = React.useState<WorkItem | null>(item)

  React.useEffect(() => {
    if (item) {
      setDisplayedItem(item)
    }
  }, [item])

  const currentItem = item ?? displayedItem
  if (!currentItem) return null

  const titleId = `work-detail-${currentItem.id}`

  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog
      open={!!item}
      onClose={handleClose}
      labelledBy={titleId}
    >
      <DialogHeader onClose={handleClose}>
        <div data-kind={currentItem.kind}>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <KindBadge kind={currentItem.kind} />
            <StatusBadge status={currentItem.status} label={currentItem.statusLabel} />
            <span className="font-mono text-xs text-muted-foreground">{currentItem.year}</span>
          </div>

          <h2
            id={titleId}
            className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
          >
            {currentItem.title}
          </h2>

          <p className="mt-1 text-sm font-medium text-[var(--kind-accent)]">{currentItem.subtitle}</p>
        </div>
      </DialogHeader>

      <DialogBody>
        <div data-kind={currentItem.kind} className="detail-prose mx-auto max-w-3xl">
          <p className="text-base leading-relaxed text-foreground">{currentItem.summary}</p>

          {currentItem.architectureFlow ? <ArchitectureFlow steps={currentItem.architectureFlow} /> : null}

          {currentItem.details.map((section) => (
            <DetailBlock key={section.heading} section={section} />
          ))}

          {currentItem.contribution ? <ContributionBlock section={currentItem.contribution} /> : null}

          {currentItem.scopeNote ? <ScopeNote note={currentItem.scopeNote} /> : null}

          {/* YouTube Video Demonstrations */}
          {currentItem.links
            .filter((l) => l.kind === 'video' || l.href.includes('youtube.com') || l.href.includes('youtu.be'))
            .map((video) => {
              const match = video.href.match(/(?:v=|\/embed\/|\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/)
              const videoId = match ? match[1] : null

              return (
                <section key={video.href} className="mt-8">
                  <SectionHeading>{video.label}</SectionHeading>
                  {videoId ? (
                    <div className="mt-3 overflow-hidden rounded-xl border border-border shadow-md aspect-video">
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                        title={video.label}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="h-full w-full border-0"
                      />
                    </div>
                  ) : null}
                </section>
              )
            })}

          <section className="mt-8">
            <SectionHeading>Technology Stack</SectionHeading>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              {currentItem.tech.map((group) => (
                <div key={group.name}>
                  <p className="mb-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    {group.name}
                  </p>
                  <ul className="flex flex-wrap gap-1.5">
                    {group.items.map((tech) => (
                      <li key={tech}>
                        <Tag>{tech}</Tag>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </DialogBody>

      <DialogFooter>
        <div className="mx-auto flex max-w-3xl flex-wrap items-center gap-2">
          <ResourceLinks links={currentItem.links} />
        </div>
      </DialogFooter>
    </Dialog>
  )
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-sm font-semibold tracking-[0.12em] text-[var(--kind-accent)] uppercase">
      {children}
    </h3>
  )
}

function DetailBlock({ section }: { section: DetailSection }) {
  return (
    <section className="mt-8">
      <SectionHeading>{section.heading}</SectionHeading>

      {section.body ? <p className="mt-3">{section.body}</p> : null}

      {section.points ? (
        <ul className="mt-3 space-y-2.5">
          {section.points.map((point) => (
            <li key={point} className="flex gap-3">
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--kind-accent)]"
                aria-hidden="true"
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  )
}

/**
 * Personal contribution, boxed and accented.
 *
 * Given its own treatment because on collaborative work it is the section a
 * reader most needs to find, and burying it in the run of headings invites the
 * assumption that everything above it was solo work.
 */
function ContributionBlock({ section }: { section: DetailSection }) {
  return (
    <section className="mt-8 rounded-xl border border-[var(--kind-accent)]/30 bg-[var(--kind-accent-soft)]/40 p-5">
      <div className="flex items-center gap-2">
        <UserCircle2 className="h-4 w-4 text-[var(--kind-accent)]" aria-hidden="true" />
        <SectionHeading>{section.heading}</SectionHeading>
      </div>

      {section.body ? <p className="mt-3">{section.body}</p> : null}

      {section.points ? (
        <ul className="mt-3 space-y-2.5">
          {section.points.map((point) => (
            <li key={point} className="flex gap-3">
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--kind-accent)]"
                aria-hidden="true"
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  )
}

/** States what in-progress work does not yet do. Styled as a caveat, not a feature. */
function ScopeNote({ note }: { note: string }) {
  return (
    <aside className="mt-6 flex gap-3 rounded-xl border border-[var(--status-ongoing)]/30 bg-[var(--status-ongoing-soft)]/40 p-5">
      <AlertTriangle
        className="mt-0.5 h-4 w-4 shrink-0 text-[var(--status-ongoing)]"
        aria-hidden="true"
      />
      <div>
        <p className="text-sm font-semibold text-foreground">Current scope</p>
        <p className="mt-1.5 text-sm">{note}</p>
      </div>
    </aside>
  )
}

/**
 * Pipeline stages as a wrapping chain.
 *
 * Wraps rather than scrolls so no stage is hidden off the edge on a phone, and
 * the chevrons are decorative — the list itself carries the order for anyone
 * reading it with a screen reader.
 */
function ArchitectureFlow({ steps }: { steps: string[] }) {
  return (
    <section className="mt-6 rounded-xl border border-border bg-secondary/30 p-4">
      <p className="mb-3 text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
        Pipeline
      </p>

      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-2">
        {steps.map((step, index) => (
          <li key={step} className="flex items-center gap-1.5">
            <span className="rounded-md border border-border bg-background px-2.5 py-1.5 text-xs font-medium text-foreground">
              {step}
            </span>
            {index < steps.length - 1 ? (
              <ChevronRight
                className="h-3.5 w-3.5 text-[var(--kind-accent)]"
                aria-hidden="true"
              />
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  )
}
