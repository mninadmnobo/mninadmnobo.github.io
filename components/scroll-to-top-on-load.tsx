"use client"

import { useEffect } from "react"

export function ScrollToTopOnLoad() {
  useEffect(() => {
    const scrollKey = "scroll-position"

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
    }

    const saveScrollPosition = () => {
      sessionStorage.setItem(scrollKey, String(window.scrollY))
    }

    window.addEventListener("beforeunload", saveScrollPosition)

    if (window.location.hash) {
      const id = window.location.hash.slice(1)
      const target = document.getElementById(id)

      if (target) {
        target.scrollIntoView({ behavior: "auto", block: "start" })
        return () => {
          window.removeEventListener("beforeunload", saveScrollPosition)
        }
      }
    }

    const saved = sessionStorage.getItem(scrollKey)
    if (saved) {
      sessionStorage.removeItem(scrollKey)
      const y = Number(saved)

      if (Number.isFinite(y)) {
        window.scrollTo({ top: y, left: 0, behavior: "auto" })
        return () => {
          window.removeEventListener("beforeunload", saveScrollPosition)
        }
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" })

    return () => {
      window.removeEventListener("beforeunload", saveScrollPosition)
    }
  }, [])

  return null
}
