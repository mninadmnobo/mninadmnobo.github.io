import { ImageResponse } from 'next/og'

import { profile } from '@/lib/data'

/**
 * Social preview card, rendered once at build time into a static PNG.
 *
 * Generated rather than checked in as an asset so it stays in sync with
 * `lib/data/profile.ts` — the previous site had no OG image at all, which meant
 * every share of the URL rendered as a bare link.
 *
 * Only core CSS is available inside `ImageResponse`, so this uses explicit hex
 * values and flex layout rather than the site's theme tokens.
 */
// Required under `output: 'export'` — image routes are treated as dynamic
// unless they opt in to being generated once at build time.
export const dynamic = 'force-static'
export const alt = `${profile.name} — ${profile.titles.join(' · ')}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #12161c 0%, #182029 55%, #12161c 100%)',
          color: '#f2f5f8',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            fontSize: 24,
            color: '#5ec8e0',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
          }}
        >
          <div style={{ width: 48, height: 3, background: '#5ec8e0' }} />
          {profile.currentRole.organization}
        </div>

        <div style={{ display: 'flex', fontSize: 76, fontWeight: 700, marginTop: 28, lineHeight: 1.1 }}>
          {profile.name}
        </div>

        <div style={{ display: 'flex', fontSize: 38, color: '#5ec8e0', marginTop: 20 }}>
          {profile.titles.join('  ·  ')}
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 27,
            color: '#9fadbb',
            marginTop: 26,
            maxWidth: 920,
            lineHeight: 1.45,
          }}
        >
          Computer vision for industrial inspection, multi-agent LLM systems, and medical AI.
        </div>

        <div style={{ display: 'flex', gap: '14px', marginTop: 44 }}>
          {['BUET CSE', 'Computer Vision', 'LLM Systems', 'Medical AI'].map((tag) => (
            <div
              key={tag}
              style={{
                display: 'flex',
                border: '1px solid #38434f',
                borderRadius: 999,
                padding: '10px 22px',
                fontSize: 22,
                color: '#cdd6df',
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  )
}
