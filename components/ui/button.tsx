import * as React from 'react'

import { cn } from '@/lib/utils'

/**
 * Button styling as a class-string helper + convenience component.
 *
 * Inspired by Fabin's design system:
 *   - All buttons are pill-shaped (rounded-full)
 *   - Primary: cyan→blue gradient with glowing lift on hover
 *   - Secondary: outlined panel bg, accent border/color on hover
 *   - Ghost: transparent, subtle fill on hover
 *   - Icon: square-ish pill for icon-only buttons
 *
 * Returns a string of Tailwind + custom CSS classes so that anchor tags can
 * use the same styles without needing asChild or a polymorphic wrapper.
 */

type Variant = 'primary' | 'secondary' | 'ghost'
type Size    = 'sm' | 'md' | 'icon' | 'icon-lg'

// ── Shared base ─────────────────────────────────────────────────────────────
const BASE =
  'inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full text-sm font-semibold no-underline ' +
  'transition-all duration-300 ease-out ' +
  'active:scale-[0.97] ' +
  'disabled:pointer-events-none disabled:opacity-50'

// ── Variant classes ──────────────────────────────────────────────────────────
// These use CSS custom properties so they automatically switch between light
// and dark modes when the token values change in globals.css.

const VARIANTS: Record<Variant, string> = {
  primary: [
    // Gradient fill — always uses the btn-from/btn-to tokens
    '[background-image:linear-gradient(100deg,var(--btn-from),var(--btn-to))]',
    'text-[var(--btn-ink)]',
    '[box-shadow:0_10px_30px_-12px_var(--btn-from)]',
    // Hover: brighter + larger glow + lift
    'hover:-translate-y-1 hover:scale-[1.02]',
    'hover:brightness-110',
    'hover:[box-shadow:0_20px_45px_-10px_var(--btn-from),0_0_30px_-4px_var(--btn-from)]',
  ].join(' '),

  secondary: [
    'border border-[var(--line)] bg-[var(--panel)] text-[var(--ink-muted)]',
    '[box-shadow:0_1px_3px_rgba(0,0,0,0.06)]',
    // Hover: accent border + tinted bg + lift + shadow
    'hover:-translate-y-1 hover:scale-[1.01]',
    'hover:border-[var(--fab-accent)] hover:text-[var(--fab-accent)]',
    'hover:bg-[var(--fab-accent-quiet)]',
    'hover:[box-shadow:0_8px_20px_-6px_rgba(8,145,178,0.25)]',
  ].join(' '),

  ghost: [
    'border border-transparent bg-transparent text-[var(--ink-muted)]',
    'hover:bg-[var(--panel-2)] hover:text-[var(--ink)]',
    'hover:-translate-y-0.5',
  ].join(' '),
}

// ── Size classes ─────────────────────────────────────────────────────────────
const SIZES: Record<Size, string> = {
  sm:      'h-9  px-4',
  md:      'h-11 px-5',
  icon:    'h-10 w-10 !px-0',
  'icon-lg': 'h-11 w-11 !px-0',
}

export function buttonStyles({
  variant  = 'secondary',
  size     = 'md',
  className,
}: { variant?: Variant; size?: Size; className?: string } = {}) {
  return cn(BASE, VARIANTS[variant], SIZES[size], className)
}

export function Button({
  variant,
  size,
  className,
  ...props
}: React.ComponentProps<'button'> & { variant?: Variant; size?: Size }) {
  return <button className={buttonStyles({ variant, size, className })} {...props} />
}
