# Architecture

## Constraint

The site is served from GitHub Pages. There is no Node runtime at request time — no route
handlers, no server actions, no on-demand image optimisation, no secrets. Everything is
decided at build time and shipped as files. `next.config.mjs` sets `output: 'export'`, and
`images.unoptimized` follows from the same fact.

`basePath` is empty for the user site (`mninadmnobo.github.io`) and set to `/<repo>` by the
deploy workflow for any other repository, so the same build works from either location.
`components/ui/link.tsx` applies it, which is why no data file needs to know where the site
is mounted.

---

## Content and presentation are separate

The central decision. All facts live in `lib/data/`; components take data and render it.
Adding a project is a data edit.

```
lib/data/            lib/types/           components/
profile.ts           profile.ts           sections/    one file per homepage section
experience.ts        work.ts              work/        card, rail, dialog, context
professional-work.ts                      ui/          dialog, carousel, button, badges…
research.ts                               layout/      nav, footer, document shell
projects.ts
skills.ts
education.ts
index.ts  ← the only import surface sections use
```

Sections import from `@/lib/data`, never from an individual module, so a data file can be
split or renamed without touching component code.

---

## One model for three kinds of work

Professional work, research and projects are the same shape — `WorkItem` — discriminated by
`kind`. That is what lets a single card component and a single dialog component serve all
three, and it is why the three sections stay visually consistent without duplicated code.

```ts
interface WorkItem {
  id: string
  kind: 'professional' | 'research' | 'project'
  title: string
  subtitle: string
  categories: string[]
  year: string
  status: 'ongoing' | 'under-review' | 'published' | 'completed'
  statusLabel: string
  summary: string          // the card
  techSummary: string[]    // the card
  featured?: boolean

  architectureFlow?: string[]
  details: DetailSection[] // the dialog, in order
  contribution?: DetailSection
  scopeNote?: string       // what ongoing work does NOT do
  tech: TechGroup[]
  links: ResourceLink[]
}
```

Optional fields do the differentiating. Research has no `scopeNote`; a solo project has no
`contribution`; only some entries have an `architectureFlow`. The dialog renders a section
only when its data exists, so nothing shows an empty heading.

### Kind differentiation is CSS, not branching

A card sets `data-kind={item.kind}` on its root. `app/globals.css` maps that attribute to
`--kind-accent` / `--kind-accent-soft`, and descendants read `var(--kind-accent)`. No
component contains `if (kind === 'research')`. Adding a fourth kind is one CSS block and one
entry in `WORK_KIND_META`. `data-status` works the same way for lifecycle badges.

---

## Rendering strategy

Everything is prerendered to static HTML. Client components exist only where there is state:

| Client | Why |
| :--- | :--- |
| `navigation` | Scroll spy, mobile sheet, theme toggle |
| `projects` | Filter and expand state |
| `work-rail` | Wraps the client carousel |
| `carousel` | Scroll position, button enablement |
| `work-card`, `work-detail-*` | Dialog state |
| `reveal` | IntersectionObserver |
| `contact-form`, `latex-source` | Form and fetch state |

Hero, About, Experience, Featured Work, Research, Skills, Education and Contact are server
components.

### Why the rails import their own data

`FeaturedWork` and `Research` are server components that render `<WorkRail source="…">`
rather than mapping items into client cards themselves.

Passing a `WorkItem` from a server component to a client component serialises it into the RSC
flight payload embedded in the HTML. The whole dataset is already in the client bundle — the
projects filter and the experience cross-links both import it — so passing items down meant
shipping every case study twice. Handing the rail a source key instead cut the homepage from
40 KB to 32 KB gzipped, with no loss of prerendering: a client component still renders to
static HTML at build time.

---

## Dependencies

Eight runtime packages. Three deliberate omissions:

**No component library.** The dialog is ~180 lines in `components/ui/dialog.tsx`. It was
written rather than imported because the mobile presentation is not a scaled-down desktop
modal — it fills the viewport and reads as a page — which is a layout decision a generic
primitive fights. The accessibility contract it has to meet is well defined, and it is
verified by an automated suite (focus trap across 40 tabs, focus restore, `inert`, scroll
lock, Escape, backdrop).

**No carousel library.** `components/ui/carousel.tsx` is a flex row in an `overflow-x: auto`
container with `scroll-snap-type: x mandatory`. The browser supplies momentum, touch swipe,
trackpad gestures and per-platform physics, and the cards are laid out and readable before
any JavaScript runs. JavaScript adds only the prev/next buttons, arrow-key paging and the
position readout.

**No `class-variance-authority` / `@radix-ui/react-slot`.** Roughly half the buttons on the
site are anchors. A component that shapeshifts into an `<a>` needs a polymorphic slot;
exporting `buttonStyles()` as a class-string helper lets an anchor take the same styling with
no wrapper. Both packages were removed.

Also removed: `nodemailer` and `@types/nodemailer` (server-only, unusable in a static
export), `@formspree/react` and `pdfjs-dist` (unreferenced), and ~40 remote icon requests to
`skillicons.dev` per page load, replaced with bundled group icons.

---

## The dialog is mounted once

`WorkDetailProvider` wraps the homepage and holds whichever item is open. Cards call
`useWorkDetail().open(item)`.

One dialog fed by context, rather than one per card, means fifteen fewer focus traps and
scroll locks to keep in sync — and it lets any part of the page open any case study, which is
what makes the experience timeline's "Work from this role" chips work. Setting `item` to null
unmounts the subtree, which is what resets dialog scroll position between openings.

---

## Motion

`Reveal` fades a block up the first time it enters the viewport, then disconnects its
observer — one-shot, so scrolling back does not replay it.

Reduced motion is handled globally in `globals.css`, not per component, so a new animation
cannot be added without inheriting it. Durations collapse to `0.01ms` rather than being
removed: `.reveal` relies on `animation-fill-mode: both` to end at opacity 1, so deleting the
animation would leave content invisible.

The same `opacity: 0` start would hide the page from a client with JavaScript disabled, so
`app/layout.tsx` carries a `<noscript>` rule restoring `.reveal` to visible.

---

## Build pipeline

```
next build  →  out/  →  scripts/postbuild.mjs  →  upload-pages-artifact
```

`postbuild` does two things `next build` does not, both required by Pages:

1. Writes `.nojekyll`. Pages runs Jekyll over the tree by default, and Jekyll skips
   directories beginning with an underscore — without the marker the entire `_next/`
   directory is dropped and the site loads unstyled.
2. Renames `out/opengraph-image` to `og.png` and repoints the references. Next writes that
   file with no extension; Pages types responses by extension, so it would be served as
   `application/octet-stream` and rejected by every social crawler.

CI asserts both outputs exist before deploying.
