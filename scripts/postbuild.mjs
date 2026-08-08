import { readFile, readdir, rename, writeFile, copyFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { extname, join } from 'node:path'

/**
 * Post-processing for the static export.
 *
 * Two jobs, both of them things GitHub Pages needs and `next build` does not do:
 *
 * 1. `.nojekyll` — Pages runs Jekyll over the published tree by default, and
 *    Jekyll skips directories beginning with an underscore. Without this marker
 *    the entire `_next/` directory is dropped and the site loads unstyled.
 *
 * 2. The OpenGraph image — Next writes it to `out/opengraph-image`, with no file
 *    extension. Pages picks a Content-Type from the extension, so an
 *    extensionless file is served as `application/octet-stream`, which every
 *    social crawler rejects. The file is renamed to `og.png` and the references
 *    in the exported HTML are repointed at it.
 */

const OUT_DIR = new URL('../out/', import.meta.url).pathname
const outDir = process.platform === 'win32' ? OUT_DIR.replace(/^\//, '') : OUT_DIR

const OG_SOURCE = join(outDir, 'opengraph-image')
const OG_TARGET = join(outDir, 'og.png')
const REWRITABLE = new Set(['.html', '.txt', '.xml', '.json'])

async function ensureNoJekyll() {
  const source = join(outDir, '..', 'public', '.nojekyll')
  const target = join(outDir, '.nojekyll')

  if (existsSync(source)) {
    await copyFile(source, target)
  } else {
    await writeFile(target, '')
  }
}

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) {
      yield* walk(path)
    } else {
      yield path
    }
  }
}

async function fixOpenGraphImage() {
  if (!existsSync(OG_SOURCE)) return

  await rename(OG_SOURCE, OG_TARGET)

  // Next appends a content hash as a query string, e.g.
  // `/opengraph-image?bc3c5d66e19f029d`. Both the hashed and bare forms are
  // rewritten so the tags point at a file the server will type correctly.
  const pattern = /\/opengraph-image(\?[a-z0-9]+)?/gi
  let rewritten = 0

  for await (const file of walk(outDir)) {
    if (!REWRITABLE.has(extname(file))) continue

    const contents = await readFile(file, 'utf8')
    if (!pattern.test(contents)) continue

    pattern.lastIndex = 0
    await writeFile(file, contents.replace(pattern, '/og.png'))
    rewritten += 1
  }

  console.log(`postbuild: og.png written, ${rewritten} file(s) repointed`)
}

async function main() {
  if (!existsSync(outDir)) {
    console.log('postbuild: no out/ directory, nothing to do')
    return
  }

  await ensureNoJekyll()
  await fixOpenGraphImage()
}

main().catch((error) => {
  console.error('postbuild failed:', error)
  process.exitCode = 1
})
