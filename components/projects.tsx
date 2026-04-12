
"use client"

import { useRef, useState } from "react"
import { ExternalLink, ChevronDown, ChevronUp, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "@/components/ui/link"

type ProjectLink = {
  label: string
  href: string
}

type Project = {
  name: string
  description: string
  problem: string
  solution: string
  impact: string
  proof: string[]
  architecture: string[]
  highlights: string[]
  tech: string[]
  featured: boolean
  year: string
  links: ProjectLink[]
}

function getYouTubeEmbedUrl(url: string) {
  try {
    const parsed = new URL(url)

    if (parsed.hostname.includes("youtu.be")) {
      const id = parsed.pathname.replace("/", "")
      return id ? `https://www.youtube.com/embed/${id}` : null
    }

    if (parsed.hostname.includes("youtube.com")) {
      const id = parsed.searchParams.get("v")
      return id ? `https://www.youtube.com/embed/${id}` : null
    }

    return null
  } catch {
    return null
  }
}

const featuredProjects: Project[] = [
  {
    name: "MindTrace",
    description: "AI-powered dementia care platform delivering real-time support for patients and caregivers through an accessibility-first mobile experience.",
    problem: "Caregivers and patients need timely dementia support without depending on fragmented, manual coordination.",
    solution: "Built an end-to-end Android + Spring architecture with AI-assisted workflows, accessibility-first UX, and cloud-ready services.",
    impact: "Turned a complex healthcare support flow into a usable real-time system with demos covering both product experience and infrastructure.",
    proof: ["Mobile feature demo", "Infrastructure demo", "Public codebase"],
    architecture: [
      "Kotlin Android client for caregivers and patient interaction",
      "Spring Boot API layer orchestrating AI-assisted task flows",
      "PostgreSQL + Redis + Firebase for persistence, caching, and event updates",
    ],
    highlights: [
      "Built end-to-end Android + backend architecture for real-time caregiver support.",
      "Designed accessibility-first mobile UX tailored for elderly users.",
      "Integrated AI-assisted assistance workflows backed by Spring services and cloud-ready infrastructure.",
    ],
    tech: ["Kotlin", "Android Studio", "Spring Boot", "Spring AI", "PostgreSQL", "Redis", "Firebase", "Docker", "Azure"],
    featured: true,
    year: "2025",
    links: [
      { label: "GitHub Repository", href: "https://github.com/mninadmnobo/MindTrace" },
      { label: "Feature Demo", href: "https://youtu.be/BpRmKZYAOhM" },
      { label: "Infrastructure Demo", href: "https://www.youtube.com/watch?v=i0GG_g0eZck" },
    ],
  },
  {
    name: "Gemma VetCare",
    description: "AI-assisted veterinary and livestock decision-support system engineered for reliability in low-connectivity field environments.",
    problem: "Rural livestock owners often have limited veterinary access and unstable internet, delaying treatment decisions.",
    solution: "Designed Android + backend decision support with resilient API behavior for intermittent networks and practical field workflows.",
    impact: "Demonstrated AI-assisted guidance that remains usable in low-connectivity conditions where conventional cloud-only tools fail.",
    proof: ["Feature demo video", "Public repository", "Field-oriented architecture"],
    architecture: [
      "Offline-first Android workflow for rural field usage",
      "Spring AI inference and decision-support endpoints",
      "MongoDB data layer with resilient request handling",
    ],
    highlights: [
      "Developed an AI-assisted Android workflow for veterinary and livestock decision support.",
      "Implemented REST APIs optimized for low-connectivity and intermittent network conditions.",
      "Structured backend data flow for practical field usage with robust request handling.",
    ],
    tech: ["Kotlin", "Spring Boot", "Spring AI", "MongoDB"],
    featured: true,
    year: "2025",
    links: [
      { label: "GitHub Repository", href: "https://github.com/mninadmnobo/GemmaVetCare" },
      { label: "Feature Demo", href: "https://www.youtube.com/watch?v=EoxyudCIVSo" },
    ],
  },
  {
    name: "SKILL HUB",
    description: "Role-based coaching management platform with scalable REST APIs and robust multi-user access control.",
    problem: "Coaching workflows break down without clear role separation and reliable data operations.",
    solution: "Implemented a role-based platform and scalable REST API layer with SQL-backed multi-user flows.",
    impact: "Delivered a maintainable product foundation with clear boundaries between admin, instructor, and learner responsibilities.",
    proof: ["Role-based architecture", "API-driven backend", "Public repository"],
    architecture: [
      "Role-aware UI surfaces for admin, instructor, and learner actions",
      "Express REST API enforcing authorization and business rules",
      "SQL schema for multi-user learning and progress operations",
    ],
    highlights: [
      "Designed a role-based web platform with clear admin, instructor, and learner access boundaries.",
      "Implemented scalable REST APIs and relational schema design for multi-role operations.",
    ],
    tech: ["Node.js", "Express.js", "SQL", "REST APIs"],
    featured: true,
    year: "2023",
    links: [
      { label: "GitHub Repository", href: "https://github.com/mninadmnobo/SKILL_HUB" },
    ],
  },
  {
    name: "Remote Gardening System",
    description: "Embedded automation system that monitors environmental signals and controls gardening operations through sensor-actuator workflows.",
    problem: "Manual plant monitoring is inconsistent and inefficient for remote or unattended garden setups.",
    solution: "Built a microcontroller-driven sensing and actuation loop to automate monitoring and control decisions.",
    impact: "Converted a manual task into a reproducible embedded automation workflow with hardware-level deployment evidence.",
    proof: ["Hardware demo video", "Embedded codebase", "Sensor-actuator pipeline"],
    architecture: [
      "ATmega32 firmware loop for periodic sensing and threshold evaluation",
      "Sensor fusion inputs driving watering and control decisions",
      "Actuator control pipeline for real-time hardware response",
    ],
    highlights: [
      "Developed an embedded automation loop for garden monitoring and control.",
      "Integrated sensor-actuator logic on microcontroller hardware for real-world operation.",
    ],
    tech: ["C", "ATmega32", "Arduino", "Embedded Systems"],
    featured: true,
    year: "2024",
    links: [
      { label: "GitHub Repository", href: "https://github.com/mninadmnobo/CSE-316-Microcontroller-and-Microprocessor-Project" },
      { label: "Feature Demo", href: "https://www.youtube.com/watch?v=m3LLqLAPCik" },
    ],
  },
]

const allProjects: Project[] = [
  ...featuredProjects,
  {
    name: "CSE310: Compiler Construction",
    description: "Full compiler for a C-like language covering lexical analysis, parsing, semantic validation, intermediate representation, and optimized 8086 code generation.",
    problem: "Compilers require tightly integrated language-processing stages that are difficult to align correctly.",
    solution: "Implemented complete compiler stages from tokenization to optimized 8086 code generation using Flex/Bison.",
    impact: "Delivered a full language toolchain that demonstrates systems-level understanding beyond isolated assignments.",
    proof: ["Compiler phases implemented", "8086 output generation", "Public repository"],
    architecture: [
      "Lexer and parser pipeline with Flex and Bison",
      "Semantic analysis and intermediate representation generation",
      "8086 code emission with optimization passes",
    ],
    highlights: [
      "Implemented lexical analysis, parsing, semantic analysis, and intermediate representation stages.",
      "Generated optimized 8086 assembly from compiled source programs.",
    ],
    tech: ["C++17", "Flex", "Bison/Yacc", "8086 Codegen", "Linux"],
    featured: false,
    year: "2024",
    links: [
      { label: "GitHub Repository", href: "https://github.com/mninadmnobo/CompilerSessional" },
    ],
  },
  {
    name: "Movie Database",
    description: "Desktop movie information management application built with JavaFX for structured cataloging and retrieval workflows.",
    problem: "Managing growing media catalogs is error-prone without clear CRUD and navigation workflows.",
    solution: "Built a JavaFX desktop interface with structured data operations and user-friendly management flows.",
    impact: "Shipped a polished desktop application emphasizing data correctness and maintainable UI logic.",
    proof: ["Desktop UI implementation", "CRUD workflow coverage", "Public repository"],
    architecture: [
      "JavaFX presentation layer for interactive movie operations",
      "Service logic for validation, sorting, and retrieval workflows",
      "Persistent storage layer for catalog data integrity",
    ],
    highlights: [
      "Developed a desktop movie management interface with JavaFX-based workflows.",
      "Built core CRUD flows and data organization for movie catalog operations.",
    ],
    tech: ["Java", "JavaFX"],
    featured: false,
    year: "2022",
    links: [
      { label: "GitHub Repository", href: "https://github.com/mninadmnobo/Movie-DataBase-Management-JavaFX" },
    ],
  },
  {
    name: "Computer Graphics Pipeline",
    description: "End-to-end computer graphics pipeline implementing transformations, clipping, Z-buffer rasterization, and ray tracing with interactive OpenGL demos.",
    problem: "Rendering realistic 3D scenes requires coordinated math-heavy pipeline stages.",
    solution: "Implemented transformations, clipping, rasterization, Z-buffering, and ray tracing with interactive OpenGL controls.",
    impact: "Produced an end-to-end graphics pipeline that validates both theory and systems implementation in practice.",
    proof: ["OpenGL interactive demos", "Ray tracing implementation", "Public repository"],
    architecture: [
      "Scene and camera setup with matrix transformation pipeline",
      "Rasterization stage with clipping and Z-buffer depth handling",
      "Ray tracing stage for lighting and reflection realism",
    ],
    highlights: [
      "Implemented core graphics pipeline stages including transformations, clipping, and rasterization.",
      "Built Z-buffer and ray-tracing components for 3D scene rendering.",
      "Created OpenGL demos with camera control supporting 6-DOF interaction.",
    ],
    tech: ["C++17", "OpenGL/GLUT", "Rasterization", "Ray Tracing"],
    featured: false,
    year: "2025",
    links: [
      { label: "GitHub Repository", href: "https://github.com/mninadmnobo/Computer-Graphics-Pipeline" },
    ],
  },
  {
    name: "TCP Window Scaling Attack and Defense",
    description: "Network security lab demonstrating ARP-poisoning MITM attacks on TCP window scaling, supported by packet-level analysis and defense mechanisms.",
    problem: "Network stacks can be exploited through protocol-level attack vectors that are hard to observe without packet analysis.",
    solution: "Reproduced MITM attack paths, analyzed traffic at packet level, and implemented defensive controls.",
    impact: "Showcased offensive and defensive security reasoning with reproducible experimentation and evidence-backed mitigation flow.",
    proof: ["Wireshark and tcpdump analysis", "Attack and defense implementation", "Public repository"],
    architecture: [
      "Attack setup with ARP poisoning and traffic interception",
      "Packet inspection workflow using Wireshark and tcpdump",
      "Defense layer validating mitigation under replayed scenarios",
    ],
    highlights: [
      "Implemented ARP poisoning MITM attack scenarios targeting TCP window scaling behavior.",
      "Analyzed traffic with Wireshark and tcpdump to validate exploit and defense behavior.",
      "Implemented defensive mechanisms and documented attack mitigation flow.",
    ],
    tech: ["Python", "Computer Networks", "Security", "ARP Poisoning"],
    featured: false,
    year: "2025",
    links: [
      { label: "GitHub Repository", href: "https://github.com/mninadmnobo/CSE406-Window_Scaling_Attack" },
    ],
  },
]

export function Projects() {
  const [showAll, setShowAll] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)

  const projectsToShow = showAll ? allProjects : featuredProjects

  const handleToggleProjects = () => {
    setShowAll((previous) => {
      const next = !previous

      if (previous) {
        requestAnimationFrame(() => {
          if (!sectionRef.current) {
            return
          }

          const top = sectionRef.current.getBoundingClientRect().top + window.scrollY - 88
          window.scrollTo({ top, behavior: "smooth" })
        })
      }

      return next
    })
  }

  return (
    <section id="projects" ref={sectionRef} className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Premium background */}
      <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-card" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-12 bg-primary" />
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">Projects</h2>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Selected Engineering Projects
          </h3>
          <Link
            href="https://github.com/mninadmnobo"
            className="text-primary hover:underline flex items-center gap-1 no-underline"
          >
            View all on GitHub
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6">
          {projectsToShow.map((project) => {
            const videoLinks = project.links
              .map((projectLink) => ({ label: projectLink.label, href: projectLink.href, embedUrl: getYouTubeEmbedUrl(projectLink.href) }))
              .filter((item): item is { label: string; href: string; embedUrl: string } => Boolean(item.embedUrl))

            const artifactLinks = project.links.filter((projectLink) => !getYouTubeEmbedUrl(projectLink.href))

            return (
            <div
              key={project.name}
              className="p-6 md:p-8 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="p-3 rounded-xl bg-primary/10 w-fit">
                  <svg viewBox="0 0 24 24" className="h-8 w-8 fill-primary">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-sm text-primary font-medium">{project.featured ? "Featured Project" : "Project"}</span>
                    <span className="px-2 py-0.5 text-xs rounded-full bg-primary/20 text-primary">
                      {project.year}
                    </span>
                  </div>

                  <h4 className="text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.name}
                  </h4>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  <div className="grid gap-3 md:grid-cols-3 mb-5">
                    <div className="rounded-lg border border-border/70 bg-background/40 p-3">
                      <p className="text-xs uppercase tracking-wider text-primary mb-1">Problem</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
                    </div>
                    <div className="rounded-lg border border-border/70 bg-background/40 p-3">
                      <p className="text-xs uppercase tracking-wider text-primary mb-1">Solution</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
                    </div>
                    <div className="rounded-lg border border-border/70 bg-background/40 p-3">
                      <p className="text-xs uppercase tracking-wider text-primary mb-1">Impact</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.impact}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {project.highlights.map((point) => (
                      <li key={`${project.name}-${point}`} className="text-sm text-muted-foreground leading-relaxed">
                        - {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 rounded-lg border border-border/70 bg-background/40 p-4">
                    <p className="text-xs uppercase tracking-wider text-primary mb-3">Architecture and Proof</p>

                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      {project.architecture.map((layer, index) => (
                        <div key={`${project.name}-${layer}-flow`} className="flex items-center gap-2">
                          <span className="px-2.5 py-1.5 text-xs rounded-md bg-secondary text-secondary-foreground border border-border/60">
                            {layer}
                          </span>
                          {index < project.architecture.length - 1 && <ArrowRight className="h-3.5 w-3.5 text-primary/80" />}
                        </div>
                      ))}
                    </div>

                    <div className="grid gap-3 md:grid-cols-2">
                      <div>
                        <p className="text-xs uppercase tracking-wide text-primary font-semibold mb-2">Evidence</p>
                        <ul className="space-y-1">
                          {project.proof.map((item) => (
                            <li key={`${project.name}-${item}-proof`} className="text-sm text-muted-foreground">- {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-wide text-primary font-semibold mb-2">Artifacts</p>
                        {artifactLinks.length > 0 ? (
                          <div className="flex flex-wrap items-center gap-2">
                            {artifactLinks.map((projectLink) => (
                              <Link
                                key={`${project.name}-${projectLink.label}-artifact`}
                                href={projectLink.href}
                                className="inline-flex items-center gap-1 text-sm px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground no-underline transition-colors"
                              >
                                {projectLink.label}
                                <ExternalLink className="h-3 w-3" />
                              </Link>
                            ))}
                          </div>
                        ) : (
                          <p className="text-sm text-muted-foreground">Video demos are shown below.</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {videoLinks.length > 0 && (
                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                      {videoLinks.map((video) => (
                          <div key={`${project.name}-${video.label}`} className="rounded-lg border border-border/70 bg-background/40 p-2">
                            <p className="text-sm font-medium text-muted-foreground mb-2">{video.label}</p>
                            <div className="aspect-video w-full overflow-hidden rounded-md border border-border/60">
                              <iframe
                                src={video.embedUrl}
                                title={`${project.name} ${video.label}`}
                                className="h-full w-full"
                                loading="lazy"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                              />
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )})}
        </div>

        <div className="flex justify-center mt-8">
          <Button
            variant="outline"
            onClick={handleToggleProjects}
            className="gap-2 text-base font-medium px-5 py-2.5 bg-secondary/70 border-border/80 text-foreground hover:!bg-primary hover:!text-primary-foreground hover:!border-primary dark:hover:!bg-primary dark:hover:!text-primary-foreground dark:hover:!border-primary"
          >
            {showAll ? (
              <>
                Show Less <ChevronUp className="h-5 w-5" />
              </>
            ) : (
              <>
                View All Projects ({allProjects.length}) <ChevronDown className="h-5 w-5" />
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  )
}
