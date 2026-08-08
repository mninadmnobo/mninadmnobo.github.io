import type { Metadata } from 'next'

import { DocumentPage } from '@/components/layout/document-page'

export const metadata: Metadata = {
  title: 'Biodata',
  description:
    'Biodata of Mohammad Ninad Mahmud Nobo, available to view and download as a PDF.',
  alternates: { canonical: '/biodata' },
}

export default function BiodataPage() {
  return (
    <DocumentPage
      eyebrow="Biodata"
      description="My biodata, for professional and academic purposes. Available to view or download as a PDF."
      pdfHref="/Mohammad_Ninad_Mahmud_Nobo_Biodata.pdf"
    />
  )
}
