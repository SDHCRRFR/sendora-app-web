<template>
  <main class="carrier-page">
    <section class="carrier-hero">
      <div class="container">
        <nav class="crumbs" aria-label="Fil d’Ariane">
          <RouterLink to="/">Accueil</RouterLink>
          <span aria-hidden="true">›</span>
          <span aria-current="page">Devenir transporteur</span>
        </nav>

        <div class="carrier-hero-grid">
          <div class="carrier-intro">
            <span class="chip"><AppIcon name="map-pin" /> Du côté des voyageurs</span>
            <h1>Votre prochain trajet<br /><em>peut rendre service.</em></h1>
            <p class="carrier-lead">
              Vous partez déjà ? Faites une place à un colis qui va dans votre direction. Avec
              Sendora, vous choisissez vos envois et partagez les frais de votre voyage, en France
              comme vers la diaspora.
            </p>
            <div class="carrier-actions">
              <a href="#download" class="btn btn-primary">
                Commencer avec Sendora <AppIcon name="arrow-right" />
              </a>
              <a href="#fonctionnement" class="btn btn-secondary">Voir les étapes</a>
            </div>
            <p class="carrier-fine">
              Inscription gratuite · Aucun abonnement · Vous choisissez vos colis
            </p>
          </div>

          <div class="carrier-preview">
            <PhoneShowcase :screens="screens" />
            <p>Vos trajets, vos échanges, votre profil. Tout se passe dans l’app.</p>
          </div>
        </div>

        <ul class="carrier-benefits" aria-label="Les avantages pour les voyageurs">
          <li>
            <AppIcon name="map-pin" /><span
              ><strong>Votre trajet avant tout</strong>Vous indiquez où et quand vous partez.</span
            >
          </li>
          <li>
            <AppIcon name="package" /><span
              ><strong>Vous gardez le choix</strong>Vous acceptez les colis qui vous
              conviennent.</span
            >
          </li>
          <li>
            <AppIcon name="credit-card" /><span
              ><strong>Un paiement encadré</strong>La livraison est confirmée avant sa
              libération.</span
            >
          </li>
        </ul>
      </div>
    </section>

    <section id="fonctionnement" class="carrier-section" aria-labelledby="steps-title">
      <div class="container carrier-process">
        <div>
          <span class="chip">Votre première livraison</span>
          <h2 id="steps-title">Du départ à l’arrivée,<br /><em>chaque étape est claire.</em></h2>
          <ol class="carrier-steps">
            <li v-for="(step, index) in steps" :key="step.title">
              <span class="step-number" aria-hidden="true">{{
                String(index + 1).padStart(2, '0')
              }}</span>
              <div>
                <h3>{{ step.title }}</h3>
                <p>{{ step.text }}</p>
              </div>
            </li>
          </ol>
        </div>

        <aside class="carrier-payment" aria-labelledby="payment-title">
          <span class="payment-icon"><AppIcon name="shield-check" /></span>
          <span class="payment-eyebrow">Livraison & paiement</span>
          <h2 id="payment-title">Le code fait<br />le lien.</h2>
          <p>
            Dès la récupération du colis, un code apparaît sur sa fiche dans le compte de
            l’expéditeur. Il vous le transmet une fois le colis livré au destinataire.
          </p>
          <ul>
            <li><AppIcon name="check-circle" />Vous remettez le colis au destinataire.</li>
            <li><AppIcon name="check-circle" />L’expéditeur vous communique le code.</li>
            <li><AppIcon name="check-circle" />Vous validez la livraison dans l’app.</li>
          </ul>
          <p>
            Le paiement est alors libéré et le versement est traité via Stripe Connect. L’arrivée
            sur votre compte dépend des délais de traitement et de votre banque.
          </p>
          <RouterLink to="/blog/validation-colis"
            >Comprendre la validation de colis <AppIcon name="arrow-right"
          /></RouterLink>
        </aside>
      </div>
    </section>

    <section class="carrier-section carrier-preparation" aria-labelledby="checklist-title">
      <div class="container carrier-checklist-grid">
        <div>
          <span class="chip">Les bons réflexes</span>
          <h2 id="checklist-title">Avant de dire oui,<br /><em>mettez-vous d’accord.</em></h2>
          <p class="carrier-lead">
            Quelques précisions avec l’expéditeur rendent la prise en charge et la livraison plus
            simples pour tout le monde.
          </p>
        </div>
        <ul class="carrier-checklist">
          <li v-for="item in checklist" :key="item.title">
            <AppIcon name="check-circle" />
            <div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section class="carrier-section" aria-labelledby="faq-title">
      <div class="container carrier-faq">
        <span class="chip">On vous explique</span>
        <h2 id="faq-title">Vos questions,<br /><em>avant le premier départ.</em></h2>
        <details v-for="item in faq" :key="item.q">
          <summary>{{ item.q }}</summary>
          <p>{{ item.a }}</p>
        </details>
        <p class="carrier-help">
          Besoin d’un coup de main ?
          <RouterLink to="/contact">Contactez l’équipe Sendora →</RouterLink>
        </p>
      </div>
    </section>

    <section
      id="download"
      class="carrier-section carrier-download"
      aria-labelledby="download-title"
    >
      <div class="container">
        <div class="carrier-download-inner">
          <span class="chip">À vous de prendre la route</span>
          <h2 id="download-title">Un trajet prévu ?<br /><em>Commencez par le publier.</em></h2>
          <p>
            Téléchargez Sendora, complétez votre profil et retrouvez les colis dans votre direction.
          </p>
          <div class="carrier-actions">
            <a
              :href="APP_STORE_URL"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary"
              >Télécharger sur l’App Store <AppIcon name="arrow-right"
            /></a>
            <a
              :href="PLAY_STORE_URL"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-secondary"
              >Disponible sur Google Play <AppIcon name="arrow-right"
            /></a>
          </div>
          <RouterLink to="/transport-colis-entre-particuliers" class="carrier-send-link"
            >Vous préférez envoyer un colis ? Découvrez le parcours expéditeur →</RouterLink
          >
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import AppIcon from '@/components/AppIcon.vue'
import PhoneShowcase, { type PhoneScreen } from '@/components/PhoneShowcase.vue'
import { useSeo } from '@/composables/useSeo'
import { APP_STORE_URL, PLAY_STORE_URL, breadcrumb, faqPage } from '@/seo/schema'

