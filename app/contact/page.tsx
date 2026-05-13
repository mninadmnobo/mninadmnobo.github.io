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
      <div className="fixed top-20 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 flex justify-end">
          <Button asChild variant="outline">
            <Link href="/" className="no-underline">
              Home
            </Link>
          </Button>
        </div>
      </div>
      <Contact />
      <ProfessionalForm />
      <div className="fixed bottom-6 left-6 right-6 z-50 flex items-center justify-between">
        <Button asChild variant="outline">
          <Link href="/tech/" className="no-underline">
            <ArrowLeft />
            Back: Tech Stack
          </Link>
        </Button>
        <Button asChild>
          <Link href="/" className="no-underline">
            Next: Overview
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </main>
  )
}
