import { Link } from "@/components/ui/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="text-sm font-semibold text-foreground">
          Mohammad Ninad Mahmud Nobo
        </div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  )
}
