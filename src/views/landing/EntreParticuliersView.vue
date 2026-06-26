<template>
  <main class="lp">
    <section class="lp-hero">
      <div class="container">
        <nav class="crumbs" aria-label="Fil d'Ariane">
          <RouterLink to="/">Accueil</RouterLink>
          <span aria-hidden="true">›</span>
          <span>Transport de colis entre particuliers</span>
        </nav>
        <span class="chip">Co-transport</span>
        <h1>Le transport de colis <em>entre particuliers</em></h1>
        <p class="lp-lead">
          Le transport de colis entre particuliers (ou co-transport) consiste à confier votre colis
          à une personne qui fait déjà le trajet, plutôt qu'à un transporteur professionnel. C'est le
          principe de Sendora : moins cher, plus humain, plus écologique, en France comme vers la
          diaspora.
        </p>
        <div class="lp-cta">
          <a href="https://apps.apple.com/fr/app/sendora/id6773115334" target="_blank" rel="noopener" class="btn btn-primary">Télécharger l'app →</a>
          <RouterLink to="/envoyer-colis-pas-cher" class="btn btn-ghost">Envoyer pas cher →</RouterLink>
        </div>
      </div>
    </section>

    <section class="lp-block">
      <div class="container">
        <h2>Comment fonctionne le co-transport ?</h2>
        <ol class="how-steps">
          <li><span class="how-num">1</span><div><h3>Un expéditeur publie un colis</h3><p>Il décrit son colis, indique le départ et l'arrivée, et fixe son budget.</p></div></li>
          <li><span class="how-num">2</span><div><h3>Un particulier qui fait le trajet l'accepte</h3><p>Le transporteur, vérifié KYC, transporte le colis sur sa route habituelle, sans détour.</p></div></li>
          <li><span class="how-num">3</span><div><h3>Remise en main propre & paiement libéré</h3><p>Le colis est remis au destinataire ; le paiement sous séquestre Stripe est alors débloqué.</p></div></li>
        </ol>
      </div>
    </section>

    <section class="lp-block lp-alt">
      <div class="container">
        <h2>Pourquoi choisir le transport entre particuliers</h2>
        <div class="why-grid">
          <div class="why-card"><h3>Jusqu'à 60 % moins cher</h3><p>Aucun coût logistique ajouté : le transporteur fait déjà le trajet. Vous partagez les frais, pas une marge.</p></div>
          <div class="why-card"><h3>Vérifié & sécurisé</h3><p>Transporteurs vérifiés par KYC (Didit, eIDAS), paiement bloqué sous séquestre jusqu'à la livraison.</p></div>
          <div class="why-card"><h3>Écologique</h3><p>Zéro kilomètre supplémentaire : on optimise un trajet déjà prévu plutôt que d'en créer un nouveau.</p></div>
          <div class="why-card"><h3>Humain & local</h3><p>Une vraie remise en main propre, un contact direct, une communauté de confiance qui se note mutuellement.</p></div>
        </div>
      </div>
    </section>

    <section class="lp-block">
      <div class="container">
        <h2>Pour les expéditeurs comme pour les voyageurs</h2>
        <p class="lp-text">
          <strong>Vous expédiez ?</strong> Publiez votre annonce et recevez des offres de
          transporteurs particuliers déjà sur votre route. <strong>Vous voyagez ?</strong> Rentabilisez
          vos trajets en transportant des colis qui vont dans votre direction, et soyez payé via Stripe
          Connect. Sendora couvre toute la France et les envois vers la diaspora.
        </p>
        <div class="links-row">
          <RouterLink to="/envoyer-colis-senegal" class="link-card">Envoyer un colis au Sénégal →</RouterLink>
          <RouterLink to="/envoyer-colis-maroc" class="link-card">Envoyer un colis au Maroc →</RouterLink>
          <RouterLink to="/envoyer-colis-algerie" class="link-card">Envoyer un colis en Algérie →</RouterLink>
          <RouterLink to="/blog" class="link-card">Guides & conseils →</RouterLink>
        </div>
      </div>
    </section>

    <section class="lp-block lp-alt">
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
        <h2>Envoyez votre premier colis entre particuliers</h2>
        <a href="https://apps.apple.com/fr/app/sendora/id6773115334" target="_blank" rel="noopener" class="btn btn-primary">Télécharger Sendora →</a>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { useSeo } from '@/composables/useSeo'
