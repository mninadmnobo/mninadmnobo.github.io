"use client"

import { useState } from "react"
import { Mail, ExternalLink, MapPin, Clock, Download, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "@/components/ui/link"

const socialLinks = [
  {
    name: "GitHub",
    handle: "@mninadmnobo",
    url: "https://github.com/mninadmnobo",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    handle: "in/mninadmnobo",
    url: "https://linkedin.com/in/mninadmnobo",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: "NeetCode",
    handle: "@mninadmnobo",
    url: "https://neetcode.io/profile/mninadmnobo",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    name: "LeetCode",
    handle: "mninadmnobo",
    url: "https://leetcode.com/u/mninadmnobo/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
      </svg>
    ),
  },
  {
    name: "Kaggle",
    handle: "@mohammadninadmahmud",
    url: "https://www.kaggle.com/mohammadninadmahmud",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.071.358"/>
      </svg>
    ),
  },
  {
    name: "Codeforces",
    handle: "@MNMNobo",
    url: "https://codeforces.com/profile/MNMNobo",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z"/>
      </svg>
    ),
  },
  {
    name: "Twitter",
    handle: "@mninadmnobo",
    url: "https://x.com/mninadmnobo?s=11",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
      </svg>
    ),
  },
  {
    name: "Facebook",
    handle: "@mninadmnobo",
    url: "https://facebook.com/mninadmnobo",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    handle: "@mninadmnobo",
    url: "https://instagram.com/mninadmnobo",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
      </svg>
    ),
  },
]

export function Contact() {
  const [activeContactAction, setActiveContactAction] = useState<string | null>(null)

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-card" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-12 bg-primary" />
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">Contact</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left side - CTA */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              {"Let's build something together"}
            </h3>
            
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              {"I am open to internships, full-time opportunities, and research collaborations in full-stack engineering, applied AI, and intelligent systems."}
            </p>
            
            <div className="flex flex-col gap-3 mb-8">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Clock className="h-5 w-5 text-primary" />
                <span>UTC+6 (Bangladesh Standard Time)</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <Link href="tel:+8801939444451" className="hover:text-primary transition-colors no-underline">
                  +8801939444451
                </Link>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                variant="outline"
                className={`gap-2 no-underline transition-all duration-200 ${
                  activeContactAction === "email"
                    ? "bg-primary text-white border-primary shadow-[0_0_0_1px_rgba(34,211,238,0.3)] hover:!bg-primary/90 hover:!text-white dark:hover:!bg-primary/90 dark:hover:!text-white"
                    : "bg-secondary/60 border-border/80 text-foreground hover:!bg-primary/90 hover:!border-primary hover:!text-white hover:shadow-[0_0_0_1px_rgba(34,211,238,0.3)] dark:hover:!bg-primary/90 dark:hover:!border-primary dark:hover:!text-white"
                }`}
              >
                <Link href="mailto:mninadmnobo@gmail.com" onClick={() => setActiveContactAction("email")}>
                  <Mail className="h-5 w-5" />
                  Email Me
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className={`gap-2 no-underline transition-all duration-200 ${
                  activeContactAction === "cv"
                    ? "bg-primary text-white border-primary shadow-[0_0_0_1px_rgba(34,211,238,0.3)] hover:!bg-primary/90 hover:!text-white dark:hover:!bg-primary/90 dark:hover:!text-white"
                    : "bg-secondary/60 border-border/80 text-foreground hover:!bg-primary/90 hover:!border-primary hover:!text-white hover:shadow-[0_0_0_1px_rgba(34,211,238,0.3)] dark:hover:!bg-primary/90 dark:hover:!border-primary dark:hover:!text-white"
                }`}
              >
                <Link href="/mninadmnobo-cv.pdf" download="mninadmnobo-cv.pdf" onClick={() => setActiveContactAction("cv")}>
                  <Download className="h-5 w-5" />
                  Download CV
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className={`gap-2 no-underline transition-all duration-200 ${
                  activeContactAction === "resume"
                    ? "bg-primary text-white border-primary shadow-[0_0_0_1px_rgba(34,211,238,0.3)] hover:!bg-primary/90 hover:!text-white dark:hover:!bg-primary/90 dark:hover:!text-white"
                    : "bg-secondary/60 border-border/80 text-foreground hover:!bg-primary/90 hover:!border-primary hover:!text-white hover:shadow-[0_0_0_1px_rgba(34,211,238,0.3)] dark:hover:!bg-primary/90 dark:hover:!border-primary dark:hover:!text-white"
                }`}
              >
                <Link href="/mninadmnobo-resume.pdf" download="mninadmnobo-resume.pdf" onClick={() => setActiveContactAction("resume")}>
                  <Download className="h-5 w-5" />
                  Download Resume
                </Link>
              </Button>
            </div>
          </div>

          {/* Right side - Social links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Professional Profiles</h4>
            
            <div className="grid gap-3">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  className="group flex items-center justify-between p-4 rounded-xl border border-border bg-card/50 hover:border-primary/50 hover:bg-card transition-all duration-300 no-underline"
                  aria-label={`${link.name} profile`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-muted-foreground group-hover:text-primary transition-colors">
                      {link.icon}
                    </span>
                    <div>
                      <p className="font-medium text-foreground">{link.name}</p>
                      <p className="text-sm text-muted-foreground">{link.handle}</p>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
