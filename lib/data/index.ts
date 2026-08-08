/**
 * Single import surface for every piece of site content.
 *
 * Sections import from here rather than reaching into individual data modules,
 * so a file can be split or renamed without touching component code.
 */
export { profile, professionalProfiles, researchProfiles, programmingProfiles, socialProfiles, spokenLanguages } from './profile'
export { experience } from './experience'
export { professionalWork } from './professional-work'
export { research } from './research'
export { projects, projectFilters } from './projects'
export { skillGroups } from './skills'
export { education, researchInterests } from './education'
export { WORK_KIND_META, WORK_STATUS_TONE } from './work-kinds'

import { professionalWork } from './professional-work'
import { research } from './research'
import { projects } from './projects'
import type { WorkItem } from '@/lib/types/work'

/** Every work item on the site, used to resolve an id coming from a URL hash. */
export const allWork: WorkItem[] = [...professionalWork, ...research, ...projects]

export function findWorkById(id: string): WorkItem | undefined {
  return allWork.find((item) => item.id === id)
}
