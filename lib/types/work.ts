/**
 * The single content model behind every card and detail dialog on the site.
 *
 * Professional work, research and academic projects are deliberately modelled by
 * one type rather than three. They differ in framing, not in shape: all of them
 * have a problem, an approach, a stack and a set of links. Keeping one type means
 * `WorkCard`, `WorkCarousel` and `WorkDetailDialog` are written once and the
 * distinction between the three lives where it belongs — in `kind`, which drives
 * the label, accent and layout treatment.
 *
 * Every narrative field is optional. A section is rendered only when its field is
 * present, so an entry carries exactly as much detail as its sources support and
 * no placeholder copy is ever shown.
 */

/**
 * Which part of the professional story an entry belongs to.
 *
 * This drives the visual treatment: `professional` reads as employment, `research`
 * as scholarship, `project` as engineering work. See `WORK_KIND_META` in
 * `lib/data/work-kinds.ts` for the labels and accents each one maps to.
 */
export type WorkKind = 'professional' | 'research' | 'project'

/** Lifecycle state. Drives the badge tone in `StatusBadge`. */
export type WorkStatus = 'ongoing' | 'under-review' | 'published' | 'completed'

/**
 * Link type, used to pick an icon and to sort links into a sensible order.
 * `site` covers live deployments; `paper` covers arXiv and other preprints.
 */
export type ResourceLinkKind = 'code' | 'site' | 'paper' | 'video' | 'external'

export interface ResourceLink {
  label: string
  href: string
  kind: ResourceLinkKind
}

/** A named cluster of technologies, e.g. "Computer Vision" → PyTorch, YOLO. */
export interface TechGroup {
  name: string
  items: string[]
}

/** A labelled block of prose or bullets shown in the detail dialog. */
export interface DetailSection {
  heading: string
  body?: string
  points?: string[]
}

export interface WorkItem {
  /** Stable slug. Used as the React key and as the dialog's `aria-labelledby` seed. */
  id: string

  kind: WorkKind

  title: string

  /** Domain line under the title, e.g. "Automated Fabric Inspection · Industrial AI". */
  subtitle: string

  /**
   * Filter tags. The projects filter builds its options from these, so a value
   * used here that no other entry shares will create a filter matching one card.
   */
  categories: string[]

  /** Display string, e.g. "2026 - Present". Not parsed — ordering is array order. */
  year: string

  status: WorkStatus

  /**
   * Status wording shown to visitors, e.g. "Ongoing R&D". Kept separate from
   * `status` so the tone (a design decision) and the wording (a factual one)
   * can change independently.
   */
  statusLabel: string

  /** One to three sentences. This is all the card shows — keep it tight. */
  summary: string

  /** Up to four chips on the card. A short subset of `tech`, not the whole stack. */
  techSummary: string[]

  /** Full grouped stack, shown only in the dialog. */
  tech: TechGroup[]

  links: ResourceLink[]

  /** Narrative sections, rendered in array order in the dialog. */
  details: DetailSection[]

  /**
   * What this person did, as distinct from what the project is. Required for
   * anything with collaborators so a reader is never left to assume sole
   * authorship. Rendered with its own heading and accent in the dialog.
   */
  contribution?: DetailSection

  /**
   * Pipeline stages rendered as an arrow-separated flow. Only set this where the
   * source material actually describes a staged pipeline.
   */
  architectureFlow?: string[]

  /** Promotes the entry into the homepage's pre-filter selection. */
  featured?: boolean

  /**
   * Shown verbatim under a "Current scope" heading, styled as a caveat.
   * Exists so in-progress work can state its limits rather than overclaim.
   */
  scopeNote?: string
}