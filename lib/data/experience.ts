import type { ExperienceItem } from '@/lib/types/profile'

/**
 * Employment history.
 *
 * Kept separate from `professionalWork` on purpose: this array answers "where
 * has he worked", the other answers "what did he build there". `relatedWorkIds`
 * is the join between them and is validated at render time — an unknown id is
 * skipped rather than rendering a dead chip.
 */
export const experience: ExperienceItem[] = [
  {
    id: 'saturn-textiles',
    role: 'AI Software Engineer',
    organization: 'Saturn Textiles Limited',
    unit: 'Department of Research and Development (R&D)',
    location: 'Dhaka, Bangladesh',
    period: 'July 2026 – Present',
    current: true,
    summary:
      'Engineered real-time computer vision models for automated fabric inspection (FABINS) and built Saturn R&D\'s full-stack web platforms.',
    responsibilities: [
      'Developing and training computer vision and deep learning models for automated fabric inspection through FABINS.',
      'Developed and deployed Saturn R&D\'s full-stack website and FABINS product portfolio.',
    ],
    relatedWorkIds: ['saturn-rnd-website', 'fabins-product', 'fabins-portfolio'],
    links: [
      { label: 'FABINS Portfolio', href: 'https://fabins-portfolio.vercel.app/' },
      { label: 'Saturn R&D Portfolio', href: 'https://saturn-rnd-portfolio.vercel.app/' },
    ],
  },
]
