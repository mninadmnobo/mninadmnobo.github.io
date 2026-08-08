import type { WorkItem } from '@/lib/types/work'

/**
 * Academic and personal engineering projects.
 *
 * Ordered by strength, not by date — `featured` entries are what the homepage
 * shows before "View all projects" is pressed, and older work stays reachable
 * rather than being deleted. Every `categories` value here feeds the filter
 * control, so adding a new one adds a new filter chip.
 *
 * Repository URLs are the ones listed in the CV; two earlier links on this site
 * pointed at repositories that do not exist and returned 404.
 */
export const projects: WorkItem[] = [
  {
    id: 'mindtrace',
    kind: 'project',
    title: 'MindTrace',
    subtitle: 'AI-Powered Dementia Care Platform',
    categories: ['AI/ML', 'Full-Stack'],
    year: '2025',
    status: 'completed',
    statusLabel: 'Completed',
    summary:
      'An Android and Spring Boot platform for dementia care, pairing AI-assisted caregiver workflows with an interface designed around the cognitive limits of its users.',
    techSummary: ['Kotlin', 'Spring Boot', 'Spring AI', 'PostgreSQL'],
    featured: true,

    architectureFlow: ['Android Client', 'Spring Boot API', 'Spring AI Workflows', 'PostgreSQL + Redis + Firebase'],

    details: [
      {
        heading: 'Overview',
        body: 'MindTrace supports the people caring for someone with dementia. An Android client handles the caregiver–patient interaction, a Spring Boot backend orchestrates the AI-assisted workflows behind it, and real-time updates keep everyone involved in a case looking at the same picture.',
      },
      {
        heading: 'Problem',
        body: 'Dementia care is coordinated across family members, carers and clinicians using tools that were never designed for it. Information arrives late and fragmented, and the person who needs it most is often the least able to go looking for it.',
      },
      {
        heading: 'Solution',
        points: [
          'An Android client built around the caregiver–patient relationship rather than a generic record view.',
          'A Spring Boot API orchestrating AI-assisted workflows through Spring AI.',
          'PostgreSQL for durable records, Redis for hot state, and Firebase for real-time push to every device on a case.',
        ],
      },
      {
        heading: 'Accessibility',
        body: 'The interface was designed for cognitively impaired users first: reduced choice at each step, large and unambiguous targets, and a deliberately shallow navigation depth. Lowering cognitive load was a functional requirement, not a polish pass.',
      },
      {
        heading: 'Technical Implementation',
        points: [
          'Kotlin Android client with an accessibility-first interaction model.',
          'Spring Boot service layer with Spring AI handling the model-backed workflows.',
          'Containerised with Docker and deployed on Azure.',
        ],
      },
    ],

    tech: [
      { name: 'Mobile', items: ['Kotlin', 'Android', 'Android Studio'] },
      { name: 'Backend', items: ['Spring Boot', 'Spring AI', 'REST APIs'] },
      { name: 'Data', items: ['PostgreSQL', 'Redis', 'Firebase'] },
      { name: 'Infrastructure', items: ['Docker', 'Azure'] },
    ],

    links: [
      { label: 'Code (GitHub)', href: 'https://github.com/mninadmnobo/MindTrace', kind: 'code' },
      { label: 'Feature Demo', href: 'https://www.youtube.com/watch?v=BpRmKZYAOhM', kind: 'video' },
      {
        label: 'Infrastructure Demo',
        href: 'https://www.youtube.com/watch?v=i0GG_g0eZck',
        kind: 'video',
      },
    ],
  },

  {
    id: 'gemma-vetcare',
    kind: 'project',
    title: 'Gemma VetCare',
    subtitle: 'AI-Assisted Veterinary Support',
    categories: ['AI/ML', 'Full-Stack'],
    year: '2025',
    status: 'completed',
    statusLabel: 'Completed',
    summary:
      'An Android application delivering veterinary diagnosis and treatment guidance to livestock farmers, with an API layer built for the intermittent connectivity of rural deployment.',
    techSummary: ['Kotlin', 'Spring Boot', 'Spring AI', 'MongoDB'],
    featured: true,

    architectureFlow: ['Android Client', 'Spring AI Inference', 'MongoDB'],

    details: [
      {
        heading: 'Overview',
        body: 'Gemma VetCare gives livestock farmers AI-assisted veterinary guidance on their phone — real-time diagnosis and treatment recommendations for animals they would otherwise be managing without professional input.',
      },
      {
        heading: 'Problem',
        body: 'Rural livestock care runs into two constraints at once: there are too few veterinarians to reach the animals that need them, and the connectivity in the places those animals are is unreliable. A system that assumes either a vet or a stable connection is not usable in the field.',
      },
      {
        heading: 'Solution',
        points: [
          'An Android client delivering diagnosis and treatment guidance directly to the farmer.',
          'Spring AI inference endpoints behind a Spring Boot service.',
          'REST APIs designed for low-connectivity conditions, with request handling tuned for intermittent links rather than assuming a stable one.',
        ],
      },
      {
        heading: 'Technical Implementation',
        points: [
          'Kotlin Android application built in Android Studio.',
          'Spring Boot backend with Spring AI for the model-backed recommendation flow.',
          'MongoDB for flexible case and species records.',
        ],
      },
    ],

    tech: [
      { name: 'Mobile', items: ['Kotlin', 'Android', 'Android Studio'] },
      { name: 'Backend', items: ['Spring Boot', 'Spring AI', 'REST APIs'] },
      { name: 'Data', items: ['MongoDB'] },
    ],

    links: [
      { label: 'Code (GitHub)', href: 'https://github.com/mninadmnobo/GemmaVetCare', kind: 'code' },
      { label: 'Feature Demo', href: 'https://www.youtube.com/watch?v=EoxyudCIVSo', kind: 'video' },
    ],
  },

  {
    id: 'tcp-window-scaling',
    kind: 'project',
    title: 'TCP Window Scaling Attack',
    subtitle: 'Network Security · Attack & Defense Lab',
    categories: ['Security', 'Systems'],
    year: '2025',
    status: 'completed',
    statusLabel: 'Completed',
    summary:
      'A virtualized man-in-the-middle lab demonstrating ARP poisoning and TCP window scaling manipulation between client and server VMs — with the defense implemented and validated alongside the attack.',
    techSummary: ['Python', 'TCP/IP', 'Wireshark', 'Linux'],
    featured: true,

    architectureFlow: ['ARP Poisoning', 'Window Scaling Manipulation', 'Packet Analysis', 'Defense Validation'],

    details: [
      {
        heading: 'Overview',
        body: 'A hands-on network security exercise: a virtualized environment in which a machine-in-the-middle intercepts traffic between a client and a server VM and manipulates TCP window scaling, with the effect observed at packet level.',
      },
      {
        heading: 'Problem',
        body: 'Protocol-level weaknesses are difficult to reason about from a specification. TCP window scaling is negotiated once during the handshake, which makes it a target — but seeing why requires watching the actual packets rather than reading about them.',
      },
      {
        heading: 'Approach',
        points: [
          'Built a virtualized lab with separate client, server and attacker machines.',
          'Used ARP poisoning to place the attacker on the path between client and server.',
          'Implemented attack clients that manipulate the window scaling negotiation, and defense clients that detect and resist it.',
          'Analysed the resulting TCP behaviour with Wireshark and packet captures to confirm both the attack and the mitigation.',
        ],
      },
      {
        heading: 'Outcome',
        body: 'Both sides were demonstrated end to end — the attack reproduced under controlled conditions in an isolated lab, and the defense implemented and validated against it.',
      },
    ],

    tech: [
      { name: 'Networking', items: ['TCP/IP', 'ARP', 'Packet Analysis'] },
      { name: 'Tooling', items: ['Python', 'Wireshark', 'tcpdump', 'Linux'] },
    ],

    links: [
      {
        label: 'Code (GitHub)',
        href: 'https://github.com/mninadmnobo/TCP-Window_Scaling_Attack',
        kind: 'code',
      },
    ],
  },

  {
    id: 'compiler-construction',
    kind: 'project',
    title: 'Compiler Construction',
    subtitle: 'Systems · Full Compiler Pipeline',
    categories: ['Systems'],
    year: '2024',
    status: 'completed',
    statusLabel: 'Completed',
    summary:
      'A complete compiler for a C-like language — lexer through parser, semantic analysis and symbol table management, to optimized 8086 assembly output.',
    techSummary: ['C++17', 'Flex', 'Bison', '8086'],
    featured: true,

    architectureFlow: ['Lexical Analysis', 'Parsing', 'Semantic Analysis', 'Code Generation', 'Optimization'],

    details: [
      {
        heading: 'Overview',
        body: 'A full compiler pipeline for a C-like language, built stage by stage: tokenization with Flex, grammar and parse tree construction with Bison, semantic analysis over a scoped symbol table, and emission of optimized 8086 assembly.',
      },
      {
        heading: 'Problem',
        body: 'Every stage of a compiler depends on contracts established by the one before it. A symbol table decision made during semantic analysis constrains what code generation can emit — which is exactly why the pipeline has to be built whole rather than in isolated pieces.',
      },
      {
        heading: 'Implementation',
        points: [
          'Lexical analyser built with Flex, producing the token stream for the grammar.',
          'Parser built with Bison, covering the language grammar and building the parse structures downstream stages consume.',
          'Semantic analysis with scoped symbol table management and type checking.',
          'Intermediate representation and 8086 assembly generation, followed by a basic optimization pass over the emitted code.',
        ],
      },
    ],

    tech: [
      { name: 'Language & Tooling', items: ['C++17', 'Flex', 'Bison/Yacc'] },
      { name: 'Target', items: ['8086 Assembly', 'Code Generation', 'Linux'] },
    ],

    links: [
      { label: 'Code (GitHub)', href: 'https://github.com/mninadmnobo/CompilerSessional', kind: 'code' },
    ],
  },

  {
    id: 'smart-gardening',
    kind: 'project',
    title: 'Smart Gardening Automation',
    subtitle: 'Embedded Systems · Sensor-Driven Automation',
    categories: ['Embedded', 'Systems'],
    year: '2024',
    status: 'completed',
    statusLabel: 'Completed',
    summary:
      'An embedded automation system that closes the loop between environmental sensing and physical actuation — watering, fertilizer cycles and shade control, with wireless remote monitoring.',
    techSummary: ['Arduino', 'Embedded C++', 'Sensors', 'Bluetooth'],
    featured: true,

    architectureFlow: ['Environmental Sensing', 'Control Logic', 'Actuation', 'Wireless Monitoring'],

    details: [
      {
        heading: 'Overview',
        body: 'A microcontroller-based gardening system that reads its environment and acts on it without supervision — replacing a manual routine with a sensing-and-actuation loop, monitored remotely over a wireless link.',
      },
      {
        heading: 'Problem',
        body: 'Plant care that depends on someone remembering is inconsistent by construction, and fails entirely when the space is unattended.',
      },
      {
        heading: 'Implementation',
        points: [
          'Environmental sensing feeding a control loop on the microcontroller.',
          'Automated watering and fertilizer/pesticide cycles triggered from sensor thresholds.',
          'Smart shade control responding to measured light conditions.',
          'Bluetooth communication for remote monitoring and manual override.',
        ],
      },
    ],

    tech: [
      { name: 'Hardware', items: ['Arduino', 'Sensors', 'Actuators'] },
      { name: 'Firmware', items: ['Embedded C++', 'Control Logic'] },
      { name: 'Connectivity', items: ['Bluetooth Communication'] },
    ],

    links: [
      {
        label: 'Code (GitHub)',
        href: 'https://github.com/mninadmnobo/Smart-Gardenning-Automation',
        kind: 'code',
      },
      { label: 'Feature Demo', href: 'https://www.youtube.com/watch?v=m3LLqLAPCik', kind: 'video' },
    ],
  },

  {
    id: 'graphics-pipeline',
    kind: 'project',
    title: 'Computer Graphics Pipeline',
    subtitle: 'Systems · Rasterization & Ray Tracing',
    categories: ['Systems'],
    year: '2025',
    status: 'completed',
    statusLabel: 'Completed',
    summary:
      'A graphics pipeline implemented end to end — model and camera transformations, clipping, rasterization with Z-buffering, and a ray tracer for lighting and reflections.',
    techSummary: ['C++17', 'OpenGL', 'Rasterization', 'Ray Tracing'],

    architectureFlow: ['Transformations', 'Clipping', 'Rasterization', 'Z-Buffering', 'Ray Tracing'],

    details: [
      {
        heading: 'Overview',
        body: 'A from-scratch implementation of the rendering pipeline: the transformation and camera stages, clipping, rasterization with depth resolution via Z-buffering, and a ray tracer handling lighting and reflections, with interactive OpenGL demos on top.',
      },
      {
        heading: 'Implementation',
        points: [
          'Model, view and projection transformation stages with an interactive camera.',
          'Clipping and rasterization producing the framebuffer.',
          'Z-buffering for correct visibility resolution between overlapping geometry.',
          'Ray tracing for lighting and reflection effects.',
        ],
      },
    ],

    tech: [
      { name: 'Language', items: ['C++17'] },
      { name: 'Graphics', items: ['OpenGL', 'Rasterization', 'Z-Buffering', 'Ray Tracing'] },
    ],

    links: [
      {
        label: 'Code (GitHub)',
        href: 'https://github.com/mninadmnobo/Computer-Graphics-Pipeline',
        kind: 'code',
      },
    ],
  },

  {
    id: 'skill-hub',
    kind: 'project',
    title: 'SKILL HUB',
    subtitle: 'Full-Stack · Role-Based Platform',
    categories: ['Full-Stack'],
    year: '2023',
    status: 'completed',
    statusLabel: 'Completed',
    summary:
      'A coaching management platform with role-separated workflows over an Express REST API and a relational schema.',
    techSummary: ['Node.js', 'Express.js', 'SQL'],

    architectureFlow: ['Role-Based UI', 'Express REST API', 'Relational Database'],

    details: [
      {
        heading: 'Overview',
        body: 'A coaching management platform in which what a user can see and do is determined by their role, backed by a REST API over a relational schema.',
      },
      {
        heading: 'Implementation',
        points: [
          'Role-based access control separating the workflows of each user type.',
          'Express REST API handling the multi-user operations.',
          'Relational schema design behind the platform data.',
        ],
      },
    ],

    tech: [
      { name: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs'] },
      { name: 'Data', items: ['SQL'] },
    ],

    links: [{ label: 'Code (GitHub)', href: 'https://github.com/mninadmnobo/SKILL_HUB', kind: 'code' }],
  },

  {
    id: 'movie-database',
    kind: 'project',
    title: 'Movie Database',
    subtitle: 'Desktop Application · JavaFX',
    categories: ['Full-Stack'],
    year: '2022',
    status: 'completed',
    statusLabel: 'Completed',
    summary:
      'A JavaFX desktop application for managing a movie catalogue, with structured CRUD workflows over a persistent store.',
    techSummary: ['Java', 'JavaFX'],

    details: [
      {
        heading: 'Overview',
        body: 'An early desktop application built in JavaFX: a movie catalogue with full create, read, update and delete workflows and a persistence layer behind the UI.',
      },
      {
        heading: 'Implementation',
        points: [
          'JavaFX interface layer with separated data-management logic.',
          'CRUD workflows over a persistent store.',
        ],
      },
    ],

    tech: [{ name: 'Language & UI', items: ['Java', 'JavaFX'] }],

    links: [
      {
        label: 'Code (GitHub)',
        href: 'https://github.com/mninadmnobo/Movie-DataBase-Management-JavaFX',
        kind: 'code',
      },
    ],
  },
]

/** Filter options for the projects section, in the order they are rendered. */
export const projectFilters = ['All', 'AI/ML', 'Full-Stack', 'Systems', 'Security', 'Embedded'] as const
