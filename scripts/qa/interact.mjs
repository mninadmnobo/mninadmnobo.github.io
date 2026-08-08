import { chromium } from 'playwright-core'

const BASE = process.env.QA_URL || `http://localhost:${process.env.QA_PORT ?? 4321}`
const results = []
const ok = (m) => results.push(`PASS  ${m}`)
const bad = (m) => results.push(`FAIL  ${m}`)

const browser = await chromium.launch({ channel: 'chrome' })

async function page(width = 1280, height = 900, opts = {}) {
  const context = await browser.newContext({
    viewport: { width, height },
    hasTouch: width < 768,
    isMobile: width < 768,
    ...opts,
  })
  const p = await context.newPage()
  await p.goto(`${BASE}/`, { waitUntil: 'networkidle' })
  await p.evaluate(async () => {
    const step = Math.round(window.innerHeight * 0.6)
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      window.scrollTo({ top: y, behavior: 'instant' })
      await new Promise((r) => setTimeout(r, 90))
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  })
  await p.waitForTimeout(500)
  return { context, p }
}

/* ---- 1. anchor navigation clears the sticky header ---------------------- */
{
  const { context, p } = await page()
  for (const id of ['about', 'experience', 'research', 'projects', 'skills', 'contact']) {
    await p.evaluate((i) => {
      document.querySelector(`a[href="#${i}"]`)?.click()
    }, id)
    await p.waitForTimeout(900)
    const { top, headerBottom } = await p.evaluate((i) => {
      const el = document.getElementById(i)
      const header = document.querySelector('header')
      return {
        top: el.getBoundingClientRect().top,
        headerBottom: header.getBoundingClientRect().bottom,
      }
    }, id)
    if (top >= headerBottom - 1) ok(`#${id} clears header (top=${Math.round(top)} header=${Math.round(headerBottom)})`)
    else bad(`#${id} hidden under header (top=${Math.round(top)} header=${Math.round(headerBottom)})`)
  }
  await context.close()
}

/* ---- 2. dialog keyboard contract --------------------------------------- */
{
  const { context, p } = await page()
  const trigger = p.getByRole('button', { name: 'View details for FABINS' })
  await trigger.scrollIntoViewIfNeeded()
  await trigger.focus()
  await p.keyboard.press('Enter')
  await p.waitForTimeout(400)

  const dialogCount = await p.locator('[role="dialog"]').count()
  dialogCount === 1 ? ok('dialog opens with Enter') : bad(`dialog count ${dialogCount}`)

  const labelled = await p.locator('[role="dialog"]').getAttribute('aria-labelledby')
  const labelText = labelled ? await p.locator(`#${labelled}`).textContent() : null
  labelText?.includes('FABINS') ? ok(`dialog labelled by "${labelText}"`) : bad('dialog aria-labelledby broken')

  const focusInside = await p.evaluate(
    () => !!document.querySelector('[role="dialog"]')?.contains(document.activeElement),
  )
  focusInside ? ok('focus moves inside dialog') : bad('focus not moved into dialog')

  const bodyLocked = await p.evaluate(() => getComputedStyle(document.body).overflow)
  bodyLocked === 'hidden' ? ok('body scroll locked') : bad(`body overflow = ${bodyLocked}`)

  const inertApplied = await p.evaluate(() => document.querySelector('header')?.hasAttribute('inert'))
  inertApplied ? ok('background marked inert') : bad('background not inert')

  // Tab all the way round and confirm focus never escapes.
  let escaped = false
  for (let i = 0; i < 40; i += 1) {
    await p.keyboard.press('Tab')
    const inside = await p.evaluate(
      () => !!document.querySelector('[role="dialog"]')?.contains(document.activeElement),
    )
    if (!inside) {
      escaped = true
      break
    }
  }
  escaped ? bad('focus escaped the dialog while tabbing') : ok('focus trapped across 40 tabs')

  await p.keyboard.press('Escape')
  await p.waitForTimeout(400)
  const closed = (await p.locator('[role="dialog"]').count()) === 0
  closed ? ok('Escape closes dialog') : bad('Escape did not close dialog')

  const restored = await p.evaluate(
    () => document.activeElement?.getAttribute('aria-label') || document.activeElement?.tagName,
  )
  restored === 'View details for FABINS'
    ? ok('focus restored to trigger')
    : bad(`focus restored to "${restored}"`)

  const unlocked = await p.evaluate(() => getComputedStyle(document.body).overflow)
  unlocked !== 'hidden' ? ok('body scroll released') : bad('body still locked after close')

  const inertCleared = await p.evaluate(() => !document.querySelector('header')?.hasAttribute('inert'))
  inertCleared ? ok('inert cleared on close') : bad('inert left on background')

  await context.close()
}

