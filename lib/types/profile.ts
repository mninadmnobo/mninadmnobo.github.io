import type { TechGroup } from './work'

export interface ProfileLink {
  label: string
  /** Shown under the label on contact cards, e.g. a handle or an ID. */
  handle: string
  href: string
  /** Key into the icon map in `components/sections/contact.tsx`. */
  icon: string
}

export interface ProjectLinkGroup {
  project: string
  website?: string
  codebase?: string
  email?: string
  linkedin?: string
}

export interface ExperienceSubsegment {
  title: string
  period?: string
  technologies?: string[]
  points: string[]
  website?: string
  codebase?: string
  email?: string
  linkedin?: string
}

export interface ExperienceSegment {
  title: string
  period?: string
  technologies?: string[]
  points?: string[]
  subsegments?: ExperienceSubsegment[]
  projectLinks?: ProjectLinkGroup[]
  links?: { label: string; href: string }[]
}

export interface ExperienceItem {
  id: string
  role: string
  organization: string
  /** Department or team, e.g. "Department of Research & Development". */
  unit?: string
  location: string
  period: string
  /** True while the role is current — drives the "Present" pulse indicator. */
  current: boolean
  summary?: string
  responsibilities?: string[]
  segments?: ExperienceSegment[]
  /** `WorkItem.id`s produced in this role, used to cross-link the sections. */
  relatedWorkIds?: string[]
  links?: { label: string; href: string }[]
}

export interface EducationItem {
  id: string
  institution: string
  qualification: string
  period: string
  /** e.g. "CGPA 3.60 / 4.00". Omitted where no grade applies. */
  grade?: string
  thesis?: string
  coursework?: string[]
  /** Exam results and scholarships for pre-university entries. */
  achievements?: string[]
}

export interface SkillGroup extends TechGroup {
  /** Key into the icon map in `components/sections/skills.tsx`. */
  icon: string
}
