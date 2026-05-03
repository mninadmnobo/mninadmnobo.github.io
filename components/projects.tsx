
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
    description: "AI-powered dementia care platform enabling real-time caregiver support through an accessibility-first mobile and backend system.",
    problem: "Caregiver support is fragmented and delayed due to lack of real-time, coordinated tools.",
    solution: "Built an end-to-end Android + Spring system with AI-assisted workflows and scalable backend services.",
    impact: "Delivered a real-time healthcare support system with working product and infrastructure demos.",
    proof: ["Mobile demo", "Infrastructure demo", "Public repository"],
    architecture: [
      "Android client for caregiver-patient interaction",
      "Spring Boot API orchestrating AI workflows",
      "PostgreSQL + Redis + Firebase for storage and real-time updates",
    ],
    highlights: [
      "Developed full-stack Android + backend architecture for real-time support.",
      "Designed accessibility-first UX tailored for elderly users.",
      "Integrated AI-assisted workflows with scalable backend services.",
    ],
    tech: ["Kotlin", "Spring Boot", "Spring AI", "PostgreSQL", "Redis", "Firebase", "Docker", "Azure"],
    featured: true,
    year: "2025",
    links: [
      { label: "GitHub Link", href: "https://github.com/mninadmnobo/MindTrace" },
      { label: "Feature Demo", href: "https://youtu.be/BpRmKZYAOhM" },
      { label: "Infrastructure Demo", href: "https://www.youtube.com/watch?v=i0GG_g0eZck" },
    ],
  },
  {
    name: "Gemma VetCare",
    description: "AI-assisted veterinary decision-support system designed for reliable use in low-connectivity environments.",
    problem: "Rural livestock care suffers from limited veterinary access and unstable connectivity.",
    solution: "Built Android + backend decision-support system with resilient APIs and offline-first workflows.",
    impact: "Enabled reliable AI-assisted guidance in low-connectivity field conditions.",
    proof: ["Demo video", "Public repository", "Field-oriented architecture"],
    architecture: [
      "Offline-first Android workflow",
      "Spring AI inference endpoints",
      "SQLite-based local storage with sync handling",
    ],
    highlights: [
      "Developed AI-assisted mobile workflows for livestock decision support.",
      "Optimized backend APIs for intermittent connectivity.",
      "Designed robust data flow for real-world field usage.",
    ],
    tech: ["Kotlin", "Spring Boot", "Spring AI", "Room", "SQLite"],
    featured: true,
    year: "2025",
    links: [
      { label: "GitHub Link", href: "https://github.com/mninadmnobo/GemmaVetCare" },
      { label: "Feature Demo", href: "https://www.youtube.com/watch?v=EoxyudCIVSo" },
    ],
  },
  {
    name: "Compiler Construction",
    description: "Full compiler for a C-like language with lexical analysis, parsing, semantic checks, and optimized 8086 code generation.",
    problem: "Compiler stages require precise coordination across parsing, semantics, and code generation.",
    solution: "Implemented full compiler pipeline using Flex/Bison with optimized 8086 output.",
    impact: "Demonstrated complete systems-level understanding through a working language toolchain.",
    proof: ["Compiler pipeline", "8086 code output", "Public repository"],
    architecture: [
      "Lexer and parser using Flex/Bison",
      "Semantic analysis and IR generation",
      "Optimized 8086 code emission",
    ],
    highlights: [
      "Built full compiler pipeline from tokenization to code generation.",
      "Implemented semantic analysis and intermediate code generation.",
    ],
    tech: ["C++17", "Flex", "Bison", "8086 Codegen", "Linux"],
    featured: true,
    year: "2024",
    links: [
      { label: "GitHub Link", href: "https://github.com/mninadmnobo/CompilerSessional" },
    ],
  },
  {
    name: "Computer Graphics Pipeline",
    description: "End-to-end graphics pipeline with transformations, rasterization, Z-buffering, and ray tracing using OpenGL.",
    problem: "Rendering realistic 3D scenes requires coordinated math-intensive pipeline stages.",
    solution: "Implemented full graphics pipeline with OpenGL visualization and ray tracing support.",
    impact: "Validated both theoretical and practical understanding of graphics systems.",
    proof: ["OpenGL demos", "Ray tracing output", "Public repository"],
    architecture: [
      "Transformation and camera pipeline",
      "Rasterization with Z-buffering",
      "Ray tracing for lighting and reflections",
    ],
    highlights: [
      "Implemented transformations, clipping, and rasterization stages.",
      "Built Z-buffer and ray tracing for 3D rendering.",
      "Developed OpenGL demos with interactive camera control.",
    ],
    tech: ["C++17", "OpenGL", "Rasterization", "Ray Tracing"],
    featured: true,
    year: "2025",
    links: [
      { label: "GitHub Link", href: "https://github.com/mninadmnobo/Computer-Graphics-Pipeline" },
    ],
  },
]

