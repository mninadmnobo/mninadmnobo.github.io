import type { ProfileLink } from '@/lib/types/profile'

/**
 * Identity and contact details.
 *
 * Source of truth: `public/Mohammad_Ninad_Mahmud_Nobo_CV.tex`. When the CV
 * changes, change this file — nothing else on the site hardcodes these values.
 */
export const profile = {
  name: 'Mohammad Ninad Mahmud Nobo',
  shortName: 'Ninad Nobo',

  /** Rendered as a separated list in the hero. Order is the positioning order. */
  titles: ['AI/ML Engineer', 'Software Engineer', 'Researcher'],

  /** One line under the titles. Reads as a role description, not a slogan. */
  tagline:
    'Building and evaluating AI systems — from LLM and medical AI research to computer vision on the factory floor.',

  /** Two sentences for the hero body. Derived from the CV summary. */
  intro:
    'CSE graduate from BUET with research & industry experience across Machine Learning, Artificial Intelligence, software engineering, computer vision, computer networks, and computer security.',

  location: 'Dhaka, Bangladesh',
  timezone: 'UTC+6 (BST)',
  university: 'BUET CSE',

  currentRole: {
    title: 'AI Software Engineer',
    organization: 'Saturn Textiles Limited — R&D',
  },

  /** Focus chips in the hero. Each maps to work actually shown on the page. */
  focusAreas: ['Computer Vision', 'LLM Systems', 'Medical AI', 'Full-Stack Engineering'],

  emails: {
    professional: 'mninadmnobo@gmail.com',
    academic: '2005080@ugrad.cse.buet.ac.bd',
    personal: 'noboninad@gmail.com',
  },

  phones: ['+880 193 944 4451', '+880 184 928 5757'],

  siteUrl: 'https://mninadmnobo.github.io',

  /** Primary destinations. Surfaced in the hero, the nav and the footer. */
  primary: {
    github: 'https://github.com/mninadmnobo',
    linkedin: 'https://www.linkedin.com/in/mninadmnobo',
    scholar: 'https://scholar.google.com/citations?user=y5-A2oAAAAAJ&hl=en&oi=ao',
    cv: '/cv',
    cvPdf: '/Mohammad_Ninad_Mahmud_Nobo_CV.pdf',
  },
} as const

export const professionalProfiles: ProfileLink[] = [
  {
    label: 'GitHub',
    handle: 'mninadmnobo',
    href: 'https://github.com/mninadmnobo',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    handle: 'mninadmnobo',
    href: 'https://www.linkedin.com/in/mninadmnobo',
    icon: 'linkedin',
  },
]

export const researchProfiles: ProfileLink[] = [
  {
    label: 'Google Scholar',
    handle: 'M Ninad M Nobo',
    href: 'https://scholar.google.com/citations?user=y5-A2oAAAAAJ&hl=en&oi=ao',
    icon: 'scholar',
  },
  {
    label: 'ORCID',
    handle: '0009-0006-2781-6693',
    href: 'https://orcid.org/0009-0006-2781-6693',
    icon: 'orcid',
  },
  {
    label: 'ResearchGate',
    handle: 'Mohammad Ninad Mahmud Nobo',
    href: 'https://www.researchgate.net/profile/Mohammad-Ninad-Mahmud-Nobo',
    icon: 'researchgate',
  },
]

export const programmingProfiles: ProfileLink[] = [
  {
    label: 'LeetCode',
    handle: 'mninadmnobo',
    href: 'https://leetcode.com/u/mninadmnobo',
    icon: 'leetcode',
  },
  {
    label: 'NeetCode',
    handle: 'mninadmnobo',
    href: 'https://neetcode.io/profile/mninadmnobo',
    icon: 'neetcode',
  },
  {
    label: 'Codeforces',
    handle: 'MNMNobo',
    href: 'https://codeforces.com/profile/MNMNobo',
    icon: 'codeforces',
  },
  {
    label: 'Kaggle',
    handle: 'mohammadninadmahmud',
    href: 'https://www.kaggle.com/mohammadninadmahmud',
    icon: 'kaggle',
  },
]

export const socialProfiles: ProfileLink[] = [
  {
    label: 'Facebook',
    handle: 'M Ninad M Nobo',
    href: 'https://facebook.com/mninadmnobo',
    icon: 'facebook',
  },
  {
    label: 'Instagram',
    handle: 'mninadmnobo',
    href: 'https://instagram.com/mninadmnobo',
    icon: 'instagram',
  },
  {
    label: 'X',
    handle: 'mninadmnobo',
    href: 'https://x.com/mninadmnobo',
    icon: 'x',
  },
]

export const spokenLanguages = [
  'Bangla (Native)',
  'English (Fluent)',
  'Hindi & Urdu (Conversational)',
  'Arabic (Reading)',
]
