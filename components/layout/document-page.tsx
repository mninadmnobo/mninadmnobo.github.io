import * as React from 'react'
import { Download, FileText } from 'lucide-react'

import { profile } from '@/lib/data'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { Link } from '@/components/ui/link'

/**
 * Shared shell for the CV and biodata routes.
 *
 * Both pages are the same thing — a heading, view/download actions and an
 * embedded PDF — and previously existed as two near-identical files that had
 * already drifted apart in their button markup.
 */
export function DocumentPage({
  eyebrow,
  description,
  pdfHref,
  children,
}: {
  eyebrow: string
  description: string
  pdfHref: string
  /** Extra content alongside the preview, e.g. the CV's LaTeX source panel. */
  children?: React.ReactNode
}) {
  return (
    <>
      <Navigation />

      <main id="main-content" className="pt-28 pb-20">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--fab-accent)]" aria-hidden="true" />
            <p className="text-xs font-semibold tracking-[0.18em] text-[var(--fab-accent)] uppercase">
              {eyebrow}
            </p>
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-[var(--ink)] sm:text-3xl md:text-4xl">
            {profile.name}
          </h1>

          <p className="mt-2 max-w-3xl text-sm sm:text-base leading-relaxed text-[var(--ink-muted)]">
            {description}
          </p>

          {children ? (
            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8 lg:items-start">
              <div className="w-full">
                <PdfFrame src={pdfHref} title={`${eyebrow} (PDF)`} />
              </div>
              <div className="w-full">
                {children}
              </div>
            </div>
          ) : (
            <div className="mt-8">
              <PdfFrame src={pdfHref} title={`${eyebrow} (PDF)`} />
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}

/**
 * Embedded PDF with integrated header actions.
 */
export function PdfFrame({ src, title }: { src: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--line-strong)] bg-[var(--panel)] shadow-sm flex flex-col h-[88vh] min-h-[40rem] max-h-[80rem]">
      {/* Header bar - 100% Symmetrical with LatexSource */}
      <div className="flex h-14 shrink-0 items-center justify-between border-b border-[var(--line)] bg-[var(--panel-2)]/60 px-4 sm:px-5">
        <div className="flex items-center gap-2 overflow-hidden">
          <FileText className="h-4 w-4 shrink-0 text-[var(--fab-accent)]" aria-hidden="true" />
          <span className="truncate text-sm font-semibold text-[var(--ink)]">{title}</span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Link
            href={src}
            className="inline-flex h-8 items-center gap-1.5 rounded-full border border-[var(--line-strong)] bg-[var(--panel)] px-3 text-xs font-semibold text-[var(--ink)] shadow-2xs transition-all hover:border-[var(--fab-accent)] hover:text-[var(--fab-accent)] no-underline"
          >
            <FileText className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Open PDF</span>
          </Link>
          <Link
            href={src}
            download
            className="inline-flex h-8 items-center gap-1.5 rounded-full border border-[var(--line-strong)] bg-[var(--panel)] px-3 text-xs font-semibold text-[var(--ink)] shadow-2xs transition-all hover:border-[var(--fab-accent)] hover:text-[var(--fab-accent)] no-underline"
          >
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Download</span>
          </Link>
        </div>
      </div>

      <iframe
        title={title}
        src={src}
        className="flex-1 w-full bg-white border-0"
      />
    </div>
  )
}
