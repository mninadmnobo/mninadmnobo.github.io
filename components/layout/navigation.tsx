'use client'

import * as React from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, Mail, ArrowLeft } from 'lucide-react'

import { profile } from '@/lib/data'
import { cn } from '@/lib/utils'
import { Link } from '@/components/ui/link'
import { ThemeToggle } from '@/components/ui/theme-toggle'

const SECTIONS = [
  { href: '/', label: 'HOME' },
  { href: '#about', label: 'ABOUT' },
  { href: '#experience', label: 'EXPERIENCE' },
  { href: '#research', label: 'RESEARCH' },
  { href: '#projects', label: 'PROJECTS' },
  { href: '#skills', label: 'SKILLS' },
]

const HEADER_OFFSET = 96

export function Navigation() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  const [activeSection, setActiveSection] = React.useState('/')
  const [scrolled, setScrolled] = React.useState(false)
  const [menuOpen, setMenuOpen] = React.useState(false)

  // ── Active-section tracker ──────────────────────────────────────────────
  React.useEffect(() => {
    if (!isHome) return

    const targets = ['about', 'experience', 'research', 'projects', 'skills', 'contact']
    let frame = 0

    const update = () => {
      frame = 0
      setScrolled(window.scrollY > 8)

      const marker = window.scrollY + HEADER_OFFSET + 140
      let current = '/'

      for (const id of targets) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= marker) current = `#${id}`
      }

      if (window.scrollY < HEADER_OFFSET) {
        current = '/'
        if (window.location.hash === '#top' || window.location.hash === '#') {
          window.history.replaceState(null, '', window.location.pathname)
        }
      }

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 20) {
        current = '#contact'
      }

      setActiveSection(current)
    }

    const onScroll = () => { if (frame) return; frame = window.requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [isHome])

  // ── Lock scroll when mobile menu is open ───────────────────────────────
  React.useEffect(() => {
    if (!menuOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  const isContactActive = isHome && activeSection === '#contact'

  const handleHomeClick = (e: React.MouseEvent) => {
    if (isHome) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setActiveSection('/')
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname)
      }
    }
  }

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    if (href === '/') {
      handleHomeClick(e)
      setMenuOpen(false)
      return
    }

    if (isHome && href.startsWith('#')) {
      e.preventDefault()
      const targetId = href.replace('#', '')
      const el = document.getElementById(targetId)

      if (el) {
        setActiveSection(href)
        setMenuOpen(false)

        const targetTop = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET + 16
        window.scrollTo({
          top: Math.max(0, targetTop),
          behavior: 'smooth',
        })
        if (window.location.hash !== href) {
          window.history.replaceState(null, '', href)
        }
      }
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">

      {/* ── Pill bar ── */}
      <div
        className={cn(
          'mx-auto flex max-w-6xl items-center justify-between gap-4',
          'rounded-full border px-3 py-2 sm:px-4',
          'backdrop-blur-xl transition-all duration-300',
          'hover:-translate-y-0.5',
          scrolled || menuOpen
            ? [
              'border-[var(--line)] bg-[var(--panel)]/85',
              'shadow-[0_12px_44px_-26px_rgba(8,145,178,0.6)]',
              'hover:border-[var(--fab-accent)]/50',
              'hover:shadow-[0_20px_50px_-16px_rgba(8,145,178,0.55)]',
            ].join(' ')
            : 'border-[var(--line)]/60 bg-[var(--panel)]/45',
        )}
      >
        {/* Brand */}
        <Link
          href="/"
          onClick={handleHomeClick}
          className={cn(
            'group flex shrink-0 items-center gap-2.5',
            'rounded-full py-1 pl-1 pr-3',
            'transition-all duration-200',
            'hover:-translate-y-0.5 hover:bg-[var(--panel-2)]',
            'no-underline',
          )}
        >
          <span
            className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-[var(--btn-ink)]"
            style={{
              backgroundImage: 'linear-gradient(135deg, var(--btn-from), var(--btn-to))',
              boxShadow: '0 4px 14px -4px var(--btn-from)',
            }}
            aria-hidden="true"
          >
            N
          </span>
          <span className="text-sm font-semibold text-[var(--ink)] transition-colors group-hover:text-[var(--fab-accent)]">
            {profile.shortName}
          </span>
        </Link>

        {/* Desktop nav links */}
        {isHome ? (
          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main">
            {SECTIONS.map((section) => {
              const isActive = activeSection === section.href
              return (
                <Link
                  key={section.href}
                  href={section.href}
                  onClick={(e) => handleNavClick(section.href, e)}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'relative rounded-full px-4 py-2 text-sm font-semibold no-underline',
                    'transition-all duration-200',
                    isActive
                      ? 'text-[var(--btn-ink)] -translate-y-0.5 shadow-md'
                      : 'text-[var(--ink-muted)] hover:text-[var(--fab-accent)] hover:bg-[var(--fab-accent-quiet)] hover:-translate-y-0.5',
                  )}
                >
                  {/* Gradient pill behind active link */}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full"
                      style={{
                        backgroundImage: 'linear-gradient(100deg, var(--btn-from), var(--btn-to))',
                        boxShadow: '0 8px 25px -8px var(--btn-from)',
                      }}
                    />
                  )}
                  <span className="relative z-10">{section.label}</span>
                </Link>
              )
            })}
          </nav>
        ) : null}

        {/* Right-side actions */}
        <div className="flex shrink-0 items-center gap-2">
          {/* "Let's Connect" CTA — desktop only */}
          {isHome ? (
            <>
              <Link
                href="#contact"
                onClick={(e) => handleNavClick('#contact', e)}
                className={cn(
                  'relative hidden sm:inline-flex items-center gap-1.5',
                  'rounded-full px-4 py-2 text-[13px] font-semibold no-underline',
                  'transition-all duration-200 hover:-translate-y-0.5',
                  isContactActive
                    ? 'text-[var(--btn-ink)]'
                    : [
                      'border border-[var(--fab-accent)]',
                      'text-[var(--fab-accent)]',
                      'hover:bg-[var(--fab-accent-quiet)]',
                      'hover:shadow-[0_6px_16px_-6px_rgba(8,145,178,0.35)]',
                    ].join(' '),
                )}
              >
                {isContactActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full"
                    style={{
                      backgroundImage: 'linear-gradient(100deg, var(--btn-from), var(--btn-to))',
                      boxShadow: '0 8px 25px -8px var(--btn-from)',
                    }}
                  />
                )}
                <Mail className="relative z-10 h-3.5 w-3.5" aria-hidden="true" />
                <span className="relative z-10">LET&#39;S CONNECT</span>
              </Link>

              <ThemeToggle />

              {/* Mobile hamburger */}
              <button
                type="button"
                onClick={() => setMenuOpen((o) => !o)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                className={cn(
                  'flex h-10 w-10 items-center justify-center rounded-full lg:hidden',
                  'border border-[var(--line)] bg-[var(--panel)] text-[var(--ink-muted)]',
                  'transition-colors hover:border-[var(--line-strong)] hover:text-[var(--fab-accent)]',
                )}
              >
                {menuOpen
                  ? <X className="h-5 w-5" aria-hidden="true" />
                  : <Menu className="h-5 w-5" aria-hidden="true" />}
              </button>
            </>
          ) : (
            <>
              <Link
                href="/"
                className={cn(
                  'inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold no-underline',
                  'border border-[var(--line-strong)] bg-[var(--panel)] text-[var(--ink)] shadow-xs',
                  'transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--fab-accent)] hover:text-[var(--fab-accent)]',
                )}
              >
                <ArrowLeft className="h-4 w-4 shrink-0 text-[var(--fab-accent)]" aria-hidden="true" />
                <span>Back to Home</span>
              </Link>
              <ThemeToggle />
            </>
          )}
        </div>
      </div>

      {/* ── Mobile menu panel ── */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className={cn(
            'mx-auto mt-2 max-w-6xl rounded-3xl p-3 lg:hidden',
            'border border-[var(--line)] bg-[var(--panel)]/95 backdrop-blur-xl',
            'shadow-[0_20px_50px_-30px_rgba(0,0,0,0.5)]',
            'animate-backdrop-in',
          )}
        >
          {SECTIONS.map((section) => {
            const isActive = activeSection === section.href
            return (
              <Link
                key={section.href}
                href={section.href}
                onClick={(e) => handleNavClick(section.href, e)}
                aria-current={isActive ? 'true' : undefined}
                className={cn(
                  'flex items-center justify-between rounded-2xl px-4 py-3',
                  'text-sm font-semibold no-underline transition-all duration-200',
                  isActive
                    ? 'text-[var(--btn-ink)]'
                    : 'text-[var(--ink-muted)] hover:bg-[var(--panel-2)] hover:text-[var(--ink)]',
                )}
                style={isActive ? {
                  backgroundImage: 'linear-gradient(100deg, var(--btn-from), var(--btn-to))',
                  boxShadow: '0 8px 25px -8px var(--btn-from)',
                } : {}}
              >
                {section.label}
              </Link>
            )
          })}

          {/* Mobile "Let's Connect" button */}
          <div className="mt-2">
            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className={cn(
                'flex w-full items-center justify-center gap-1.5 rounded-2xl px-4 py-3',
                'text-sm font-semibold text-[var(--btn-ink)] no-underline',
              )}
              style={{
                backgroundImage: 'linear-gradient(100deg, var(--btn-from), var(--btn-to))',
                boxShadow: '0 8px 25px -8px var(--btn-from)',
              }}
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Let&#39;s Connect
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}


