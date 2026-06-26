<template>
  <main class="lp">
    <section class="lp-hero">
      <div class="container">
        <nav class="crumbs" aria-label="Fil d'Ariane">
          <RouterLink to="/">Accueil</RouterLink>
          <span aria-hidden="true">›</span>
          <span>Envoyer un colis pas cher</span>
        </nav>
        <span class="chip">Petit budget</span>
        <h1>Envoyer un colis <em>pas cher</em></h1>
        <p class="lp-lead">
          La façon la moins chère d'envoyer un colis n'est pas toujours le transporteur classique.
          Avec le co-transport entre particuliers, vous confiez votre colis à quelqu'un qui fait déjà
          le trajet : jusqu'à 60 % d'économie en France et jusqu'à 10× moins cher vers la diaspora.
        </p>
        <div class="lp-cta">
          <a href="https://apps.apple.com/fr/app/sendora/id6773115334" target="_blank" rel="noopener" class="btn btn-primary">Télécharger l'app →</a>
          <RouterLink to="/transport-colis-entre-particuliers" class="btn btn-ghost">Comment ça marche →</RouterLink>
        </div>
      </div>
    </section>

    <section class="lp-block lp-alt">
      <div class="container">
        <h2>Exemples de prix pour 10&nbsp;kg</h2>
        <p class="lp-text">Comparatif indicatif entre un transporteur express et Sendora.</p>
        <div class="price-table">
          <div class="pt-head">
            <span>Destination</span><span>Express</span><span>Sendora</span><span>Économie</span>
          </div>
          <div v-for="row in priceExamples" :key="row.country" class="pt-row">
            <span class="pt-dest">{{ row.country }}</span>
            <span class="pt-old">{{ row.express }}&nbsp;€</span>
            <span class="pt-new">{{ row.sendora }}&nbsp;€</span>
            <span class="pt-save">−{{ row.savings }} %</span>
          </div>
        </div>
        <p class="lp-fine">
          Tarifs concurrents donnés à titre indicatif ; le prix Sendora dépend des annonces des
          expéditeurs sur chaque envoie.
        </p>
      </div>
    </section>

    <section class="lp-block">
      <div class="container">
        <h2>5 astuces pour envoyer moins cher</h2>
        <div class="why-grid">
          <div class="why-card"><h3>1. Choisissez le co-transport</h3><p>Un particulier qui fait déjà le trajet n'ajoute aucun coût logistique : c'est l'option la plus économique.</p></div>
          <div class="why-card"><h3>2. Anticipez la date</h3><p>Plus vous publiez tôt, plus vous trouvez de voyageurs et de tarifs compétitifs sur votre trajet.</p></div>
          <div class="why-card"><h3>3. Groupez vos envois</h3><p>Regrouper plusieurs articles dans un même colis réduit le coût au kilo.</p></div>
          <div class="why-card"><h3>4. Comparez les offres</h3><p>Plusieurs transporteurs peuvent répondre : comparez prix, notes et délais avant de choisir.</p></div>
          <div class="why-card"><h3>5. Restez flexible</h3><p>Un peu de souplesse sur les dates ou la ville d'arrivée fait souvent baisser la facture.</p></div>
        </div>
      </div>
    </section>

    <section class="lp-block lp-alt">
      <div class="container">
        <h2>Pas cher, mais sécurisé</h2>
        <p class="lp-text">
          Économiser ne veut pas dire prendre des risques. Tous les transporteurs Sendora sont
          vérifiés par KYC, le paiement est bloqué sous séquestre Stripe jusqu'à la livraison, et vous
          suivez votre colis en temps réel. Le meilleur prix, sans sacrifier la confiance.
        </p>
        <div class="links-row">
          <RouterLink to="/envoyer-colis-senegal" class="link-card">Envoyer un colis au Sénégal →</RouterLink>
          <RouterLink to="/envoyer-colis-maroc" class="link-card">Envoyer un colis au Maroc →</RouterLink>
          <RouterLink to="/envoyer-colis-algerie" class="link-card">Envoyer un colis en Algérie →</RouterLink>
          <RouterLink to="/envoyer-medicaments" class="link-card">Envoyer des médicaments →</RouterLink>
          <RouterLink to="/transport-colis-entre-particuliers" class="link-card">Transport entre particuliers →</RouterLink>
        </div>
      </div>
    </section>

    <section class="lp-block">
      <div class="container">
        <h2>Questions fréquentes</h2>
        <div class="faq-list">
          <details v-for="(f, i) in faq" :key="i" class="faq-item">
            <summary>{{ f.q }}</summary>
            <p>{{ f.a }}</p>
          </details>
        </div>
      </div>
    </section>

    <section class="lp-final">
      <div class="container">
        <h2>Envoyez votre colis au meilleur prix</h2>
        <a href="https://apps.apple.com/fr/app/sendora/id6773115334" target="_blank" rel="noopener" class="btn btn-primary">Télécharger Sendora →</a>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { useSeo } from '@/composables/useSeo'
import { breadcrumb, faqPage, service, SITE_URL } from '@/seo/schema'
import { destinations, savingsVsExpress } from '@/data/destinations'

const priceExamples = destinations.map((d) => {
  const express = Math.max(...d.competitors.map((c) => c.price))
  return {
    country: d.country,
    express,
    sendora: d.sendora.price,
    savings: savingsVsExpress(d),
  }
})

