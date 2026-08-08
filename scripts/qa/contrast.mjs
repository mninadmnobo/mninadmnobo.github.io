import { chromium } from 'playwright-core'

/**
 * Contrast audit.
 *
 * The site's palette is authored in oklch, so getComputedStyle hands back
 * `lab(...)` / `oklch(...)` strings. Reading those component values as if they
 * were sRGB (the first version of this script did) produces nonsense. Every
 * colour is therefore resolved through a 1x1 canvas: the browser does the
 * conversion and getImageData returns real sRGB bytes, including alpha
 * compositing over a known backdrop.
 */

const BASE = process.env.QA_URL || `http://localhost:${process.env.QA_PORT ?? 4321}`
const browser = await chromium.launch({ channel: 'chrome' })
const report = []

for (const theme of ['dark', 'light']) {
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } })
  const page = await context.newPage()
  await page.addInitScript((t) => localStorage.setItem('theme', t), theme)
  await page.goto(`${BASE}/`, { waitUntil: 'networkidle' })
  await page.evaluate(async () => {
    const step = Math.round(window.innerHeight * 0.6)
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      window.scrollTo({ top: y, behavior: 'instant' })
      await new Promise((r) => setTimeout(r, 80))
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  })
  await page.waitForTimeout(600)

  const issues = await page.evaluate(() => {
    const canvas = document.createElement('canvas')
    canvas.width = canvas.height = 1
    const ctx = canvas.getContext('2d', { willReadFrequently: true })

    /** Resolves any CSS colour to sRGB bytes, compositing over `under`. */
    const toRgb = (color, under = 'white') => {
      ctx.clearRect(0, 0, 1, 1)
      ctx.fillStyle = under
      ctx.fillRect(0, 0, 1, 1)
      ctx.fillStyle = color
      ctx.fillRect(0, 0, 1, 1)
      const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data
      return [r, g, b]
    }

    const lum = ([r, g, b]) => {
      const f = (v) => {
        const s = v / 255
        return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4
      }
      return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b)
    }

    const ratio = (a, b) => {
      const [hi, lo] = [lum(a), lum(b)].sort((p, q) => q - p)
      return (hi + 0.05) / (lo + 0.05)
    }

    const isTransparent = (c) => c === 'transparent' || /,\s*0\)$/.test(c)

    /** Walks ancestors compositing backgrounds until an opaque one is reached. */
    const backdropOf = (el) => {
      const stack = []
      let node = el
      while (node && node !== document.documentElement) {
        const bg = getComputedStyle(node).backgroundColor
        if (!isTransparent(bg)) {
          stack.push(bg)
          const alpha = bg.match(/[\d.]+(?=\s*\)$)/)
          if (!alpha || Number(alpha[0]) >= 1) break
        }
        node = node.parentElement
      }
      const rootBg = getComputedStyle(document.body).backgroundColor
      let base = toRgb(rootBg, 'white')
      for (const layer of stack.reverse()) {
        base = toRgb(layer, `rgb(${base.join(',')})`)
      }
      return base
    }

    const out = []
    const seen = new Set()

    for (const el of document.querySelectorAll(
      'p, span, a, h1, h2, h3, h4, li, button, label, dt, dd, code',
    )) {
      if (el.offsetParent === null) continue
      if (el.closest('.sr-only') || el.classList.contains('sr-only')) continue

      const text = [...el.childNodes]
        .filter((n) => n.nodeType === 3)
        .map((n) => n.textContent.trim())
        .join('')
      if (!text) continue

      const style = getComputedStyle(el)
      if (Number(style.opacity) < 0.99) continue

      const backdrop = backdropOf(el)
      const fg = toRgb(style.color, `rgb(${backdrop.join(',')})`)

      const size = parseFloat(style.fontSize)
      const bold = Number(style.fontWeight) >= 700
      const large = size >= 24 || (size >= 18.66 && bold)
      const required = large ? 3 : 4.5

      const r = ratio(fg, backdrop)
      if (r < required) {
        const key = `${style.color}|${Math.round(size)}|${backdrop.join(',')}`
        if (seen.has(key)) continue
        seen.add(key)
        out.push(
          `${r.toFixed(2)} < ${required}  ${Math.round(size)}px  "${text.slice(0, 40)}"  fg=rgb(${fg}) bg=rgb(${backdrop})`,
        )
      }
    }
    return out
  })

  report.push(`--- ${theme} ---`)
  report.push(issues.length ? issues.join('\n') : 'no contrast failures')
  await context.close()
}

console.log(report.join('\n'))
await browser.close()
