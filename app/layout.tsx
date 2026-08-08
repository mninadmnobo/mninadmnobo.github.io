import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import { ThemeProvider } from '@/components/theme-provider'
import { profile } from '@/lib/data'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans', display: 'swap' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap' })

const DISPLAY_NAME = 'M Ninad M Nobo'
const TITLE = DISPLAY_NAME
const DESCRIPTION =
  'Portfolio of Mohammad Ninad Mahmud Nobo — AI/ML engineer and researcher. Computer vision for automated fabric inspection at Saturn Textiles R&D, multi-agent LLM systems for software testing, and conflict-aware medical AI. BUET CSE.'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  // Zoom is left enabled. Locking it is a common mobile "fix" that removes the
  // only tool a low-vision reader has.
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbfcfd' },
    { media: '(prefers-color-scheme: dark)', color: '#12161c' },
  ],
}

export const metadata: Metadata = {
  // Required for OpenGraph and canonical URLs to resolve to absolute paths in a
  // static export — without it Next emits relative URLs that crawlers reject.
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: TITLE,
    template: `%s | ${DISPLAY_NAME}`,
  },
  description: DESCRIPTION,
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  keywords: [
    'Mohammad Ninad Mahmud Nobo',
    'Ninad Nobo',
    'mninadmnobo',
    'AI/ML Engineer',
    'Machine Learning Engineer',
    'Software Engineer',
    'Researcher',
    'Computer Vision',
    'LLM Systems',
    'Medical AI',
    'Industrial AI',
    'BUET CSE',
    'Saturn Textiles R&D',
    'FABINS',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'profile',
    url: profile.siteUrl,
    siteName: `${profile.name} Portfolio`,
    title: TITLE,
    description: DESCRIPTION,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
}

/**
 * schema.org Person record.
 *
 * Gives search engines the structured facts — role, employer, education,
 * profiles — instead of leaving them to infer identity from a keyword list.
 * `sameAs` is what links this site to the Scholar and ORCID profiles as one
 * person rather than three.
 */
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  alternateName: profile.shortName,
  url: profile.siteUrl,
  image: `${profile.siteUrl}/Mohammad_Ninad_Mahmud_Nobo.jpg`,
  jobTitle: profile.currentRole.title,
  email: `mailto:${profile.emails.professional}`,
  worksFor: {
    '@type': 'Organization',
    name: 'Saturn Textiles Limited',
    department: { '@type': 'Organization', name: 'Research and Development' },
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Bangladesh University of Engineering and Technology (BUET)',
  },
  address: { '@type': 'PostalAddress', addressLocality: 'Dhaka', addressCountry: 'BD' },
  knowsAbout: [
    'Machine Learning',
    'Computer Vision',
    'Large Language Models',
    'Medical AI',
    'Software Engineering',
  ],
  sameAs: [
    profile.primary.github,
    profile.primary.linkedin,
    profile.primary.scholar,
    'https://orcid.org/0009-0006-2781-6693',
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        {/* Reveal animations start at opacity 0 and are switched on by an
            IntersectionObserver. Without scripting that observer never runs, so
            the page would render blank — this puts the content back. */}
        <noscript>
          <style>{'.reveal{opacity:1!important;animation:none!important}'}</style>
        </noscript>

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
        >
          Skip to content
        </a>

        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>

        <script
          type="application/ld+json"
          // Serialised from a literal defined above, never from user input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  )
}