const faq = [
  {
    q: 'Quelle est la façon la moins chère d’envoyer un colis ?',
    a: 'Le transport entre particuliers (co-transport) est généralement l’option la moins chère, car il n’ajoute aucun coût logistique : un voyageur transporte votre colis sur un trajet qu’il fait déjà.',
  },
  {
    q: 'Combien coûte un colis de 10 kg avec Sendora ?',
    a: 'En France, jusqu’à 60 % moins cher qu’un transporteur classique. Vers la diaspora, par exemple environ 40 € pour le Maroc, 48 € pour l’Algérie et 60 € pour le Sénégal, contre 110 à 280 € en express.',
  },
  {
    q: 'Envoyer pas cher, est-ce risqué ?',
    a: 'Non. Les transporteurs sont vérifiés KYC et le paiement est bloqué sous séquestre Stripe jusqu’à la confirmation de livraison. Vous gardez le contrôle et le suivi du début à la fin.',
  },
]

useSeo({
  title: 'Envoyer un colis pas cher entre particuliers',
  description:
    'Comment envoyer un colis pas cher ? Le co-transport entre particuliers permet jusqu’à 60 % d’économie en France et jusqu’à 10× moins cher vers la diaspora. Exemples de prix, astuces et envoi sécurisé avec Sendora.',
  path: '/envoyer-colis-pas-cher',
  keywords:
    'envoyer un colis pas cher, colis pas cher, envoi colis moins cher, livraison colis pas cher, transport colis économique, Sendora',
  jsonLd: [
    breadcrumb([
      { name: 'Accueil', path: '/' },
      { name: 'Envoyer un colis pas cher', path: '/envoyer-colis-pas-cher' },
    ]),
    service({
      name: 'Envoi de colis pas cher entre particuliers',
      serviceType: 'Livraison de colis économique entre particuliers',
      description:
        'Envoyer un colis au meilleur prix grâce au co-transport entre particuliers, en France et vers la diaspora.',
      areaServed: ['France', 'Maroc', 'Algérie', 'Sénégal'],
      url: `${SITE_URL}/envoyer-colis-pas-cher`,
    }),
    faqPage(faq),
  ],
})
</script>

<style scoped>
.lp-hero {
  background: var(--cream);
  padding: 2.5rem 0 3.5rem;
}
.crumbs {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-size: 0.82rem;
  color: var(--text-muted);
  margin-bottom: 1rem;
}
.crumbs a {
  color: var(--verdant);
  font-weight: 700;
}
.lp-hero h1 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  line-height: 1.07;
  letter-spacing: -0.03em;
  color: var(--ink);
  margin: 1rem 0 1.25rem;
}
.lp-hero h1 em {
  font-style: italic;
  color: var(--verdant);
}
.lp-lead {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  max-width: 740px;
  margin-bottom: 1.75rem;
}
.lp-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.btn {
  display: inline-flex;
  align-items: center;
  font-weight: 800;
  font-size: 0.95rem;
  padding: 0.8rem 1.5rem;
  border-radius: var(--radius-xl);
  transition: transform var(--transition), box-shadow var(--transition);
}
.btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}
.btn-primary {
  background: var(--verdant);
  color: #fff;
}
.btn-ghost {
  background: var(--bg-card);
  color: var(--ink);
  border: 1.5px solid var(--border-strong);
}

.lp-block {
  padding: 4rem 0;
}
.lp-alt {
  background: var(--cream-deep);
}
.lp-block h2 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(1.7rem, 3.5vw, 2.3rem);
  letter-spacing: -0.02em;
  color: var(--ink);
  margin-bottom: 1.5rem;
}
.lp-text {
  font-size: 1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  max-width: 760px;
  margin-bottom: 1.5rem;
}
.lp-fine {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-top: 1rem;
}

.price-table {
  max-width: 640px;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--bg-card);
}
.pt-head,
.pt-row {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr;
  align-items: center;
  padding: 0.85rem 1.1rem;
}
.pt-head {
  background: var(--cream-deep);
  font-size: 0.74rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--text-muted);
}
.pt-row {
  border-top: 1px solid var(--border);
  font-weight: 700;
}
.pt-dest {
  color: var(--ink);
}
.pt-old {
  color: var(--text-muted);
  text-decoration: line-through;
}
.pt-new {
  color: var(--verdant);
  font-weight: 900;
}
.pt-save {
  color: var(--gold);
  font-weight: 900;
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.25rem;
}
.why-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
}
.why-card h3 {
  font-size: 1.02rem;
  font-weight: 800;
  color: var(--ink);
  margin-bottom: 0.5rem;
}
.why-card p {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

.links-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 0.85rem;
}
.link-card {
  display: block;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1rem 1.25rem;
  font-weight: 700;
  color: var(--ink);
  transition: border-color var(--transition), transform var(--transition);
}
.link-card:hover {
  border-color: var(--verdant);
  transform: translateY(-2px);
  color: var(--verdant);
}

.faq-list {
  max-width: 760px;
  display: grid;
  gap: 0.75rem;
}
.faq-item {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 0.5rem 1.25rem;
}
.faq-item summary {
  cursor: pointer;
  font-weight: 700;
  color: var(--ink);
  padding: 0.85rem 0;
  list-style: none;
}
.faq-item summary::-webkit-details-marker {
  display: none;
}
.faq-item summary::after {
  content: '+';
  float: right;
  color: var(--verdant);
  font-weight: 900;
}
.faq-item[open] summary::after {
  content: '–';
}
.faq-item p {
  font-size: 0.92rem;
  color: var(--text-secondary);
  line-height: 1.7;
  padding-bottom: 1rem;
}

.lp-final {
  padding: 5rem 0;
  text-align: center;
  background: var(--band);
}
.lp-final h2 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  color: var(--band-ink);
  margin-bottom: 1.5rem;
}
</style>
