export const helpCategories = [
  { id: 'validation', label: 'Validation colis', icon: 'package' },
  { id: 'payment', label: 'Paiement', icon: 'credit-card' },
  { id: 'account', label: 'Mon compte', icon: 'user' },
  { id: 'first-delivery', label: 'Première livraison', icon: 'map-pin' },
] as const

export type HelpCategory = (typeof helpCategories)[number]['id']

interface HelpArticle {
  id: string
  category: HelpCategory
  title: string
  keywords: string
  paragraphs: string[]
  steps?: string[]
  guide: { path: string; label: string }
  supportSubject: 'validation-colis' | 'payment' | 'account' | 'support'
}

export const helpArticles: HelpArticle[] = [
  {
    id: 'trouver-code',
    category: 'validation',
    title: 'Où trouver le code de validation du colis ?',
    keywords: 'code absent introuvable expéditeur destinataire récupération livraison confirmer',
    paragraphs: [
      'Dès la récupération du colis, le code apparaît dans l’application de l’expéditeur, sur la fiche du colis concerné. Il est donc à demander à l’expéditeur, même si le destinataire est une autre personne.',
      'Une fois le colis livré au destinataire, contactez l’expéditeur pour recevoir le code. Saisissez-le ensuite sur la page de validation de ce même colis dans votre application.',
    ],
    guide: { path: '/blog/validation-colis', label: 'Lire le guide de validation' },
    supportSubject: 'validation-colis',
  },
  {
    id: 'code-refuse',
    category: 'validation',
    title: 'Le code est refusé : que vérifier ?',
    keywords: 'code invalide incorrect erreur erroné validation bloquée refuse',
    paragraphs: [
      'Vérifiez avec l’expéditeur que le code correspond bien au colis livré. Si vous transportez plusieurs colis, leurs fiches ne doivent pas être confondues.',
    ],
    steps: [
      'Ouvrez la fiche du bon colis et recopiez exactement le code affiché chez l’expéditeur.',
      'Vérifiez votre connexion et consultez à nouveau le colis si une erreur technique apparaît.',
      'Si le blocage persiste, notez le message d’erreur et contactez le support avec la référence du colis, si vous l’avez.',
    ],
    guide: { path: '/blog/validation-colis', label: 'Voir les solutions de validation' },
    supportSubject: 'validation-colis',
  },
  {
    id: 'expediteur-injoignable',
    category: 'validation',
    title: 'Le colis est livré, mais l’expéditeur ne répond pas',
    keywords: 'code injoignable absent attente message réponse contact expediteur',
    paragraphs: [
      'Laissez un message à l’expéditeur dans l’application en précisant quel colis a été remis et à quel moment. Demandez-lui de consulter sa fiche pour vous communiquer le code.',
      'Si vous restez bloqué, contactez le support avec le sujet « Validation colis ». Expliquez que le colis a été livré et que vous attendez le code. Ne validez pas une livraison qui n’a pas été effectuée.',
    ],
    guide: { path: '/blog/validation-colis', label: 'Comprendre le rôle de l’expéditeur' },
    supportSubject: 'validation-colis',
  },
  {
    id: 'versement-attente',
    category: 'payment',
    title: 'Mon versement est en attente après la livraison',
    keywords: 'argent virement stripe connect rémunération paiement retard fonds bloqué',
    paragraphs: [
      'Vérifiez d’abord que la livraison est bien validée dans l’application : la remise du colis et la validation avec le code sont deux étapes distinctes.',
      'Après validation, le versement est traité via Stripe Connect. L’arrivée des fonds dépend des délais de traitement et de votre banque. Consultez les informations de paiement disponibles dans votre compte. Si la situation vous semble anormale, contactez le support en indiquant le colis et la date de validation.',
    ],
    guide: { path: '/securite-et-paiement', label: 'Comprendre le parcours du paiement' },
    supportSubject: 'payment',
  },
  {
    id: 'paiement-application',
    category: 'payment',
    title: 'Comment se déroule le paiement de mon colis ?',
    keywords: 'payer carte bancaire prix séquestre escrow sécurité réservation',
    paragraphs: [
      'Convenez du prix et des modalités avec le transporteur, puis effectuez le paiement dans l’application. Le paiement est conservé sous séquestre par Stripe jusqu’à la confirmation de livraison.',
      'Le transporteur valide la livraison avec le code transmis par l’expéditeur après la remise au destinataire. Cette validation permet la libération du paiement. Si le colis n’est pas livré ou si vous contestez sa réception, contactez le support avant de communiquer le code.',
    ],
    guide: { path: '/securite-et-paiement', label: 'Voir les étapes de sécurité et paiement' },
    supportSubject: 'payment',
  },
  {
    id: 'connexion-compte',
    category: 'account',
    title: 'Je n’arrive plus à me connecter à mon compte',
    keywords: 'connexion login email apple google accès mot de passe compte bloqué',
    paragraphs: [
      'Vérifiez que vous utilisez le même mode de connexion et le même compte que lors de votre inscription. Un compte créé avec Apple ou Google peut être associé à une autre adresse que celle que vous avez en tête.',
      'Si vous ne parvenez toujours pas à vous connecter, contactez le support avec le sujet « Mon compte ». Indiquez l’adresse associée au compte, le mode de connexion utilisé et le message d’erreur, sans transmettre votre mot de passe.',
    ],
    guide: { path: '/securite-et-paiement', label: 'Découvrir les repères de sécurité' },
    supportSubject: 'account',
  },
  {
    id: 'verification-identite',
    category: 'account',
    title: 'Je suis bloqué à la vérification de mon identité',
    keywords: 'KYC Didit identité verification document profil refusé transporteur',
    paragraphs: [
      'Les transporteurs effectuent une vérification d’identité via Didit depuis le parcours proposé dans l’application. Suivez les consignes affichées et vérifiez votre connexion si une étape ne se charge pas.',
      'Si le problème persiste, indiquez au support l’étape concernée et le message affiché. Le formulaire de contact permet de décrire le blocage ; il n’est pas nécessaire d’y transmettre vos documents d’identité.',
    ],
    guide: { path: '/devenir-transporteur', label: 'Voir comment commencer à transporter' },
    supportSubject: 'account',
  },
  {
    id: 'premier-envoi',
    category: 'first-delivery',
    title: 'Comment préparer mon premier envoi ?',
    keywords:
      'débuter première livraison expéditeur envoyer colis publier annonce poids dimensions',
    paragraphs: [
      'Commencez par décrire précisément votre colis dans l’application pour que le voyageur puisse savoir ce qu’il transportera.',
    ],
    steps: [
      'Indiquez le contenu, le poids, les dimensions et les villes de départ et d’arrivée.',
      'Échangez avec le transporteur pour convenir du prix, des dates et des modalités de remise.',
      'Préparez l’emballage et les coordonnées utiles pour joindre le destinataire.',
      'Gardez le code de validation jusqu’à la confirmation de réception, puis transmettez-le au transporteur.',
    ],
    guide: {
      path: '/transport-colis-entre-particuliers',
      label: 'Découvrir le parcours expéditeur',
    },
    supportSubject: 'support',
  },
  {
    id: 'premier-trajet',
    category: 'first-delivery',
    title: 'Comment effectuer ma première livraison comme transporteur ?',
    keywords: 'débuter voyageur transporter profil trajet première mission publier',
    paragraphs: [
      'Complétez votre profil et la vérification d’identité, puis publiez un trajet que vous effectuez déjà. Choisissez les colis compatibles avec vos disponibilités et votre capacité de transport.',
      'Avant de récupérer le colis, convenez du prix, des lieux et des horaires avec l’expéditeur. Prévoyez comment le joindre à l’arrivée pour obtenir le code après la remise au destinataire.',
    ],
    guide: { path: '/devenir-transporteur', label: 'Suivre les étapes pour devenir transporteur' },
    supportSubject: 'support',
  },
  {
    id: 'livraison-probleme',
    category: 'first-delivery',
    title: 'La livraison ne se passe pas comme prévu',
    keywords: 'colis retard abîmé problème réception destinataire absent non livré perdu litige',
    paragraphs: [
      'Échangez avec l’autre personne dans la messagerie pour comprendre la situation et préciser le colis concerné. Si la remise n’a pas eu lieu ou si la réception est contestée, ne communiquez pas le code pour valider la livraison.',
      'Contactez le support depuis la page Contact. Indiquez votre rôle, la référence du colis si vous l’avez, les dates convenues et ce qui s’est passé. Ces éléments aideront l’équipe à examiner votre demande.',
    ],
    guide: { path: '/securite-et-paiement', label: 'Revoir les étapes de la livraison' },
    supportSubject: 'support',
  },
]
