import { useHead } from '@unhead/vue'

export const SITE_URL = 'https://sendoraapp.com'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`

type JsonLd = Record<string, unknown>

export interface SeoInput {
  /** Page <title>. A " | Sendora" suffix is added unless the title already mentions Sendora. */
  title: string
  description: string
  /** Absolute or root-relative path; resolved against the canonical site URL. */
  path: string
  image?: string
  /** og:type - "website" (default) for pages, "article" for blog posts. */
  type?: 'website' | 'article'
  keywords?: string
  /** Set true on pages that should not be indexed (none today, but handy). */
  noindex?: boolean
  /** One or several schema.org objects injected as <script type="application/ld+json">. */
  jsonLd?: JsonLd | JsonLd[]
}

/** Resolve a path (or full URL) to an absolute canonical URL. */
export function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

function withBrand(title: string): string {
  return /sendora/i.test(title) ? title : `${title} | Sendora`
}

/**
 * Single source of truth for a page's <head>. Works during SSG (unhead renders
 * the tags straight into the prerendered HTML) and on the client. Call it once,
 * at the top of a view's <script setup>.
 */
export function useSeo(input: SeoInput): void {
  const title = withBrand(input.title)
  const url = absoluteUrl(input.path)
  const image = input.image ? absoluteUrl(input.image) : DEFAULT_IMAGE
  const type = input.type ?? 'website'

  const meta = [
    { name: 'description', content: input.description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: input.description },
    { property: 'og:url', content: url },
    { property: 'og:type', content: type },
    { property: 'og:image', content: image },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: input.description },
    { name: 'twitter:image', content: image },
  ]

  if (input.keywords) meta.push({ name: 'keywords', content: input.keywords })
  if (input.noindex) {
    meta.push({ name: 'robots', content: 'noindex, nofollow' })
  } else {
    meta.push({
      name: 'robots',
      content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    })
  }

  const blocks = input.jsonLd
    ? Array.isArray(input.jsonLd)
      ? input.jsonLd
      : [input.jsonLd]
    : []

  useHead({
    // vite-ssg renders <html lang="en"> by default; force French on every page.
    htmlAttrs: { lang: 'fr' },
    title,
    meta,
    link: [{ rel: 'canonical', href: url }],
    script: blocks.map((obj) => ({
      type: 'application/ld+json',
      innerHTML: JSON.stringify(obj),
    })),
  })
}
