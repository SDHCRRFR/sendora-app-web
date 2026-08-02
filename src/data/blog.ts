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
    slug: 'envoyer-colis-en-france-regles',
    title: 'Envoyer un colis en France : les règles à connaître',
    description:
      'Cotransportage, objets interdits, poids et dimensions, valeur déclarée, responsabilité en cas de casse, fiscalité du transporteur : le guide complet pour envoyer un colis en France en toute légalité.',
    date: '2026-08-02',
    tag: 'Guide',
    readingTime: '7 min',
    excerpt:
      'Ce que la loi française autorise, ce qui est interdit dans un colis, qui est responsable en cas de casse et sous quels délais réclamer. Le guide de l’envoi en France.',
    sections: [
      {
        paragraphs: [
          'Paris–Lyon, Marseille–Lille, Bordeaux–Strasbourg : envoyer un colis à l’intérieur de la France paraît anodin, et pourtant c’est un acte encadré. Contenu autorisé, poids, valeur déclarée, responsabilité en cas de casse, statut de celui qui transporte : voici les règles françaises à connaître avant d’expédier, que vous passiez par La Poste ou par un voyageur.',
        ],
      },
      {
        heading: 'Le cadre légal : le cotransportage de colis',
        paragraphs: [
          'Confier son colis à un particulier qui fait déjà le trajet a un nom dans le droit français : le cotransportage de colis. L’article L3232-1 du code des transports, créé par la loi d’orientation des mobilités du 24 décembre 2019, le définit comme « l’utilisation en commun, à titre privé, d’un véhicule terrestre à moteur effectuée à titre non onéreux, excepté le partage des frais », pour transporter un colis dans le cadre d’un déplacement que le conducteur effectue pour son propre compte.',
          'Deux conséquences importantes. D’abord, cette activité ne relève pas du transport public routier de marchandises : le particulier qui dépanne n’a pas besoin d’une licence de transporteur. Ensuite, la plateforme qui met en relation l’expéditeur et le conducteur peut le faire à titre onéreux, c’est parfaitement légal. Le texte prévoit un plafond annuel de contributions financières au-delà duquel l’activité bascule dans le transport professionnel : à ce jour, l’arrêté fixant ce plafond n’a toujours pas été publié, ce que le Sénat a relevé et que le ministère des Transports a reconnu en février 2025. Dans le doute, la règle de bon sens reste la bonne : transporter sur un trajet que vous faisiez déjà, sans en faire un métier.',
        ],
      },
      {
        heading: 'Ce qu’on n’a pas le droit de mettre dans un colis',
        paragraphs: [
          'La liste des interdits est large et vaut pour tous les modes d’envoi. Les principaux, côté La Poste comme côté transporteurs privés :',
        ],
        list: [
          'Les armes et munitions, même démontées.',
          'Les espèces, pièces de monnaie, bijoux et objets de valeur.',
          'Les produits inflammables ou sous pression : aérosols, briquets, allumettes, parfums, peintures, bouteilles de gaz.',
          'Les batteries lithium seules et les batteries externes (power banks), interdites à La Poste ; un appareil et ses liquides ou gels ne doivent pas voyager dans le même colis.',
          'Les animaux vivants, les denrées périssables mal conditionnées.',
          'Les contrefaçons et articles piratés.',
          'Les stupéfiants et psychotropes, dans tous les cas et sans exception.',
        ],
      },
      {
        paragraphs: [
          'Deux points souvent ignorés : un colis contenant un objet interdit peut être détruit, et surtout, en cas de non-respect de ces interdictions, aucune indemnisation ne peut être réclamée. Vous perdez l’objet et le recours.',
        ],
      },
      {
        heading: 'Poids, dimensions et emballage',
        paragraphs: [
          'Chaque offre a ses limites. À titre de repère, un Colissimo France est plafonné à 30 kg, avec une longueur maximale de 100 cm et une somme longueur + largeur + hauteur limitée (150 cm sur l’offre standard, à vérifier selon la formule). Au-delà, il faut passer par une offre spécifique ou du transport de messagerie.',
          'Le co-transport est plus souple sur les formats atypiques, puisque le colis voyage comme un bagage accompagné, mais l’emballage reste votre responsabilité : un contenu fragile mal calé est considéré comme un vice propre de la marchandise, et c’est l’expéditeur qui en supporte les conséquences. Doublez le calage, scellez, et indiquez lisiblement le nom et le téléphone du destinataire.',
        ],
      },
      {
        heading: 'Valeur déclarée : ne sous-estimez pas votre colis',
        paragraphs: [
          'Sans valeur déclarée, l’indemnisation d’un transporteur est forfaitaire et souvent très inférieure à la valeur réelle du contenu. Si vous envoyez du matériel, des papiers importants ou un objet auquel vous tenez, déclarez la valeur réelle, souscrivez l’option ad valorem quand elle existe, et conservez la facture. C’est elle qui fera foi en cas de litige.',
        ],
      },
      {
        heading: 'Casse ou perte : qui est responsable et sous quels délais',
        paragraphs: [
          'Face à un transporteur professionnel, le code de commerce est clair : l’article L133-1 fait du transporteur le garant de la perte et des avaries, sauf force majeure, vice propre de la marchandise ou faute de l’expéditeur. C’est une responsabilité de plein droit : vous n’avez pas à prouver une faute.',
          'Mais deux délais sont impitoyables. En cas d’avarie ou de perte partielle, l’article L133-3 éteint toute action si le destinataire n’a pas adressé au transporteur une protestation motivée, par lettre recommandée ou acte extrajudiciaire, dans les trois jours non fériés suivant la réception. Réceptionner un colis abîmé sans réserve, puis réclamer une semaine plus tard, c’est arriver trop tard. Et de façon générale, l’action née du contrat de transport se prescrit par un an (article L133-6).',
          'En pratique : ouvrez le colis devant le livreur quand c’est possible, photographiez l’emballage et le contenu avant même de le déballer complètement, émettez des réserves précises, et écrivez dans les trois jours.',
        ],
      },
      {
        heading: 'Côté transporteur : ce que vous devez déclarer',
        paragraphs: [
          'Transporter des colis sur ses trajets peut rapporter, et la règle fiscale française distingue nettement deux situations. Le simple partage de frais, sur un trajet que vous auriez fait de toute façon et dont vous gardez une part à votre charge, n’est pas imposable : c’est la logique retenue pour le covoiturage. Dès lors que les sommes perçues dépassent le partage de frais et constituent un gain, il s’agit d’un revenu à déclarer, généralement en BIC.',
          'Depuis la directive européenne DAC7, les plateformes transmettent automatiquement à l’administration fiscale les montants versés à leurs utilisateurs. Autrement dit, ce que vous gagnez est connu du fisc : déclarez-le, même pour de petits montants. Et gardez à l’esprit qu’une activité très fréquente, avec des trajets créés pour l’occasion, peut être requalifiée en transport rémunéré, avec les obligations professionnelles qui vont avec.',
        ],
      },
      {
        heading: 'Combien coûte un envoi en France, et en combien de temps',
        paragraphs: [
          'Sur le national, l’écart de prix entre un envoi classique et un co-transport tient surtout au poids et à l’urgence. Un colis lourd ou volumineux entre deux grandes villes coûte vite cher en express, alors qu’un voyageur qui fait déjà le trajet ne facture qu’une contribution modeste. Le délai, lui, dépend du départ du transporteur : c’est parfois le jour même, parfois quelques jours d’attente pour trouver le bon trajet.',
        ],
      },
      {
        heading: 'Envoyer en France avec Sendora',
        paragraphs: [
          'Sendora met en relation des expéditeurs et des voyageurs vérifiés sur des trajets français. L’identité de chaque transporteur est contrôlée par KYC, le paiement est bloqué sous séquestre jusqu’à la remise en main propre, et vous suivez votre colis en temps réel. Vous décrivez précisément le contenu à l’annonce, le transporteur accepte en connaissance de cause : c’est ce qui rend l’envoi clair et traçable des deux côtés.',
          'Cet article est une information générale et ne constitue pas un conseil juridique. Les règles évoluent : vérifiez les conditions de l’opérateur que vous utilisez, et consultez un professionnel pour toute situation particulière.',
        ],
      },
    ],
  },
  {
    slug: 'envoyer-medicaments-etranger-regles',
    title: 'Peut-on envoyer des médicaments à un proche à l’étranger ?',
    description:
      'Médicaments sans ordonnance, règle des 3 mois, stupéfiants interdits, règles du pays de destination : le guide pour faire transporter des médicaments à sa famille à l’étranger en toute légalité.',
    date: '2026-06-26',
    tag: 'Santé',
    readingTime: '6 min',
    excerpt:
      'Oui, mais pas n’importe lesquels ni en n’importe quelle quantité. Ce qui est autorisé, ce qui est interdit, et comment faire les choses bien.',
    sections: [
      {
        paragraphs: [
          'Envoyer des médicaments à sa famille au pays est un besoin courant de la diaspora : du paracétamol, des vitamines, un peu de parapharmacie. Mais c’est un domaine encadré, et bien faire les choses protège à la fois l’expéditeur et le voyageur. Voici les règles essentielles.',
        ],
      },
      {
        heading: 'Médicaments sans ordonnance : ce que vous pouvez envoyer',
        paragraphs: [
          'On peut faire transporter des médicaments délivrés sans ordonnance (antidouleurs courants comme le paracétamol, vitamines, compléments, produits de parapharmacie, matériel de premiers soins), à condition de rester dans un usage personnel ou familial. Pas de logique de stock ni de revente : ce sont des médicaments destinés à un proche identifié.',
        ],
      },
      {
        heading: 'La règle des 3 mois : l’usage personnel',
        paragraphs: [
          'La douane française fixe une limite simple : sans ordonnance, on ne peut transporter que l’équivalent de 3 mois de traitement maximum. Au-delà, l’importation est prohibée à titre absolu et peut être assimilée à du trafic. Pour un médicament soumis à prescription, l’ordonnance correspondante est indispensable et doit accompagner l’envoi.',
        ],
      },
      {
        heading: 'Stupéfiants et psychotropes : l’interdiction absolue',
        paragraphs: [
          'Certains médicaments (antidouleurs puissants à base d’opioïdes, certains traitements du système nerveux, substituts comme la méthadone…) sont classés comme stupéfiants ou psychotropes. Ils ne peuvent être transportés que personnellement par le patient, muni d’un certificat délivré par l’ANSM ou l’ARS. Ils ne peuvent jamais être confiés à un tiers ni envoyés par voie postale. Sur Sendora, ils sont strictement exclus.',
        ],
      },
      {
        heading: 'Vérifiez toujours les règles du pays de destination',
        paragraphs: [
          'Chaque pays applique ses propres règles d’importation, et certaines substances autorisées en France peuvent y être interdites. Plusieurs pays, dont le Sénégal, mènent une lutte active contre les faux médicaments : les douanes y sont très vigilantes et les saisies fréquentes. Renseignez-vous avant d’envoyer, conservez l’emballage d’origine et déclarez honnêtement le contenu.',
        ],
      },
      {
        heading: 'Bonnes pratiques pour un envoi serein',
        list: [
          'Gardez l’emballage d’origine et la notice.',
          'Joignez l’ordonnance pour tout médicament qui en nécessite une.',
          'Déclarez précisément le contenu sur l’annonce et au voyageur.',
          'Restez sur des quantités raisonnables (usage familial, 3 mois maximum).',
          'Au moindre doute, demandez conseil à votre pharmacien.',
        ],
      },
      {
        heading: 'Avec Sendora : en main propre, pas par colis postal',
        paragraphs: [
          'La plupart des transporteurs (La Poste, DHL, UPS…) refusent les colis de médicaments. Le co-transport change la donne : un voyageur vérifié emporte les médicaments sans ordonnance comme un bagage accompagné, sur un trajet qu’il fait déjà, et les remet directement au destinataire. Vérification KYC, paiement bloqué sous séquestre jusqu’à la livraison et suivi en temps réel : tout est cadré. Sendora n’est pas une pharmacie et ne vend aucun médicament - la plateforme se contente de mettre en relation, dans le respect de la réglementation.',
        ],
      },
    ],
  },
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
