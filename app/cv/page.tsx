"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Link } from "@/components/ui/link"

// Use provided Overleaf share URL by default; can be overridden via env: NEXT_PUBLIC_OVERLEAF_URL
const OVERLEAF_URL = process.env.NEXT_PUBLIC_OVERLEAF_URL ?? "https://www.overleaf.com/read/ynxpmkthmrds#abfcd6"

export default function CVPage() {
  const [latex, setLatex] = useState<string>("")
  const [loading, setLoading] = useState(true)
  const darkHoverClassName = "dark:hover:!bg-primary/90 dark:hover:!text-primary-foreground dark:hover:!border-primary"

  useEffect(() => {
    const fetchTex = async () => {
      try {
        const res = await fetch("/Mohammad_Ninad_Mahmud_Nobo_CV.tex")
        if (!res.ok) throw new Error("Not found")
        const text = await res.text()
        setLatex(text)
      } catch (e) {
        setLatex("LaTeX source not found. Please add Mohammad_Ninad_Mahmud_Nobo_CV.tex to /public.")
      } finally {
        setLoading(false)
      }
    }

    fetchTex()
  }, [])

  const copyLatex = async () => {
    if (!latex) return
    await navigator.clipboard.writeText(latex)
    alert("LaTeX copied to clipboard")
  }

  return (
    <main className="min-h-screen px-6 md:px-12 lg:px-24 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Mohammad Ninad Mahmud Nobo — CV</h1>
        <p className="text-muted-foreground mb-6">View the PDF and LaTeX source, open or download either file.</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="mb-3 flex gap-3">
              {OVERLEAF_URL && (
                <a href={OVERLEAF_URL} target="_blank" rel="noopener noreferrer" className="no-underline">
                  <Button variant="outline" className={darkHoverClassName}>Open on Overleaf</Button>
                </a>
              )}
              <a href="/Mohammad_Ninad_Mahmud_Nobo_CV.pdf" target="_blank" rel="noreferrer" className="no-underline">
                <Button variant="outline" className={darkHoverClassName}>Open PDF in new tab</Button>
              </a>
              <a href="/Mohammad_Ninad_Mahmud_Nobo_CV.pdf" download className="no-underline">
                <Button variant="outline" className={darkHoverClassName}>Download PDF</Button>
              </a>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <iframe
                title="CV PDF"
                src="/Mohammad_Ninad_Mahmud_Nobo_CV.pdf"
                className="w-full h-[700px]"
              />
            </div>
          </div>

          <div>
            <div className="mb-3 flex gap-3">
              <a href="/Mohammad_Ninad_Mahmud_Nobo_CV.tex" download className="no-underline">
                <Button variant="outline" className={darkHoverClassName}>Download LaTeX</Button>
              </a>
              <Button variant="outline" className={darkHoverClassName} onClick={copyLatex}>Copy LaTeX</Button>
            </div>

            <div>
              {loading ? (
                <div className="text-muted-foreground">Loading LaTeX...</div>
              ) : (
                <textarea
                  readOnly
                  value={latex}
                  className="w-full h-[700px] p-4 font-mono text-sm bg-surface border rounded-lg"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
