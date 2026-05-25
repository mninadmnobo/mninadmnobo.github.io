"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Link } from "@/components/ui/link"
import { FileText, Download, ArrowLeft } from "lucide-react"
import { PdfPreview } from "@/components/pdf-preview"

export default function BioDataPage() {
  return (
    <main className="min-h-screen w-full px-3 sm:px-6 md:px-12 lg:px-24 py-20 sm:py-24 relative overflow-hidden pb-24">
      <Navigation />
      {/* Premium background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-card/30 via-background to-card/30" />
      <div className="absolute top-1/3 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-64 sm:w-80 h-64 sm:h-80 bg-primary/8 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-4 mb-4 sm:mb-6">
            <div className="h-px w-8 sm:w-12 bg-primary" />
            <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary">Biodata</h2>
          </div>

          <div className="mb-4 max-w-3xl">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-snug sm:leading-tight break-words">
              Mohammad Ninad Mahmud Nobo
            </h1>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            View, download, or share my biodata for professional and academic purposes. Available in PDF for quick reference and printing.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12">
          <a href="/Mohammad_Ninad_Mahmud_Nobo_Biodata.pdf" target="_blank" rel="noopener noreferrer" className="no-underline">
            <Button
              variant="ghost"
              className="no-glow gap-2 text-xs sm:text-sm bg-transparent text-primary border border-border/60 shadow-none hover:bg-transparent hover:text-primary focus-visible:ring-0 focus-visible:border-border/60 transition-none"
            >
              <FileText className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">View PDF</span>
              <span className="sm:hidden">View</span>
            </Button>
          </a>
          <a href="/Mohammad_Ninad_Mahmud_Nobo_Biodata.pdf" download className="no-underline">
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

        <div className="space-y-4">
          <PdfPreview title="PDF Viewer Preview" src="/Mohammad_Ninad_Mahmud_Nobo_Biodata.pdf" />
        </div>
      </div>
    </main>
  )
}
