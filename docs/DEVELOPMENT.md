# Development

## Setup

Requires **Node 20+** and **pnpm 10+** (the repo pins `pnpm@10.9.0` via `packageManager`).

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

No environment variables are needed for development. The site builds and runs with none set.

### Optional environment variables

| Variable | Default | Purpose |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_BASE_PATH` | `''` | Subpath when not served from the user site. Set by CI; do not set locally. |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | committed value | EmailJS service |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | committed value | EmailJS template |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | committed value | EmailJS publishable key |

The EmailJS identifiers in `lib/config.ts` are publishable by design — the service
authenticates the *origin*, not the key. The protection that matters is the allowed-domains
list in the EmailJS dashboard, not secrecy. **Nothing secret can go in this repository:** the
site is statically exported and every value is inlined into the bundle. Anything that must
stay private needs a real backend.

---

## Scripts

| Script | Does |
| :--- | :--- |
| `pnpm dev` | Development server |
| `pnpm build` | Static export to `out/`, then runs `postbuild` |
| `pnpm lint` | ESLint |
| `pnpm typecheck` | `tsc --noEmit` |
| `pnpm qa:serve` | Serves `out/` on :4321 for the QA scripts |
| `pnpm qa:responsive` | Overflow check + screenshots, 9 widths × 2 themes |
| `pnpm qa:interact` | 36 interaction and accessibility assertions |
| `pnpm qa:contrast` | WCAG AA contrast audit, both themes |

---

## Before committing

```bash
pnpm typecheck && pnpm lint && pnpm build
```

CI runs all three and refuses to deploy on failure. Two rules:

- **Do not suppress an error to make the build pass.** `typescript.ignoreBuildErrors` was
  removed from `next.config.mjs` deliberately; do not put it back.
- **Do not add an `eslint-disable` without a comment** explaining why the rule is wrong here.

### `react-hooks/set-state-in-effect`

The Next 16 ESLint config enables this, and it catches real design smells. Three showed up
during the rewrite and all three had a better answer than a disable:

| Pattern | Fix |
| :--- | :--- |
| `useEffect(() => setMounted(true), [])` to avoid a theme flash | Read the `dark` class in CSS instead. next-themes sets it before first paint, so no state is needed — see `ThemeToggle` in `components/layout/navigation.tsx`. |
| `useEffect(() => setMenuOpen(false), [pathname])` | Redundant; every menu item already closes the menu on click. |
| `setVisible(true)` in an `IntersectionObserver` absence guard | Dropped the guard; handled the no-JS case with a `<noscript>` rule in `app/layout.tsx`. |

---

## Quality assurance

The QA suites run against the **exported** site, not the dev server, so they exercise exactly
what GitHub Pages will serve. They need Google Chrome installed — `playwright-core` drives the
system browser via `channel: 'chrome'`, which is why there is no 500 MB browser download.

```bash
pnpm build
pnpm qa:serve          # leave running in one terminal

# in another terminal
pnpm qa:interact
pnpm qa:contrast
pnpm qa:responsive
```

### `qa:interact` — 36 assertions

- Anchor navigation clears the sticky header for all six section links
- Dialog: opens on Enter, `aria-labelledby` resolves, focus moves in, body scroll locks,
  background goes `inert`, focus stays trapped across 40 tabs, Escape closes, focus returns to
  the trigger, scroll unlocks, `inert` clears
- Backdrop click closes
- Carousel advances and reverses
- Project filters return the expected counts; expand/collapse returns to 4
- Mobile menu: locks scroll, reports `aria-expanded`, closes on navigation and on Escape,
  releases scroll
- Accessibility sweep: exactly one `h1`, no heading-level jumps, every `target="_blank"` has
  `rel="noopener"`, no unnamed link or button, every image has `alt`, no target under 24px
- Reduced motion: every revealed block ends fully visible and animations collapse
- No console errors on `/`, `/cv/` or `/biodata/`

### `qa:contrast`

Resolves every computed colour through a 1×1 canvas so the browser does the conversion.
**This matters:** the palette is authored in `oklch`, so `getComputedStyle` returns `lab()`,
and parsing those components as sRGB produces meaningless ratios. It also composites
translucent backgrounds down the ancestor chain to find the real backdrop.

Requires 4.5:1 for body text and 3:1 for large text, in both themes. Currently zero failures.

### `qa:responsive`

Screenshots at 320, 375, 390, 430, 768, 1024, 1280, 1440 and 1920 in both themes into
`.qa-shots/` (gitignored), and fails if `documentElement.scrollWidth` ever exceeds
`clientWidth` — the check for horizontal overflow.

Note that these scripts scroll with `behavior: 'instant'`. The site sets
`scroll-behavior: smooth`, so a plain `scrollTo` animates and the reveal observers never catch
up, which produces blank screenshots below the fold.

---

## Manual checks worth doing

Automation does not cover taste. Before shipping a visual change:

- 320px, both themes — the tightest layout on the site
- Tab through the whole page and confirm the focus order reads top-to-bottom
- Open a dialog on a real phone and check the sticky header and footer behave while scrolling
- Toggle the theme mid-scroll and look for anything that fails to repaint
- Enable the OS "reduce motion" setting and reload

---

## Adding a dependency

The runtime dependency list is eight packages and that is deliberate. Before adding one:

1. Can the platform do it? Scroll snapping replaced a carousel library; `inert` and a focus
   loop replaced a dialog library.
2. Does it ship to the client? A build-time tool costs a reader nothing; a runtime package
   costs every visitor.
3. Would it need a server? Static export means route handlers, server actions and image
   optimisation do not exist.

See [ARCHITECTURE.md](ARCHITECTURE.md#dependencies) for what was removed and why.
