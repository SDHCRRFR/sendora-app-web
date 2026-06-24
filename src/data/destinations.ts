/**
 * Data source for the diaspora landing pages (/envoyer-colis-<pays>).
 * Pricing is indicative and kept consistent with the PriceMarket comparator
 * (colis de 10 kg). Each page has unique copy to avoid thin/duplicate content.
 */

export interface PriceRow {
  label: string
  sub: string
  price: number
  perKg: string
  delay: string
}

export interface WhyPoint {
  title: string
  text: string
}

export interface Faq {
  q: string
  a: string
}

export interface Destination {
  slug: string
  /** Route path, e.g. /envoyer-colis-senegal */
  path: string
  country: string
  /** "envoyer un colis {prep} {country}" → au Sénégal / au Maroc / en Algérie */
  prep: string
  mainCity: string
  cities: string[]
  /** Sendora price for a 10 kg parcel. */
  sendora: PriceRow
  competitors: PriceRow[]
  intro: string
  whyPoints: WhyPoint[]
  faq: Faq[]
  seoTitle: string
  seoDescription: string
  keywords: string
}

export function cheapestRival(d: Destination): PriceRow {
  return d.competitors.reduce((a, b) => (b.price < a.price ? b : a))
}

export function savingsVsExpress(d: Destination): number {
  const dearest = Math.max(...d.competitors.map((c) => c.price))
  return Math.round((1 - d.sendora.price / dearest) * 100)
}

const SENDORA_PROS: WhyPoint[] = [
  {
    title: 'Remis en main propre',
    text: 'Pas d’entrepôt, pas de groupage anonyme : un voyageur vérifié récupère votre colis et le remet directement au destinataire.',
  },
  {
    title: 'Transporteurs vérifiés KYC',
    text: 'Chaque voyageur passe une vérification d’identité complète via Didit (partenaire eIDAS). Vous savez à qui vous confiez votre colis.',
  },
  {
    title: 'Paiement sécurisé sous séquestre',
    text: 'Votre paiement est bloqué par Stripe et libéré uniquement après confirmation de la livraison. Aucun risque d’arnaque.',
  },
  {
    title: 'Suivi en direct & chat intégré',
    text: 'Vous suivez l’avancée du colis et discutez avec le transporteur directement dans l’application, sans échanger vos numéros.',
  },
]

