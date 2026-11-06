<template>
  <ResourceLayout
    title="Destinations"
    eyebrow="Vos proches, un peu plus près"
    icon="globe"
    lead="Retrouvez les pays déjà présentés sur Sendora et leurs guides d’envoi. Recherchez un pays ou une ville pour préparer votre colis, puis consultez les trajets disponibles dans l’application."
  >
    <template #title>Votre colis part où ?<br /><em>Trouvez votre destination.</em></template>
    <template #hero>
      <div class="resource-search">
        <label for="destination-search">Un pays ou une ville d’arrivée</label>
        <div class="resource-search-control">
          <AppIcon name="search" /><input
            id="destination-search"
            v-model="query"
            type="search"
            placeholder="Ex. Sénégal, Alger, Moroni…"
          />
        </div>
      </div>
    </template>

    <section class="resource-section" aria-labelledby="destinations-title">
      <div class="container">
        <div class="destinations-heading">
          <h2 id="destinations-title">Les guides destinations</h2>
          <p class="resource-count" role="status">
            {{ results.length }} guide{{ results.length > 1 ? 's' : ''
            }}{{ query.trim() ? ` pour « ${query.trim()} »` : ' à découvrir' }}
          </p>
        </div>
        <div class="destinations-grid">
          <RouterLink
            v-for="destination in results"
            :key="destination.slug"
            :to="destination.path"
            class="destination-card"
          >
            <div class="destination-top">
              <span class="destination-icon"><AppIcon name="globe" /></span
              ><span>Depuis la France</span>
            </div>
            <h3>{{ destination.country }}</h3>
            <p>
              Préparez votre envoi {{ destination.prep }} {{ destination.country }}, vers
              {{ destination.mainCity }} et les villes présentées dans le guide.
            </p>
            <ul aria-label="Villes présentées dans le guide">
              <li v-for="city in destination.cities.slice(0, 4)" :key="city">{{ city }}</li>
              <li v-if="destination.cities.length > 4">+ {{ destination.cities.length - 4 }}</li>
            </ul>
            <span class="destination-link">Voir le guide <AppIcon name="arrow-right" /></span>
          </RouterLink>
        </div>
        <div v-if="!results.length" class="resource-empty">
          <h3>Aucun guide ne correspond à « {{ query.trim() }} »</h3>
          <p>
            Essayez le nom d’un pays ou d’une autre ville. Cette liste regroupe nos guides ; les
            trajets proposés sont à consulter directement dans l’application.
          </p>
          <button type="button" class="btn btn-secondary" @click="query = ''">
            Voir toutes les destinations
          </button>
        </div>
        <p class="destinations-note">
          <AppIcon name="map-pin" />Un guide vous aide à préparer l’envoi. Les dates et les
          disponibilités dépendent des trajets publiés par les voyageurs dans l’app.
        </p>
      </div>
    </section>

    <section class="resource-section">
      <div class="container resource-support">
        <div>
          <span class="chip">Et en France ?</span>
          <h2 class="france-title">Un colis près de chez vous<br />ou à l’autre bout du pays.</h2>
          <p>Découvrez aussi le transport entre particuliers pour vos envois en France.</p>
        </div>
        <RouterLink to="/transport-colis-entre-particuliers" class="btn btn-secondary"
          >Envoyer en France →</RouterLink
        >
      </div>
    </section>

    <section class="resource-section">
      <div class="container destinations-resources">
        <h2>Pour préparer la suite</h2>
        <div class="resource-links">
          <RouterLink to="/blog/douane-envoyer-colis-afrique-maghreb" class="resource-link"
            >Lire le guide douane →</RouterLink
          >
          <RouterLink to="/securite-et-paiement" class="resource-link"
            >Comprendre le paiement →</RouterLink
          >
          <RouterLink to="/aide" class="resource-link">Trouver de l’aide →</RouterLink>
        </div>
      </div>
    </section>
  </ResourceLayout>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import ResourceLayout from '@/components/ResourceLayout.vue'
import AppIcon from '@/components/AppIcon.vue'
import { destinations } from '@/data/destinations'
import { matchesSearch } from '@/utils/search'
import { useSeo } from '@/composables/useSeo'
import { breadcrumb, SITE_URL } from '@/seo/schema'

const query = ref('')
const results = computed(() =>
  destinations.filter((destination) =>
    matchesSearch(query.value, [destination.country, ...destination.cities]),
  ),
)
useSeo({
  title: 'Destinations Sendora : trouvez votre guide d’envoi de colis',
  description:
    'Recherchez un pays ou une ville parmi les guides Sendora : Sénégal, Maroc, Algérie, Cameroun, Comores et Soudan. Préparez votre envoi entre particuliers.',
  path: '/destinations',
  jsonLd: [
    breadcrumb([
      { name: 'Accueil', path: '/' },
      { name: 'Destinations', path: '/destinations' },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Guides des destinations Sendora',
      itemListElement: destinations.map((destination, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: destination.country,
        url: `${SITE_URL}${destination.path}`,
      })),
    },
  ],
})
</script>

<style scoped>
.destinations-heading {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
  margin-bottom: 1rem;
}
.destinations-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
}
.destination-card {
  display: flex;
  flex-direction: column;
  padding: 1.75rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  transition:
    transform var(--transition),
    box-shadow var(--transition),
    border-color var(--transition);
}
.destination-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow);
  border-color: var(--verdant);
}
.destination-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  color: var(--text-muted);
  font-size: 0.72rem;
  font-weight: 600;
}
.destination-icon {
  display: inline-flex;
  padding: 0.75rem;
  background: rgba(26, 102, 64, 0.08);
  border-radius: var(--radius);
  color: var(--verdant);
}
.destination-card h3 {
  margin: 1.5rem 0 0.65rem;
  color: var(--ink);
  font: 700 1.55rem/1.2 var(--font-display);
  letter-spacing: -0.03em;
}
.destination-card p {
  font-size: 0.92rem;
  color: var(--text-secondary);
  line-height: 1.8;
}
.destination-card ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 1.25rem 0 1.75rem;
}
.destination-card li {
  color: var(--text-secondary);
  padding: 0.3rem 0.6rem;
  border-radius: var(--radius-xl);
  background: var(--surface-soft);
  border: 1px solid var(--border);
  font-size: 0.72rem;
}
.destination-link {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 1.1rem;
  margin-top: auto;
  border-top: 1px solid var(--border);
  color: var(--verdant);
  font-size: 0.85rem;
  font-weight: 700;
}
.destinations-note {
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
  margin-top: 1.5rem;
  color: var(--text-secondary);
  font-size: 0.82rem;
  line-height: 1.8;
}
.destinations-note .app-icon {
  color: var(--verdant);
  margin-top: 0.15rem;
}
.france-title {
  margin-top: 1.2rem;
}
.destinations-resources .resource-links {
  margin-top: 1.5rem;
}
@media (max-width: 960px) {
  .destinations-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 600px) {
  .destinations-grid {
    grid-template-columns: 1fr;
  }
  .destination-card {
    padding: 1.5rem;
  }
}
@media (prefers-reduced-motion: reduce) {
  .destination-card {
    transition: none;
  }
  .destination-card:hover {
    transform: none;
  }
}
</style>
