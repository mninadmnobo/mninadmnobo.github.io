/**
 * Build-time configuration.
 *
 * Everything here is inlined into the static bundle — this site is exported with
 * `output: 'export'` and has no server at runtime, so nothing secret can live in
 * these values. The EmailJS identifiers below are publishable by design: the
 * service authenticates the *origin*, not the key, so the protection that
 * matters is the allowed-domains list in the EmailJS dashboard, not secrecy.
 *
 * Anything that must stay private has to go through a real backend. Do not add
 * an API token, SMTP password or database URL to this file.
 */
export const emailConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? 'service_pwa7i9a',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? 'template_ughtohx',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? 'pvZuKpjsmwgZAosMl',
} as const

/**
 * Prefix applied when the site is served from a repository subpath rather than
 * the user domain. Empty for `mninadmnobo.github.io`; the deploy workflow sets
 * it for any other repository name.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''