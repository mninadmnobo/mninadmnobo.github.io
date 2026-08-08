# Content Guide

Everything a visitor reads lives in `lib/data/`. No component contains a fact. To change what
the site says, edit a data file — you should never need to open a `.tsx` file in
`components/` to add or update work.

| I want to change… | Edit |
| :--- | :--- |
| Name, titles, tagline, emails, phones, social links | `lib/data/profile.ts` |
| A job | `lib/data/experience.ts` |
| FABINS or the Saturn R&D platform | `lib/data/professional-work.ts` |
| A paper, thesis or benchmark | `lib/data/research.ts` |
| An academic or personal project | `lib/data/projects.ts` |
| Skills | `lib/data/skills.ts` |
| Degrees, coursework, research interests | `lib/data/education.ts` |
| Page title / meta description | `app/layout.tsx` |

After any edit:

```bash
pnpm typecheck && pnpm lint && pnpm build
```

TypeScript catches a missing required field before the site renders it.

---

## Accuracy rules

This site describes real employment and unpublished research. Four rules are load-bearing —
each data file repeats the ones that apply to it.

1. **Do not state a metric that is not in the CV or the linked paper.** The only figures on
   the site are AutoTestGenX's 84.0% scenario coverage and 90% error detection.
2. **Ongoing work says so.** Use `status: 'ongoing'` and keep a `scopeNote` describing what
   the current build does *not* do. Never call in-progress work deployed, complete, shipped
   or production-ready.
3. **Attribute collaborative work.** Anything built with other people carries a
   `contribution` block scoping what was personally done.
4. **Do not link a private repository.** A visitor gets a 404. Link the public artefact
   instead — for FABINS that is the product site, not the inspection service.

---

## Updating FABINS

FABINS is active R&D and will change often. Its entry is `id: 'fabins'` in
[`lib/data/professional-work.ts`](../lib/data/professional-work.ts).

### As capability lands

Add to the relevant `details` section (`Technical Implementation`, `Model Training Pipeline`,
`Engineering Practices`) and **remove the matching line from `scopeNote`**. The scope note is
the honesty mechanism — it only works if it shrinks as the work grows.

```ts
scopeNote:
  'FABINS is active R&D, not a shipped product. The current codebase does not yet include ' +
  'automated retraining loops driven by operator feedback, physical hardware validation of ' +
  'the industrial camera integration, a production WSGI server, or a persistent job queue. ' +
  'Detection model evaluation is in progress and no accuracy figures are published here.',
```

### When evaluation produces numbers

Only then add a `Results` section, and only with figures you can point at:

```ts
{
  heading: 'Results',
  points: [
    'mAP@50 of 0.00 across four defect classes on the held-out validation split.',
  ],
},
```

Then drop the "no accuracy figures are published here" clause from `scopeNote`.

### When it is genuinely deployed

Change `status` to `'completed'`, set `statusLabel` (e.g. `'Deployed'`), and delete
`scopeNote` entirely. Do this only when it is running in a mill, not when the code is
finished. `status: 'ongoing'` is what drives the amber pulsing badge; nothing else needs to
change.

### Adding a link

```ts
links: [
  { label: 'FABINS Product Site', href: 'https://fabins-portfolio.vercel.app/', kind: 'site' },
  { label: 'Paper', href: 'https://…', kind: 'paper' },
],
```

`kind` is one of `code | site | paper | video | external` and picks both the icon and the
ordering. **The first link in the array is the one shown on the card** — put the most
valuable destination first.

---

## Adding a project

Append to the `projects` array in [`lib/data/projects.ts`](../lib/data/projects.ts). Order in
the array is display order; put stronger work first.

