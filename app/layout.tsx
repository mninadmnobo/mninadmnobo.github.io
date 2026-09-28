import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import { ThemeProvider } from '@/components/theme-provider'
import { buildSchemaGraph, rootSiteMetadata, SEO_CONFIG } from '@/lib/seo/config'
import './globals.css'

/**
 * ROOT LAYOUT — wraps every page. The only place global CSS is imported.
 *
 * 🔍 SEO / SOCIAL METADATA 🔍
 * Root metadata and Schema.org structured data are managed centrally in
 * `@/lib/seo/config.ts`, mirroring the FABINS Automation SEO architecture.
 */

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans', display: 'swap' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap' })

export const metadata: Metadata = {
  ...rootSiteMetadata,
  title: SEO_CONFIG.title,
  description: SEO_CONFIG.description,
  alternates: {
    canonical: `${SEO_CONFIG.siteUrl}/`,
  },
  openGraph: rootSiteMetadata.openGraph,
  verification: {
    google: SEO_CONFIG.googleVerificationToken,
  },
}

const schemaGraph = buildSchemaGraph()

/** Tints the mobile browser chrome to match --canvas in globals.css. */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  // Zoom is intentionally left enabled. Locking it removes the only tool
  // a low-vision reader has.
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbfcfd' },
    { media: '(prefers-color-scheme: dark)', color: '#12161c' },
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // `suppressHydrationWarning` is required by next-themes: it sets the theme
    // class on <html> before React hydrates, which would otherwise be reported
    // as a server/client mismatch.
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

        <script
          type="application/ld+json"
          // Serialised from constants defined above — never from user input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />

        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
