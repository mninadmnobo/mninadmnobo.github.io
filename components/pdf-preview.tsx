"use client"

type PdfPreviewProps = {
  src: string
  title: string
}

export function PdfPreview({ src, title }: PdfPreviewProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-border/60 bg-card/30 shadow-lg backdrop-blur-sm">
      <div className="border-b border-border/40 bg-gradient-to-r from-primary/10 to-primary/5 px-4 py-3 flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-foreground">{title}</p>
        </div>
      </div>
      <div className="bg-background/40">
        <iframe title={title} src={src} className="h-[480px] w-full sm:h-[520px] lg:h-[600px]" />
      </div>
    </div>
  )
}
