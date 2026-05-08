"use client"

import {
  Mail,
  ExternalLink,
  MapPin,
  Clock,
  Phone,
} from "lucide-react"

import { Link } from "@/components/ui/link"

/* =========================
   PROFESSIONAL PROFILES
========================= */

const professionalLinks = [
  {
    name: "GitHub",
    handle: "@mninadmnobo",
    url: "https://github.com/mninadmnobo",
    color: "from-zinc-500/20 to-zinc-800/10",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.39c.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0112 6.84c1.02 0 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },

  {
    name: "LinkedIn",
    handle: "in/mninadmnobo",
    url: "https://www.linkedin.com/in/mninadmnobo",
    color: "from-blue-500/20 to-cyan-500/10",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M20.45 20.45H16.9v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43A2.06 2.06 0 013.27 5.37 2.06 2.06 0 015.34 3.3 2.06 2.06 0 017.4 5.37c0 1.14-.92 2.06-2.06 2.06zM7.12 20.45H3.56V9h3.56v11.45z" />
      </svg>
    ),
  },
]

/* =========================
   RESEARCH PROFILES
========================= */

const researchLinks = [
  {
    name: "Google Scholar",
    handle: "M Ninad M Nobo",
    url: "https://scholar.google.com/citations?user=y5-A2oAAAAAJ&hl=en&oi=ao",
    color: "from-emerald-500/20 to-teal-500/10",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M12 2 2 7l10 5 10-5-10-5zm0 7.5L4.2 6.2 12 3.1l7.8 3.1L12 9.5zM4 10v9l8 4 8-4v-9l-8 4-8-4z" />
      </svg>
    ),
  },

  {
    name: "ORCID",
    handle: "0009-0006-2781-6693",
    url: "https://orcid.org/0009-0006-2781-6693",
    color: "from-lime-500/20 to-green-500/10",
    icon: (
      <span className="text-xs font-black tracking-tight">
        iD
      </span>
    ),
  },

  {
    name: "ResearchGate",
    handle: "Mohammad Ninad Mahmud Nobo",
    url: "https://www.researchgate.net/profile/Mohammad-Ninad-Mahmud-Nobo",
    color: "from-cyan-500/20 to-sky-500/10",
    icon: (
      <span className="text-xs font-black tracking-tight">
        RG
      </span>
    ),
  },
]

/* =========================
   SOCIAL PROFILES
========================= */

const socialLinks = [
  {
    name: "Facebook",
    handle: "@mninadmnobo",
    url: "https://facebook.com/mninadmnobo",
    color: "from-blue-600/20 to-blue-400/10",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.03 4.39 11 10.13 11.93v-8.44H7.08v-3.5h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.96h-1.52c-1.5 0-1.96.93-1.96 1.88v2.26h3.33l-.53 3.5h-2.8V24C19.61 23.07 24 18.1 24 12.07z" />
      </svg>
    ),
  },

  {
    name: "Instagram",
    handle: "@mninadmnobo",
    url: "https://instagram.com/mninadmnobo",
    color: "from-pink-500/20 to-orange-500/10",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M12 2.2c3.2 0 3.58 0 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85 0 3.2 0 3.58-.07 4.85-.15 3.23-1.67 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07-3.2 0-3.58 0-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92C2.2 15.58 2.2 15.2 2.2 12c0-3.2 0-3.58.07-4.85.15-3.23 1.66-4.77 4.92-4.92C8.42 2.2 8.8 2.2 12 2.2z" />
      </svg>
    ),
  },

  {
    name: "Twitter / X",
    handle: "@mninadmnobo",
    url: "https://x.com/mninadmnobo?s=11",
    color: "from-slate-500/20 to-slate-700/10",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M18.9 1.15h3.68l-8.04 9.2L24 22.85h-7.4l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.6l5.24 6.93z" />
      </svg>
    ),
  },
]

/* =========================
   PROGRAMMING PROFILES
========================= */

const programmingLinks = [
  {
    name: "NeetCode",
    handle: "@mninadmnobo",
    url: "https://neetcode.io/profile/mninadmnobo",
    color: "from-violet-500/20 to-indigo-500/10",
    icon: (
      <span className="text-base font-black">
        N
      </span>
    ),
  },

  {
    name: "LeetCode",
    handle: "mninadmnobo",
    url: "https://leetcode.com/u/mninadmnobo/",
    color: "from-yellow-500/20 to-orange-500/10",
    icon: (
      <span className="text-xs font-black tracking-tight">
        LC
      </span>
    ),
  },

  {
    name: "Kaggle",
    handle: "@mohammadninadmahmud",
    url: "https://www.kaggle.com/mohammadninadmahmud",
    color: "from-sky-500/20 to-cyan-500/10",
    icon: (
      <span className="text-xs font-black tracking-tight">
        K
      </span>
    ),
  },

  {
    name: "Codeforces",
    handle: "@MNMNobo",
    url: "https://codeforces.com/profile/MNMNobo",
    color: "from-rose-500/20 to-red-500/10",
    icon: (
      <span className="text-xs font-black tracking-tight">
        CF
      </span>
    ),
  },
]

