<template>
  <LegalLayout title="Conditions Générales d'Utilisation" tag="CGU" date="01 juin 2025" :toc="toc">
    <h2 id="objet">Article 1 <v-banner-actions>

    </v-banner-actions> Objet</h2>
    <p>
      Les présentes Conditions Générales d'Utilisation (ci-après « CGU ») ont pour objet de définir
      les modalités et conditions dans lesquelles Sendora (ci-après « la Société ») met à la
      disposition de ses utilisateurs la plateforme de transport collaboratif de colis entre
      particuliers accessible via l'application mobile Sendora (ci-après « la Plateforme »).
    </p>
    <p>
      Toute utilisation de la Plateforme implique l'acceptation pleine et entière des présentes CGU.
      Les CGU prévalent sur tout autre document.
    </p>

    <h2 id="definitions">Article 2 - Définitions</h2>
    <ul>
      <li>
        <strong>« Plateforme »</strong> : l'application mobile Sendora et le site web sendora.app ;
      </li>
      <li>
        <strong>« Utilisateur »</strong> : toute personne inscrite sur la Plateforme, qu'elle soit
        Expéditeur ou Transporteur ;
      </li>
      <li>
        <strong>« Expéditeur »</strong> : tout Utilisateur souhaitant faire transporter un colis ;
      </li>
      <li>
        <strong>« Transporteur »</strong> : tout Utilisateur proposant de transporter un colis lors
        d'un de ses trajets ;
      </li>
      <li>
        <strong>« Annonce »</strong> : offre publiée par un Expéditeur pour le transport d'un colis
        ;
      </li>
      <li>
        <strong>« Mission »</strong> : accord conclu entre un Expéditeur et un Transporteur pour le
        transport d'un colis ;
      </li>
      <li>
        <strong>« Service »</strong> : l'ensemble des fonctionnalités proposées par la Plateforme.
      </li>
    </ul>

    <h2 id="acces">Article 3 - Accès et inscription</h2>
    <p>
      L'accès à la Plateforme est gratuit. L'inscription est obligatoire pour utiliser les
      fonctionnalités de mise en relation. Pour s'inscrire, l'Utilisateur doit :
    </p>
    <ul>
      <li>Être une personne physique majeure (18 ans révolus) ;</li>
      <li>Renseigner des informations exactes, sincères et à jour ;</li>
      <li>Accepter les présentes CGU et la Politique de confidentialité ;</li>
      <li>Disposer d'un moyen de paiement valide.</li>
    </ul>
    <p>
      Les Transporteurs doivent en outre se soumettre à la procédure de vérification d'identité
      (KYC) et au processus d'onboarding Stripe Connect pour recevoir des paiements.
    </p>

    <h2 id="obligations-expediteur">Article 4 - Obligations de l'Expéditeur</h2>
    <p>L'Expéditeur s'engage à :</p>
    <ul>
      <li>
        Décrire avec exactitude et complétude les colis à transporter (nature, dimensions, poids,
        fragilité) ;
      </li>
      <li>Ne pas expédier d'objets interdits ou réglementés ;</li>
      <li>Emballer correctement les colis pour prévenir tout dommage pendant le transport ;</li>
      <li>Être disponible aux horaires convenus pour la remise du colis ;</li>
      <li>Confirmer la bonne réception du colis dans l'application dans les délais impartis ;</li>
      <li>Payer le montant convenu lors de la confirmation de la mission.</li>
    </ul>

    <h2 id="obligations-transporteur">Article 5 - Obligations du Transporteur</h2>
    <p>Le Transporteur s'engage à :</p>
    <ul>
      <li>Transporter uniquement les colis dont il a vérifié la conformité ;</li>
      <li>Assurer le transport avec soin et diligence ;</li>
      <li>Respecter les délais et horaires convenus avec l'Expéditeur ;</li>
      <li>Informer l'Expéditeur de tout incident survenant pendant le transport ;</li>
      <li>Remettre le colis en main propre au destinataire ou à l'adresse convenue ;</li>
      <li>Déclarer les revenus perçus via Sendora aux autorités fiscales compétentes ;</li>
      <li>Agir en qualité de particulier et non de professionnel du transport.</li>
    </ul>

    <h2 id="missions">Article 6 - Fonctionnement des missions</h2>
    <h3>6.1 Publication d'une annonce</h3>
    <p>
      L'Expéditeur publie une annonce décrivant son colis, les villes de départ et d'arrivée, les
      dates souhaitées et le budget proposé. Sendora peut suggérer automatiquement un Transporteur
      via son système de matching.
    </p>
    <h3>6.2 Acceptation d'une mission</h3>
    <p>
      Un Transporteur peut proposer ses services en réponse à une annonce. L'Expéditeur sélectionne
      la proposition de son choix. La mission est confirmée lorsque l'Expéditeur valide la
      proposition et que le paiement est autorisé.
    </p>
    <h3>6.3 Exécution et confirmation</h3>
    <p>
      À la livraison, l'Expéditeur (ou le destinataire) confirme la bonne réception dans
      l'application. Cette confirmation déclenche le versement de la rémunération au Transporteur.
    </p>
    <h3>6.4 Annulation</h3>
    <p>Les conditions d'annulation sont les suivantes :</p>
    <ul>
      <li>Annulation par l'Expéditeur plus de 24h avant le départ : remboursement intégral ;</li>
      <li>
        Annulation par l'Expéditeur moins de 24h avant : des frais d'annulation peuvent s'appliquer
        ;
      </li>
      <li>Annulation par le Transporteur : remboursement intégral à l'Expéditeur.</li>
    </ul>

    <h2 id="paiements">Article 7 - Modalités de paiement</h2>
    <p>
      Les transactions financières sur Sendora sont gérées via Stripe, prestataire de services de
      paiement agréé. La Société collecte des frais de service calculés sur le montant de chaque
      transaction.
    </p>
    <p>
      Le paiement effectué par l'Expéditeur est placé sous séquestre par Stripe jusqu'à confirmation
      de la livraison. En cas de litige non résolu, Sendora peut intervenir pour décider de
      l'attribution des fonds conformément aux présentes CGU.
    </p>
    <p>
      Les Transporteurs reçoivent leurs paiements sur leur compte Stripe Connect. Les virements sont
      effectués selon le calendrier défini par Stripe (généralement sous 2 à 7 jours ouvrés).
    </p>

    <h2 id="responsabilite">Article 8 - Responsabilité</h2>
    <h3>8.1 Responsabilité de la Société</h3>
    <p>
      Sendora est une plateforme d'intermédiation. La Société ne saurait être tenue responsable des
      dommages causés aux colis, des retards de livraison, ou des comportements des Utilisateurs.
      Sendora n'est ni expéditeur ni transporteur et ne prend aucune part dans l'exécution des
      missions.
    </p>
    <h3>8.2 Responsabilité des Transporteurs</h3>
    <p>
      Le Transporteur est entièrement responsable des colis qui lui sont confiés pendant le
      transport. Il est recommandé aux Transporteurs de vérifier leur assurance responsabilité
      civile pour couvrir les éventuels dommages causés aux colis transportés.
    </p>
    <h3>8.3 Force majeure</h3>
    <p>
      La Société ne peut être tenue responsable de tout manquement à ses obligations en cas de force
      majeure telle que définie par la jurisprudence française.
    </p>

    <h2 id="interdictions">Article 9 - Comportements interdits</h2>
    <p>Il est interdit de :</p>
    <ul>
      <li>Créer de faux profils ou usurper l'identité d'une tierce personne ;</li>
      <li>Utiliser la Plateforme à des fins commerciales non autorisées ;</li>
      <li>
        Contourner le système de paiement de la Plateforme (paiement direct entre Utilisateurs) ;
      </li>
      <li>Publier des contenus faux, trompeurs, diffamatoires ou illicites ;</li>
      <li>
        Harceler, menacer ou adopter tout comportement inapproprié envers d'autres Utilisateurs ;
      </li>
      <li>Tenter de nuire au bon fonctionnement technique de la Plateforme.</li>
    </ul>

    <h2 id="evaluations">Article 10 - Système d'évaluation</h2>
    <p>
      À l'issue de chaque mission, les Expéditeurs et Transporteurs peuvent s'évaluer mutuellement.
      Les évaluations doivent être sincères, objectives et respectueuses. Sendora se réserve le
      droit de modérer ou supprimer les évaluations qui contreviendraient à ces principes.
    </p>

    <h2 id="resiliation">Article 11 - Suspension et résiliation</h2>
    <p>
      Sendora peut suspendre ou résilier l'accès d'un Utilisateur à la Plateforme, avec ou sans
      préavis, en cas de :
    </p>
    <ul>
      <li>Violation des présentes CGU ;</li>
      <li>Comportement frauduleux avéré ou suspecté ;</li>
      <li>Évaluations négatives répétées ;</li>
      <li>Inactivité prolongée du compte.</li>
    </ul>
    <p>
      L'Utilisateur peut demander la fermeture de son compte à tout moment depuis les paramètres de
      l'application.
    </p>

    <h2 id="propriete">Article 12 - Propriété intellectuelle</h2>
    <p>
      L'ensemble des éléments constitutifs de la Plateforme (logo, marque, design, code source,
      algorithmes, contenus éditoriaux) sont la propriété exclusive de Sendora et sont protégés par
      le Code de la propriété intellectuelle. En publiant du contenu sur la Plateforme (photos,
      descriptions), l'Utilisateur accorde à Sendora une licence non exclusive d'utilisation aux
      fins de fourniture du service.
    </p>

    <h2 id="donnees">Article 13 - Protection des données personnelles</h2>
    <p>
      Le traitement des données personnelles des Utilisateurs est régi par la Politique de
      confidentialité de Sendora, disponible à l'adresse
      <router-link to="/privacy">/privacy</router-link>, laquelle est intégrée aux présentes CGU par
      référence.
    </p>

    <h2 id="modification">Article 14 - Modification des CGU</h2>
    <p>
      La Société se réserve le droit de modifier les présentes CGU à tout moment. Les modifications
      sont opposables aux Utilisateurs dès leur publication sur la Plateforme. En cas de
      modifications substantielles, les Utilisateurs seront informés par email ou notification
      in-app. La poursuite de l'utilisation de la Plateforme après notification vaut acceptation des
      nouvelles CGU.
    </p>

    <h2 id="droit">Article 15 - Droit applicable et litiges</h2>
    <p>
      Les présentes CGU sont soumises au droit français. En cas de litige entre la Société et un
      Utilisateur, les parties s'engagent à rechercher une solution amiable. À défaut d'accord dans
      un délai de 30 jours, le litige sera soumis aux juridictions françaises compétentes.
    </p>
    <p>
      Conformément aux dispositions relatives à la médiation de la consommation, tout consommateur
      peut recourir gratuitement à un médiateur. Nos informations de médiation seront communiquées
      sur demande.
    </p>

    <h2 id="contact">Article 16 - Contact</h2>
    <p>
      Pour toute question relative aux présentes CGU :<br />
      <a href="mailto:legal@sendora.app">legal@sendora.app</a><br />
      sendora.app
    </p>
  </LegalLayout>
