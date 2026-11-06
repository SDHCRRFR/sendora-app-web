<template>
  <ResourceLayout
    title="Centre d’aide"
    eyebrow="Un coup de main, au bon moment"
    icon="life-buoy"
    lead="Un code refusé, un paiement en attente ou une première livraison à préparer ? Retrouvez les étapes utiles et le bon contact pour avancer."
  >
    <template #title>Où êtes-vous<br /><em>bloqué ?</em></template>
    <template #hero>
      <div class="resource-search">
        <label for="help-search">Décrivez votre problème</label>
        <div class="resource-search-control">
          <AppIcon name="search" />
          <input
            id="help-search"
            v-model="query"
            type="search"
            placeholder="Ex. code refusé, paiement en attente…"
          />
        </div>
      </div>
    </template>

    <section class="resource-section">
      <div class="container">
        <div class="resource-filter-group" role="group" aria-label="Filtrer l’aide par sujet">
          <button
            class="resource-filter"
            type="button"
            :aria-pressed="category === 'all'"
            @click="category = 'all'"
          >
            Tous les sujets
          </button>
          <button
            v-for="item in helpCategories"
            :key="item.id"
            class="resource-filter"
            type="button"
            :aria-pressed="category === item.id"
            @click="category = item.id"
          >
            <AppIcon :name="item.icon" />{{ item.label }}
          </button>
        </div>
        <p class="resource-count" role="status">
          {{ results.length }} réponse{{ results.length > 1 ? 's' : ''
          }}{{ query.trim() ? ` pour « ${query.trim()} »` : '' }}
        </p>

        <div class="help-grid">
          <div class="help-results">
            <h2 class="help-results-title">Les réponses à vos questions</h2>
            <details v-for="item in results" :key="item.id" class="help-answer">
              <summary>
                <span
                  ><small>{{ categoryLabel(item.category) }}</small
                  >{{ item.title }}</span
                >
                <AppIcon name="arrow-right" />
              </summary>
              <div class="help-answer-body">
                <p v-for="paragraph in item.paragraphs" :key="paragraph">{{ paragraph }}</p>
                <ol v-if="item.steps">
                  <li v-for="step in item.steps" :key="step">{{ step }}</li>
                </ol>
                <div class="resource-links">
                  <RouterLink :to="item.guide.path" class="resource-link"
                    >{{ item.guide.label }} →</RouterLink
                  >
                  <RouterLink
                    :to="{ path: '/contact', query: { subject: item.supportSubject } }"
                    class="resource-link"
                    >Contacter le support →</RouterLink
                  >
                </div>
              </div>
            </details>
            <div v-if="!results.length" class="resource-empty">
              <h3>Aucune réponse ne correspond à votre recherche</h3>
              <p>
                Essayez un terme plus simple ou consultez tous les sujets. Notre équipe peut aussi
                vous aider depuis la page Contact.
              </p>
              <button type="button" class="btn btn-secondary" @click="resetSearch">
                Afficher tous les sujets
              </button>
              <RouterLink to="/contact" class="help-empty-contact resource-link"
                >Contacter le support →</RouterLink
              >
            </div>
          </div>

          <aside class="help-support" aria-labelledby="support-title">
            <AppIcon name="message-circle" />
            <h2 id="support-title">On prend<br />le relais.</h2>
            <p>
              Si les explications ne suffisent pas, décrivez votre situation à l’équipe Sendora.
            </p>
            <ul>
              <li>Votre rôle et la référence du colis, si vous l’avez.</li>
              <li>La date et l’étape qui bloque.</li>
              <li>Le message d’erreur et les vérifications déjà effectuées.</li>
            </ul>
            <RouterLink to="/contact" class="btn"
              >Écrire au support <AppIcon name="arrow-right"
            /></RouterLink>
            <p class="help-support-note">
              Gardez votre mot de passe et votre code de validation confidentiels dans votre demande
              au support.
            </p>
          </aside>
        </div>
      </div>
    </section>

    <section class="resource-section">
      <div class="container resource-support">
        <div>
          <h2>Vous découvrez Sendora ?</h2>
          <p>
            Comprenez le parcours avant de commencer : qui récupère le colis, qui reçoit le code et
            quand le paiement est libéré.
          </p>
        </div>
        <RouterLink to="/securite-et-paiement" class="btn btn-secondary"
          >Sécurité et paiement →</RouterLink
        >
      </div>
    </section>
  </ResourceLayout>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import AppIcon from '@/components/AppIcon.vue'