const screens: PhoneScreen[] = [
  {
    image: '/screens/hero-centre.png',
    imageLight: '/screens/hero-centre-w.png',
    alt: 'Vos trajets dans Sendora',
  },
  {
    image: '/screens/hero-gauche.png',
    imageLight: '/screens/hero-gauche-w.png',
    alt: 'La recherche dans Sendora',
  },
  {
    image: '/screens/hero-droite.png',
    imageLight: '/screens/hero-droite-w.png',
    alt: 'Votre profil dans Sendora',
  },
]

const steps = [
  {
    title: 'Complétez votre profil',
    text: 'Créez votre compte dans l’application et effectuez la vérification d’identité. Configurez les informations nécessaires au versement de vos paiements via Stripe Connect.',
  },
  {
    title: 'Publiez le trajet que vous faites déjà',
    text: 'Indiquez votre départ, votre arrivée et vos dates. Consultez les colis qui correspondent à votre voyage et choisissez ceux que vous pouvez transporter.',
  },
  {
    title: 'Échangez, puis récupérez le colis',
    text: 'Convenez du prix et des modalités avec l’expéditeur dans la messagerie. Vérifiez ensemble le contenu déclaré, le poids et l’emballage avant de prendre le colis en charge.',
  },
  {
    title: 'Livrez et confirmez avec le code',
    text: 'Remettez le colis au destinataire convenu. Contactez ensuite l’expéditeur pour recevoir le code et saisissez-le sur la page de validation du colis dans l’application.',
  },
]

const checklist = [
  {
    title: 'Le colis tient dans votre voyage',
    text: 'Confirmez son poids, ses dimensions, son contenu déclaré et l’espace dont vous disposez. Vérifiez les règles applicables à votre voyage et aux objets transportés.',
  },
  {
    title: 'La prise en charge est organisée',
    text: 'Mettez-vous d’accord sur le lieu, le créneau et les personnes à contacter au départ comme à l’arrivée.',
  },
  {
    title: 'Le prix est convenu',
    text: 'Clarifiez le montant avec l’expéditeur et gardez vos échanges et le paiement dans l’application.',
  },
  {
    title: 'L’expéditeur sera joignable à l’arrivée',
    text: 'Prévoyez comment obtenir son code une fois le colis livré. La validation doit suivre la remise effective au destinataire.',
  },
]

