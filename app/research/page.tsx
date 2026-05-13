import { Navigation } from "@/components/navigation"
import { Research } from "@/components/research"
import { Button } from "@/components/ui/button"
import { Link } from "@/components/ui/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-background pb-24">
      <Navigation />
      <Research />
      <div className="fixed bottom-6 left-6 right-6 z-50 flex items-center justify-between">
        <Button asChild variant="outline" className="px-6 py-3 text-base md:text-lg">
          <Link href="/projects/" className="no-underline">
            <ArrowLeft />
            Back: Projects
          </Link>
        </Button>
        <Button asChild className="px-6 py-3 text-base md:text-lg">
          <Link href="/tech/" className="no-underline">
            Next: Tech Stack
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </main>
  )
}
