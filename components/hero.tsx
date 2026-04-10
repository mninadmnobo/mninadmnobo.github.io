"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { MapPin, ExternalLink, FileText, User, FolderKanban, Microscope, Cpu, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "@/components/ui/link"

const sectionLinks = [
  { href: "#about", label: "About", icon: User },
  { href: "#projects", label: "Projects", icon: FolderKanban },
  { href: "#research", label: "Research", icon: Microscope },
  { href: "#tech", label: "Tech Stack", icon: Cpu },
  { href: "#contact", label: "Contact", icon: Mail },
]

export function Hero() {
  const [activeSection, setActiveSection] = useState("#about")
  const [activeCta, setActiveCta] = useState("github")
  const clickLockTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleSectionClick = (href: string) => {
    setActiveSection(href)

    if (clickLockTimeoutRef.current) {
      clearTimeout(clickLockTimeoutRef.current)
    }

    // Keep the clicked state visible while the hash navigation scroll settles.
    clickLockTimeoutRef.current = setTimeout(() => {
      clickLockTimeoutRef.current = null
    }, 900)
  }

  useEffect(() => {
    const sectionIds = sectionLinks.map((section) => section.href.replace("#", ""))

    const updateFromHash = () => {
      if (window.location.hash) {
        setActiveSection(window.location.hash)
      }
    }

    updateFromHash()

    const observer = new IntersectionObserver(
      (entries) => {
        if (clickLockTimeoutRef.current) {
          return
        }

        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleEntries.length > 0) {
          setActiveSection(`#${visibleEntries[0].target.id}`)
        }
      },
      {
        root: null,
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.2, 0.4, 0.6],
      }
    )

    sectionIds.forEach((id) => {
      const section = document.getElementById(id)
      if (section) {
        observer.observe(section)
      }
    })

    window.addEventListener("hashchange", updateFromHash)

    return () => {
      observer.disconnect()
      window.removeEventListener("hashchange", updateFromHash)

      if (clickLockTimeoutRef.current) {
        clearTimeout(clickLockTimeoutRef.current)
      }
    }
  }, [])

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20 relative overflow-hidden">
      {/* Premium background with gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      {/* Floating orbs */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-10 w-48 h-48 bg-primary/8 rounded-full blur-2xl" />
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Picture Section */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary/20 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500" />
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/30 bg-secondary">
              <Image
                src="/profile.jpg"
                alt="Mohammad Ninad Mahmud Nobo"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Profile badge */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
              Ninad Nobo
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-sm text-primary">Available for opportunities</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
              Mohammad Ninad Mahmud{" "}
              <span className="text-primary">Nobo</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              CSE Undergraduate @ BUET | Full-Stack - Systems - AI
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="px-3 py-1 bg-secondary rounded-full text-foreground font-medium">
                BUET CSE
              </div>
            </div>

            <p className="text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Building scalable systems and intelligent software with strong backend foundations,
              practical frontend development, and research focus in LLM-based testing and medical AI.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Button
                asChild
                variant="outline"
                className={`gap-2 no-underline transition-all duration-200 ${
                  activeCta === "github"
                    ? "bg-primary text-primary-foreground border-primary shadow-[0_0_0_1px_rgba(34,211,238,0.3)] hover:bg-primary/90 hover:text-primary-foreground"
                    : "bg-background/70 border-border/80 text-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <Link href="https://github.com/mninadmnobo" onClick={() => setActiveCta("github")}>
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className={`gap-2 no-underline transition-all duration-200 ${
                  activeCta === "linkedin"
                    ? "bg-primary text-primary-foreground border-primary shadow-[0_0_0_1px_rgba(34,211,238,0.3)] hover:bg-primary/90 hover:text-primary-foreground"
                    : "bg-background/70 border-border/80 text-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <Link href="https://linkedin.com/in/mninadmnobo" onClick={() => setActiveCta("linkedin")}>
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className={`gap-2 no-underline transition-all duration-200 ${
                  activeCta === "cv"
                    ? "bg-primary text-primary-foreground border-primary shadow-[0_0_0_1px_rgba(34,211,238,0.3)] hover:bg-primary/90 hover:text-primary-foreground"
                    : "bg-background/70 border-border/80 text-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <Link href="/NinadNoboCV.pdf" target="_blank" onClick={() => setActiveCta("cv")}>
                  <FileText className="h-5 w-5" />
                  View CV
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className={`gap-2 no-underline transition-all duration-200 ${
                  activeCta === "resume"
                    ? "bg-primary text-primary-foreground border-primary shadow-[0_0_0_1px_rgba(34,211,238,0.3)] hover:bg-primary/90 hover:text-primary-foreground"
                    : "bg-background/70 border-border/80 text-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <Link href="/NinadNoboResume.pdf" target="_blank" onClick={() => setActiveCta("resume")}>
                  <FileText className="h-5 w-5" />
                  View Resume
                </Link>
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              {sectionLinks.map((section) => {
                const Icon = section.icon

                return (
                  <Button
                    key={section.href}
                    asChild
                    variant="outline"
                    size="default"
                    className={`rounded-full border transition-all duration-200 ${
                      activeSection === section.href
                        ? "bg-primary text-primary-foreground border-primary shadow-[0_0_0_1px_rgba(34,211,238,0.3)] hover:bg-primary/90 hover:text-primary-foreground"
                        : "bg-secondary/60 border-border/80 text-foreground hover:bg-primary/90 hover:border-primary hover:text-primary-foreground hover:shadow-[0_0_0_1px_rgba(34,211,238,0.3)]"
                    }`}
                  >
                    <Link href={section.href} onClick={() => handleSectionClick(section.href)}>
                      <Icon className="h-4 w-4 mr-2" />
                      {section.label}
                    </Link>
                  </Button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
