 export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background/70 px-6 py-6 backdrop-blur-md md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Mohammad Ninad Mahmud Nobo. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