const faq = [
  {
    q: 'Faut-il déjà avoir un trajet prévu ?',
    a: 'Oui, le principe de Sendora est de transporter un colis sur un trajet que vous effectuez déjà. Vous indiquez vos dates et votre itinéraire pour trouver des envois compatibles.',
  },
  {
    q: 'Est-ce que je choisis les colis que je transporte ?',
    a: 'Oui. Vous échangez avec l’expéditeur et acceptez les colis qui conviennent à votre trajet, à vos disponibilités et à votre capacité de transport.',
  },
  {
    q: 'Combien puis-je recevoir pour un trajet ?',
    a: 'Le montant dépend du colis, du trajet et de l’accord avec l’expéditeur. Vérifiez le prix convenu avant d’accepter : il n’y a pas de montant fixe garanti pour un voyage.',
  },
  {
    q: 'Comment fonctionne le paiement ?',
    a: 'Le paiement est conservé sous séquestre jusqu’à la confirmation de livraison. Après la remise du colis et sa validation avec le code, le versement est traité via Stripe Connect. Le délai d’arrivée des fonds dépend du traitement et de votre banque.',
  },
  {
    q: 'Que faire si je ne peux pas valider le colis ?',
    a: 'Le code est disponible dans le compte de l’expéditeur sur le colis concerné, dès sa récupération. Demandez-le après la livraison. Si le code est introuvable, refusé ou si l’expéditeur reste injoignable, consultez notre guide de validation puis contactez le support via la page Contact, avec le sujet « Validation colis ».',
  },
]

useSeo({
  title: 'Devenir transporteur Sendora : partagez les frais de vos trajets',
  description:
    'Vous voyagez déjà ? Découvrez comment transporter des colis avec Sendora : profil vérifié, choix des envois, prise en charge, validation par code et paiement.',
  path: '/devenir-transporteur',
  jsonLd: [
    breadcrumb([
      { name: 'Accueil', path: '/' },
      { name: 'Devenir transporteur', path: '/devenir-transporteur' },
    ]),
    faqPage(faq),
  ],
})
</script>

<style scoped>
.carrier-page {
  overflow-x: clip;
}
.carrier-hero {
  padding: 2rem 0 0;
}
.crumbs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  color: var(--text-muted);
  font-size: 0.82rem;
}
.crumbs a {
  color: var(--verdant);
  font-weight: 700;
}
.carrier-hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 3rem;
  padding: 4rem 0;
}
.carrier-intro {
  min-width: 0;
}
.carrier-intro h1 {
  margin: 1.5rem 0;
  font: 700 clamp(2.5rem, 4.5vw, 4.1rem)/1.1 var(--font-display);
  letter-spacing: -0.04em;
  color: var(--ink);
}
.carrier-page em {
  color: var(--verdant);
}
.carrier-lead {
  max-width: 570px;
  font-size: 1.06rem;
  line-height: 1.85;
  color: var(--text-secondary);
}
.carrier-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.75rem;
}
.carrier-actions .btn {
  line-height: 1.4;
  text-align: center;
}
.carrier-fine {
  margin-top: 1.2rem;
  font-size: 0.78rem;
  color: var(--text-muted);
}
.carrier-page .app-icon {
  width: 21px;
  height: 21px;
  flex-shrink: 0;
}
.carrier-page .chip .app-icon {
  width: 16px;
  height: 16px;
}
.carrier-preview {
  min-width: 0;
  text-align: center;
}
.carrier-preview p {
  position: relative;
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: var(--text-secondary);
}
.carrier-benefits {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}
.carrier-benefits li {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.75rem 1.5rem;
  color: var(--text-secondary);
  font-size: 0.86rem;
  line-height: 1.65;
}
.carrier-benefits li + li {
  border-left: 1px solid var(--border);
}
.carrier-benefits .app-icon {
  margin-top: 0.2rem;
  color: var(--verdant);
}
.carrier-benefits strong {
  display: block;
  color: var(--ink);
  font-size: 0.95rem;
  margin-bottom: 0.2rem;
}
.carrier-section {
  padding: 5rem 0;
  scroll-margin-top: 95px;
}
.carrier-section h2 {
  color: var(--ink);
  font: 700 clamp(1.9rem, 3vw, 2.8rem)/1.15 var(--font-display);
  letter-spacing: -0.03em;
  margin: 1.2rem 0 1.75rem;
}
.carrier-process {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: start;
  gap: 5rem;
}
.carrier-steps {
  list-style: none;
  margin-top: 2.5rem;
}
.carrier-steps li {
  display: flex;
  gap: 1.25rem;
  padding-bottom: 1.75rem;
}
.carrier-steps li + li {
  padding-top: 1.75rem;
  border-top: 1px solid var(--border);
}
.step-number {
  flex-shrink: 0;
  color: var(--verdant);
  font: 700 1.5rem/1.4 var(--font-display);
}
.carrier-steps h3,
.carrier-checklist h3 {
  font-size: 1.05rem;
  color: var(--ink);
  margin-bottom: 0.5rem;
}
.carrier-steps p,
.carrier-checklist p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.8;
}
.carrier-payment {
  padding: 2.25rem;
  border-radius: var(--radius-lg);
  background: var(--band);
  color: var(--band-ink);
}
.payment-icon {
  display: inline-flex;
  padding: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius);
  margin-bottom: 1.75rem;
}
.payment-icon .app-icon {
  width: 27px;
  height: 27px;
}
.payment-eyebrow {
  display: block;
  text-transform: uppercase;
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  font-weight: 700;
  opacity: 0.75;
}
.carrier-payment h2 {
  color: inherit;
  margin-top: 1rem;
}
.carrier-payment p {
  font-size: 0.92rem;
  line-height: 1.85;
  opacity: 0.85;
}
.carrier-payment ul {
  display: grid;
  gap: 1rem;
  list-style: none;
  padding: 1.75rem 0;
  font-size: 0.9rem;
}
.carrier-payment li {
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
}
.carrier-payment a {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding-top: 1.5rem;
  margin-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 0.86rem;
  font-weight: 700;
}
.carrier-preparation {
  background: var(--surface-soft);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}