</template>

<script lang="ts" setup>
import LegalLayout from '../components/LegalLayout.vue'
import { useSeo } from '@/composables/useSeo'

useSeo({
  title: 'Mentions Légales — Sendora',
  description:
    "Mentions légales de Sendora : éditeur, hébergeur et conditions d'utilisation de la plateforme de transport collaboratif de colis.",
  path: '/cgu',
})

const toc = [
  { id: 'objet', label: 'Art. 1 - Objet' },
  { id: 'definitions', label: 'Art. 2 - Définitions' },
  { id: 'acces', label: 'Art. 3 - Accès et inscription' },
  { id: 'obligations-expediteur', label: "Art. 4 - Obligations de l'Expéditeur" },
  { id: 'obligations-transporteur', label: 'Art. 5 - Obligations du Transporteur' },
  { id: 'missions', label: 'Art. 6 - Fonctionnement des missions' },
  { id: 'paiements', label: 'Art. 7 - Modalités de paiement' },
  { id: 'responsabilite', label: 'Art. 8 - Responsabilité' },
  { id: 'interdictions', label: 'Art. 9 - Comportements interdits' },
  { id: 'evaluations', label: "Art. 10 - Système d'évaluation" },
  { id: 'resiliation', label: 'Art. 11 - Suspension et résiliation' },
  { id: 'propriete', label: 'Art. 12 - Propriété intellectuelle' },
  { id: 'donnees', label: 'Art. 13 - Données personnelles' },
  { id: 'modification', label: 'Art. 14 - Modification des CGU' },
  { id: 'droit', label: 'Art. 15 - Droit applicable' },
  { id: 'contact', label: 'Art. 16 - Contact' },
]
</script>
