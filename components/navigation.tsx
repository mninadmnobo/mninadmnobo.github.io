"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, User, FolderKanban, Microscope, Cpu, Mail, Home } from "lucide-react"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"
import { Link } from "@/components/ui/link"
import { Button } from "@/components/ui/button"

const sectionLinks = [
  { href: "#top", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "#projects", label: "Projects", icon: FolderKanban },
  { href: "#research", label: "Research", icon: Microscope },
  { href: "#tech", label: "Tech Stack", icon: Cpu },
  { href: "#contact", label: "Contact", icon: Mail },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("#top")
  const { theme, resolvedTheme, setTheme } = useTheme()
  const currentTheme = mounted ? (resolvedTheme ?? theme) : "dark"
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (pathname !== "/") return

    const sectionIds = sectionLinks.map((section) => section.href).filter((href) => href.startsWith("#"))
    const sectionElements = sectionIds
      .map((id) => document.querySelector(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (!sectionElements.length) return

    let ticking = false

    const updateActiveSection = () => {
      const offset = 140
      const scrollPosition = window.scrollY + offset
      let current = sectionElements[0]

      for (const section of sectionElements) {
        if (section.offsetTop <= scrollPosition) {
          current = section
        }
      }

      setActiveSection(`#${current.id}`)
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection)
        ticking = true
      }
    }

    const onHashChange = () => {
      if (window.location.hash) {
        setActiveSection(window.location.hash)
      }
    }

    updateActiveSection()
    onHashChange()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    window.addEventListener("hashchange", onHashChange)

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      window.removeEventListener("hashchange", onHashChange)
    }
  }, [pathname])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-sm"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 flex justify-end pr-4 min-w-0">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground overflow-x-auto whitespace-nowrap md:flex-wrap md:overflow-visible">
              {pathname === "/" &&
                sectionLinks.map((section) => {
                  const Icon = section.icon
                  const isActive = activeSection === section.href
                  return (
                    <Button
                      key={section.href}
                      asChild
                      variant="outline"
                      size="sm"
                      className={`rounded-full border border-border/70 transition-all ${
                        isActive
                          ? "bg-accent text-accent-foreground border-accent shadow-[0_0_0_1px_rgba(34,211,238,0.5)] dark:bg-primary/90 dark:text-primary-foreground dark:border-primary"
                          : "bg-secondary/60 text-foreground dark:bg-secondary/40"
                      } hover:!bg-primary/90 hover:!border-primary hover:!text-primary-foreground`}
                    >
                      <Link
                        href={section.href}
                        className="no-underline"
                        target={section.href.startsWith("http") ? "_blank" : undefined}
                        rel={section.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        <Icon className="h-4 w-4 mr-2" />
                        {section.label}
                      </Link>
                    </Button>
                  )
                })}
            </div>
          </div>

          <div className="flex items-center gap-3">
            {pathname !== "/" && (
              <Button asChild variant="outline" className="px-4 py-2 rounded-lg text-sm font-medium">
                <Link href="/" className="no-underline">
                  Go To Home
                </Link>
              </Button>
            )}
            <div
              className="flex h-8 items-center rounded-full border border-border/70 bg-secondary/60 text-foreground transition-all dark:bg-secondary/40 overflow-hidden"
              aria-label="Theme mode"
              role="group"
            >
              <button
                type="button"
                onClick={() => setTheme("dark")}
                className={`flex h-full flex-1 items-center justify-center px-3 transition-all ${
                  currentTheme === "dark"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-secondary/70"
                }`}
                aria-label="Switch to dark mode"
                aria-pressed={currentTheme === "dark"}
              >
                <Moon className="h-3.5 w-3.5" />
              </button>
              <span className="h-4 w-px bg-border/70" />
              <button
                type="button"
                onClick={() => setTheme("light")}
                className={`flex h-full flex-1 items-center justify-center px-3 transition-all ${
                  currentTheme === "light"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-secondary/70"
                }`}
                aria-label="Switch to light mode"
                aria-pressed={currentTheme === "light"}
              >
                <Sun className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
