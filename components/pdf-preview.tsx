"use client"

import { useEffect, useRef, useState } from "react"

type PdfJsModule = typeof import("pdfjs-dist")

type PdfPreviewProps = {
  src: string
  title: string
}

export function PdfPreview({ src, title }: PdfPreviewProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const [loading, setLoading] = useState(true)
  const [pageCount, setPageCount] = useState(0)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const updateWidth = () => {
      setContainerWidth(Math.floor(container.clientWidth))
    }

    updateWidth()

    if (typeof ResizeObserver === "undefined") return

    const observer = new ResizeObserver(updateWidth)
    observer.observe(container)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    let cancelled = false
    const renderTasks: Array<{ cancel: () => void }> = []
    let loadingTask: ReturnType<PdfJsModule["getDocument"]> | null = null

    const renderPdf = async () => {
      const container = containerRef.current
      if (!container || containerWidth <= 0) return

      container.replaceChildren()
      setLoading(true)
      setError(null)

      try {
        const pdfjsLib = (await import("pdfjs-dist")) as PdfJsModule
        pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
          "pdfjs-dist/build/pdf.worker.min.mjs",
          import.meta.url,
        ).toString()

        loadingTask = pdfjsLib.getDocument(src)
        const pdf = await loadingTask.promise

        if (cancelled) return

        setPageCount(pdf.numPages)

        const maxWidth = Math.min(containerWidth, 960)
        const deviceScale = window.devicePixelRatio || 1

        for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
          if (cancelled) break

          const page = await pdf.getPage(pageNumber)
          const viewport = page.getViewport({ scale: 1 })
          const displayScale = maxWidth / viewport.width
          const renderScale = displayScale * deviceScale
          const renderViewport = page.getViewport({ scale: renderScale })

          const pageWrapper = document.createElement("div")
          pageWrapper.className = "flex justify-center"

          const canvas = document.createElement("canvas")
          canvas.className = "block w-full rounded-xl bg-white shadow-xl ring-1 ring-black/10"
          canvas.style.width = `${maxWidth}px`
          canvas.style.height = `${Math.round(viewport.height * displayScale)}px`

          const context = canvas.getContext("2d")
          if (!context) throw new Error("Unable to load PDF preview.")

          canvas.width = Math.floor(renderViewport.width)
          canvas.height = Math.floor(renderViewport.height)

          pageWrapper.appendChild(canvas)
          container.appendChild(pageWrapper)

          const renderTask = page.render({ canvasContext: context, canvas, viewport: renderViewport })
          renderTasks.push(renderTask)
          await renderTask.promise
        }
      } catch (caughtError) {
        if (!cancelled) {
          setError(caughtError instanceof Error ? caughtError.message : "Unable to load PDF preview.")
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    void renderPdf()

    return () => {
      cancelled = true
      loadingTask?.destroy()
      for (const task of renderTasks) {
        task.cancel()
      }
    }
  }, [containerWidth, src])

  return (
    <div className="border border-border/60 rounded-xl overflow-hidden bg-card/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-3 sm:p-4 border-b border-border/40 flex items-center justify-between gap-3">
        <p className="text-xs sm:text-sm font-medium text-foreground">{title}</p>
        <p className="text-[11px] sm:text-xs text-muted-foreground">
          {pageCount > 0 ? `${pageCount} pages` : loading ? "Rendering..." : "Ready"}
        </p>
      </div>

      <div className="bg-muted/20 p-3 sm:p-4">
        {loading && pageCount === 0 ? (
          <div className="flex min-h-[280px] items-center justify-center rounded-xl border border-dashed border-border/60 bg-background/60">
            <p className="text-xs sm:text-sm text-muted-foreground">Loading PDF preview...</p>
          </div>
        ) : null}

        <div ref={containerRef} className="space-y-4 sm:space-y-6" aria-busy={loading} />

        {error ? (
          <p className="mt-4 text-xs sm:text-sm text-destructive">{error}</p>
        ) : null}
      </div>
    </div>
  )
}