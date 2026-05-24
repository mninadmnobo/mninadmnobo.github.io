import { copyFile, mkdir } from "node:fs/promises"
import { existsSync } from "node:fs"
import { dirname, join } from "node:path"

const projectRoot = process.cwd()
const outDir = join(projectRoot, "out")
const sourceFile = join(projectRoot, "public", ".nojekyll")
const targetFile = join(outDir, ".nojekyll")

async function ensureNoJekyll() {
  if (!existsSync(sourceFile)) {
    return
  }

  await mkdir(dirname(targetFile), { recursive: true })
  await copyFile(sourceFile, targetFile)
}

ensureNoJekyll().catch((error) => {
  console.error("Failed to copy .nojekyll:", error)
  process.exitCode = 1
})