const allProjects: Project[] = [
  ...featuredProjects,
  {
    name: "Remote Gardening System",
    description: "Embedded automation system for monitoring and controlling gardening through sensor-actuator workflows.",
    problem: "Manual plant monitoring is inefficient and inconsistent in unattended environments.",
    solution: "Built microcontroller-based sensing and actuation loop for automated control.",
    impact: "Converted manual monitoring into a reproducible embedded automation system.",
    proof: ["Hardware demo", "Embedded code", "Sensor pipeline"],
    architecture: [
      "ATmega32 sensing and control loop",
      "Sensor-driven decision logic",
      "Real-time actuator control",
    ],
    highlights: [
      "Developed embedded automation system for plant monitoring.",
      "Integrated sensor-actuator control on microcontroller hardware.",
    ],
    tech: ["C", "ATmega32", "Arduino"],
    featured: false,
    year: "2024",
    links: [
      { label: "GitHub Link", href: "https://github.com/mninadmnobo/CSE-316-Microcontroller-and-Microprocessor-Project" },
      { label: "Feature Demo", href: "https://www.youtube.com/watch?v=m3LLqLAPCik" },
    ],
  },
  {
    name: "SKILL HUB",
    description: "Role-based coaching management platform with scalable REST APIs and multi-user workflows.",
    problem: "Coaching systems lack structured role separation and reliable data management.",
    solution: "Built role-based platform with REST APIs and relational database design.",
    impact: "Delivered scalable system with clear multi-user access control.",
    proof: ["Role-based system", "API backend", "Public repository"],
    architecture: [
      "Role-based UI and workflows",
      "Express REST API backend",
      "Relational database schema",
    ],
    highlights: [
      "Designed role-based access system for multi-user workflows.",
      "Implemented REST APIs and database-backed operations.",
    ],
    tech: ["Node.js", "Express.js", "SQL"],
    featured: false,
    year: "2023",
    links: [
      { label: "GitHub Link", href: "https://github.com/mninadmnobo/SKILL_HUB" },
    ],
  },
  {
    name: "Movie Database",
    description: "Desktop application for managing movie data with structured CRUD operations.",
    problem: "Media catalogs are difficult to manage without structured workflows.",
    solution: "Built JavaFX application with organized data handling and UI logic.",
    impact: "Delivered a maintainable desktop system for structured data management.",
    proof: ["UI implementation", "CRUD operations", "Public repository"],
    architecture: [
      "JavaFX UI layer",
      "Data management logic",
      "Persistent storage layer",
    ],
    highlights: [
      "Built JavaFX-based desktop application.",
      "Implemented CRUD workflows for structured data management.",
    ],
    tech: ["Java", "JavaFX"],
    featured: false,
    year: "2022",
    links: [
      { label: "GitHub Link", href: "https://github.com/mninadmnobo/Movie-DataBase-Management-JavaFX" },
    ],
  },
  {
    name: "TCP Window Scaling Attack and Defense",
    description: "Network security lab demonstrating MITM attacks and defense mechanisms on TCP window scaling.",
    problem: "Protocol-level vulnerabilities are difficult to analyze without packet-level inspection.",
    solution: "Simulated MITM attacks and analyzed traffic using packet inspection tools.",
    impact: "Demonstrated both offensive and defensive network security workflows.",
    proof: ["Packet analysis", "Attack simulation", "Public repository"],
    architecture: [
      "ARP poisoning attack setup",
      "Packet inspection workflow",
      "Defense validation pipeline",
    ],
    highlights: [
      "Simulated MITM attacks on TCP window scaling.",
      "Analyzed network traffic using Wireshark and tcpdump.",
      "Implemented and validated defense mechanisms.",
    ],
    tech: ["Python", "Networking", "Security"],
    featured: false,
    year: "2025",
    links: [
      { label: "GitHub Link", href: "https://github.com/mninadmnobo/CSE406-Window_Scaling_Attack" },
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