/* ---- 3. backdrop click closes ------------------------------------------ */
{
  const { context, p } = await page()
  const t = p.getByRole('button', { name: 'View details for MedCAR' })
  await t.scrollIntoViewIfNeeded()
  await t.click()
  await p.waitForTimeout(400)
  await p.mouse.click(20, 20)
  await p.waitForTimeout(400)
  ;(await p.locator('[role="dialog"]').count()) === 0
    ? ok('backdrop click closes dialog')
    : bad('backdrop click did not close dialog')
  await context.close()
}

/* ---- 4. carousel ------------------------------------------------------- */
{
  const { context, p } = await page(1024)
  const rail = p.locator('#research .snap-rail')
  await rail.scrollIntoViewIfNeeded()
  await p.waitForTimeout(300)
  const before = await rail.evaluate((el) => el.scrollLeft)
  await p.locator('#research').getByRole('button', { name: 'Next item' }).click()
  await p.waitForTimeout(800)
  const after = await rail.evaluate((el) => el.scrollLeft)
  after > before ? ok(`carousel advances (${before} -> ${after})`) : bad(`carousel did not move (${before} -> ${after})`)

  await p.locator('#research').getByRole('button', { name: 'Previous item' }).click()
  await p.waitForTimeout(800)
  const back = await rail.evaluate((el) => el.scrollLeft)
  back < after ? ok(`carousel goes back (${after} -> ${back})`) : bad(`carousel prev broken (${after} -> ${back})`)
  await context.close()
}

/* ---- 5. filtering and progressive disclosure --------------------------- */
{
  const { context, p } = await page()
  await p.locator('#projects').scrollIntoViewIfNeeded()
  await p.waitForTimeout(300)

  const initial = await p.locator('#projects article').count()
  initial === 4 ? ok('4 featured projects shown initially') : bad(`expected 4 featured, got ${initial}`)

  await p.getByRole('button', { name: 'View all projects (8)' }).click()
  await p.waitForTimeout(500)
  const all = await p.locator('#projects article').count()
  all === 8 ? ok('all 8 projects shown after expand') : bad(`expected 8, got ${all}`)

  await p.getByRole('button', { name: 'Show fewer' }).click()
  await p.waitForTimeout(700)
  const collapsed = await p.locator('#projects article').count()
  collapsed === 4 ? ok('collapse returns to 4') : bad(`collapse gave ${collapsed}`)

  for (const [filter, expected] of [
    ['Security', 1],
    ['Embedded', 1],
    ['Full-Stack', 4],
    ['AI/ML', 2],
    ['Systems', 4],
  ]) {
    await p.getByRole('button', { name: filter, exact: true }).click()
    await p.waitForTimeout(350)
    const n = await p.locator('#projects article').count()
    n === expected ? ok(`filter ${filter} -> ${n}`) : bad(`filter ${filter} -> ${n}, expected ${expected}`)
  }
  await context.close()
}

/* ---- 6. mobile menu ---------------------------------------------------- */
{
  const { context, p } = await page(390, 844)
  await p.getByRole('button', { name: 'Open menu' }).click()
  await p.waitForTimeout(350)
  const locked = await p.evaluate(() => getComputedStyle(document.body).overflow)
  locked === 'hidden' ? ok('mobile menu locks body scroll') : bad(`menu body overflow = ${locked}`)

  const expanded = await p.getByRole('button', { name: 'Close menu' }).getAttribute('aria-expanded')
  expanded === 'true' ? ok('menu button reports aria-expanded') : bad(`aria-expanded = ${expanded}`)

  await p.locator('#mobile-menu a[href="#projects"]').click()
  await p.waitForTimeout(900)
  const gone = (await p.locator('#mobile-menu').count()) === 0
  gone ? ok('menu closes after navigating') : bad('menu stayed open after navigation')

  const released = await p.evaluate(() => getComputedStyle(document.body).overflow)
  released !== 'hidden' ? ok('body scroll released after menu close') : bad('body still locked')

  await p.getByRole('button', { name: 'Open menu' }).click()
  await p.waitForTimeout(300)
  await p.keyboard.press('Escape')
  await p.waitForTimeout(300)
  ;(await p.locator('#mobile-menu').count()) === 0 ? ok('Escape closes mobile menu') : bad('Escape left menu open')
  await context.close()
}

