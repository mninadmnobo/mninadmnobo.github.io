import { Navigation } from "@/components/navigation"
import { About } from "@/components/about"
import { Button } from "@/components/ui/button"
import { Link } from "@/components/ui/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background pb-24">
      <Navigation />
      <About />
      <div className="fixed bottom-6 left-6 right-6 z-50 flex items-center justify-between">
        <Button asChild variant="outline" className="px-6 py-3.5 text-sm md:text-base">
          <Link href="/" className="no-underline inline-flex items-center gap-2">
            <ArrowLeft />
            Back: Home
          </Link>
        </Button>
        <Button asChild className="px-6 py-3.5 text-sm md:text-base">
          <Link href="/projects/" className="no-underline inline-flex items-center gap-2">
            Next: Projects
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </main>
  )
}
