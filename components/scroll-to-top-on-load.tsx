"use client"

import { useEffect } from "react"

export function ScrollToTopOnLoad() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "auto"
    }
  }, [])

  return null
}
