import type { EducationItem } from '@/lib/types/profile'

/** Highest qualification first. Values come from the CV. */
export const education: EducationItem[] = [
  {
    id: 'buet',
    institution: 'Bangladesh University of Engineering and Technology (BUET)',
    qualification: 'B.Sc. in Computer Science and Engineering',
    period: '2022 - 2026',
    grade: 'CGPA 3.60 / 4.00',
    thesis: 'AutoTestGenX: Multi-Agent LLM Framework for End-to-End Web Testing',
    coursework: [
      'Data Structures and Algorithms',
      'Algorithm Engineering',
      'Database Systems',
      'Operating Systems',
      'Computer Architecture',
      'Computer Networks',
      'Compiler Design',
      'Artificial Intelligence',
      'Machine Learning',
      'Computer Graphics',
    ],
  },
  {
    id: 'rajuk',
    institution: 'Rajuk Uttara Model College',
    qualification: 'Secondary and Higher Secondary',
    period: '2013 - 2021',
    achievements: [
      'HSC (2020): GPA 5.00 — General Grade Scholarship',
      'SSC (2018): GPA 5.00',
      'JSC (2015): GPA 5.00 — Talentpool Scholarship',
    ],
  },
  {
    id: 'uttara-high',
    institution: 'Uttara High School and College',
    qualification: 'Primary',
    period: '2008 - 2012',
    achievements: ['PSC (2012): GPA 5.00'],
  },
]

/** Shown as chips alongside education. Taken from the CV's research interests. */
export const researchInterests = [
  'Large Language Model Systems',
  'Medical AI',
  'AI-Assisted Software Engineering',
  'Applied Machine Learning',
]
