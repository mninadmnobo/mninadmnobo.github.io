import type { MetadataRoute } from 'next'

import { profile } from '@/lib/data'

/**
 * Emitted as a static `sitemap.xml` at build time.
 *
 * `dynamic = 'force-static'` is required under `output: 'export'` — without it
 * Next treats the route as dynamic and refuses to export it.
 */
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    { url: profile.siteUrl, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${profile.siteUrl}/cv`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${profile.siteUrl}/biodata`, lastModified, changeFrequency: 'yearly', priority: 0.4 },
  ]
}
