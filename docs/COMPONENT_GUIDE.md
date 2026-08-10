# Component Guide

Four folders, by responsibility:

```
components/
├── ui/          Generic primitives. Know nothing about portfolio content.
├── work/        The WorkItem system: card, rail, dialog, context.
├── sections/    One file per homepage section. Data in, markup out.
└── layout/      Chrome: navigation, footer, back-to-top, document shell.
```

A component in `ui/` must not import from `lib/data`. If it needs a fact, take it as a prop.

---

## `ui/`

### `Dialog`

Accessible modal. `Dialog` + `DialogHeader` + `DialogBody` + `DialogFooter`.

```tsx
<Dialog open={open} onClose={close} labelledBy="my-title">
  <DialogHeader onClose={close}>
    <h2 id="my-title">Title</h2>
  </DialogHeader>
  <DialogBody>…</DialogBody>
  <DialogFooter>…</DialogFooter>
</Dialog>
```

`labelledBy` **must** match the id of the visible title.

Handles focus trap and restore, Escape, backdrop click, body scroll lock with scrollbar-width
compensation, and `inert` on background content. Full-bleed below `sm`, a contained panel
above it. `DialogBody` uses `overscroll-contain` so reaching the end does not scroll the page
behind.

Mark the element that should receive focus on open with `data-autofocus` — the close button
carries it by default.

### `Carousel`

```tsx
<Carousel label="Research work">
  <CarouselItem><Card /></CarouselItem>
</Carousel>
```

A flex row in an `overflow-x: auto` container with CSS scroll snapping. The browser provides
swipe, momentum and physics; JavaScript adds prev/next, arrow-key paging and the position
readout. `CarouselItem` is `85vw` on phones so a slice of the next card stays visible — that
peek is what signals the row is swipeable.

No autoplay, by design. Content that moves on its own is hostile to anyone still reading it.

### `Button` / `buttonStyles`

Roughly half the buttons on this site are anchors, so styling is exported as a class-string
helper rather than a polymorphic component:

```tsx
<Button variant="primary" size="md">Send</Button>
<Link href="/cv" className={buttonStyles({ variant: 'primary' })}>View CV</Link>
```

Variants `primary | secondary | ghost`; sizes `sm | md | icon | icon-lg`. `md` is 44px — the
minimum comfortable touch target.

### `Link`

Use for **every** anchor. Applies the base path to internal hrefs and adds
`target="_blank" rel="noopener noreferrer"` to external ones automatically. `mailto:` and
`tel:` are left in place. Carries `min-h-6` so a standalone link meets the 24px target
minimum.

### `Reveal`

Fades a block up on first entry into the viewport, then disconnects. One-shot.

```tsx
<Reveal delay={index * 60}>…</Reveal>
```

Keep total stagger under ~200ms. `as` accepts `div | section | li | article`.

### `SectionHeader`

Every section opens with this. Do not hand-roll a heading — the rhythm drifts.

```tsx
<SectionHeader eyebrow="Research" title="…" description="…" action={<Link …/>} />
```

### Badges

`Tag`, `TagList`, `KindBadge`, `StatusBadge`. `KindBadge` and `StatusBadge` read
`var(--kind-accent)` / `var(--status-fg)` from a `data-kind` / `data-status` ancestor, so they
never branch on the value themselves.

### `icons.tsx`

Brand marks lucide does not ship. All paint with `currentColor` — a dozen saturated logos in
one grid reads as a link farm. `PROFILE_ICONS` maps a `ProfileLink.icon` key to a component.

---

## `work/`

### `WorkCard`

The compact card, used for all three kinds. Shows the least a reader needs in order to decide
whether to open the case study.

The whole card is clickable via `handleCardClick` on the `<article>` container (which checks for internal anchor links before opening the detail modal). The "View Details" button provides an explicit button callout without an invisible overlay blocking text or falsely capturing focus across the card.

`flex-1` on the summary is what keeps every card in a rail the same height.

### `WorkRail`

Takes a **source key**, not an array:

```tsx
<WorkRail source="professional" label="Featured professional work" />
```

Passing items from a server component would serialise every case study into the HTML a second
time — the dataset is already in the client bundle. See
[ARCHITECTURE.md](ARCHITECTURE.md#why-the-rails-import-their-own-data).

### `WorkDetailDialog` and `WorkDetailProvider`

One dialog is mounted at the page root and fed by context. Cards call:

```tsx
const { open } = useWorkDetail()
open(item)
```

Body order: summary → pipeline → `details[]` in order → contribution → scope note → tech
stack → links. Each block renders only when its data exists.

`ContributionBlock` and `ScopeNote` are visually distinct on purpose. Contribution is boxed
and accented because on collaborative work it is the section a reader most needs to find.
Scope note is styled as a caveat because it states what in-progress work does *not* do.

### `RelatedWorkChips`

Resolves ids through `findWorkById` and opens the dialog inline. Unmatched ids are dropped
silently — a typo becomes a missing chip, not a broken one.

---

## `sections/`

One file per homepage section, rendered in order by `app/page.tsx`. Server components unless
they hold state (`projects` holds filter state; `contact-form` holds form state).

Each follows the same skeleton:

```tsx
export function Thing() {
  return (
    <section id="thing" className="section-spacing relative">
      <div className="container-page">
        <SectionHeader eyebrow="…" title="…" description="…" />
        {/* content */}
      </div>
    </section>
  )
}
```

The `id` must match its entry in `SECTIONS` in `components/layout/navigation.tsx`.

Alternating sections carry a `bg-gradient-to-b from-transparent via-secondary/25` overlay for
vertical rhythm — currently Experience, Research, Skills and Contact.

---

## `layout/`

### `Navigation`

Fixed header. Scroll spy driven by a rAF-throttled scroll listener with a 96px offset;
horizontal nav above `lg`, a sheet below it. The sheet locks body scroll and closes on
navigation or Escape.

It deliberately does **not** rewrite `window.location.hash` while scrolling — the previous
version did, which churned the URL and broke the back button.

`ThemeToggle` renders both icons and lets CSS pick, rather than tracking a `mounted` flag.
next-themes writes the `dark` class in a blocking inline script before first paint, so the
correct icon is already there with no hydration swap.

### `DocumentPage`

Shared shell for document pages like `/cv`. `PdfFrame` carries visible fallback text with a direct
link, because mobile browsers routinely refuse to render a PDF in an iframe.

---

## Conventions

- **No facts in components.** Content goes in `lib/data/`. Section headings and About prose
  are the documented exceptions.
- **No colour branching on `kind`.** Set `data-kind` and read `var(--kind-accent)`.
- **No raw colours.** Use tokens.
- **No `focus:outline-none`.** The global `:focus-visible` rule is the site's focus treatment.
- **No looping hover animation.** See the note in
  [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md#surfaces).
- **Comment the why, not the what.** `// set state` is noise; "this rAF delay lets the open
  animation start before focus lands, avoiding a scroll jump" is worth reading.
