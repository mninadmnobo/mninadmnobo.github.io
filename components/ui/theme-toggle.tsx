'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { cn } from '@/lib/utils'

const emptySubscribe = () => () => {}

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  )

  if (!mounted) {
    return (
      <div
        className={cn(
          'h-9 w-9 rounded-full border border-[var(--line)] bg-[var(--panel)] opacity-60',
          className
        )}
      />
    )
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={cn(
        'relative inline-flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 cursor-pointer shadow-md hover:scale-110 active:scale-95',
        isDark
          ? 'border-amber-400/50 bg-gradient-to-br from-amber-500/20 via-orange-500/15 to-yellow-500/20 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:border-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.5)]'
          : 'border-cyan-500/50 bg-gradient-to-br from-cyan-500/15 via-indigo-500/15 to-blue-500/20 text-cyan-700 dark:text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]',
        className
      )}
    >
      {isDark ? (
        <Sun className="h-4.5 w-4.5 transition-all duration-300 rotate-0 hover:rotate-90 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.8)]" />
      ) : (
        <Moon className="h-4.5 w-4.5 transition-all duration-300 rotate-0 hover:-rotate-45 text-cyan-600 dark:text-cyan-400 drop-shadow-[0_0_6px_rgba(6,182,212,0.8)]" />
      )}
    </button>
  )
}
