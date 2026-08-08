import { chromium } from 'playwright-core'
import { mkdir } from 'node:fs/promises'
import { resolve } from 'node:path'

const BASE = process.env.QA_URL || `http://localhost:${process.env.QA_PORT ?? 4321}`
const OUT = resolve(import.meta.dirname, '../../.qa-shots')

const WIDTHS = [320, 375, 390, 430, 768, 1024, 1280, 1440, 1920]

await mkdir(OUT, { recursive: true })

const browser = await chromium.launch({ channel: 'chrome' })
const problems = []

async function checkOverflow(page, tag) {
  const result = await page.evaluate(() => {
    const docWidth = document.documentElement.clientWidth
    const offenders = []
    for (const el of document.querySelectorAll('body *')) {
      const rect = el.getBoundingClientRect()
      if (rect.width === 0 || rect.height === 0) continue
      if (rect.right > docWidth + 1 || rect.left < -1) {
        offenders.push({
          tag: el.tagName.toLowerCase(),
          cls: (el.className || '').toString().slice(0, 90),
          left: Math.round(rect.left),
          right: Math.round(rect.right),
        })
      }
    }
    return {
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: docWidth,
      bodyScroll: document.body.scrollWidth,
      offenders: offenders.slice(0, 8),
    }
  })

  if (result.scrollWidth > result.clientWidth + 1) {
    problems.push(`[${tag}] horizontal overflow: scrollWidth=${result.scrollWidth} clientWidth=${result.clientWidth}`)
    for (const o of result.offenders) problems.push(`    -> <${o.tag} class="${o.cls}"> l=${o.left} r=${o.right}`)
  }
  return result
}

for (const theme of ['dark', 'light']) {
  for (const width of WIDTHS) {
    const context = await browser.newContext({
      viewport: { width, height: 900 },
      deviceScaleFactor: 1,
      hasTouch: width < 768,
      isMobile: width < 768,
    })
    const page = await context.newPage()
    await page.addInitScript((t) => localStorage.setItem('theme', t), theme)
    await page.goto(`${BASE}/`, { waitUntil: 'networkidle' })
    // Trigger every reveal so full-page shots are not blank.
    await page.evaluate(async () => {
      // 'instant' is required: the site sets scroll-behavior: smooth, so a plain
      // scrollTo animates and the observers never catch up.
      const step = Math.round(window.innerHeight * 0.6)
      for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
        window.scrollTo({ top: y, behavior: 'instant' })
        await new Promise((r) => setTimeout(r, 120))
      }
      window.scrollTo({ top: 0, behavior: 'instant' })
    })
    await page.waitForTimeout(900)

    await checkOverflow(page, `${theme}/${width}`)
    await page.screenshot({ path: `${OUT}/home-${theme}-${width}.png`, fullPage: true })
    await context.close()
  }
}

console.log(problems.length ? problems.join('\n') : 'NO OVERFLOW ISSUES')
await browser.close()