/* ---- 7. accessibility sweep -------------------------------------------- */
{
  const { context, p } = await page(1280)
  const audit = await p.evaluate(() => {
    const issues = []

    const headings = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].map((h) =>
      Number(h.tagName[1]),
    )
    if (headings.filter((l) => l === 1).length !== 1) {
      issues.push(`expected exactly one h1, found ${headings.filter((l) => l === 1).length}`)
    }
    for (let i = 1; i < headings.length; i += 1) {
      if (headings[i] - headings[i - 1] > 1) {
        issues.push(`heading jump h${headings[i - 1]} -> h${headings[i]}`)
        break
      }
    }

    for (const a of document.querySelectorAll('a[target="_blank"]')) {
      const rel = a.getAttribute('rel') || ''
      if (!rel.includes('noopener')) issues.push(`external link missing rel=noopener: ${a.href}`)
    }

    const nameOf = (el) =>
      (el.getAttribute('aria-label') || el.textContent || el.getAttribute('title') || '').trim()
    for (const el of document.querySelectorAll('a, button')) {
      if (el.offsetParent === null) continue
      if (!nameOf(el)) issues.push(`unnamed ${el.tagName.toLowerCase()}: ${el.outerHTML.slice(0, 110)}`)
    }

    for (const img of document.querySelectorAll('img')) {
      if (!img.hasAttribute('alt')) issues.push(`img missing alt: ${img.src}`)
    }

    // WCAG 2.5.8 exempts targets inside a run of text, and a control whose
    // ::after overlay spans a whole card is larger than its own box.
    for (const el of document.querySelectorAll('button, a[href]')) {
      if (el.offsetParent === null) continue
      if (el.closest('.sr-only') || el.classList.contains('sr-only')) continue
      if (el.closest('p')) continue
      if (getComputedStyle(el, '::after').position === 'absolute') continue
      const r = el.getBoundingClientRect()
      if (r.height > 0 && (r.height < 24 || r.width < 24))
        issues.push(`small target ${Math.round(r.width)}x${Math.round(r.height)}: "${nameOf(el).slice(0, 40)}"`)
    }

    return issues
  })

  audit.length === 0 ? ok('a11y sweep clean') : audit.forEach((i) => bad(`a11y: ${i}`))
  await context.close()
}

/* ---- 8. reduced motion ------------------------------------------------- */
{
  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    reducedMotion: 'reduce',
  })
  const p = await context.newPage()
  await p.goto(`${BASE}/`, { waitUntil: 'networkidle' })
  await p.evaluate(async () => {
    const step = Math.round(window.innerHeight * 0.6)
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      window.scrollTo({ top: y, behavior: 'instant' })
      await new Promise((r) => setTimeout(r, 90))
    }
  })
  await p.waitForTimeout(800)

  const stuck = await p.evaluate(() =>
    [...document.querySelectorAll('.reveal')]
      .filter((el) => Number(getComputedStyle(el).opacity) < 0.99)
      .map((el) => el.className.slice(0, 60)),
  )
  stuck.length === 0
    ? ok('reduced motion: every revealed block ends fully visible')
    : bad(`reduced motion: ${stuck.length} stuck hidden -> ${stuck.join(' | ')}`)

  const animated = await p.evaluate(() => {
    const el = document.querySelector('.reveal[data-visible="true"]')
    return el ? getComputedStyle(el).animationDuration : 'none'
  })
  parseFloat(animated) < 0.01
    ? ok(`reduced motion: animation collapsed (${animated})`)
    : bad(`reduced motion: animation still ${animated}`)
  await context.close()
}

/* ---- 9. no console errors ---------------------------------------------- */
{
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } })
  const p = await context.newPage()
  const errors = []
  p.on('console', (m) => m.type() === 'error' && errors.push(m.text()))
  p.on('pageerror', (e) => errors.push(String(e)))
  await p.goto(`${BASE}/`, { waitUntil: 'networkidle' })
  await p.waitForTimeout(1200)
  for (const route of ['/cv/', '/biodata/']) {
    await p.goto(`${BASE}${route}`, { waitUntil: 'networkidle' })
    await p.waitForTimeout(1200)
  }
  errors.length === 0 ? ok('no console errors on any route') : errors.forEach((e) => bad(`console: ${e}`))
  await context.close()
}

console.log(results.join('\n'))
console.log(`\n${results.filter((r) => r.startsWith('FAIL')).length} failures / ${results.length} checks`)
await browser.close()
