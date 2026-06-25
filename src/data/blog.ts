/**
 * Blog content. Pure data (no Vue/browser imports) so it can also be imported
 * by vite.config.ts to prerender every /blog/:slug route.
 */

export interface ContentSection {
  heading?: string
  paragraphs?: string[]
  list?: string[]
}

export interface Article {
  slug: string
  title: string
  description: string
  /** ISO date, e.g. 2026-06-20 */
  date: string
  updated?: string
  tag: string
  readingTime: string
  /** Short excerpt for the blog index. */
  excerpt: string
  sections: ContentSection[]
}

export const articles: Article[] = [
  {
    slug: 'envoyer-colis-diaspora-frais-caches',
    title: 'Envoyer un colis à la diaspora : les frais cachés à éviter',
    description:
      'Express, groupage, excédent bagages : tour d’horizon des frais cachés quand on envoie un colis vers le Sénégal, le Maroc ou l’Algérie, et comment payer moins cher avec le co-transport.',
    date: '2026-06-20',
    tag: 'Diaspora',
    readingTime: '5 min',
    excerpt:
      'Surcoûts de carburant, frais de dédouanement, forfaits minimums… Le prix affiché est rarement le prix final. Décryptage et solution.',
    sections: [
      {
        paragraphs: [
          "Envoyer un colis à sa famille au pays paraît simple, jusqu’à la facture finale. Entre les transporteurs express, le groupage aérien et l’excédent bagages, les frais cachés peuvent doubler le coût annoncé. Voici ce qu’il faut surveiller, et comment l’éviter.",
        ],
      },
      {
        heading: '1. Les surcoûts des transporteurs express',
        paragraphs: [
          'Les transporteurs express (DHL, Chronopost) affichent un tarif de base, mais y ajoutent souvent des surcharges carburant, des frais de zone éloignée et des frais de dédouanement. Pour un colis de 10 kg vers le Sénégal, on dépasse vite 280 €.',
        ],
      },
      {
        heading: '2. Le groupage aérien et ses délais',
        paragraphs: [
          'Le groupage est moins cher, mais le colis attend en entrepôt le remplissage d’une palette. Les délais annoncés (7 à 10 jours) sont souvent dépassés, et des frais de dédouanement sont à régler à l’arrivée, parfois par le destinataire.',
        ],
      },
      {
        heading: '3. L’excédent bagages : pratique mais opaque',
        paragraphs: [
          'Passer par un voyageur via un transitaire informel peut sembler économique, mais sans suivi ni garantie : en cas de problème, vous n’avez aucun recours.',
        ],
      },
      {
        heading: 'La solution : le co-transport vérifié',
        paragraphs: [
          'Le co-transport entre particuliers combine le meilleur des deux mondes : le prix d’un voyageur, la sécurité d’une plateforme. Avec Sendora, le transporteur est vérifié KYC, le paiement est bloqué sous séquestre jusqu’à la livraison, et vous suivez le colis en temps réel.',
        ],
        list: [
          'Sénégal : environ 60 € pour 10 kg au lieu de 280 € en express.',
          'Maroc : environ 40 € au lieu de 120 €.',
          'Algérie : environ 48 € au lieu de 110 €.',
        ],
      },
    ],
  },
  {
    slug: 'douane-envoyer-colis-afrique-maghreb',
    title: 'Douane : bien envoyer un colis au Maroc, au Sénégal ou en Algérie',
    description:
      'Déclaration, valeur, objets interdits : le guide pratique pour passer la douane sans mauvaise surprise quand on envoie un colis vers la diaspora.',
    date: '2026-06-18',
    tag: 'Guide',
    readingTime: '6 min',
    excerpt:
      'Une déclaration mal remplie peut bloquer un colis des semaines. Voici les bons réflexes douane pour un envoi vers le Maghreb ou l’Afrique de l’Ouest.',
    sections: [
      {
        paragraphs: [
          'La douane est la première cause de retard et de surcoût sur les envois internationaux. Quelques bons réflexes suffisent pourtant à fluidifier l’arrivée de votre colis.',
        ],
      },
      {
        heading: 'Déclarez la valeur réelle',
        paragraphs: [
          'Sous-évaluer un colis pour payer moins de taxes est tentant, mais risqué : en cas de contrôle, le colis peut être bloqué et surtaxé. Déclarez la valeur réelle et conservez les justificatifs (factures).',
        ],
      },
      {
        heading: 'Connaissez les objets interdits ou réglementés',
        paragraphs: ['Certains produits sont interdits ou strictement encadrés à l’import :'],
        list: [
          'Produits alimentaires périssables et viandes.',
          'Médicaments sans ordonnance.',
          'Produits inflammables, batteries au lithium non protégées.',
          'Contrefaçons et produits soumis à licence.',
        ],
      },
      {
        heading: 'Soignez l’emballage et l’étiquetage',
        paragraphs: [
          'Un colis bien emballé, avec une description claire du contenu, passe plus vite. Indiquez le nom et le contact du destinataire de façon lisible.',
        ],
      },
      {
        heading: 'Avec le co-transport, c’est plus simple',
        paragraphs: [
          'Quand un voyageur transporte votre colis comme un bagage personnel pour un usage non commercial, les formalités sont généralement allégées. Sendora vous met en relation avec des voyageurs vérifiés qui connaissent le trajet, et vous gardez le suivi du colis du départ à la remise en main propre.',
        ],
      },
    ],
  },
  {
    slug: 'devenir-transporteur-rentabiliser-trajets',
    title: 'Devenir transporteur Sendora : rentabiliser ses trajets',
    description:
      'Vous voyagez régulièrement en France ou vers la diaspora ? Transportez des colis sur votre route et générez un revenu complémentaire en toute sécurité.',
    date: '2026-06-15',
    tag: 'Transporteurs',
    readingTime: '4 min',
    excerpt:
      'Un trajet que vous faites déjà peut financer une partie de votre voyage. Voici comment devenir transporteur vérifié sur Sendora.',
    sections: [
      {
        paragraphs: [
          'Que vous rentiez au pays pour les vacances ou que vous fassiez régulièrement Paris–Lyon, votre trajet peut rapporter. Le principe : transporter des colis qui vont dans votre direction, sans détour.',
        ],
      },
      {
        heading: 'Comment ça marche',
        list: [
          'Créez votre profil et passez la vérification d’identité KYC.',
          'Indiquez vos trajets et vos disponibilités.',
          'Acceptez uniquement les missions qui vous conviennent.',
          'Remettez le colis en main propre et soyez payé via Stripe Connect.',
        ],
      },
      {
        heading: 'Combien peut-on gagner ?',
        paragraphs: [
          'Le revenu dépend du trajet et du volume transporté. Sur un trajet vers la diaspora, plusieurs colis de quelques kilos peuvent couvrir une bonne partie du billet. En national, c’est un complément régulier pour des trajets que vous faites de toute façon.',
        ],
      },
      {
        heading: 'Sécurité et confiance',
        paragraphs: [
          'Vous transportez uniquement des colis d’expéditeurs identifiés, le paiement est garanti par le séquestre Stripe, et le système de notation communautaire récompense les transporteurs fiables.',
        ],
      },
    ],
  },
]

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

export const articleSlugs = articles.map((a) => a.slug)
