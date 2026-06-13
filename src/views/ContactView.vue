<template>
  <main class="contact-page">

    <section class="contact-hero">
      <div class="container contact-inner">
        <div class="contact-intro">
          <span class="chip">Contact</span>
          <h1 class="page-title">Une question ?<br><em>On vous répond.</em></h1>
          <p class="page-subtitle contact-lead">
            L'équipe Sendora est disponible par email pour toute question liée à l'application,
            à votre compte, aux paiements ou à la confidentialité de vos données.
            Nous nous engageons à répondre dans les meilleurs délais.
          </p>
        </div>

        <div class="surface contact-card">
          <div class="contact-row">
            <div class="cr-label">Support général</div>
            <a class="cr-email" href="mailto:contact@sendora.app">contact@sendora.app</a>
            <p class="cr-note">Pour l'aide, les retours, et les demandes liées à votre compte.</p>
          </div>
          <div class="contact-row">
            <div class="cr-label">Données personnelles</div>
            <a class="cr-email" href="mailto:privacy@sendora.app">privacy@sendora.app</a>
            <p class="cr-note">Exercice de vos droits RGPD, suppression de compte, export de données.</p>
          </div>
          <div class="contact-row">
            <div class="cr-label">Questions légales</div>
            <a class="cr-email" href="mailto:legal@sendora.app">legal@sendora.app</a>
            <p class="cr-note">CGU, mentions légales, signalement de contenu.</p>
          </div>
          <div class="contact-actions">
            <RouterLink to="/" class="btn btn-secondary">← Retour à l'accueil</RouterLink>
            <a class="btn btn-primary" href="mailto:contact@sendora.app?subject=Contact%20Sendora">Écrire un email</a>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-topics">
      <div class="container contact-grid">
        <article class="surface topic-panel" v-for="topic in topics" :key="topic.title">
          <span class="topic-icon">{{ topic.icon }}</span>
          <h2>{{ topic.title }}</h2>
          <p>{{ topic.desc }}</p>
        </article>
      </div>
    </section>

  </main>
</template>

<script lang="ts" setup>
const topics = [
  {
    icon: '📦',
    title: 'Support utilisateur',
    desc: 'Questions sur l\'envoi de colis, le matching, les transporteurs disponibles, ou la confirmation de livraison.',
  },
  {
    icon: '💳',
    title: 'Paiements & remboursements',
    desc: 'Problème de paiement Stripe, remboursement, virement Stripe Connect, ou litige sur une mission.',
  },
  {
    icon: '🔐',
    title: 'Compte & identité',
    desc: 'Connexion, vérification KYC, modification des informations personnelles, ou suppression de compte.',
  },
  {
    icon: '🛡️',
    title: 'Confidentialité & RGPD',
    desc: 'Accès à vos données, droit à l\'oubli, portabilité, ou réclamation auprès de la CNIL.',
  },
  {
    icon: '⚡',
    title: 'Signaler un problème',
    desc: 'Bug dans l\'application, comportement bloquant, ou incident à signaler à l\'équipe technique.',
  },
  {
    icon: '🤝',
    title: 'Partenariats',
    desc: 'Intégration, presse, collaboration institutionnelle ou question business. On est à l\'écoute.',
  },
]
</script>

<style scoped>
.contact-page   { padding: 2rem 0 5rem; }
.contact-hero   { padding: 1.5rem 0 2.5rem; }
.contact-inner  {
  display: grid; grid-template-columns: 1fr 420px;
  gap: 2rem; align-items: start;
}
.contact-intro  { display: grid; gap: 1.1rem; align-content: start; padding-top: .75rem; }
.contact-intro .page-title { font-family: var(--font-display); letter-spacing: -.03em; }
.contact-intro .page-title em { font-style: italic; color: var(--verdant); }
.contact-lead   { font-size: .95rem; }

.contact-card { padding: 1.5rem; display: grid; gap: 1px; overflow: hidden; }
.contact-row {
  padding: 1.1rem;
  background: var(--cream); border-radius: var(--radius);
  border: 1px solid var(--border);
}
.cr-label {
  font-size: .72rem; font-weight: 800; letter-spacing: .08em;
  text-transform: uppercase; color: var(--text-muted); margin-bottom: .4rem;
}
.cr-email {
  display: inline-block; font-size: 1rem; font-weight: 800;
  color: var(--verdant); margin-bottom: .35rem;
}
.cr-note { font-size: .85rem; color: var(--text-secondary); line-height: 1.6; margin: 0; }
.contact-actions {
  display: flex; gap: .75rem; flex-wrap: wrap;
  padding-top: .5rem;
}

.contact-topics { padding-top: 1rem; }
.contact-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
.topic-panel { padding: 1.5rem; display: grid; gap: .7rem; }
.topic-icon  { font-size: 1.6rem; }
.topic-panel h2 { margin: 0; font-size: 1rem; font-weight: 800; }
.topic-panel p  { margin: 0; font-size: .88rem; color: var(--text-secondary); line-height: 1.65; }

@media (max-width: 900px) {
  .contact-inner { grid-template-columns: 1fr; }
  .contact-grid  { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .contact-grid  { grid-template-columns: 1fr; }
}
</style>
