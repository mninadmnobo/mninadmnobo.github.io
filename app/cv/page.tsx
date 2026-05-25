"use client"

import { useEffect, useState } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Link } from "@/components/ui/link"
import { FileText, Download, Copy, Check, ArrowLeft } from "lucide-react"
import { PdfPreview } from "@/components/pdf-preview"

export default function CVPage() {
  const [latex, setLatex] = useState<string>("")
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const fetchTex = async () => {
      try {
        const res = await fetch("/Mohammad_Ninad_Mahmud_Nobo_CV.tex")
        if (!res.ok) throw new Error("Not found")
        const text = await res.text()
        setLatex(text)
      } catch (e) {
        setLatex("LaTeX source not found. Please add Mohammad_Ninad_Mahmud_Nobo_CV.tex to /public.")
      } finally {
        setLoading(false)
      }
    }

    fetchTex()
  }, [])

  const copyLatex = async () => {
    if (!latex) return
    await navigator.clipboard.writeText(latex)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="min-h-screen w-full px-3 sm:px-6 md:px-12 lg:px-24 py-20 sm:py-24 relative overflow-hidden pb-24">
      <Navigation />
      {/* Premium background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-card/30 via-background to-card/30" />
      <div className="absolute top-1/3 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-64 sm:w-80 h-64 sm:h-80 bg-primary/8 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-4 mb-4 sm:mb-6">
            <div className="h-px w-8 sm:w-12 bg-primary" />
            <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary">Curriculum Vitae</h2>
          </div>

          <div className="mb-4 max-w-3xl">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-snug sm:leading-tight break-words">
              Mohammad Ninad Mahmud Nobo
            </h1>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            View, download, or edit my professional CV. Available in PDF format for easy sharing and in LaTeX source for customization.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12">
          <a href="/Mohammad_Ninad_Mahmud_Nobo_CV.pdf" target="_blank" rel="noopener noreferrer" className="no-underline">
            <Button
              variant="ghost"
              className="no-glow gap-2 text-xs sm:text-sm bg-transparent text-primary border border-border/60 shadow-none hover:bg-transparent hover:text-primary focus-visible:ring-0 focus-visible:border-border/60 transition-none"
            >
              <FileText className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">View PDF</span>
              <span className="sm:hidden">View</span>
            </Button>
          </a>
          <a href="/Mohammad_Ninad_Mahmud_Nobo_CV.pdf" download className="no-underline">
            <Button
              variant="ghost"
              className="no-glow gap-2 text-xs sm:text-sm bg-transparent text-primary border border-border/60 shadow-none hover:bg-transparent hover:text-primary focus-visible:ring-0 focus-visible:border-border/60 transition-none"
            >
              <Download className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">Download PDF</span>
              <span className="sm:hidden">Download</span>
            </Button>
          </a>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* PDF Viewer */}
          <div className="space-y-4">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 flex items-center gap-2">
                <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                PDF Preview
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">Full-page preview of your CV in PDF format</p>
            </div>

            <PdfPreview title="PDF Viewer Preview" src="/Mohammad_Ninad_Mahmud_Nobo_CV.pdf" />
          </div>

          {/* LaTeX Source */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 flex items-center gap-2">
                  <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  LaTeX Source
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Edit or customize the source code</p>
              </div>
              <a href="/Mohammad_Ninad_Mahmud_Nobo_CV.tex" download className="no-underline">
                <Button
                  size="sm"
                  variant="ghost"
                  className="no-glow gap-2 text-xs sm:text-sm bg-transparent border border-border/60 shadow-none hover:bg-transparent hover:text-primary focus-visible:ring-0 focus-visible:border-border/60 transition-none"
                >
                  <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                  Download
                </Button>
              </a>
            </div>

            <div className="border border-border/60 rounded-xl overflow-hidden bg-card/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-3 sm:p-4 border-b border-border/40 flex items-center justify-between">
                <p className="text-xs sm:text-sm font-medium text-foreground">LaTeX Code</p>
                <Button
                  size="sm"
                  variant="ghost"
                  className="gap-2 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={copyLatex}
                >
                  {copied ? (
                    <>
                      <Check className="h-3 w-3 sm:h-4 sm:w-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3 sm:h-4 sm:w-4" />
                      Copy
                    </>
                  )}
                </Button>
              </div>

              {loading ? (
                <div className="h-[480px] sm:h-[520px] lg:h-[600px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-block">
                      <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                    </div>
                    <p className="text-muted-foreground mt-3 text-xs sm:text-sm">Loading LaTeX source...</p>
                  </div>
                </div>
              ) : (
                <textarea
                  readOnly
                  value={latex}
                  className="w-full h-[480px] sm:h-[520px] lg:h-[600px] p-4 font-mono text-xs bg-background/50 text-muted-foreground border-none resize-none focus:outline-none"
                />
              )}
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-8 sm:mt-12 p-4 sm:p-6 rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm">
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            <span className="font-medium text-foreground">💡 Tip:</span> You can copy the LaTeX source to create your own editable version. The PDF is also available for quick viewing or downloading.
          </p>
        </div>
      </div>
    </main>
  )
}
