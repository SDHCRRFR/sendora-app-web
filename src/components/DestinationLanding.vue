<template>
  <main class="dest">
    <section class="dest-hero">
      <div class="container">
        <nav class="crumbs" aria-label="Fil d'Ariane">
          <RouterLink to="/">Accueil</RouterLink>
          <span aria-hidden="true">›</span>
          <span>Envoyer un colis {{ dest.prep }} {{ dest.country }}</span>
        </nav>

        <span class="chip">Diaspora · {{ dest.country }}</span>
        <h1 class="dest-h1">
          Envoyer un colis {{ dest.prep }} {{ dest.country }}
          <em>entre particuliers.</em>
        </h1>
        <p class="dest-intro">{{ dest.intro }}</p>

        <div class="dest-pills">
          <span class="pill">✓ Voyageurs vérifiés KYC</span>
          <span class="pill">✓ Paiement Stripe sous séquestre</span>
          <span class="pill">✓ Remise en main propre</span>
        </div>

        <div class="dest-cta">
          <a
            href="https://apps.apple.com/fr/app/sendora/id6773115334"
            target="_blank"
            rel="noopener"
            class="btn btn-primary"
          >
            Télécharger l'app →
          </a>
          <a href="#prix" class="btn btn-ghost">Voir les prix</a>
        </div>
      </div>
    </section>

    <section id="prix" class="dest-prices">
      <div class="container">
        <h2 class="dest-h2">
          Un colis de 10&nbsp;kg {{ dest.prep }} {{ dest.country }} :
          <em>jusqu'à −{{ savings }} %</em>
        </h2>
        <p class="dest-sub">
          Comparatif indicatif vers {{ dest.mainCity }}. Le prix Sendora dépend des annonces des
          expéditeurs sur chaque envoie.
        </p>

        <div class="price-grid">
          <article v-for="c in dest.competitors" :key="c.label" class="pcard pcard-rival">
            <div class="pcard-name">{{ c.label }}</div>
            <div class="pcard-sub">{{ c.sub }}</div>
            <div class="pcard-amount">{{ c.price }}&nbsp;€</div>
            <div class="pcard-unit">pour 10 kg · {{ c.perKg }}</div>
            <div class="pcard-delay"><AppIcon name="alert-triangle" /> {{ c.delay }}</div>
          </article>

          <article class="pcard pcard-brand">
            <div class="pcard-flag">Le meilleur choix</div>
            <div class="pcard-name">{{ dest.sendora.label }}</div>
            <div class="pcard-sub">{{ dest.sendora.sub }}</div>
            <div class="pcard-amount pcard-amount-brand">{{ dest.sendora.price }}&nbsp;€</div>
            <div class="pcard-unit">pour 10 kg · {{ dest.sendora.perKg }}</div>
            <div class="pcard-delay pcard-delay-brand">
              <AppIcon name="check-circle" /> {{ dest.sendora.delay }}
            </div>
            <a
              href="https://apps.apple.com/fr/app/sendora/id6773115334"
              target="_blank"
              rel="noopener"
              class="pcard-cta"
            >
              Trouver un transporteur →
            </a>
          </article>
        </div>

        <div class="relais-note">
          <AppIcon name="map-pin" />
          <p>
            <strong>Nouveau · Retrait en point relais</strong> - disponible à
          Moroni aux Comores. Nous travaillons activement pour le déployer très prochainement
            sur nos trajets d'arrivée les plus populaires.
          </p>
        </div>
      </div>
    </section>

    <!-- Why Sendora -->
    <section class="dest-why">
      <div class="container">
        <h2 class="dest-h2">Pourquoi envoyer avec <em>Sendora</em></h2>
        <div class="why-grid">
          <div v-for="w in dest.whyPoints" :key="w.title" class="why-card">
            <h3>{{ w.title }}</h3>
            <p>{{ w.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="dest-how">
      <div class="container">
        <h2 class="dest-h2">Comment ça marche</h2>
        <ol class="how-steps">
          <li>
            <span class="how-num">1</span>
            <div>
              <h3>Publiez votre annonce</h3>
              <p>
                Décrivez votre colis (poids, dimensions), indiquez {{ dest.mainCity }} ou une autre
                ville {{ dest.prep }} {{ dest.country }}, et votre budget. Moins de 2 minutes.
              </p>
            </div>
          </li>
          <li>
            <span class="how-num">2</span>
            <div>
              <h3>Choisissez un voyageur vérifié</h3>
              <p>
                Sendora vous propose des particuliers qui font déjà le trajet vers
                {{ dest.country }}. Comparez profils, notes et tarifs, puis sélectionnez.
              </p>
            </div>
          </li>
          <li>
            <span class="how-num">3</span>
            <div>
              <h3>Livraison & paiement sécurisé</h3>
              <p>
                Le voyageur remet le colis en main propre au destinataire. Vous confirmez la
                réception et le paiement sous séquestre est libéré.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <!-- Cities -->
    <section class="dest-cities">
      <div class="container">
        <h2 class="dest-h2">Villes desservies {{ dest.prep }} {{ dest.country }}</h2>
        <p class="dest-sub">
          Les trajets les plus fréquents proposés par la communauté de voyageurs.
        </p>
        <div class="cities-chips">
          <span v-for="city in dest.cities" :key="city" class="city-chip">
            <AppIcon name="map-pin" /> {{ city }}
          </span>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="dest-faq">
      <div class="container">
        <h2 class="dest-h2">Questions fréquentes</h2>
        <div class="faq-list">
          <details v-for="(f, i) in dest.faq" :key="i" class="faq-item">
            <summary>{{ f.q }}</summary>
            <p>{{ f.a }}</p>
          </details>
        </div>
      </div>
    </section>

    <!-- Internal links -->
    <section class="dest-links">
      <div class="container">
        <h2 class="dest-h2">Autres destinations & ressources</h2>
        <div class="links-row">
          <RouterLink v-for="l in otherDestinations" :key="l.path" :to="l.path" class="link-card">
            Envoyer un colis {{ l.prep }} {{ l.country }} →
          </RouterLink>
          <RouterLink to="/transport-colis-entre-particuliers" class="link-card">
            Transport de colis entre particuliers →
          </RouterLink>
          <RouterLink to="/envoyer-colis-pas-cher" class="link-card">
            Envoyer un colis pas cher →
          </RouterLink>
          <RouterLink to="/envoyer-medicaments" class="link-card">
            Envoyer des médicaments →
          </RouterLink>
          <RouterLink to="/blog" class="link-card">Guides & conseils →</RouterLink>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="dest-final">
      <div class="container">
        <h2>Prêt à envoyer {{ dest.prep }} {{ dest.country }} ?</h2>
        <p>Téléchargez Sendora gratuitement et publiez votre annonce en 2 minutes.</p>
        <a
          href="https://apps.apple.com/fr/app/sendora/id6773115334"
          target="_blank"
          rel="noopener"
          class="btn btn-primary"
        >
          Télécharger sur l'App Store →
        </a>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import AppIcon from '@/components/AppIcon.vue'
import { useSeo } from '@/composables/useSeo'
import { breadcrumb, faqPage, howTo, service, SITE_URL } from '@/seo/schema'
import { destinations, savingsVsExpress, type Destination } from '@/data/destinations'

const props = defineProps<{ dest: Destination }>()

const savings = computed(() => savingsVsExpress(props.dest))
const otherDestinations = computed(() => destinations.filter((d) => d.slug !== props.dest.slug))

useSeo({
  title: props.dest.seoTitle,
  description: props.dest.seoDescription,
  path: props.dest.path,
  keywords: props.dest.keywords,
  jsonLd: [
    breadcrumb([
      { name: 'Accueil', path: '/' },
      { name: `Envoyer un colis ${props.dest.prep} ${props.dest.country}`, path: props.dest.path },
    ]),
    service({
      name: `Envoyer un colis ${props.dest.prep} ${props.dest.country}`,
      serviceType: 'Transport de colis entre particuliers vers la diaspora',
      description: props.dest.seoDescription,
      areaServed: props.dest.country,
      url: `${SITE_URL}${props.dest.path}`,
    }),
    howTo(
      `Comment envoyer un colis ${props.dest.prep} ${props.dest.country} avec Sendora`,
      `Envoyer un colis ${props.dest.prep} ${props.dest.country} entre particuliers, en 3 étapes.`,
      [
        {
          name: 'Publiez votre annonce',
          text: `Décrivez votre colis et indiquez ${props.dest.mainCity} ou une autre ville ${props.dest.prep} ${props.dest.country}.`,
        },
        {
          name: 'Choisissez un voyageur vérifié',
          text: `Sélectionnez un transporteur particulier vérifié KYC qui fait déjà le trajet vers ${props.dest.country}.`,
        },
        {
          name: 'Livraison & paiement sécurisé',
          text: 'Le colis est remis en main propre, vous confirmez la réception et le paiement sous séquestre est libéré.',
        },
      ],
    ),
    faqPage(props.dest.faq.map((f) => ({ q: f.q, a: f.a }))),
  ],
})
</script>

<style scoped>
.dest-h1 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(2.2rem, 5vw, 3.6rem);
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: var(--ink);
  margin: 1rem 0 1.25rem;
}
.dest-h1 em {
  font-style: italic;
  color: var(--verdant);
}
.dest-h2 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(1.7rem, 3.5vw, 2.4rem);
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: var(--ink);
  margin-bottom: 0.5rem;
}
.dest-h2 em {
  font-style: italic;
  color: var(--verdant);
}
.dest-sub {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 2rem;
  max-width: 640px;
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

.dest-hero {
  background: var(--cream);
  padding: 2.5rem 0 3.5rem;
}
.dest-intro {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  max-width: 720px;
  margin-bottom: 1.75rem;
}
.dest-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 1.75rem;
}
.pill {
  display: inline-flex;
  align-items: center;
  background: rgba(26, 102, 64, 0.09);
  color: var(--verdant);
  font-size: 0.8rem;
  font-weight: 700;
  padding: 5px 12px;
  border-radius: var(--radius-xl);
  border: 1px solid rgba(26, 102, 64, 0.15);
}
.dest-cta {
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
  transition:
    transform var(--transition),
    box-shadow var(--transition);
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

.dest-prices {
  padding: 4rem 0;
  background: var(--cream-deep);
}
.price-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
}
.pcard {
  position: relative;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
}
.pcard-brand {
  border: 2px solid var(--verdant);
  box-shadow: var(--shadow-lg);
}
.pcard-flag {
  position: absolute;
  top: -11px;
  left: 1.5rem;
  background: var(--verdant);
  color: #fff;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 3px 10px;
  border-radius: var(--radius-xl);
}
.pcard-name {
  font-size: 1.05rem;
  font-weight: 800;
  color: var(--ink);
}
.pcard-sub {
  font-size: 0.82rem;
  color: var(--text-muted);
  margin-bottom: 0.9rem;
}
.pcard-amount {
  font-family: var(--font-body);
  font-size: 2.4rem;
  font-weight: 900;
  color: var(--ink);
  line-height: 1;
  letter-spacing: -0.045em;
}
.pcard-amount-brand {
  color: var(--verdant);
}
.pcard-unit {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin: 0.35rem 0 0.9rem;
}
.pcard-delay {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--text-secondary);
}
.pcard-delay-brand {
  color: var(--verdant);
}
.pcard-delay .app-icon {
  width: 15px;
  height: 15px;
}
.pcard-cta {
  display: block;
  margin-top: 1.1rem;
  text-align: center;
  background: var(--verdant);
  color: #fff;
  font-weight: 800;
  font-size: 0.88rem;
  padding: 0.65rem;
  border-radius: var(--radius);
}

