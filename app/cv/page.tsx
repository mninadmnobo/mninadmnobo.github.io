"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Link } from "@/components/ui/link"
import { FileText, Download, ExternalLink, Copy, Check } from "lucide-react"

// Use provided Overleaf share URL by default; can be overridden via env: NEXT_PUBLIC_OVERLEAF_URL
const OVERLEAF_URL = process.env.NEXT_PUBLIC_OVERLEAF_URL ?? "https://www.overleaf.com/read/ynxpmkthmrds#abfcd6"

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
    <main className="min-h-screen px-6 md:px-12 lg:px-24 py-24 relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-card/30 via-background to-card/30" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary/8 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary" />
            <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">Curriculum Vitae</h2>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground text-balance leading-tight">
            Mohammad Ninad<br />Mahmud Nobo
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            View, download, or edit my professional CV. Available in PDF format for easy sharing and in LaTeX source for customization.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          {OVERLEAF_URL && (
            <a href={OVERLEAF_URL} target="_blank" rel="noopener noreferrer" className="no-underline">
              <Button
                variant="outline"
                className="gap-2 border-primary/40 text-primary hover:!border-primary/50 hover:!bg-primary/10 hover:!text-primary transition-all duration-200"
              >
                <ExternalLink className="h-4 w-4" />
                Open on Overleaf
              </Button>
            </a>
          )}
          <a href="/Mohammad_Ninad_Mahmud_Nobo_CV.pdf" target="_blank" rel="noopener noreferrer" className="no-underline">
            <Button variant="outline" className="gap-2 border-border/60 hover:border-primary/50 hover:bg-primary/10 transition-all duration-200">
              <FileText className="h-4 w-4" />
              View PDF
            </Button>
          </a>
          <a href="/Mohammad_Ninad_Mahmud_Nobo_CV.pdf" download className="no-underline">
            <Button variant="outline" className="gap-2 border-border/60 hover:border-primary/50 hover:bg-primary/10 transition-all duration-200">
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
          </a>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* PDF Viewer */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                PDF Preview
              </h3>
              <p className="text-sm text-muted-foreground mb-4">Full-page preview of your CV in PDF format</p>
            </div>
            
            <div className="border border-border/60 rounded-xl overflow-hidden bg-card/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 border-b border-border/40">
                <p className="text-sm font-medium text-foreground">PDF Viewer</p>
              </div>
              <iframe
                title="CV PDF"
                src="/Mohammad_Ninad_Mahmud_Nobo_CV.pdf"
                className="w-full h-[600px]"
              />
            </div>
          </div>

          {/* LaTeX Source */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  LaTeX Source
                </h3>
                <p className="text-sm text-muted-foreground">Edit or customize the source code</p>
              </div>
              <a href="/Mohammad_Ninad_Mahmud_Nobo_CV.tex" download className="no-underline">
                <Button size="sm" variant="outline" className="gap-2 border-border/60 hover:border-primary/50 hover:bg-primary/10">
                  <Download className="h-4 w-4" />
                  Download
                </Button>
              </a>
            </div>
            
            <div className="border border-border/60 rounded-xl overflow-hidden bg-card/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 border-b border-border/40 flex items-center justify-between">
                <p className="text-sm font-medium text-foreground">LaTeX Code</p>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="gap-2 text-muted-foreground hover:text-primary transition-colors"
                  onClick={copyLatex}
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      Copy
                    </>
                  )}
                </Button>
              </div>

              {loading ? (
                <div className="h-[600px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-block">
                      <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                    </div>
                    <p className="text-muted-foreground mt-3 text-sm">Loading LaTeX source...</p>
                  </div>
                </div>
              ) : (
                <textarea
                  readOnly
                  value={latex}
                  className="w-full h-[600px] p-4 font-mono text-xs bg-background/50 text-muted-foreground border-none resize-none focus:outline-none"
                />
              )}
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-12 p-6 rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <span className="font-medium text-foreground">💡 Tip:</span> You can copy the LaTeX source and paste it into Overleaf to create your own editable version. The PDF is also available for quick viewing or downloading.
          </p>
        </div>
      </div>
    </main>
  )
}
