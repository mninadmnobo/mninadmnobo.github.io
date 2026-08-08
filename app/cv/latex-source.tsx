'use client'

import * as React from 'react'
import { Check, Copy, Download, Code } from 'lucide-react'

import { basePath } from '@/lib/config'
import { Link } from '@/components/ui/link'

const SOURCE_PATH = '/Mohammad_Ninad_Mahmud_Nobo_CV.tex'

/**
 * The CV's LaTeX source panel with integrated header bar.
 */
export function LatexSource() {
  const [source, setSource] = React.useState<string | null>(null)
  const [failed, setFailed] = React.useState(false)
  const [copied, setCopied] = React.useState(false)

  React.useEffect(() => {
    let cancelled = false

    fetch(`${basePath}${SOURCE_PATH}`)
      .then((response) => {
        if (!response.ok) throw new Error(String(response.status))
        return response.text()
      })
      .then((text) => {
        if (!cancelled) setSource(text)
      })
      .catch(() => {
        if (!cancelled) setFailed(true)
      })

    return () => {
      cancelled = true
    }
  }, [])

  const copy = async () => {
    if (!source) return

    try {
      await navigator.clipboard.writeText(source)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {}
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--line-strong)] bg-[var(--panel)] shadow-sm flex flex-col h-[88vh] min-h-[40rem] max-h-[80rem]">
      {/* Header bar - 100% Symmetrical with PdfFrame */}
      <div className="flex h-14 shrink-0 items-center justify-between border-b border-[var(--line)] bg-[var(--panel-2)]/60 px-4 sm:px-5">
        <div className="flex items-center gap-2 overflow-hidden">
          <Code className="h-4 w-4 shrink-0 text-[var(--fab-accent)]" aria-hidden="true" />
          <span className="truncate text-sm font-semibold text-[var(--ink)]">LaTeX Source (.tex)</span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={copy}
            disabled={!source}
            className="inline-flex h-8 items-center gap-1.5 rounded-full border border-[var(--line-strong)] bg-[var(--panel)] px-3 text-xs font-semibold text-[var(--ink)] shadow-2xs transition-all hover:border-[var(--fab-accent)] hover:text-[var(--fab-accent)] disabled:opacity-50 cursor-pointer"
          >
            {copied ? (
              <Check className="h-3.5 w-3.5 text-emerald-500" aria-hidden="true" />
            ) : (
              <Copy className="h-3.5 w-3.5" aria-hidden="true" />
            )}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>

          <Link
            href={SOURCE_PATH}
            download
            className="inline-flex h-8 items-center gap-1.5 rounded-full border border-[var(--line-strong)] bg-[var(--panel)] px-3 text-xs font-semibold text-[var(--ink)] shadow-2xs transition-all hover:border-[var(--fab-accent)] hover:text-[var(--fab-accent)] no-underline"
          >
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Download .tex</span>
          </Link>
        </div>
      </div>

      {/* Code Body */}
      {failed ? (
        <div className="flex-1 p-6 text-sm text-[var(--ink-muted)]">
          The LaTeX source could not be loaded.{' '}
          <Link href={SOURCE_PATH} className="text-[var(--fab-accent)] font-semibold">
            Download it directly
          </Link>
          .
        </div>
      ) : (
        <pre className="flex-1 w-full overflow-auto p-4 font-mono text-xs leading-relaxed text-[var(--ink-muted)] bg-transparent border-0 select-text">
          <code>{source ?? 'Loading LaTeX source…'}</code>
        </pre>
      )}
    </div>
  )
}
