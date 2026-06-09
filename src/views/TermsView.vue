<template>
  <LegalLayout
    title="Conditions d'utilisation"
    tag="Terms of Service"
    date="01 juin 2025"
    :toc="toc"
  >
    <h2 id="acceptance">1. Acceptation des conditions</h2>
    <p>En accédant à l'application Sendora et en l'utilisant, vous acceptez d'être lié par les présentes Conditions d'utilisation. Si vous n'acceptez pas ces conditions dans leur intégralité, vous ne devez pas utiliser l'application.</p>
    <p>Sendora se réserve le droit de modifier ces conditions à tout moment. Les modifications entrent en vigueur dès leur publication. Votre utilisation continue de l'application après la publication des modifications vaut acceptation de celles-ci.</p>

    <h2 id="description">2. Description du service</h2>
    <p>Sendora est une plateforme de mise en relation entre des particuliers souhaitant expédier des colis (les « Expéditeurs ») et des particuliers effectuant des trajets et acceptant de transporter ces colis (les « Transporteurs »).</p>
    <p>Sendora agit en qualité d'intermédiaire et n'est pas responsable de la livraison effective des colis. La responsabilité de la livraison incombe aux Transporteurs qui acceptent les missions proposées.</p>
    <div class="highlight-box">
      <p><strong>Important :</strong> Sendora n'est pas un transporteur professionnel et ne garantit pas les délais de livraison. Le service repose sur la bonne volonté et la disponibilité des Transporteurs particuliers.</p>
    </div>

    <h2 id="eligibility">3. Éligibilité et inscription</h2>
    <p>Pour utiliser Sendora, vous devez :</p>
    <ul>
      <li>Être âgé d'au moins 18 ans ;</li>
      <li>Disposer d'une capacité juridique complète pour contracter ;</li>
      <li>Résider en France métropolitaine ou dans les DOM-TOM ;</li>
      <li>Fournir des informations exactes, complètes et à jour lors de votre inscription ;</li>
      <li>Posséder un compte bancaire valide pour effectuer et recevoir des paiements.</li>
    </ul>
    <p>Les Transporteurs sont soumis à une vérification d'identité obligatoire (KYC) via notre partenaire Didit avant de pouvoir accepter des missions. Cette vérification peut prendre jusqu'à 48 heures ouvrées.</p>

    <h2 id="accounts">4. Comptes utilisateurs</h2>
    <p>Vous êtes responsable de la confidentialité de vos identifiants de connexion et de toutes les activités effectuées depuis votre compte. Vous vous engagez à :</p>
    <ul>
      <li>Ne pas partager votre compte avec des tiers ;</li>
      <li>Nous informer immédiatement de toute utilisation non autorisée de votre compte ;</li>
      <li>Maintenir vos informations de profil à jour et exactes.</li>
    </ul>
    <p>Sendora se réserve le droit de suspendre ou supprimer tout compte en cas de violation des présentes conditions, de comportement frauduleux, ou d'utilisation abusive de la plateforme.</p>

    <h2 id="colis">5. Règles relatives aux colis</h2>
    <h3>5.1 Objets autorisés</h3>
    <p>Seuls les colis contenant des objets légaux, non dangereux et conformes aux présentes conditions peuvent être expédiés via Sendora.</p>
    <h3>5.2 Objets interdits</h3>
    <p>Il est strictement interdit d'expédier via Sendora les objets suivants :</p>
    <ul>
      <li>Substances illicites, drogues ou médicaments sans ordonnance ;</li>
      <li>Armes à feu, munitions ou objets dangereux ;</li>
      <li>Matières explosives, inflammables, radioactives ou corrosives ;</li>
      <li>Animaux vivants ;</li>
      <li>Billets de banque, chèques, titres ou valeurs mobilières ;</li>
      <li>Denrées périssables sans conditionnement adapté ;</li>
      <li>Tout objet dont le transport est interdit par la loi française ou européenne.</li>
    </ul>
    <p>Tout manquement à ces règles peut entraîner la suspension immédiate du compte et des poursuites judiciaires.</p>

    <h2 id="payments">6. Paiements et tarification</h2>
    <p>Les paiements sur Sendora sont traités de manière sécurisée via Stripe. En tant qu'Expéditeur, vous acceptez :</p>
    <ul>
      <li>De payer le montant convenu au moment de la confirmation de la mission ;</li>
      <li>Que le paiement est conservé sous séquestre jusqu'à confirmation de la livraison ;</li>
      <li>Que des frais de service peuvent être appliqués par Sendora.</li>
    </ul>
    <p>En tant que Transporteur, vous reconnaissez :</p>
    <ul>
      <li>Que les paiements sont versés sur votre compte Stripe Connect après confirmation de livraison ;</li>
      <li>Que vous êtes responsable de déclarer ces revenus aux autorités fiscales compétentes ;</li>
      <li>Que Sendora ne saurait être tenu responsable de vos obligations fiscales.</li>
    </ul>

    <h2 id="liability">7. Responsabilités et garanties</h2>
    <p>Sendora met tout en œuvre pour assurer le bon fonctionnement de la plateforme mais ne peut garantir une disponibilité continue et sans interruption du service.</p>
    <p>La responsabilité de Sendora est limitée aux seuls dommages directs résultant d'une faute avérée de sa part. En aucun cas, Sendora ne saurait être tenu responsable des dommages indirects, pertes de données, ou préjudices découlant de l'utilisation de la plateforme.</p>

    <h2 id="intellectual">8. Propriété intellectuelle</h2>
    <p>L'ensemble des contenus présents sur l'application Sendora (logo, textes, interface, code source) est la propriété exclusive de Sendora et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle. Toute reproduction, distribution ou utilisation sans autorisation préalable est interdite.</p>

    <h2 id="termination">9. Résiliation</h2>
    <p>Vous pouvez fermer votre compte à tout moment depuis les paramètres de l'application. Sendora se réserve le droit de résilier votre accès immédiatement et sans préavis en cas de violation des présentes conditions.</p>

    <h2 id="law">10. Droit applicable et juridiction</h2>
    <p>Les présentes conditions sont soumises au droit français. Tout litige relatif à leur interprétation ou leur exécution sera de la compétence exclusive des tribunaux français compétents, après tentative de résolution amiable.</p>

    <h2 id="contact">11. Contact</h2>
    <p>Pour toute question concernant les présentes conditions, vous pouvez nous contacter à : <a href="mailto:legal@sendora.app">legal@sendora.app</a></p>
  </LegalLayout>
</template>

<script lang="ts" setup>
import LegalLayout from '../components/LegalLayout.vue'

const toc = [
  { id: 'acceptance',    label: '1. Acceptation des conditions' },
  { id: 'description',   label: '2. Description du service' },
  { id: 'eligibility',   label: '3. Éligibilité et inscription' },
  { id: 'accounts',      label: '4. Comptes utilisateurs' },
  { id: 'colis',         label: '5. Règles relatives aux colis' },
  { id: 'payments',      label: '6. Paiements et tarification' },
  { id: 'liability',     label: '7. Responsabilités' },
  { id: 'intellectual',  label: '8. Propriété intellectuelle' },
  { id: 'termination',   label: '9. Résiliation' },
  { id: 'law',           label: '10. Droit applicable' },
  { id: 'contact',       label: '11. Contact' },
]
</script>
