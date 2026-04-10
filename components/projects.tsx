
"use client"

import { useState } from "react"
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "@/components/ui/link"

const featuredProjects = [
  {
    name: "MindTrace",
    description: "AI-powered dementia care system with scalable backend architecture.",
    tech: ["Kotlin", "Spring Boot", "PostgreSQL", "Redis"],
    github: "https://github.com/mninadmnobo/MindTrace",
    featured: true,
  },
  {
    name: "Gemma VetCare",
    description: "AI-assisted farming support system optimized for low-connectivity environments.",
    tech: ["Kotlin", "Spring Boot", "Spring AI", "MongoDB"],
    github: "https://github.com/mninadmnobo/GemmaVetCare",
    featured: true,
  },
  {
    name: "LLM Test Generator",
    description: "Automated web testing using LLM pipelines.",
    tech: ["Python", "LLM", "Testing", "Automation"],
    github: "https://github.com/mninadmnobo/Test-Case-Generator",
    featured: true,
  },
  {
    name: "MedCAR",
    description: "Conflict-aware medical reasoning system for AI-assisted radiology workflows.",
    tech: ["Python", "Medical AI", "Reasoning", "Deep Learning"],
    github: "https://github.com/mninadmnobo/MedRAX_conflict_resolver",
    featured: true,
  },
]

const allProjects = [
  ...featuredProjects,
  {
    name: "Compiler",
    description: "Full compiler with AST, IR, semantic analysis, and assembly generation.",
    tech: ["C++", "Compiler", "AST", "Assembly"],
    github: "https://github.com/mninadmnobo/CompilerSessional",
    featured: false,
  },
  {
    name: "SkillHub",
    description: "REST API backend with role-based access control.",
    tech: ["Node.js", "Express.js", "SQL", "REST API"],
    github: "https://github.com/mninadmnobo/SKILL_HUB",
    featured: false,
  },
  {
    name: "Remote Gardening",
    description: "Embedded automation system using microcontrollers.",
    tech: ["C", "ATmega32", "Embedded Systems", "Automation"],
    github: "https://github.com/mninadmnobo/CSE-316-Microcontroller-and-Microprocessor-Project",
    featured: false,
  },
  {
    name: "Graphics Pipeline",
    description: "Rasterization, Z-buffering, and ray tracing pipeline implementation.",
    tech: ["C++", "OpenGL", "Graphics", "Ray Tracing"],
    github: "https://github.com/mninadmnobo/Computer-Graphics-Pipeline",
    featured: false,
  },
  {
    name: "TCP Attack",
    description: "MITM network attack simulation focused on TCP window scaling.",
    tech: ["Python", "Networking", "Security", "TCP/IP"],
    github: "https://github.com/mninadmnobo/CSE406-Window_Scaling_Attack",
    featured: false,
  },
  {
    name: "Movie DB",
    description: "Movie database management system with JavaFX GUI.",
    tech: ["Java", "JavaFX", "SQLite", "GUI"],
    github: "https://github.com/mninadmnobo/Movie-DataBase-Management-JavaFX",
    featured: false,
  },
]

export function Projects() {
  const [showAll, setShowAll] = useState(false)

  const projectsToShow = showAll ? allProjects : featuredProjects

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Premium background */}
      <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-card" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-12 bg-primary" />
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">Featured Projects</h2>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Things I&apos;ve built
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
          {projectsToShow.map((project) => (
            <div
              key={project.name}
              className="group p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300 no-underline"
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
                  </div>

                  <h4 className="text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.name}
                  </h4>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

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

                    <Link
                      href={project.github}
                      className="flex items-center gap-1 text-primary hover:underline text-sm"
                    >
                      View Project <ExternalLink className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button
            variant="outline"
            onClick={() => setShowAll(!showAll)}
            className="gap-2"
          >
            {showAll ? (
              <>
                Show Less <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                View All Projects ({allProjects.length}) <ChevronDown className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  )
}
