"use client"

import {
  Mail,
  ExternalLink,
  MapPin,
  Clock,
  Phone,
} from "lucide-react"

import { Link } from "@/components/ui/link"

/* ======================================================
   PROFESSIONAL PROFILES
====================================================== */

const professionalLinks = [
  {
    name: "GitHub",
    handle: "@mninadmnobo",
    url: "https://github.com/mninadmnobo",
    color:
      "from-zinc-100 to-zinc-50 dark:from-zinc-800 dark:to-zinc-900",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-8 w-8 fill-current text-black dark:text-white"
      >
        <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.39c.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0112 6.84c1.02 0 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },

  {
    name: "LinkedIn",
    handle: "@mninadmnobo",
    url: "https://www.linkedin.com/in/mninadmnobo",
    color:
      "from-sky-100 to-blue-50 dark:from-sky-950 dark:to-blue-950",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 fill-[#0A66C2]">
        <path d="M20.45 20.45H16.9v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43A2.06 2.06 0 013.27 5.37 2.06 2.06 0 015.34 3.3 2.06 2.06 0 017.4 5.37c0 1.14-.92 2.06-2.06 2.06zM7.12 20.45H3.56V9h3.56v11.45z" />
      </svg>
    ),
  },
]

/* ======================================================
   RESEARCH PROFILES
====================================================== */

const researchLinks = [
  {
    name: "Google Scholar",
    handle: "M Ninad M Nobo",
    url: "https://scholar.google.com/citations?user=y5-A2oAAAAAJ&hl=en&oi=ao",
    color:
      "from-blue-100 to-cyan-50 dark:from-blue-950 dark:to-cyan-950",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 fill-[#4285F4]">
        <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 13L3.74 11.5 12 7l8.26 4.5L12 16z" />
      </svg>
    ),
  },

  {
    name: "ORCID",
    handle: "0009-0006-2781-6693",
    url: "https://orcid.org/0009-0006-2781-6693",
    color:
      "from-lime-100 to-green-50 dark:from-lime-950 dark:to-green-950",
    icon: (
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#A6CE39] text-base font-bold text-white">
        iD
      </div>
    ),
  },

  {
    name: "ResearchGate",
    handle: "M Ninad M Nobo",
    url: "https://www.researchgate.net/profile/Mohammad-Ninad-Mahmud-Nobo",
    color:
      "from-cyan-100 to-teal-50 dark:from-cyan-950 dark:to-teal-950",
    icon: (
      <div className="text-3xl font-serif text-[#00CCBB]">
        R<span className="text-sm align-top">G</span>
      </div>
    ),
  },
]

/* ======================================================
   SOCIAL PROFILES
====================================================== */

const socialLinks = [
  {
    name: "Facebook",
    handle: "@mninadmnobo",
    url: "https://facebook.com/mninadmnobo",
    color:
      "from-blue-100 to-indigo-50 dark:from-blue-950 dark:to-indigo-950",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 fill-[#1877F2]">
        <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.03 4.39 11 10.13 11.93v-8.44H7.08v-3.5h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.96h-1.52c-1.5 0-1.96.93-1.96 1.88v2.26h3.33l-.53 3.5h-2.8V24C19.61 23.07 24 18.1 24 12.07z" />
      </svg>
    ),
  },

  {
    name: "Instagram",
    handle: "@mninadmnobo",
    url: "https://instagram.com/mninadmnobo",
    color:
      "from-pink-100 to-orange-50 dark:from-pink-950 dark:to-orange-950",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-8 w-8 fill-current text-[#E1306C]"
      >
        <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.33 4 20 5.67 20 7.75v8.5c0 2.08-1.67 3.75-3.75 3.75h-8.5C5.67 20 4 18.33 4 16.25v-8.5C4 5.67 5.67 4 7.75 4zm8.75 1a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
      </svg>
    ),
  },

  {
    name: "Twitter / X",
    handle: "@mninadmnobo",
    url: "https://x.com/mninadmnobo?s=11",
    color:
      "from-zinc-100 to-zinc-50 dark:from-zinc-800 dark:to-zinc-900",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-8 w-8 fill-current text-black dark:text-white"
      >
        <path d="M18.9 1.15h3.68l-8.04 9.2L24 22.85h-7.4l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.6l5.24 6.93z" />
      </svg>
    ),
  },
]

/* ======================================================
   PROGRAMMING PROFILES
====================================================== */

