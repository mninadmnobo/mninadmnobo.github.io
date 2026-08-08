# Deployment

Live at **https://mninadmnobo.github.io**. Every push to `main` deploys automatically via
[`.github/workflows/deploy-pages.yml`](../.github/workflows/deploy-pages.yml).

## Pipeline

```
push to main
  └─ checkout, Node 22, pnpm 10.9.0
  └─ resolve NEXT_PUBLIC_BASE_PATH from the repository name
  └─ pnpm install --frozen-lockfile
  └─ pnpm lint          ← blocks the deploy
  └─ pnpm typecheck     ← blocks the deploy
  └─ pnpm build         ← next build, then postbuild
  └─ verify export      ← asserts .nojekyll, og.png, index.html exist
  └─ upload-pages-artifact (./out)
  └─ deploy-pages
```

There is no manual step. `workflow_dispatch` allows a re-run without a commit.

---

## One-time repository setup

**Settings → Pages → Source → GitHub Actions.** If it is set to "Deploy from a branch" the
workflow uploads an artifact that never gets served.

The workflow already declares what it needs:

```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

---

## Base path

The same build works from the user site and from a project repository. The workflow compares
the repository name against `<owner>.github.io`:

| Repository | `NEXT_PUBLIC_BASE_PATH` | Serves from |
| :--- | :--- | :--- |
| `mninadmnobo.github.io` | `''` | `https://mninadmnobo.github.io/` |
| anything else | `/<repo>` | `https://mninadmnobo.github.io/<repo>/` |

`components/ui/link.tsx` prefixes internal hrefs, so no data file records where the site is
mounted. To test a subpath build locally:

```bash
NEXT_PUBLIC_BASE_PATH=/portfolio pnpm build
```

---

## What `postbuild` fixes

[`scripts/postbuild.mjs`](../scripts/postbuild.mjs) does two things `next build` does not.
Both are GitHub Pages specific, and both are asserted in CI.

### `.nojekyll`

Pages runs Jekyll over the published tree by default, and Jekyll ignores directories starting
with an underscore. Without this marker the whole `_next/` directory is dropped and the site
loads as unstyled HTML with no JavaScript.

### `og.png`

Next writes the generated OpenGraph card to `out/opengraph-image` — **with no file
extension**. Pages picks a `Content-Type` from the extension, so an extensionless file is
served as `application/octet-stream`, and every social crawler rejects it. `postbuild` renames
it to `og.png` and repoints the `og:image` and `twitter:image` tags in the exported HTML.

`app/opengraph-image.tsx` also needs `export const dynamic = 'force-static'`; without it,
`output: 'export'` fails the build outright because image routes are treated as dynamic.

---

## Verifying a deploy

```bash
curl -sI https://mninadmnobo.github.io/og.png | grep -i content-type
# expect: content-type: image/png

curl -s https://mninadmnobo.github.io/ | grep -o 'og:image[^>]*'
curl -sI https://mninadmnobo.github.io/_next/static/ | head -1
curl -s https://mninadmnobo.github.io/sitemap.xml
```

Then paste the URL into a social debugger (LinkedIn Post Inspector, Facebook Sharing
Debugger) to confirm the card renders and to bust their cache.

---

## Troubleshooting

| Symptom | Cause | Fix |
| :--- | :--- | :--- |
| Site loads unstyled, no JS | `.nojekyll` missing — Jekyll stripped `_next/` | Confirm `postbuild` ran; CI's verify step catches this |
| Link preview shows no image | `og.png` served with the wrong content type | Check `curl -sI …/og.png`; re-run `postbuild` |
| 404 on every asset | `basePath` mismatch | Check the workflow's resolved `NEXT_PUBLIC_BASE_PATH` against the repository name |
| Build fails on `/opengraph-image` | Missing `dynamic = 'force-static'` | Restore it in `app/opengraph-image.tsx` |
| Contact form silently fails | Domain not allowed in EmailJS | Add the origin to the allowed-domains list in the EmailJS dashboard |
| Deploy succeeds, nothing changes | Pages source set to a branch | Settings → Pages → Source → GitHub Actions |
| `pnpm install --frozen-lockfile` fails | `pnpm-lock.yaml` out of date | Run `pnpm install` locally and commit the lockfile |

---

## Custom domain

1. Add the domain in Settings → Pages.
2. Add `public/CNAME` containing the bare domain — it is copied into `out/` by the export.
3. Update `profile.siteUrl` in `lib/data/profile.ts`. It feeds `metadataBase`, canonical
   URLs, the sitemap, robots and the JSON-LD, so it is the only place the URL is written.