export const destinations: Destination[] = [
  {
    slug: 'senegal',
    path: '/envoyer-colis-senegal',
    country: 'Sénégal',
    prep: 'au',
    mainCity: 'Dakar',
    cities: ['Dakar', 'Thiès', 'Touba', 'Saint-Louis', 'Ziguinchor', 'Mbour'],
    sendora: {
      label: 'Sendora',
      sub: 'Co-transport entre particuliers',
      price: 60,
      perKg: '≈ 6 €/kg',
      delay: '2–6 j',
    },
    competitors: [
      {
        label: 'Transporteur express',
        sub: 'DHL · Chronopost',
        price: 280,
        perKg: '≈ 28 €/kg',
        delay: '3–5 j',
      },
      {
        label: 'Groupage aérien',
        sub: 'Transitaire / GP',
        price: 110,
        perKg: '≈ 11 €/kg',
        delay: '7–10 j',
      },
    ],
    intro:
      "Envoyer un colis au Sénégal coûte vite une fortune avec les transporteurs express, et le groupage aérien impose entrepôt, attente et frais de dédouanement à l’arrivée. Sendora propose une autre voie : confier votre colis à un membre de la diaspora ou à un voyageur vérifié qui se rend déjà à Dakar ou ailleurs au Sénégal. Votre colis voyage avec lui et arrive en main propre, pour une fraction du prix.",
    whyPoints: SENDORA_PROS,
    faq: [
      {
        q: 'Combien coûte l’envoi d’un colis de 10 kg au Sénégal ?',
        a: 'À titre indicatif, comptez environ 60 € pour 10 kg avec Sendora, contre environ 280 € avec un transporteur express et environ 110 € en groupage aérien. Le prix exact dépend des annonces des voyageurs sur le trajet choisi.',
      },
      {
        q: 'Vers quelles villes du Sénégal peut-on envoyer un colis ?',
        a: 'Principalement Dakar, mais aussi Thiès, Touba, Saint-Louis, Ziguinchor ou Mbour selon les trajets proposés par les voyageurs. Plus la destination est desservie, plus vous trouvez de transporteurs.',
      },
      {
        q: 'Combien de temps met un colis pour arriver au Sénégal ?',
        a: 'En général 2 à 6 jours avec Sendora, selon la date de départ du voyageur. C’est souvent plus rapide et plus prévisible que le groupage aérien (7 à 10 jours).',
      },
      {
        q: 'Est-ce sécurisé d’envoyer un colis entre particuliers vers le Sénégal ?',
        a: 'Oui : les transporteurs sont vérifiés KYC, le paiement est bloqué sous séquestre Stripe jusqu’à la livraison, et vous suivez le colis en temps réel avec une messagerie intégrée.',
      },
    ],
    seoTitle: 'Envoyer un colis au Sénégal pas cher entre particuliers - Sendora',
    seoDescription:
      'Envoyez un colis au Sénégal (Dakar, Thiès, Touba…) entre particuliers, dès ~60 € pour 10 kg au lieu de ~280 € en express. Voyageurs vérifiés KYC, paiement sécurisé, remise en main propre. App Sendora.',
    keywords:
      'envoyer colis Sénégal, envoyer colis Dakar pas cher, colis Sénégal entre particuliers, envoi colis diaspora Sénégal, transport colis France Sénégal',
  },
  {
    slug: 'maroc',
    path: '/envoyer-colis-maroc',
    country: 'Maroc',
    prep: 'au',
    mainCity: 'Casablanca',
    cities: ['Casablanca', 'Rabat', 'Marrakech', 'Tanger', 'Fès', 'Agadir'],
    sendora: {
      label: 'Sendora',
      sub: 'Co-transport entre particuliers',
      price: 40,
      perKg: '≈ 4 €/kg',
      delay: '2–5 j',
    },
    competitors: [
      {
        label: 'Transporteur express',
        sub: 'DHL · Chronopost',
        price: 120,
        perKg: '≈ 12 €/kg',
        delay: '2–4 j',
      },
      {
        label: 'Transport routier',
        sub: 'Car / transitaire',
        price: 45,
        perKg: '≈ 4,50 €/kg',
        delay: '4–7 j',
      },
    ],
    intro:
      "Le Maroc est l’une des destinations diaspora les plus demandées - et l’une des plus chères en express. Avec Sendora, vous confiez votre colis à un voyageur vérifié qui prend la route ou l’avion pour Casablanca, Rabat, Marrakech ou Tanger. Il transporte votre colis sur un trajet qu’il fait déjà : vous évitez les forfaits minimums, les points relais et les surcoûts de douane, et le colis arrive directement chez le destinataire.",
    whyPoints: SENDORA_PROS,
    faq: [
      {
        q: 'Combien coûte l’envoi d’un colis de 10 kg au Maroc ?',
        a: 'Environ 40 € pour 10 kg avec Sendora, contre environ 120 € avec un transporteur express. Le transport routier classique tourne autour de 45 € mais avec point relais et forfaits minimums. Le prix Sendora dépend des annonces des voyageurs.',
      },
      {
        q: 'Vers quelles villes du Maroc peut-on envoyer un colis ?',
        a: 'Casablanca, Rabat, Marrakech, Tanger, Fès ou Agadir selon les trajets proposés. Les grandes villes sont les mieux desservies par les voyageurs.',
      },
      {
        q: 'Faut-il s’occuper de la douane pour envoyer un colis au Maroc ?',
        a: 'Pour un envoi entre particuliers à usage personnel, les formalités sont limitées. Le voyageur transporte le colis comme un bagage ; nous recommandons toujours de déclarer la nature et la valeur réelles du contenu.',
      },
      {
        q: 'Est-ce fiable d’envoyer un colis entre particuliers au Maroc ?',
        a: 'Oui : transporteurs vérifiés KYC, paiement sous séquestre Stripe libéré à la livraison, suivi en temps réel. Vous gardez le contrôle du début à la fin.',
      },
    ],
    seoTitle: 'Envoyer un colis au Maroc pas cher entre particuliers - Sendora',
    seoDescription:
      'Envoyez un colis au Maroc (Casablanca, Rabat, Marrakech…) entre particuliers, dès ~40 € pour 10 kg au lieu de ~120 € en express. Voyageurs vérifiés KYC, paiement sécurisé, remise en main propre. App Sendora.',
    keywords:
      'envoyer colis Maroc, envoyer colis Casablanca pas cher, colis Maroc entre particuliers, envoi colis diaspora Maroc, transport colis France Maroc',
  },
  {
    slug: 'algerie',
    path: '/envoyer-colis-algerie',
    country: 'Algérie',
    prep: 'en',
    mainCity: 'Alger',
    cities: ['Alger', 'Oran', 'Constantine', 'Annaba', 'Sétif', 'Tizi Ouzou'],
    sendora: {
      label: 'Sendora',
      sub: 'Co-transport entre particuliers',
      price: 48,
      perKg: '≈ 4,80 €/kg',
      delay: '2–6 j',
    },
    competitors: [
      {
        label: 'Transporteur express',
        sub: 'DHL · Chronopost',
        price: 110,
        perKg: '≈ 11 €/kg',
        delay: '3–5 j',
      },
      {
        label: 'Excédent bagages',
        sub: 'Transitaire / vol',
        price: 60,
        perKg: '≈ 6 €/kg',
        delay: '5–9 j',
      },
    ],
    intro:
      "Envoyer un colis en Algérie passe trop souvent par l’excédent bagages, des transitaires opaques ou un express hors de prix. Sendora connecte les expéditeurs avec des voyageurs vérifiés de la diaspora qui se rendent à Alger, Oran ou Constantine. Votre colis part avec quelqu’un qui fait déjà le voyage : prix maîtrisé, remise en main propre et suivi, sans passer par une agence.",
    whyPoints: SENDORA_PROS,
    faq: [
      {
        q: 'Combien coûte l’envoi d’un colis de 10 kg en Algérie ?',
        a: 'Environ 48 € pour 10 kg avec Sendora, contre environ 110 € avec un transporteur express et environ 60 € en excédent bagages (avec délais variables). Le prix dépend des annonces des voyageurs sur le trajet.',
      },
      {
        q: 'Vers quelles villes d’Algérie peut-on envoyer un colis ?',
        a: 'Alger, Oran, Constantine, Annaba, Sétif ou Tizi Ouzou selon les trajets proposés par les voyageurs de la communauté.',
      },
      {
        q: 'Combien de temps pour qu’un colis arrive en Algérie ?',
        a: 'En général 2 à 6 jours avec Sendora selon la date de départ du voyageur, souvent plus prévisible que les solutions de fret classiques (5 à 9 jours).',
      },
      {
        q: 'Est-ce sûr d’envoyer un colis entre particuliers en Algérie ?',
        a: 'Oui : vérification KYC des transporteurs, paiement bloqué sous séquestre Stripe jusqu’à la livraison, suivi et messagerie intégrés pour rester en contact.',
      },
    ],
    seoTitle: 'Envoyer un colis en Algérie pas cher entre particuliers - Sendora',
    seoDescription:
      'Envoyez un colis en Algérie (Alger, Oran, Constantine…) entre particuliers, dès ~48 € pour 10 kg au lieu de ~110 € en express. Voyageurs vérifiés KYC, paiement sécurisé, remise en main propre. App Sendora.',
    keywords:
      'envoyer colis Algérie, envoyer colis Alger pas cher, colis Algérie entre particuliers, envoi colis diaspora Algérie, transport colis France Algérie',
  },
]

export function getDestination(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug)
}