const programmingLinks = [
  {
    name: "NeetCode",
    handle: "@mninadmnobo",
    url: "https://neetcode.io/profile/mninadmnobo",
    color:
      "from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-8 w-8 fill-current text-black dark:text-white"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5L4.2 6.2 12 3.1l7.8 3.1L12 9.5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
  },

  {
    name: "LeetCode",
    handle: "mninadmnobo",
    url: "https://leetcode.com/u/mninadmnobo",
    color:
      "from-yellow-100 to-orange-50 dark:from-yellow-950 dark:to-orange-950",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-8 w-8 fill-current text-[#FFA116]"
      >
        <path d="M13.48 0a1.37 1.37 0 00-.96.44L7.12 6.23l-3.86 4.13a5.27 5.27 0 00-1.2 2.1 5.3 5.3 0 00-.13.51 5.53 5.53 0 00.06 2.36 5.84 5.84 0 00.35 1.02 5.94 5.94 0 001.27 1.82l4.28 4.19.04.04c2.25 2.16 5.85 2.13 8.06-.07l2.4-2.39a1.38 1.38 0 00-1.95-1.96l-2.4 2.39a3.02 3.02 0 01-4.2.04l-.02-.02-4.28-4.19c-.65-.64-.97-1.47-.95-2.26.01-.18.03-.35.07-.52.1-.43.31-.83.62-1.16L9.13 8.11c1.06-1.13 3.2-1.27 4.43-.28l3.5 2.83a1.38 1.38 0 101.74-2.15l-3.5-2.83a6.5 6.5 0 00-2.77-1.2l2.01-2.16A1.38 1.38 0 0013.48 0z"/>
      </svg>
    ),
  },

  {
    name: "Kaggle",
    handle: "@mohammadninadmahmud",
    url: "https://www.kaggle.com/mohammadninadmahmud",
    color:
      "from-sky-100 to-cyan-50 dark:from-sky-950 dark:to-cyan-950",
    icon: (
      <div className="text-5xl font-bold leading-none text-[#20BEFF]">
        k
      </div>
    ),
  },

  {
    name: "Codeforces",
    handle: "@MNMNobo",
    url: "https://codeforces.com/profile/MNMNobo",
    color:
      "from-pink-100 to-rose-50 dark:from-pink-950 dark:to-rose-950",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8">
        <rect x="1" y="10" width="5" height="12" rx="1" fill="#F7C948"/>
        <rect x="9" y="5" width="5" height="17" rx="1" fill="#3B82F6"/>
        <rect x="17" y="8" width="5" height="14" rx="1" fill="#EF4444"/>
      </svg>
    ),
  },
]

/* ======================================================
   CARD
====================================================== */

function ProfileCard({ link }: any) {
  return (
    <Link
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between rounded-2xl border border-border/70 bg-background/80 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-xl no-underline"
    >
      <div className="flex min-w-0 items-center gap-4">
        <div
          className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${link.color}`}
        >
          {link.icon}
        </div>

        <div className="min-w-0">
          <p className="text-base font-semibold text-foreground">
            {link.name}
          </p>

          <p className="truncate text-sm text-muted-foreground">
            {link.handle}
          </p>
        </div>
      </div>

      <ExternalLink className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
    </Link>
  )
}

/* ======================================================
   SECTION TITLE
====================================================== */

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="mb-5 flex items-center gap-4">
      <div className="h-px flex-1 bg-border/60" />

      <h4 className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.18em] text-foreground/80">
        {title}
      </h4>

      <div className="h-px flex-1 bg-border/60" />
    </div>
  )
}

/* ======================================================
   MAIN COMPONENT
====================================================== */

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-24 md:px-12 lg:px-24"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-card/20 via-background to-card/20" />

      <div className="absolute left-1/4 top-1/3 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="absolute bottom-1/3 right-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-12 flex items-center gap-4">
          <div className="h-px w-12 bg-primary" />

          <h2 className="text-lg font-semibold uppercase tracking-widest text-primary">
            Let's Connect
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">

          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center lg:col-span-5">

            <h3 className="mb-8 text-5xl font-bold leading-tight text-foreground">
              Let's build something together
            </h3>

            <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
              I'm open to internships, full-time opportunities,
              and research collaborations in full-stack engineering,
              applied AI, and intelligent systems.
            </p>

            <div className="mb-10 space-y-6">

              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-6 w-6 text-primary" />

                <div>
                  <p className="font-semibold text-foreground">
                    Location
                  </p>

                  <p className="text-muted-foreground">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="mt-1 h-6 w-6 text-primary" />

                <div>
                  <p className="font-semibold text-foreground">
                    Timezone
                  </p>

                  <p className="text-muted-foreground">
                    UTC+6 (BST)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-6 w-6 text-primary" />

                <div>
                  <p className="font-semibold text-foreground">
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

            {/* EMAIL CARD */}
            <div className="rounded-2xl border border-border/70 bg-background/80 p-6 backdrop-blur-md">

              <div className="mb-5 flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />

                <p className="text-lg font-semibold text-foreground">
                  Contact Email
                </p>
              </div>

              <div className="space-y-5">

                <div>
                  <p className="mb-1 text-sm text-muted-foreground">
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
                  <p className="mb-1 text-sm text-muted-foreground">
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
                  <p className="mb-1 text-sm text-muted-foreground">
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

            {/* PROFESSIONAL */}
            <div>
              <SectionTitle title="Professional Profiles" />

              <div className="grid gap-4 md:grid-cols-2">
                {professionalLinks.map((link) => (
                  <ProfileCard key={link.name} link={link} />
                ))}
              </div>
            </div>

            {/* RESEARCH + SOCIAL */}
            <div className="grid gap-6 md:grid-cols-2">

              <div>
                <SectionTitle title="Research Profiles" />

                <div className="space-y-4">
                  {researchLinks.map((link) => (
                    <ProfileCard key={link.name} link={link} />
                  ))}
                </div>
              </div>

              <div>
                <SectionTitle title="Social Media Profiles" />

                <div className="space-y-4">
                  {socialLinks.map((link) => (
                    <ProfileCard key={link.name} link={link} />
                  ))}
                </div>
              </div>
            </div>

            {/* PROGRAMMING */}
            <div>
              <SectionTitle title="Programming Profiles" />

              <div className="grid gap-4 md:grid-cols-2">
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
