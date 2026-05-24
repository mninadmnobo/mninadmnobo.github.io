import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Research } from "@/components/research"
import { TechStack } from "@/components/tech-stack"
import { Contact } from "@/components/contact"
import { BackToTop } from "@/components/back-to-top"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Research />
      <TechStack />
      <Contact />
      <BackToTop />
    </main>
  )
}
