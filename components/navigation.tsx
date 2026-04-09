"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "@/components/ui/link"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Tech Stack", href: "#tech" },
  { name: "Profiles", href: "#achievements" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-16">
          <Link href="#" className="text-lg font-bold text-foreground hover:text-primary transition-colors no-underline">
            MNN
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors no-underline"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/NinadNoboCV.pdf"
              target="_blank"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors no-underline"
            >
              CV
            </Link>
            <Link
              href="/NinadNoboResume.pdf"
              target="_blank"
              className="px-4 py-2 border border-border text-sm font-medium rounded-lg hover:bg-card transition-colors no-underline"
            >
              Resume
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors no-underline"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
                <Link
                  href="/NinadNoboCV.pdf"
                  target="_blank"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors text-center no-underline"
                >
                  CV
                </Link>
                <Link
                  href="/NinadNoboResume.pdf"
                  target="_blank"
                  className="px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-card transition-colors text-center no-underline"
                >
                  Resume
                </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