```ts
{
  id: 'unique-slug',              // stable — used as the React key
  kind: 'project',
  title: 'Project Name',
  subtitle: 'Category · What kind of thing it is',
  categories: ['AI/ML', 'Full-Stack'],   // must exist in projectFilters
  year: '2025',
  status: 'completed',
  statusLabel: 'Completed',
  summary: 'One to three sentences. This is all the card shows.',
  techSummary: ['Python', 'PyTorch'],    // first 4 render as chips, rest as "+n"
  featured: true,                        // shows before "View all projects"

  architectureFlow: ['Stage One', 'Stage Two'],   // optional pipeline diagram

  details: [
    { heading: 'Overview', body: 'Prose paragraph.' },
    { heading: 'Problem', body: 'What it addresses.' },
    { heading: 'Implementation', points: ['Bullet.', 'Bullet.'] },
  ],

  contribution: {                        // optional; include for team work
    heading: 'My Contribution',
    body: 'What you personally did.',
    points: ['Specific.', 'Specific.'],
  },

  tech: [                                // grouped, dialog only
    { name: 'Backend', items: ['Python', 'Flask'] },
  ],

  links: [
    { label: 'Repository', href: 'https://github.com/…', kind: 'code' },
  ],
}
```

A `DetailSection` takes `body` (prose), `points` (bullets), or both. Sections render in array
order, so the order you write is the order a reader gets.

### Adding a filter category

Add it to `projectFilters` at the bottom of the same file, then use it in `categories`. The
filter bar renders from that array — no component change.

```ts
export const projectFilters = ['All', 'AI/ML', 'Full-Stack', 'Systems', 'Security', 'Embedded'] as const
```

Keep the list short. Every category with only one project makes the bar longer without
helping anyone.

---

## Adding research

Append to [`lib/data/research.ts`](../lib/data/research.ts) with `kind: 'research'`. Same
shape as a project. Status options:

| `status` | `statusLabel` example | Badge |
| :--- | :--- | :--- |
| `ongoing` | `'Undergraduate Thesis'` | amber, pulsing dot |
| `under-review` | `'Under Review'` | violet |
| `published` | `'Preprint · arXiv 2602.14291'` | green |
| `completed` | `'Completed'` | neutral |

For a preprint, put the paper first in `links` so it is what the card surfaces:

```ts
links: [{ label: 'arXiv: 2602.14291', href: 'https://arxiv.org/abs/2602.14291', kind: 'paper' }],
```

---

## Adding a job

Append to [`lib/data/experience.ts`](../lib/data/experience.ts):

```ts
{
  id: 'unique-slug',
  role: 'Job Title',
  organization: 'Company Name',
  unit: 'Department',                  // optional
  location: 'City, Country',
  period: '2026 - Present',
  current: true,                       // drives the pulsing timeline dot
  summary: 'One paragraph on the role.',
  responsibilities: ['Bullet.', 'Bullet.'],
  relatedWorkIds: ['fabins', 'saturn-rnd'],   // ids from professional-work.ts
  links: [{ label: 'R&D Website', href: 'https://…' }],
}
```

`relatedWorkIds` renders chips that open the case-study dialog inline. An id that does not
match anything is dropped silently rather than rendering a dead chip — so a typo shows up as
a missing chip, not a broken one.

Entries render newest first; put the current role at the top of the array.

---

## Updating skills

[`lib/data/skills.ts`](../lib/data/skills.ts). Six groups, each with an `icon` key mapped in
`components/sections/skills.tsx` (`brain`, `code`, `server`, `database`, `cloud`,
`smartphone`).

Two standing rules: **no proficiency percentages** — a self-assigned number is not something
a reader can verify — and **nothing that is not evidenced** by the CV or by work linked on
the site.

---

## Changing the CV

1. Replace `public/Mohammad_Ninad_Mahmud_Nobo_CV.pdf` and `.tex` (keep the filenames — the
   `/cv` route and several links reference them).
2. Reconcile `lib/data/` against the new CV: profile, experience, research, projects,
   skills, education.
3. Rebuild.

---

## Where content is *not* in `lib/data/`

Three places hold prose deliberately, because it is page copy rather than a record:

| What | Where |
| :--- | :--- |
| About-section paragraphs and the four focus cards | `components/sections/about.tsx` |
| Section headings and lede text | The `SectionHeader` props in each `components/sections/*.tsx` |
| Page title, meta description, keywords | `app/layout.tsx` |