import { breadcrumb, faqPage, howTo, service, SITE_URL } from '@/seo/schema'

const faq = [
  {
    q: 'Qu’est-ce que le transport de colis entre particuliers ?',
    a: 'C’est le fait de confier un colis à un particulier qui effectue déjà le trajet, au lieu d’un transporteur professionnel. On parle aussi de co-transport ou de covoiturage de colis. Sendora met en relation expéditeurs et transporteurs vérifiés.',
  },
  {
    q: 'Est-ce légal et sécurisé ?',
    a: 'Oui. Sendora vérifie l’identité des transporteurs (KYC via Didit, agréé eIDAS) et bloque le paiement sous séquestre Stripe jusqu’à la confirmation de livraison. Vous suivez le colis en temps réel.',
  },
  {
    q: 'Combien peut-on économiser ?',
    a: 'Jusqu’à 60 % par rapport à un transporteur classique en France, et jusqu’à 10× moins cher pour les envois vers la diaspora, car il n’y a pas de coût logistique ajouté.',
  },
  {
    q: 'Comment être payé en tant que transporteur ?',
    a: 'Vous recevez votre paiement via Stripe Connect sous 2 à 7 jours ouvrés après la confirmation de livraison par le destinataire.',
  },
]

useSeo({
  title: 'Transport de colis entre particuliers (co-transport)',
  description:
    'Le transport de colis entre particuliers avec Sendora : confiez votre colis à un voyageur vérifié qui fait déjà le trajet. Jusqu’à 60 % moins cher, paiement sécurisé, en France et vers la diaspora.',
  path: '/transport-colis-entre-particuliers',
  keywords:
    'transport de colis entre particuliers, co-transport, covoiturage de colis, envoyer colis entre particuliers, transporteur particulier, Sendora',
  jsonLd: [
    breadcrumb([
      { name: 'Accueil', path: '/' },
      { name: 'Transport de colis entre particuliers', path: '/transport-colis-entre-particuliers' },
    ]),
    service({
      name: 'Transport de colis entre particuliers',
      serviceType: 'Co-transport de colis',
      description:
        'Mise en relation d’expéditeurs avec des particuliers qui font déjà le trajet, en France et vers la diaspora.',
      areaServed: ['France', 'Sénégal', 'Maroc', 'Algérie'],
      url: `${SITE_URL}/transport-colis-entre-particuliers`,
    }),
    howTo(
      'Comment transporter un colis entre particuliers',
      'Le co-transport de colis en 3 étapes avec Sendora.',
      [
        { name: 'Publiez le colis', text: 'L’expéditeur décrit le colis, le trajet et le budget.' },
        { name: 'Un voyageur accepte', text: 'Un transporteur vérifié qui fait le trajet prend le colis.' },
        { name: 'Livraison & paiement', text: 'Remise en main propre, puis paiement sous séquestre libéré.' },
      ],
    ),
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
  margin-bottom: 1.75rem;
}
.lp-text strong {
  color: var(--ink);
}

.how-steps {
  list-style: none;
  display: grid;
  gap: 1.5rem;
  max-width: 720px;
}
.how-steps li {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
}
.how-num {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--verdant);
  color: #fff;
  border-radius: 50%;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.1rem;
}
.how-steps h3 {
  font-size: 1.05rem;
  font-weight: 800;
  color: var(--ink);
  margin-bottom: 0.35rem;
}
.how-steps p {
  font-size: 0.92rem;
  color: var(--text-secondary);
  line-height: 1.7;
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
