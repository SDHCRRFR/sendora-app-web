<template>
  <LegalLayout
    title="Politique de confidentialité"
    tag="Privacy Policy"
    date="01 juin 2025"
    :toc="toc"
  >
    <h2 id="intro">1. Introduction</h2>
    <p>Sendora (« nous », « notre », « nos ») s'engage à protéger la vie privée de ses utilisateurs. La présente Politique de confidentialité décrit comment nous collectons, utilisons, partageons et protégeons vos données personnelles lorsque vous utilisez notre application mobile et notre site web.</p>
    <p>Cette politique est conforme au Règlement Général sur la Protection des Données (RGPD – Règlement UE 2016/679) et à la loi Informatique et Libertés modifiée.</p>
    <div class="highlight-box">
      <p><strong>Responsable du traitement :</strong> Sendora, contact@sendora.app, France</p>
    </div>

    <h2 id="collect">2. Données collectées</h2>
    <h3>2.1 Données que vous nous fournissez</h3>
    <ul>
      <li><strong>Données d'identité :</strong> nom, prénom, date de naissance, pièce d'identité (pour la vérification KYC des Transporteurs) ;</li>
      <li><strong>Coordonnées :</strong> adresse email, numéro de téléphone ;</li>
      <li><strong>Données financières :</strong> informations bancaires (traitées directement par Stripe, nous n'y avons pas accès) ;</li>
      <li><strong>Contenu utilisateur :</strong> photos de colis, messages du chat intégré, évaluations et commentaires ;</li>
      <li><strong>Données de profil :</strong> photo de profil, préférences de l'application.</li>
    </ul>
    <h3>2.2 Données collectées automatiquement</h3>
    <ul>
      <li><strong>Données de géolocalisation :</strong> position approximative lors de la recherche de transporteurs (avec votre consentement) ;</li>
      <li><strong>Données techniques :</strong> adresse IP, type d'appareil, système d'exploitation, version de l'application ;</li>
      <li><strong>Données d'utilisation :</strong> pages consultées, fonctionnalités utilisées, horodatages.</li>
    </ul>

    <h2 id="purpose">3. Finalités et bases légales du traitement</h2>
    <ul>
      <li><strong>Exécution du contrat :</strong> création et gestion de votre compte, mise en relation Expéditeurs/Transporteurs, traitement des paiements ;</li>
      <li><strong>Obligation légale :</strong> vérification d'identité KYC, lutte contre la fraude, respect de la réglementation financière ;</li>
      <li><strong>Intérêt légitime :</strong> amélioration de la plateforme, prévention de la fraude, sécurité du service ;</li>
      <li><strong>Consentement :</strong> géolocalisation, communications marketing (uniquement si vous y avez consenti).</li>
    </ul>

    <h2 id="sharing">4. Partage des données</h2>
    <p>Nous ne vendons jamais vos données personnelles à des tiers. Nous pouvons partager vos données avec :</p>
    <ul>
      <li><strong>Stripe :</strong> traitement sécurisé des paiements (données financières) ;</li>
      <li><strong>Didit :</strong> vérification d'identité des Transporteurs (KYC) ;</li>
      <li><strong>Amazon Web Services (AWS) :</strong> hébergement sécurisé des fichiers et images ;</li>
      <li><strong>SendGrid :</strong> envoi des emails transactionnels ;</li>
      <li><strong>Autorités judiciaires :</strong> en cas d'obligation légale ou d'enquête judiciaire.</li>
    </ul>
    <p>Tous nos prestataires sont soumis à des accords de traitement de données conformes au RGPD.</p>

    <h2 id="retention">5. Durée de conservation</h2>
    <ul>
      <li>Données de compte actif : durée de vie du compte + 3 ans après fermeture ;</li>
      <li>Données de transactions : 10 ans (obligations comptables et fiscales) ;</li>
      <li>Données KYC : conformément aux obligations légales en vigueur (généralement 5 ans) ;</li>
      <li>Messages du chat : 1 an après la fin de la mission ;</li>
      <li>Logs techniques : 12 mois.</li>
    </ul>

    <h2 id="rights">6. Vos droits</h2>
    <p>Conformément au RGPD, vous disposez des droits suivants :</p>
    <ul>
      <li><strong>Droit d'accès :</strong> obtenir une copie de vos données personnelles ;</li>
      <li><strong>Droit de rectification :</strong> corriger des données inexactes ;</li>
      <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données (sous réserve d'obligations légales) ;</li>
      <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré ;</li>
      <li><strong>Droit d'opposition :</strong> vous opposer à certains traitements ;</li>
      <li><strong>Droit de limitation :</strong> restreindre le traitement de vos données.</li>
    </ul>
    <p>Pour exercer ces droits, contactez-nous à : <a href="mailto:privacy@sendora.app">privacy@sendora.app</a>. Nous répondrons dans un délai d'un mois à compter de la réception de votre demande.</p>
    <p>Vous disposez également du droit d'introduire une réclamation auprès de la CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener">www.cnil.fr</a>).</p>

    <h2 id="security">7. Sécurité des données</h2>
    <p>Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données :</p>
    <ul>
      <li>Chiffrement TLS/HTTPS pour toutes les communications ;</li>
      <li>Chiffrement des données sensibles au repos ;</li>
      <li>Hébergement en Europe (AWS eu-west-1) ;</li>
      <li>Accès aux données limité au personnel habilité ;</li>
      <li>Audits de sécurité réguliers.</li>
    </ul>

    <h2 id="cookies">8. Cookies et technologies similaires</h2>
    <p>Notre site web utilise des cookies strictement nécessaires au fonctionnement du service. L'application mobile n'utilise pas de cookies. Nous n'utilisons pas de cookies à des fins publicitaires ou de tracking tiers.</p>

    <h2 id="transfer">9. Transferts internationaux</h2>
    <p>Vos données sont principalement stockées et traitées en Europe. Dans le cas où un transfert vers un pays tiers serait nécessaire, nous nous assurons que des garanties appropriées sont en place (clauses contractuelles types de la Commission européenne).</p>

    <h2 id="update">10. Modifications de la politique</h2>
    <p>Nous pouvons mettre à jour cette politique de confidentialité périodiquement. En cas de modifications substantielles, nous vous en informerons par email ou via une notification dans l'application. La date de la dernière mise à jour est indiquée en haut de ce document.</p>

    <h2 id="contact">11. Contact</h2>
    <p>Pour toute question relative à la protection de vos données personnelles : <a href="mailto:privacy@sendora.app">privacy@sendora.app</a></p>
  </LegalLayout>
</template>

<script lang="ts" setup>
import LegalLayout from '../components/LegalLayout.vue'
import { useSeo } from '@/composables/useSeo'

useSeo({
  title: 'Politique de Confidentialité & RGPD',
  description:
    'Comment Sendora collecte, utilise et protège vos données personnelles. Conformité RGPD totale, chiffrement et hébergement en Europe (AWS EU).',
  path: '/privacy',
})

const toc = [
  { id: 'intro',     label: '1. Introduction' },
  { id: 'collect',   label: '2. Données collectées' },
  { id: 'purpose',   label: '3. Finalités et bases légales' },
  { id: 'sharing',   label: '4. Partage des données' },
  { id: 'retention', label: '5. Durée de conservation' },
  { id: 'rights',    label: '6. Vos droits' },
  { id: 'security',  label: '7. Sécurité des données' },
  { id: 'cookies',   label: '8. Cookies' },
  { id: 'transfer',  label: '9. Transferts internationaux' },
  { id: 'update',    label: '10. Modifications' },
  { id: 'contact',   label: '11. Contact' },
]
</script>