.relais-note {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-top: 1.75rem;
  padding: 1rem 1.25rem;
  background: rgba(26, 102, 64, 0.08);
  border: 1px solid rgba(26, 102, 64, 0.18);
  border-radius: var(--radius);
}
.relais-note .app-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-top: 2px;
  color: var(--verdant);
}
.relais-note p {
  font-size: 0.9rem;
  line-height: 1.65;
  color: var(--text-secondary);
}
.relais-note strong {
  color: var(--verdant);
  font-weight: 800;
}

.dest-why {
  padding: 4rem 0;
}
.why-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.25rem;
  margin-top: 1.5rem;
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

.dest-how {
  padding: 4rem 0;
  background: var(--cream-deep);
}
.how-steps {
  list-style: none;
  display: grid;
  gap: 1.5rem;
  margin-top: 1.5rem;
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

.dest-cities {
  padding: 4rem 0;
}
.cities-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}
.city-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--bg-card);
  border: 1.5px solid var(--border-strong);
  color: var(--text-secondary);
  font-weight: 700;
  font-size: 0.88rem;
  padding: 0.5rem 1rem;
  border-radius: var(--radius-xl);
}
.city-chip .app-icon {
  width: 15px;
  height: 15px;
  color: var(--verdant);
}

.dest-faq {
  padding: 4rem 0;
  background: var(--cream-deep);
}
.faq-list {
  max-width: 760px;
  margin-top: 1.5rem;
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

.dest-links {
  padding: 4rem 0;
}
.links-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 0.85rem;
  margin-top: 1.5rem;
}
.link-card {
  display: block;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1rem 1.25rem;
  font-weight: 700;
  color: var(--ink);
  transition:
    border-color var(--transition),
    transform var(--transition);
}
.link-card:hover {
  border-color: var(--verdant);
  transform: translateY(-2px);
  color: var(--verdant);
}

.dest-final {
  padding: 5rem 0;
  text-align: center;
  background: var(--band);
}
.dest-final h2 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  color: var(--band-ink);
  margin-bottom: 0.75rem;
}
.dest-final p {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.75rem;
}
</style>
