"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Link } from "@/components/ui/link"
import { FileText, Download, ArrowLeft } from "lucide-react"

export default function BioDataPage() {
  return (
    <main className="min-h-screen px-6 md:px-12 lg:px-24 py-24 relative overflow-hidden pb-24">
      <Navigation />
      {/* Premium background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-card/30 via-background to-card/30" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary/8 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary" />
            <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">Biodata</h2>
          </div>

          <div className="mb-4 max-w-3xl">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground whitespace-nowrap leading-tight">
              Mohammad Ninad Mahmud Nobo
            </h1>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          <a href="/Mohammad_Ninad_Mahmud_Nobo_Biodata.pdf" target="_blank" rel="noopener noreferrer" className="no-underline">
            <Button variant="outline" className="gap-2 border-border/60 text-primary hover:!border-primary/50 hover:!bg-primary/10 hover:!text-primary dark:hover:!text-primary-foreground transition-all duration-200">
              <FileText className="h-4 w-4" />
              View PDF
            </Button>
          </a>
          <a href="/Mohammad_Ninad_Mahmud_Nobo_Biodata.pdf" download className="no-underline">
            <Button variant="outline" className="gap-2 border-border/60 text-primary hover:!border-primary/50 hover:!bg-primary/10 hover:!text-primary dark:hover:!text-primary-foreground transition-all duration-200">
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
          </a>
        </div>

        <div className="space-y-4">

          <div className="border border-border/60 rounded-xl overflow-hidden bg-card/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 border-b border-border/40">
              <p className="text-sm font-medium text-foreground">PDF Viewer Preview</p>
            </div>
            <iframe
              title="Biodata PDF"
              src="/Mohammad_Ninad_Mahmud_Nobo_Biodata.pdf"
              className="w-full h-[720px]"
            />
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 left-6 right-6 z-50 flex items-center justify-start">
        <Button asChild variant="outline" className="px-6 py-3.5 text-sm md:text-base">
          <Link href="/" className="no-underline inline-flex items-center gap-2">
            <ArrowLeft />
            Back: Home
          </Link>
        </Button>
      </div>
    </main>
  )
}
