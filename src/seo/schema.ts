/**
 * schema.org / JSON-LD builders shared across pages.
 *
 * Global graph nodes (Organization, WebSite) live statically in index.html so
 * they appear on every prerendered page. The builders here produce page-specific
 * structured data injected via useSeo({ jsonLd }).
 */

export const SITE_URL = 'https://sendoraapp.com'
export const ORG_ID = `${SITE_URL}/#organization`
export const APP_STORE_URL = 'https://apps.apple.com/fr/app/sendora/id6773115334'
export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.sendoraapp'

type Json = Record<string, unknown>

/** Lightweight reference to the global Organization node defined in index.html. */
export const orgRef = { '@id': ORG_ID }

export interface FaqItem {
  q: string
  a: string
}

export function faqPage(items: FaqItem[]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  }
}

export interface BreadcrumbEntry {
  name: string
  path: string
}

export function breadcrumb(entries: BreadcrumbEntry[]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: entries.map((e, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: e.name,
      item: `${SITE_URL}${e.path}`,
    })),
  }
}

export interface HowToStep {
  name: string
  text: string
}

export function howTo(
  name: string,
  description: string,
  steps: HowToStep[],
  totalTime = 'PT2M',
): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    totalTime,
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  }
}

/**
 * A delivery service offer. `areaServed` is a country name or list of country names.
 */
export function service(opts: {
  name: string
  description: string
  serviceType: string
  areaServed: string | string[]
  url: string
}): Json {
  const areas = Array.isArray(opts.areaServed) ? opts.areaServed : [opts.areaServed]
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    provider: orgRef,
    url: opts.url,
    areaServed: areas.map((name) => ({ '@type': 'Country', name })),
  }
}

export function mobileApplication(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'Sendora',
    operatingSystem: 'iOS, Android',
    applicationCategory: 'TravelApplication',
    description:
      "Application de transport collaboratif de colis. Envoyez vos colis avec des particuliers qui font déjà votre trajet, en France comme vers la diaspora (Sénégal, Maroc, Algérie, Côte d'Ivoire, Cameroun). Jusqu'à 60 % moins cher.",
    url: SITE_URL,
    publisher: orgRef,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
      description: "Gratuit à l'inscription, sans abonnement",
    },
    installUrl: [APP_STORE_URL, PLAY_STORE_URL],
  }
}

export interface ArticleInput {
  headline: string
  description: string
  path: string
  datePublished: string
  dateModified?: string
  image?: string
}

export function blogPosting(input: ArticleInput): Json {
  const url = `${SITE_URL}${input.path}`
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: input.headline,
    description: input.description,
    image: input.image ? `${SITE_URL}${input.image}` : `${SITE_URL}/og-image.png`,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: orgRef,
    publisher: orgRef,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
  }
}
