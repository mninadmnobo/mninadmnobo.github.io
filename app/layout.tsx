import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { ScrollToTopOnLoad } from '../components/scroll-to-top-on-load'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Mohammad Ninad Mahmud Nobo | Full-Stack & AI Engineer',
  description: 'Portfolio of Mohammad Ninad Mahmud Nobo, a BUET CSE undergraduate building full-stack products, production APIs, and applied AI systems with experience in LLM testing and medical AI research.',
  icons: {
    // icons removed to avoid Vercel / auto-generated icon references
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <ScrollToTopOnLoad />
          {children}
        </ThemeProvider>
        {/* Vercel analytics removed */}
      </body>
    </html>
  )
}
