import type { Metadata } from 'next'

import { DocumentPage } from '@/components/layout/document-page'
import { LatexSource } from './latex-source'

export const metadata: Metadata = {
  title: 'Curriculum Vitae',
  description:
    'Curriculum vitae of Mohammad Ninad Mahmud Nobo — AI/ML engineer and researcher. Available as PDF and LaTeX source.',
  alternates: { canonical: '/cv' },
}

export default function CvPage() {
  return (
    <DocumentPage
      eyebrow="Curriculum Vitae"
      description="View, download, or edit my professional CV. Available in PDF format for easy sharing and in LaTeX source for customization."
      pdfHref="/Mohammad_Ninad_Mahmud_Nobo_CV.pdf"
    >
      <LatexSource />
    </DocumentPage>
  )
}
