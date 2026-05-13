import { Navigation } from "@/components/navigation"
import { Projects } from "@/components/projects"
import { Button } from "@/components/ui/button"
import { Link } from "@/components/ui/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background pb-24">
      <Navigation />
      <Projects />
      <div className="fixed bottom-6 left-6 right-6 z-50 grid grid-cols-3 items-center gap-3">
        <Button asChild variant="outline">
          <Link href="/about/" className="no-underline">
            <ArrowLeft />
            Back: About
          </Link>
        </Button>
        <Button asChild variant="outline" className="justify-self-center">
          <Link href="/" className="no-underline">
            Home
          </Link>
        </Button>
        <Button asChild>
          <Link href="/research/" className="no-underline">
            Next: Research
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </main>
  )
}
