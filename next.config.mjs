/**
 * The site is exported as static HTML and served from GitHub Pages, so there is
 * no Node runtime at request time: no route handlers, no server actions, no
 * on-demand image optimization.
 *
 * `basePath` is empty for the user site (`mninadmnobo.github.io`) and set to
 * `/<repo>` by the deploy workflow for any other repository, so the same build
 * works from either location.
 */
import { networkInterfaces } from 'node:os'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

/**
 * LAN addresses this machine currently answers on.
 *
 * Testing the responsive layout on a real phone means loading the dev server
 * over the network, and Next blocks cross-origin dev requests (HMR included)
 * unless the origin is allowed. Reading the addresses from the machine rather
 * than hardcoding one means this keeps working when DHCP hands out a different
 * address, and works for anyone who clones the repo.
 *
 * Dev-only: `allowedDevOrigins` has no effect on `next build`, and none of this
 * reaches the exported site. Set `DEV_ORIGINS` (comma-separated) to add a
 * tunnel host such as an ngrok domain.
 */
const localNetworkOrigins = Object.values(networkInterfaces())
  .flat()
  .filter((iface) => iface?.family === 'IPv4' && !iface.internal)
  .map((iface) => iface.address)

const extraDevOrigins = (process.env.DEV_ORIGINS ?? '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean)

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  allowedDevOrigins: [...localNetworkOrigins, ...extraDevOrigins],
  images: {
    // Next's optimizer needs a server; a static export has to ship the originals.
    unoptimized: true,
  },
}

export default nextConfig
