import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { ScrollToTopOnLoad } from '../components/scroll-to-top-on-load'
import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
}

export const metadata: Metadata = {
  title: 'Mohammad Ninad Mahmud Nobo | AI Systems & Full-Stack Engineer',

  description:
    'Portfolio of Mohammad Ninad Mahmud Nobo (M Ninad Nobo, Ninad Nobo, mninadmnobo), BUET CSE undergraduate building AI systems, full-stack applications, backend systems, LLM-powered products, and medical AI research.',

  keywords: [
    'Mohammad Ninad Mahmud Nobo',
    'Mohammad Ninad',
    'Ninad Mahmud',
    'M Ninad Nobo',
    'Ninad Nobo',
    'Nobo',
    'Ninad',
    'mninadmnobo',
    'mninadmnobo github',
    'mninadmnobo portfolio',
    'BUET',
    'BUET CSE',
    'BUET AI',
    'BUET programmer',
    'BUET developer',
    'AI Engineer',
    'Full Stack Engineer',
    'Software Engineer',
    'Backend Engineer',
    'LLM Engineer',
    'Medical AI',
    'AI Systems',
    'Portfolio',
    'GitHub',
    'Web Developer',
    'Machine Learning',
    'Deep Learning',
    'Applied AI',
  ],

  authors: [{ name: 'Mohammad Ninad Mahmud Nobo' }],

  creator: 'Mohammad Ninad Mahmud Nobo',

  openGraph: {
    title: 'Mohammad Ninad Mahmud Nobo | AI Systems & Full-Stack Engineer',

    description:
      'Portfolio of Mohammad Ninad Mahmud Nobo featuring AI systems, backend engineering, LLM products, and applied research.',

    url: 'https://mninadmnobo.github.io/',

    siteName: 'Mohammad Ninad Mahmud Nobo Portfolio',

    locale: 'en_US',

    type: 'website',
  },

  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased glow-everywhere">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <ScrollToTopOnLoad />
          {children}
        </ThemeProvider>
        {/* Vercel analytics removed */}
      </body>
    </html>
  )
}
