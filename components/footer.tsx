import { Link } from "@/components/ui/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="text-sm font-semibold text-foreground">
          Mohammad Ninad Mahmud Nobo
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <Link href="https://github.com/mninadmnobo" className="no-underline hover:text-foreground">
            GitHub
          </Link>
          <Link href="https://linkedin.com/in/mninadmnobo" className="no-underline hover:text-foreground">
            LinkedIn
          </Link>
          <Link href="https://scholar.google.com/citations?user=y5-A2oAAAAAJ&hl=en&oi=ao" className="no-underline hover:text-foreground">
            Google Scholar
          </Link>
          <Link href="/cv" className="no-underline hover:text-foreground">
            CV
          </Link>
        </div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  )
}