/* =========================
   CARD COMPONENT
========================= */

function ProfileCard({ link }: any) {
  return (
    <Link
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between rounded-2xl border border-border/60 bg-card/40 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card/70 hover:shadow-lg no-underline"
    >
      <div className="flex min-w-0 items-center gap-4">

        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${link.color} text-primary`}
        >
          {link.icon}
        </div>

        <div className="min-w-0">
          <p className="text-sm font-semibold text-foreground">
            {link.name}
          </p>

          <p className="truncate text-xs text-muted-foreground">
            {link.handle}
          </p>
        </div>
      </div>

      <ExternalLink className="h-4 w-4 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
    </Link>
  )
}

/* =========================
   SECTION TITLE
========================= */

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="mb-5 flex items-center gap-3">

      <div className="h-px flex-1 bg-border/50" />

      <h4 className="whitespace-nowrap text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </h4>

      <div className="h-px flex-1 bg-border/50" />
    </div>
  )
}

/* =========================
   MAIN COMPONENT
========================= */

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-24 md:px-12 lg:px-24"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-card/30 via-background to-card/30" />

      <div className="absolute left-1/4 top-1/3 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="absolute bottom-1/3 right-1/4 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-12 flex items-center gap-4">
          <div className="h-px w-12 bg-primary" />

          <h2 className="text-lg font-semibold uppercase tracking-widest text-primary">
            Let's Connect
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">

          {/* LEFT SIDE */}
          <div className="lg:col-span-5 flex flex-col justify-center">

            <h3 className="mb-8 text-4xl font-bold leading-tight text-foreground md:text-5xl">
              Let's build something together
            </h3>

            <p className="mb-8 text-base leading-relaxed text-muted-foreground md:text-lg">
              I'm open to internships, full-time opportunities,
              and research collaborations in full-stack engineering,
              applied AI, and intelligent systems.
            </p>

            <div className="mb-10 space-y-4">

              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />

                <div>
                  <p className="font-medium text-foreground">
                    Location
                  </p>

                  <p className="text-muted-foreground">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />

                <div>
                  <p className="font-medium text-foreground">
                    Timezone
                  </p>

                  <p className="text-muted-foreground">
                    UTC+6 (BST)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />

                <div>
                  <p className="font-medium text-foreground">
                    Phone
                  </p>

                  <div className="space-y-1">
                    <Link
                      href="tel:+8801939444451"
                      className="block text-primary no-underline"
                    >
                      +880 193 944 4451
                    </Link>

                    <Link
                      href="tel:+8801849285757"
                      className="block text-primary no-underline"
                    >
                      +880 184 928 5757
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="rounded-2xl border border-border/70 bg-background/40 p-5 backdrop-blur-sm">

              <div className="mb-4 flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />

                <p className="text-sm font-medium text-foreground">
                  Contact Email
                </p>
              </div>

              <div className="space-y-3 text-sm">

                <div>
                  <p className="text-muted-foreground">
                    Professional
                  </p>

                  <Link
                    href="mailto:mninadmnobo@gmail.com"
                    className="break-all text-primary no-underline"
                  >
                    mninadmnobo@gmail.com
                  </Link>
                </div>

                <div>
                  <p className="text-muted-foreground">
                    Academic (BUET)
                  </p>

                  <Link
                    href="mailto:2005080@ugrad.cse.buet.ac.bd"
                    className="break-all text-primary no-underline"
                  >
                    2005080@ugrad.cse.buet.ac.bd
                  </Link>
                </div>

                <div>
                  <p className="text-muted-foreground">
                    Personal
                  </p>

                  <Link
                    href="mailto:noboninad@gmail.com"
                    className="break-all text-primary no-underline"
                  >
                    noboninad@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-8 lg:col-span-7">

            {/* TOP ROW */}
            <div>
              <SectionTitle title="Professional Profiles" />

              <div className="grid gap-3 md:grid-cols-2">
                {professionalLinks.map((link) => (
                  <ProfileCard key={link.name} link={link} />
                ))}
              </div>
            </div>

            {/* MIDDLE ROW */}
            <div className="grid gap-6 md:grid-cols-2">

              {/* RESEARCH */}
              <div>
                <SectionTitle title="Research Profiles" />

                <div className="space-y-3">
                  {researchLinks.map((link) => (
                    <ProfileCard key={link.name} link={link} />
                  ))}
                </div>
              </div>

              {/* SOCIAL */}
              <div>
                <SectionTitle title="Social Profiles" />

                <div className="space-y-3">
                  {socialLinks.map((link) => (
                    <ProfileCard key={link.name} link={link} />
                  ))}
                </div>
              </div>
            </div>

            {/* BOTTOM ROW */}
            <div>
              <SectionTitle title="Programming Profiles" />

              <div className="grid gap-3 md:grid-cols-2">
                {programmingLinks.map((link) => (
                  <ProfileCard key={link.name} link={link} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
