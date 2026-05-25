"use client"

import { useEffect } from "react"

export function ScrollToTopOnLoad() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
    }

    if (window.location.hash) {
      const id = window.location.hash.slice(1)
      const target = document.getElementById(id)

      if (target) {
        target.scrollIntoView({ behavior: "auto", block: "start" })
        return
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
  }, [])

  return null
}
