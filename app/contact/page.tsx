import { Navigation } from "@/components/navigation"
import { Contact } from "@/components/contact"
import { ProfessionalForm } from "@/components/professional-form"
import { Button } from "@/components/ui/button"
import { Link } from "@/components/ui/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background pb-24">
      <Navigation />
      <Contact />
      <ProfessionalForm />
      <div className="fixed bottom-6 left-6 right-6 z-50 flex items-center justify-between">
        <Button asChild variant="outline" className="px-6 py-3 text-base md:text-lg">
          <Link href="/tech/" className="no-underline">
            <ArrowLeft />
            Back: Tech Stack
          </Link>
        </Button>
        <Button asChild className="px-6 py-3 text-base md:text-lg">
          <Link href="/" className="no-underline">
            Next: Home
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </main>
  )
}
