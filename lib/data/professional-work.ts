import type { WorkItem } from '@/lib/types/work'

/**
 * Industry R&D work carried out as an employee of Saturn Textiles Limited.
 *
 * This is deliberately a separate array from `projects` — these entries are
 * professional output, not coursework, and the site never mixes the two.
 *
 * ── ACCURACY RULES FOR THIS FILE ───────────────────────────────────────────
 * 1. Both entries have collaborators. Every claim about personal work sits in
 *    `contribution` and is scoped to what the CV and the Saturn R&D repository
 *    attribute to this person specifically.
 * 2. FABINS is in progress. `scopeNote` states what the current codebase does
 *    NOT yet do, taken verbatim in substance from the FABINS repository README.
 *    Do not delete it while those items remain open, and do not describe the
 *    system as deployed, complete, or production-ready.
 * 3. No accuracy, precision or throughput figures appear here. The model is
 *    still being trained and no evaluated numbers have been published, so the
 *    entry describes capability and method only.
 *
 * The core FABINS inspection service and its training framework are private
 * repositories, so only the public product portfolio is linked.
 */
export const professionalWork: WorkItem[] = [
  {
    id: 'saturn-rnd-website',
    kind: 'professional',
    title: 'Saturn R&D Website',
    subtitle: 'Research & Development · Official Web Platform',
    categories: ['Full-Stack', 'Software Engineering'],
    year: '2026',
    status: 'completed',
    statusLabel: 'Completed',
    summary:
      'The official web platform for the Saturn Textiles R&D department — built with Next.js 16 and Spring Boot 3 REST API for verified industry partner outreach and R&D milestone showcases.',
    techSummary: ['Next.js', 'Spring Boot', 'PostgreSQL', 'TypeScript'],
    featured: true,

    architectureFlow: ['Next.js App Router', 'Spring Boot REST API', 'PostgreSQL + Flyway'],

    details: [
      {
        heading: 'Overview',
        body: 'Saturn Textiles Limited runs a dedicated R&D department working on industrial AI and smart textile automation. This is its official public platform: covering active R&D projects, team profiles, and double opt-in partner inquiries.',
      },
    ],

    contribution: {
      heading: 'My Contribution',
      body: 'Full-stack engineering of the R&D department web platform.',
      points: [
        'Frontend architecture using Next.js App Router, React, and Tailwind CSS.',
        'Spring Boot REST API design with double opt-in verification pipeline.',
        'CI/CD deployment automation on Vercel and Render with production PostgreSQL.',
      ],
    },

    tech: [
      { name: 'Frontend', items: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4'] },
      { name: 'Backend', items: ['Spring Boot 3', 'Java 21', 'Spring Security', 'PostgreSQL'] },
    ],

    links: [
      { label: 'Saturn R&D Site', href: 'https://saturn-rnd-portfolio.vercel.app/', kind: 'site' },
      { label: 'Code (GitHub)', href: 'https://github.com/mninadmnobo/saturn_rnd_portfolio', kind: 'code' },
    ],
  },

  {
    id: 'fabins-product',
    kind: 'professional',
    title: 'FABINS',
    subtitle: 'Fabric Inspection Automation · Industrial AI',
    categories: ['AI/ML', 'Industrial AI', 'Computer Vision'],
    year: '2026 - Present',
    status: 'ongoing',
    statusLabel: 'Active',
    summary:
      'An optical inspection system retrofitting fabric inspection frames — detecting sub-millimetre defects on moving cloth with a custom-trained deep learning detector and generating ASTM D5430 Four-Point quality reports.',
    techSummary: ['PyTorch', 'YOLO', 'OpenCV', 'Python', 'CUDA'],
    featured: true,

    architectureFlow: [
      'Line-Scan Capture',
      'Encoder Acquisition',
      'Tiled Detection',
      'Four-Point Grading',
      'Defect Dashboard',
    ],

    details: [
      {
        heading: 'Overview',
        body: 'FABINS (Fabric Inspection Automation) is the R&D department\'s machine-vision system for textile quality control. A line-scan camera watches a fabric roll as it unwinds, a detection model finds defects in real time on a local GPU, each defect is measured in millimetres, and the run is scored automatically under the Four-Point rules.',
      },
      {
        heading: 'Problem & Retrofit Solution',
        body: 'Manual inspection degrades over a shift due to attention limits. Instead of importing expensive complete inspection frames, FABINS mounts directly onto existing factory frames, cutting capital costs while tuning locally for mill fabrics.',
      },
    ],

    contribution: {
      heading: 'My Contribution',
      body: 'Machine learning and computer vision engineering lead for defect detection and real-time processing.',
      points: [
        'Developing and training deep learning computer vision models for defect detection.',
        'Building dataset ingestion, tiling (1280x1280), and pre-training audit tooling for high-resolution line-scan imagery.',
        'Architecting real-time CUDA GPU inference pipelines and Union-Find defect merging.',
      ],
    },

    tech: [
      { name: 'Computer Vision & ML', items: ['PyTorch', 'Ultralytics YOLO', 'OpenCV', 'NumPy'] },
      { name: 'Backend & CUDA', items: ['Python 3.11', 'Flask', 'CUDA', 'pytest'] },
    ],

    links: [],
  },

  {
    id: 'fabins-portfolio',
    kind: 'professional',
    title: 'FABINS Product Portfolio',
    subtitle: 'Interactive Product & Mill Assessment Portal',
    categories: ['Full-Stack', 'Product Showcase'],
    year: '2026',
    status: 'completed',
    statusLabel: 'Completed',
    summary:
      'An interactive multi-section product showcase portal collecting mill deployment parameters (frame counts, fabric speed, roll width, ERP integration) with instant R&D team notifications.',
    techSummary: ['Next.js', 'Spring Boot', 'TypeScript', 'Tailwind CSS'],
    featured: true,

    architectureFlow: ['Assessment Portal UI', 'Deployment Parameter API', 'One-Click Admin Queue'],

    details: [
      {
        heading: 'Overview',
        body: 'A dedicated product showcase portal for FABINS featuring an assessment workflow that collects mill-specific parameters and forwards structured deployment requests directly to the R&D team queue.',
      },
    ],

    contribution: {
      heading: 'My Contribution',
      body: 'Full-stack design and deployment of the FABINS product portfolio portal.',
      points: [
        'Built interactive assessment workflow and UI components.',
        'Engineered Spring Boot REST API for deployment parameter handling.',
        'Configured domain routing, deployment, and automated notification pipeline.',
      ],
    },

    tech: [
      { name: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'] },
      { name: 'Backend', items: ['Spring Boot', 'Java 21', 'REST API'] },
    ],

    links: [
      { label: 'FABINS Portfolio', href: 'https://fabins-portfolio.vercel.app/', kind: 'site' },
      { label: 'Code (GitHub)', href: 'https://github.com/mninadmnobo/fabins_portfolio', kind: 'code' },
    ],
  },
]
