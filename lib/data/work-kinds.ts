import type { WorkKind, WorkStatus } from '@/lib/types/work'

/**
 * Presentation metadata for each `WorkKind`.
 *
 * The three kinds must read as different classes of work at a glance — that is
 * the whole point of separating professional experience from research from
 * coursework. Keeping the label and accent here rather than in the card means
 * the distinction is applied identically everywhere and can be retuned once.
 *
 * `accent` is a CSS custom property name resolved in `globals.css`, not a
 * Tailwind class, so the palette can change without touching component markup.
 */
export const WORK_KIND_META: Record<
  WorkKind,
  { label: string; accent: string; plural: string }
> = {
  professional: {
    label: 'Industry R&D',
    plural: 'Professional Work',
    accent: 'kind-professional',
  },
  research: {
    label: 'Research',
    plural: 'Research',
    accent: 'kind-research',
  },
  project: {
    label: 'Project',
    plural: 'Projects',
    accent: 'kind-project',
  },
}

/**
 * Badge tone per lifecycle state.
 *
 * `ongoing` is amber rather than green on purpose: in-progress work should not
 * be styled as a shipped result.
 */
export const WORK_STATUS_TONE: Record<WorkStatus, string> = {
  ongoing: 'status-ongoing',
  'under-review': 'status-review',
  published: 'status-published',
  completed: 'status-complete',
}
