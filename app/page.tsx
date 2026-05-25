import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Research } from "@/components/research"
import { TechStack } from "@/components/tech-stack"
import { Contact } from "@/components/contact"
import { ProfessionalForm } from "@/components/professional-form"
import { BackToTop } from "@/components/back-to-top"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Research />
      <TechStack />
      <Contact />
      <div className="flex justify-center px-6 md:px-12 lg:px-24">
        <ProfessionalForm />
      </div>
      <Footer />
      <BackToTop />
    </main>
  )
}
