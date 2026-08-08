/**
 * Static file server for the exported site.
 *
 * The QA scripts run against `out/` rather than `next dev` so they exercise
 * exactly what GitHub Pages will serve — same HTML, same hydration, same asset
 * paths. A dev-server run would hide any export-only problem.
 *
 *   node scripts/qa/serve.mjs
 */
import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { join, extname, resolve } from 'node:path'

const ROOT = resolve(import.meta.dirname, '../../out')
const PORT = Number(process.env.QA_PORT ?? 4321)

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.woff2': 'font/woff2',
  '.pdf': 'application/pdf',
  '.txt': 'text/plain; charset=utf-8',
  '.tex': 'text/plain; charset=utf-8',
  '.xml': 'application/xml',
  '.json': 'application/json',
}

createServer(async (req, res) => {
  const url = decodeURIComponent((req.url || '/').split('?')[0])

  // Mirrors the `trailingSlash: true` export layout: /cv/ -> out/cv/index.html
  const candidates = [join(ROOT, url), join(ROOT, url, 'index.html'), join(ROOT, `${url}.html`)]

  for (const candidate of candidates) {
    try {
      if (!(await stat(candidate)).isFile()) continue
      res.writeHead(200, {
        'Content-Type': TYPES[extname(candidate)] || 'application/octet-stream',
      })
      res.end(await readFile(candidate))
      return
    } catch {
      // try the next candidate
    }
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' })
  res.end('not found')
}).listen(PORT, () => console.log(`QA server: http://localhost:${PORT} -> ${ROOT}`))