.carrier-checklist-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
}
.carrier-checklist {
  display: grid;
  gap: 1.75rem;
  list-style: none;
}
.carrier-checklist li {
  display: flex;
  gap: 1rem;
}
.carrier-checklist .app-icon {
  color: var(--verdant);
  margin-top: 0.2rem;
}
.carrier-faq {
  max-width: 820px;
}
.carrier-faq details {
  border-bottom: 1px solid var(--border);
}
.carrier-faq summary {
  padding: 1.3rem 0;
  color: var(--ink);
  font-weight: 700;
  cursor: pointer;
}
.carrier-faq details p {
  padding-bottom: 1.4rem;
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.85;
}
.carrier-help {
  margin-top: 1.75rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
}
.carrier-help a {
  color: var(--verdant);
  font-weight: 700;
}
.carrier-download {
  padding-top: 0;
}
.carrier-download-inner {
  text-align: center;
  padding: 3.5rem 2rem;
  border: 1px solid var(--border);
  border-radius: 32px;
  background: var(--surface-soft);
}
.carrier-download-inner > p {
  color: var(--text-secondary);
  line-height: 1.8;
  max-width: 550px;
  margin: 0 auto;
}
.carrier-download .carrier-actions {
  justify-content: center;
}
.carrier-send-link {
  display: inline-block;
  margin-top: 1.75rem;
  font-size: 0.85rem;
  color: var(--verdant);
  font-weight: 700;
}
.carrier-page a:focus-visible,
.carrier-page summary:focus-visible {
  outline: 3px solid var(--verdant);
  outline-offset: 5px;
  border-radius: 5px;
}
.carrier-payment a:focus-visible {
  outline-color: var(--band-ink);
}
@media (max-width: 1000px) {
  .carrier-hero-grid {
    gap: 1.5rem;
  }
  .carrier-process,
  .carrier-checklist-grid {
    gap: 2.5rem;
  }
  .carrier-benefits li {
    padding: 1.5rem 1rem;
    gap: 0.65rem;
  }
}
@media (max-width: 860px) {
  .carrier-hero-grid {
    grid-template-columns: 1fr;
    text-align: center;
    padding-top: 2.5rem;
  }
  .carrier-lead {
    margin-inline: auto;
  }
  .carrier-actions {
    justify-content: center;
  }
  .carrier-preview {
    margin-top: 1rem;
  }
  .carrier-process,
  .carrier-checklist-grid {
    grid-template-columns: 1fr;
  }
  .carrier-payment {
    max-width: 600px;
  }
  .carrier-section {
    padding: 3.5rem 0;
  }
  .carrier-download {
    padding-top: 0;
  }
}
@media (max-width: 540px) {
  .carrier-benefits {
    grid-template-columns: 1fr;
  }
  .carrier-benefits li {
    padding: 1.25rem 0.5rem;
  }
  .carrier-benefits li + li {
    border-left: 0;
    border-top: 1px solid var(--border);
  }
  .carrier-intro h1 {
    font-size: 2.4rem;
  }
  .carrier-payment {
    padding: 1.75rem;
  }
  .carrier-download-inner {
    padding: 2.5rem 1.25rem;
    border-radius: var(--radius-lg);
  }
  .carrier-download .btn {
    width: 100%;
  }
}
</style>
