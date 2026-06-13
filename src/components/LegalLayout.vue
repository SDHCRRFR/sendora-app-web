<template>
  <section class="legal-page">
    <div class="container legal-grid">
      <aside class="legal-aside">
        <RouterLink to="/" class="back-link">← Retour à l’accueil</RouterLink>

        <div class="surface toc-card">
          <p class="toc-title">Sommaire</p>
          <div class="toc-list">
            <button
              v-for="item in toc"
              :key="item.id"
              type="button"
              class="toc-link"
              @click="scrollToSection(item.id)"
            >
              {{ item.label }}
            </button>
          </div>
        </div>
      </aside>

      <article class="surface legal-card">
        <header class="legal-header">
          <div class="legal-kicker">
            <span class="chip">{{ tag }}</span>
            <span class="legal-meta">Mis à jour le {{ date }}</span>
          </div>
          <h1 class="page-title">{{ title }}</h1>
          <p class="page-subtitle">
            Document conçu pour une lecture claire sur mobile et desktop.
          </p>
        </header>

        <div class="legal-content prose">
          <slot />
        </div>
      </article>
    </div>
  </section>
</template>

<script lang="ts" setup>
type TocItem = {
  id: string
  label: string
}

defineProps<{
  title: string
  tag: string
  date: string
  toc: TocItem[]
}>()

function scrollToSection(id: string) {
  const target = document.getElementById(id)
  target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>
