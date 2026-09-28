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
    segments: [
      {
        title: 'Web Development',
        period: 'July 2026',
        subsegments: [
          {
            title: 'FABINS Automation',
            technologies: ['Next.js', 'React', 'Spring Boot', 'REST APIs', 'Brevo', 'GitHub Actions'],
            points: [
              'Developed and deployed the FABINS interactive product portfolio and mill assessment portal with responsive interfaces.',
              'Built Spring Boot REST APIs for factory parameter processing, evaluation workflows, and email notifications.',
            ],
            website: 'https://fabins.nevolyn.com',
            codebase: 'https://github.com/NEVOLYN-Technology/fabins_automation_website',
            email: 'info@nevolyn.com',
            linkedin: 'https://www.linkedin.com/company/fabinsautomation/',
          },
          {
            title: 'NEVOLYN Technology',
            technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'GitHub Actions'],
            points: [
              'Designed and engineered the official public engineering platform for NEVOLYN Technology to showcase intelligent systems and automation solutions.',
              'Implemented responsive UI architectures, structured SEO optimization, and automated CI/CD deployment pipelines.',
            ],
            website: 'https://nevolyn.com',
            codebase: 'https://github.com/NEVOLYN-Technology/nevolyn_official_website',
            email: 'info@nevolyn.com',
            linkedin: 'https://www.linkedin.com/company/nevolyn/',
          },
        ],
      },
      {
        title: 'ML & Computer Vision',
        period: 'July 2026 – Present',
        subsegments: [
          {
            title: 'FABINS — Fabric Inspection Automation',
            technologies: [
              'Python',
              'PyTorch',
              'OpenCV',
              'CUDA',
              'Computer Vision',
              'Deep Learning',
              'Industrial Automation',
            ],
            points: [
              'Developing computer vision and deep learning pipelines for fabric defect detection, classification, and quality inspection.',
              'Architecting real-time CUDA GPU inference pipelines and spatial defect merging for high-resolution line-scan camera feeds.',
              'Implementing automated defect scoring and quality evaluation workflows compliant with ASTM D5430 Four-Point standards.',
            ],
          },
        ],
      },
    ],
  },
]
