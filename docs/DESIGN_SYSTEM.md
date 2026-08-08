# Design System

All tokens live in [`app/globals.css`](../app/globals.css). Tailwind v4 is configured
CSS-first — there is no `tailwind.config.js`.

---

## Colour

Authored in `oklch`, which is perceptually uniform: changing hue at a fixed lightness does not
silently change how dark the colour reads. Both themes are defined completely and explicitly
(`:root` for light, `.dark` for dark) rather than deriving one from the other by opacity.

### Contrast is measured, not eyeballed

Cyan is a light hue. At the lightness that *looks* right next to a white page it reaches only
about 3.7:1 — failing WCAG AA for body text, and failing again for white text sitting on it as
a button fill. The light-theme `--primary` is therefore `oklch(0.52 0.13 210)`, set from
measurement.

Both themes pass AA across every text node on the page: 4.5:1 for body text, 3:1 for large
text. This is verified by an automated audit that resolves every computed colour through a
canvas — reading `oklch`/`lab()` component values as if they were sRGB gives nonsense
numbers, which is a real trap here.

A tinted background is a tighter constraint than the page background. The `--kind-*` accents
sit on their own `-soft` fills at 11px, so they are darker (`0.47`) than `--primary`. If you
change an accent, re-run the audit — see [DEVELOPMENT.md](DEVELOPMENT.md#quality-assurance).

### Semantic tokens

| Token | Use |
| :--- | :--- |
| `--background` / `--foreground` | Page base |
| `--card` / `--card-foreground` | Raised surfaces |
| `--primary` | Brand cyan — links, active states, primary buttons |
| `--secondary` | Quiet fills — chips, ghost buttons, rails |
| `--muted-foreground` | Body prose |
| `--border` | All borders |
| `--ring` | Focus outline |

### Work-kind accents

Three accents in one lightness and chroma band, hue-shifted only, so they read as a family
rather than three unrelated brand colours.

| Kind | Hue | Meaning |
| :--- | :--- | :--- |
| `--kind-professional` | 195 (teal) | Paid industry R&D |
| `--kind-research` | 292 (violet) | Thesis, papers, benchmarks |
| `--kind-project` | 255 (blue) | Academic and personal work |

**Consume them via the attribute, never by branching in a component.** A card sets
`data-kind`, CSS maps it to `--kind-accent` / `--kind-accent-soft`, descendants use
`text-[var(--kind-accent)]`. Adding a kind is one CSS block plus one `WORK_KIND_META` entry.

### Status tokens

Same mechanism via `data-status`.

| Status | Colour | Rule |
| :--- | :--- | :--- |
| `ongoing` | amber | **Never green.** In-progress work must not be styled like a shipped result. Also gets a pulsing dot. |
| `under-review` | violet | Submitted, not accepted |
| `published` | green | Preprint or publication |
| `completed` | neutral | Finished, unremarkable |

---

## Layout

Two primitives enforce rhythm. Use them; do not hand-roll padding on a section.

```css
.container-page   /* max-width 76rem, padding 1.25rem → 2rem (sm) → 3rem (lg) */
.section-spacing  /* padding-block 4rem → 6rem (md) */
```

One horizontal rhythm means left edges line up from the nav down to the footer at every
breakpoint. Mixing ad-hoc paddings is what makes a page feel misaligned on a phone.

`.rail-bleed` lets a scroller sit inside `.container-page` while still reaching the viewport
edge: a negative margin cancels the container's padding and equal padding puts it back inside
the scroller. The first card lines up with the section heading and later cards run off the
edge — the cue that there is more to swipe to.

Breakpoints are Tailwind defaults. `sm` (640px) is the meaningful one: below it the filter bar
scrolls horizontally and the dialog goes full-bleed.

---

## Type

Geist Sans and Geist Mono via `next/font` with `display: swap`. Mono is used only for years
and other tabular values.

| Role | Size |
| :--- | :--- |
| Hero name | `text-3xl` → `text-5xl` |
| Section title | `text-2xl` → `text-4xl` |
| Card title | `text-lg` |
| Body | `text-base` / `text-sm`, `leading-relaxed` |
| Eyebrow | `text-xs`, uppercase, `tracking-[0.18em]` |
| Badge | `text-[0.6875rem]`, uppercase |

Headings get `text-wrap: balance`, paragraphs `text-wrap: pretty` — both applied globally in
the base layer.

---

## Surfaces

`.surface-card` is the one card treatment: translucent card background, 1px border,
`--radius-xl`.

Hover is a single settled state — border tints toward the kind accent, a soft shadow, 2px
lift — and only under `@media (hover: hover)`, so a touch device does not get a stuck hover.

> The previous build ran an infinite `glow-pulse` **plus** a float animation on every
> interactive element on the page, via a `.glow-everywhere` rule. Removing it was the single
> largest visual change in this rewrite. Do not reintroduce looping hover animation.

---

## Motion

Restrained and purposeful.

| Animation | Where | Duration |
| :--- | :--- | :--- |
| `reveal-up` | Section and card entry, one-shot | 560ms |
| `dialog-in` | Detail dialog | 220ms |
| `backdrop-in` | Dialog backdrop, mobile menu | 180ms |
| `status-pulse` | Ongoing badge, current-role dot | 2.4s loop |

`status-pulse` is the only loop on the site. It earns its place by marking the one fact a
visitor most needs to notice — that this work is live right now.

Reduced motion is handled once, globally, in `globals.css`. Do not add per-component
`prefers-reduced-motion` checks; the global block already covers anything new. Durations
collapse to `0.01ms` rather than being removed, because `.reveal` depends on
`animation-fill-mode: both` to end visible.

---

## Focus

One rule in the base layer:

```css
:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
}
```

Keyboard users get a visible ring everywhere; pointer users never see it. Do not add
`focus:outline-none` anywhere.

---

## Targets

Minimum 24×24px for any control (WCAG 2.5.8), 44px for anything primary on mobile.
`components/ui/link.tsx` carries `min-h-6` on its base class so a standalone text link meets
the minimum without changing how it sits on a line.

For a card, the "View Details" button carries an `::after` spanning the whole card, so the
entire card is one large target with exactly one entry in the accessibility tree. Real links
inside are lifted above that overlay with `relative z-10`.

---

## Adding a component

1. Reuse a token. Never write a hex value or a raw `oklch()` in a component.
2. Use `.container-page` / `.section-spacing` for layout.
3. Use `.surface-card` for a raised surface.
4. For kind-dependent colour, read `var(--kind-accent)` — do not branch on `kind`.
5. Check both themes and 320px before you finish.
6. Re-run the QA suites in [DEVELOPMENT.md](DEVELOPMENT.md#quality-assurance).
