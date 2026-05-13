import { Navigation } from "@/components/navigation"
import { TechStack } from "@/components/tech-stack"
import { Button } from "@/components/ui/button"
import { Link } from "@/components/ui/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function TechPage() {
  return (
    <main className="min-h-screen bg-background pb-24">
      <Navigation />
      <TechStack />
      <div className="fixed bottom-6 left-6 right-6 z-50 flex items-center justify-between">
        <Button asChild variant="outline" className="px-6 py-3.5 text-sm md:text-base">
          <Link href="/research/" className="no-underline inline-flex items-center gap-2">
            <ArrowLeft />
            Back: Research
          </Link>
        </Button>
        <Button asChild className="px-6 py-3.5 text-sm md:text-base">
          <Link href="/contact/" className="no-underline inline-flex items-center gap-2">
            Next: Contact
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </main>
  )
}
