# Mohammad Ninad Mahmud Nobo — Portfolio

Personal portfolio of an AI/ML engineer, software engineer and researcher. Live at
**[mninadmnobo.github.io](https://mninadmnobo.github.io)**.

The site is a statically exported Next.js application deployed to GitHub Pages. It presents
one professional narrative — BUET CSE → AI/ML → LLM research → medical AI → industrial AI at
Saturn Textiles R&D — and deliberately separates three kinds of work so a visitor can tell
them apart at a glance:

| Kind | Meaning | Accent |
| :--- | :--- | :--- |
| **Industry R&D** | Paid professional work (FABINS, Saturn R&D platform) | teal |
| **Research** | Thesis, submitted papers, published benchmarks | violet |
| **Project** | Academic and personal engineering work | blue |

Every card is compact; the full case study lives in a modal opened by **View Details**.

---

## Stack

| Concern | Choice |
| :--- | :--- |
| Framework | Next.js 16 (App Router, `output: 'export'`) |
| Language | TypeScript 5.7, strict |
| UI | React 19 |
| Styling | Tailwind CSS v4 (CSS-first config in `app/globals.css`) |
| Theming | `next-themes`, class strategy, dark default |
| Icons | `lucide-react` + hand-rolled brand marks |
| Contact form | `@emailjs/browser` (browser-to-EmailJS; there is no backend) |
| Hosting | GitHub Pages via GitHub Actions |

Runtime dependencies total eight packages. There is no component library, no animation
library, and no carousel library — see [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for why.

---

## Features

- **Content-driven.** Every project, paper and job lives in `lib/data/`. Adding work is a
  data edit, never a JSX edit.
- **Compact card → full case study.** One accessible dialog renders professional work,
  research and projects from a single `WorkItem` model.
- **Carousels on native scroll-snap.** Touch swipe, momentum and keyboard paging, with
  prev/next buttons and a position readout. No autoplay.
- **Filtered project grid** with progressive disclosure — featured work first, the rest one
  click away.
- **Mobile designed, not scaled down.** The dialog is full-bleed on phones, the filter bar
  scrolls horizontally below `sm` and wraps above it.
- **Accessible.** Focus trap and restore, `inert` background, Escape/backdrop close, scroll
  lock, visible focus rings, 24px minimum targets, WCAG AA contrast in both themes,
  `prefers-reduced-motion` honoured globally.
- **SEO.** Per-route metadata, canonical URLs, `schema.org/Person` JSON-LD, generated
  sitemap and robots, and a build-time OpenGraph card.

---

## Quick start

Requires **Node 20+** and **pnpm 10+**.

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

| Script | Does |
| :--- | :--- |
| `pnpm dev` | Development server |
| `pnpm build` | Static export to `out/` (runs `postbuild` automatically) |
| `pnpm lint` | ESLint (flat config, `next/core-web-vitals` + `next/typescript`) |
| `pnpm typecheck` | `tsc --noEmit` |

---

## Repository structure

```text
app/
├── layout.tsx              Root layout, metadata, JSON-LD, fonts, theme provider
├── page.tsx                Homepage — section order is the site's argument
├── globals.css             Design tokens, layout primitives, motion
├── opengraph-image.tsx     Build-time 1200x630 social card
├── sitemap.ts / robots.ts  Generated at build
├── cv/                     CV route + LaTeX source viewer

components/
├── layout/                 Navigation, footer, back-to-top, document-page shell
├── sections/               One file per homepage section
├── work/                   Card, carousel rail, detail dialog, dialog context
└── ui/                     Dialog, carousel, button, link, badges, reveal, icons

lib/
├── data/                   ALL SITE CONTENT — the only place facts live
├── types/                  WorkItem, profile and supporting types
├── config.ts               Build-time config (EmailJS ids, base path)
└── utils.ts                cn()

scripts/postbuild.mjs       .nojekyll + OpenGraph content-type fix for Pages
docs/                       Architecture, components, content, design, dev, deploy
```

---

## Documentation

| Document | Read it when |
| :--- | :--- |
| [ARCHITECTURE.md](docs/ARCHITECTURE.md) | You want the data model, rendering strategy and the reasoning behind the dependency choices |
| [CONTENT_GUIDE.md](docs/CONTENT_GUIDE.md) | **You are updating FABINS, adding a project, paper or job** |
| [COMPONENT_GUIDE.md](docs/COMPONENT_GUIDE.md) | You are changing or reusing a component |
| [DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md) | You are touching colour, type, spacing or motion |
| [DEVELOPMENT.md](docs/DEVELOPMENT.md) | You are setting up, or want the QA procedure |
| [DEPLOYMENT.md](docs/DEPLOYMENT.md) | You are deploying, or a deploy broke |

**Most common task:** updating FABINS as the work progresses →
[docs/CONTENT_GUIDE.md](docs/CONTENT_GUIDE.md#updating-fabins).

---

## Content accuracy

This portfolio describes real employment and unpublished research, so the data files carry
rules about what may be claimed:

- **FABINS is ongoing.** Its entry carries a `scopeNote` stating what the current build does
  *not* do. It is never described as deployed, complete or production-ready.
- **No invented metrics.** The only figures on the site are AutoTestGenX's 84.0% scenario
  coverage and 90% error detection, both from the CV.
- **Collaborative work is attributed.** FABINS, the Saturn platform and Bengali-Loop each
  carry a `contribution` block scoping personal work.
- **Private repositories are not linked.** The FABINS inspection service and its training
  framework are private; only the public product site is linked.

`public/Mohammad_Ninad_Mahmud_Nobo_CV.tex` is the source of truth. When it changes, update
`lib/data/`.

---

## Licence

Source code is available for reference. Content, CV and imagery are © Mohammad Ninad Mahmud
Nobo — please do not reuse the personal content or present this site as your own.
