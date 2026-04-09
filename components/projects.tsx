"use client"

import { useState } from "react"
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const featuredProjects = [
  {
    name: "MindTrace",
    description: "AI-powered mental health tracking and analysis platform with personalized insights.",
    tech: ["Python", "TensorFlow", "FastAPI", "React"],
    github: "https://github.com/mninadmnobo/MindTrace",
    featured: true,
  },
  {
    name: "GemmaVetCare",
    description: "Veterinary care management system powered by Google Gemma for intelligent diagnostics.",
    tech: ["Python", "Gemma", "Flask", "PostgreSQL"],
    github: "https://github.com/mninadmnobo/GemmaVetCare",
    featured: true,
  },
  {
    name: "MedRAX-premium",
    description: "Premium medical radiology AI assistant for X-ray analysis and diagnosis support.",
    tech: ["Python", "PyTorch", "Medical AI", "Computer Vision"],
    github: "https://github.com/mninadmnobo/MedRAX-premium",
    featured: true,
  },
  {
    name: "Test-Case-Generator",
    description: "LLM-based test case generator for automated software testing and QA.",
    tech: ["Python", "LLM", "Testing", "Automation"],
    github: "https://github.com/mninadmnobo/Test-Case-Generator",
    featured: true,
  },
]

const allProjects = [
  ...featuredProjects,
  {
    name: "neetcode-150",
    description: "Solutions to the NeetCode 150 - essential coding interview problems.",
    tech: ["Python", "Algorithms", "Data Structures"],
    github: "https://github.com/mninadmnobo/neetcode-150",
    featured: false,
  },
  {
    name: "CNN-Online",
    description: "Online CNN training and inference platform for image classification.",
    tech: ["Python", "CNN", "Deep Learning", "Web"],
    github: "https://github.com/mninadmnobo/CNN-Online",
    featured: false,
  },
  {
    name: "machine-learning",
    description: "Collection of machine learning projects and experiments.",
    tech: ["Python", "scikit-learn", "ML", "Data Science"],
    github: "https://github.com/mninadmnobo/machine-learning",
    featured: false,
  },
  {
    name: "Artificial-Intelligent",
    description: "AI algorithms and implementations including search, planning, and learning.",
    tech: ["Python", "AI", "Algorithms"],
    github: "https://github.com/mninadmnobo/Artificial-Intelligent",
    featured: false,
  },
  {
    name: "CompilerSessional",
    description: "Compiler design project - lexer, parser, and code generation.",
    tech: ["C++", "Compiler", "Parsing", "LLVM"],
    github: "https://github.com/mninadmnobo/CompilerSessional",
    featured: false,
  },
  {
    name: "Computer-Graphics-Pipeline",
    description: "Implementation of the complete graphics rendering pipeline.",
    tech: ["C++", "OpenGL", "Graphics", "3D"],
    github: "https://github.com/mninadmnobo/Computer-Graphics-Pipeline",
    featured: false,
  },
  {
    name: "Movie-DataBase-Management-JavaFX",
    description: "Movie database management system with JavaFX GUI.",
    tech: ["Java", "JavaFX", "SQLite", "GUI"],
    github: "https://github.com/mninadmnobo/Movie-DataBase-Management-JavaFX",
    featured: false,
  },
  {
    name: "SKILL_HUB",
    description: "Skill sharing and learning platform for students.",
    tech: ["PHP", "MySQL", "JavaScript", "Web"],
    github: "https://github.com/mninadmnobo/SKILL_HUB",
    featured: false,
  },
  {
    name: "Window-Scaling-Attack",
    description: "Research on TCP window scaling vulnerabilities and mitigations.",
    tech: ["C", "Networking", "Security", "TCP/IP"],
    github: "https://github.com/mninadmnobo/Window-Scaling-Attack",
    featured: false,
  },
  {
    name: "Microcontroller-Project",
    description: "Embedded systems project with microcontroller programming.",
    tech: ["C", "Arduino", "Embedded", "IoT"],
    github: "https://github.com/mninadmnobo/Microcontroller-Project",
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
          <a
            href="https://github.com/mninadmnobo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline flex items-center gap-1"
          >
            View all on GitHub
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projectsToShow.map((project) => (
            <a
              key={project.name}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-primary">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              
              <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.name}
              </h4>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              
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
            </a>
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
