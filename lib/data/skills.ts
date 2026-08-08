import type { SkillGroup } from '@/lib/types/profile'

/**
 * Technical skills grouped into 6 balanced categories.
 * Android (Kotlin) merged into Backend, Mobile & Web along with Next.js and Angular.
 */
export const skillGroups: SkillGroup[] = [
  // ── Row 1 ──
  {
    name: 'Programming Languages',
    icon: 'code',
    items: ['C', 'C++', 'Python', 'Java', 'Kotlin', 'JavaScript', 'SQL'],
  },
  {
    name: 'Databases & Cloud',
    icon: 'database',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'Docker', 'Linux', 'Git'],
  },
  {
    name: 'Backend, Mobile & Web',
    icon: 'server',
    items: [
      'Spring Boot',
      'Spring AI',
      'Next.js',
      'React',
      'Angular',
      'Node.js',
      'Android (Kotlin)',
    ],
  },
  // ── Row 2 ──
  {
    name: 'AI & Machine Learning',
    icon: 'brain',
    items: [
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'Hugging Face',
      'OpenAI API',
      'LangChain',
      'LLM Apps',
    ],
  },
  {
    name: 'Testing & CI/CD',
    icon: 'wrench',
    items: [
      'Playwright',
      'Selenium',
      'REST APIs',
      'Express.js',
      'Docker Compose',
      'GitHub Actions',
      'CI/CD',
    ],
  },
  {
    name: 'Data Science & BI Tools',
    icon: 'bar-chart',
    items: ['Pandas', 'Jupyter', 'MS Office 365', 'Excel', 'Google Sheets', 'Vercel'],
  },
]
