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
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12">
          <a href="/Mohammad_Ninad_Mahmud_Nobo_Biodata.pdf" target="_blank" rel="noopener noreferrer" className="no-underline">
            <Button variant="outline" className="gap-2 text-xs sm:text-sm border-border/60 text-primary hover:!border-primary/50 hover:!bg-primary/10 hover:!text-primary dark:hover:!text-primary-foreground transition-all duration-200">
              <FileText className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">View PDF</span>
              <span className="sm:hidden">View</span>
            </Button>
          </a>
          <a href="/Mohammad_Ninad_Mahmud_Nobo_Biodata.pdf" download className="no-underline">
            <Button variant="outline" className="gap-2 text-xs sm:text-sm border-border/60 text-primary hover:!border-primary/50 hover:!bg-primary/10 hover:!text-primary dark:hover:!text-primary-foreground transition-all duration-200">
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

      <div className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-50 flex items-center justify-start">
        <Button asChild variant="outline" className="px-3 sm:px-6 py-2 sm:py-3.5 text-xs sm:text-sm md:text-base">
          <Link href="/" className="no-underline inline-flex items-center gap-2">
            <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">Back: Home</span>
            <span className="sm:hidden">Back</span>
          </Link>
        </Button>
      </div>
    </main>
  )
}