import ResourceLayout from '@/components/ResourceLayout.vue'
import { helpArticles, helpCategories, type HelpCategory } from '@/data/help'
import { matchesSearch } from '@/utils/search'
import { useSeo } from '@/composables/useSeo'
import { breadcrumb, faqPage } from '@/seo/schema'

const query = ref('')
const category = ref<HelpCategory | 'all'>('all')
const route = useRoute()
watch(
  () => route.query.theme,
  (theme) => {
    category.value = helpCategories.find((item) => item.id === theme)?.id ?? 'all'
  },
  { immediate: true },
)

const categoryLabel = (id: HelpCategory) =>
  helpCategories.find((item) => item.id === id)?.label ?? ''
const results = computed(() =>
  helpArticles.filter(
    (item) =>
      (category.value === 'all' || category.value === item.category) &&
      matchesSearch(query.value, [
        item.title,
        item.keywords,
        categoryLabel(item.category),
        ...item.paragraphs,
        ...(item.steps ?? []),
      ]),
  ),
)
function resetSearch() {
  query.value = ''
  category.value = 'all'
}

useSeo({
  title: 'Centre d’aide Sendora : colis, validation, paiement et compte',
  description:
    'Trouvez une réponse par problème : code de validation refusé, paiement en attente, connexion ou première livraison. Accédez aux guides et au support Sendora.',
  path: '/aide',
  jsonLd: [
    breadcrumb([
      { name: 'Accueil', path: '/' },
      { name: 'Centre d’aide', path: '/aide' },
    ]),
    faqPage(
      helpArticles.map((item) => ({
        q: item.title,
        a: [...item.paragraphs, ...(item.steps ?? [])].join(' '),
      })),
    ),
  ],
})
</script>

<style scoped>
.help-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 330px;
  gap: 3rem;
  align-items: start;
}
.help-results-title {
  font-size: 1.25rem !important;
  margin-bottom: 1rem;
}
.help-answer {
  border-bottom: 1px solid var(--border);
}
.help-answer summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1.35rem 0;
  font-weight: 700;
  color: var(--ink);
  cursor: pointer;
  list-style: none;
}
.help-answer summary::-webkit-details-marker {
  display: none;
}
.help-answer summary small {
  display: block;
  color: var(--verdant);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  margin-bottom: 0.35rem;
}
.help-answer summary > .app-icon {
  color: var(--verdant);
}
.help-answer[open] summary > .app-icon {
  transform: rotate(90deg);
}
.help-answer-body {
  padding-bottom: 1.5rem;
}
.help-answer-body p,
.help-answer-body li {
  color: var(--text-secondary);
  font-size: 0.94rem;
  line-height: 1.85;
}
.help-answer-body p {
  margin-bottom: 1rem;
}
.help-answer-body ol {
  padding-left: 1.25rem;
  display: grid;
  gap: 0.6rem;
  margin-bottom: 1.25rem;
}
.help-support {
  background: var(--band);
  color: var(--band-ink);
  padding: 2rem;
  border-radius: var(--radius-lg);
}
.help-support > .app-icon {
  width: 30px;
  height: 30px;
  margin-bottom: 1.5rem;
}
.help-support h2 {
  color: inherit !important;
  margin-bottom: 1.2rem;
}
.help-support p,
.help-support li {
  font-size: 0.9rem;
  line-height: 1.85;
  opacity: 0.85;
}
.help-support ul {
  padding-left: 1.1rem;
  display: grid;
  gap: 0.75rem;
  margin: 1.5rem 0;
}
.help-support .btn {
  background: var(--band-ink);
  color: var(--band);
  line-height: 1.4;
}
.help-support .btn:focus-visible {
  outline-color: var(--band-ink);
}
.help-support .help-support-note {
  margin-top: 1.25rem;
  font-size: 0.75rem;
}
.help-empty-contact {
  display: flex;
  width: fit-content;
  margin: 1.25rem auto 0;
}
@media (max-width: 860px) {
  .help-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
