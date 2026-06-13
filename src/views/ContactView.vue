<template>
  <main class="contact-page">
    <section class="contact-hero">
      <div class="container contact-hero-inner">
        <div class="contact-intro">
          <span class="chip">Contact</span>
          <h1 class="page-title">Une question ? On vous répond.</h1>
          <p class="page-subtitle">
            Cette page de contact est séparée des autres contenus pour rester
            claire, simple et compatible avec les exigences de validation.
          </p>
        </div>

        <div class="surface contact-card">
          <div class="contact-item">
            <p class="contact-label">Support email</p>
            <a class="contact-link" href="mailto:contact@sendora.app">contact@sendora.app</a>
            <p class="contact-note">Pour l’assistance, les retours et les demandes liées au compte.</p>
          </div>

          <div class="contact-item">
            <p class="contact-label">Disponibilité</p>
            <p class="contact-value">Réponse dès que possible pendant les horaires ouvrés.</p>
          </div>

          <div class="contact-item contact-actions">
            <RouterLink to="/" class="btn btn-secondary">Retour à l’accueil</RouterLink>
            <a class="btn btn-primary" href="mailto:contact@sendora.app?subject=Contact%20Sendora">
              Écrire un email
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-details">
      <div class="container contact-grid">
        <article class="surface contact-panel">
          <span class="contact-icon">📦</span>
          <h2>Support utilisateur</h2>
          <p>
            Pour toute question sur l’envoi, le transport, les paiements ou la vérification d’identité.
          </p>
        </article>

        <article class="surface contact-panel">
          <span class="contact-icon">🔒</span>
          <h2>Confidentialité</h2>
          <p>
            Pour les demandes relatives aux données personnelles et aux informations de compte.
          </p>
        </article>

        <article class="surface contact-panel">
          <span class="contact-icon">⚡</span>
          <h2>Réclamations</h2>
          <p>
            Pour signaler un bug, un comportement bloquant ou un incident sur la plateforme.
          </p>
        </article>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.contact-page {
  padding: 2rem 0 4rem;
}

.contact-hero {
  padding: 1.5rem 0 2rem;
}

.contact-hero-inner {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 420px;
  gap: 1.5rem;
  align-items: start;
}

.contact-intro {
  display: grid;
  gap: 1rem;
  align-content: start;
  padding-top: 1rem;
}

.contact-card {
  padding: 1.25rem;
  display: grid;
  gap: 1rem;
}

.contact-item {
  padding: 1rem;
  border-radius: var(--radius);
  background: var(--surface-soft);
  border: 1px solid var(--border);
}

.contact-label {
  margin: 0 0 0.35rem;
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
  font-weight: 800;
}

.contact-link {
  display: inline-block;
  font-size: 1.05rem;
  font-weight: 800;
  color: var(--brand-700);
}

.contact-note,
.contact-value {
  margin: 0.55rem 0 0;
  color: var(--text-secondary);
  line-height: 1.7;
}

.contact-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  background: transparent;
  border: 0;
  padding-inline: 0;
}

.contact-details {
  padding-top: 1rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.contact-panel {
  padding: 1.25rem;
  display: grid;
  gap: 0.8rem;
}

.contact-icon {
  font-size: 1.5rem;
}

.contact-panel h2 {
  margin: 0;
  font-size: 1.15rem;
}

.contact-panel p {
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.7;
}

@media (max-width: 960px) {
  .contact-hero-inner,
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
