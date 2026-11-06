<template>
  <main class="resource-page">
    <header class="resource-hero">
      <div class="container">
        <nav class="resource-crumbs" aria-label="Fil d’Ariane">
          <RouterLink to="/">Accueil</RouterLink>
          <span aria-hidden="true">›</span>
          <span aria-current="page">{{ title }}</span>
        </nav>
        <span class="chip"><AppIcon :name="icon" />{{ eyebrow }}</span>
        <h1>
          <slot name="title">{{ title }}</slot>
        </h1>
        <p class="resource-lead">{{ lead }}</p>
        <slot name="hero" />
      </div>
    </header>
    <slot />
  </main>
</template>

<script setup lang="ts">
import AppIcon from '@/components/AppIcon.vue'
defineProps<{ title: string; eyebrow: string; icon: string; lead: string }>()
</script>

<style scoped>
.resource-page {
  overflow-x: clip;
}
.resource-hero {
  padding: 2rem 0 3rem;
}
.resource-crumbs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: 0.82rem;
  color: var(--text-muted);
  margin-bottom: 2.5rem;
}
.resource-crumbs a {
  color: var(--verdant);
  font-weight: 700;
}
.resource-hero h1 {
  font: 700 clamp(2.5rem, 4.5vw, 3.8rem)/1.12 var(--font-display);
  color: var(--ink);
  letter-spacing: -0.04em;
  margin: 1.3rem 0;
  max-width: 850px;
}
.resource-hero h1 :deep(em) {
  color: var(--verdant);
}
.resource-lead {
  color: var(--text-secondary);
  font-size: 1.05rem;
  line-height: 1.85;
  max-width: 720px;
}
.resource-page :deep(.app-icon) {
  width: 21px;
  height: 21px;
  flex-shrink: 0;
}
.resource-page :deep(.chip .app-icon) {
  width: 16px;
  height: 16px;
}
.resource-page :deep(.resource-section) {
  padding: 0 0 4rem;
}
.resource-page :deep(.resource-section h2) {
  color: var(--ink);
  font: 700 clamp(1.6rem, 2.7vw, 2.3rem)/1.2 var(--font-display);
  letter-spacing: -0.03em;
}
.resource-page :deep(.resource-search) {
  margin-top: 2rem;
  max-width: 720px;
}
.resource-page :deep(.resource-search label) {
  display: block;
  color: var(--ink);
  font-size: 0.85rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
}
.resource-page :deep(.resource-search-control) {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.35rem 1.1rem;
  border: 1.5px solid var(--border-strong);
  border-radius: var(--radius);
  background: var(--bg-card);
  color: var(--verdant);
}
.resource-page :deep(.resource-search-control:focus-within) {
  border-color: var(--verdant);
  box-shadow: 0 0 0 3px rgba(26, 102, 64, 0.12);
}
.resource-page :deep(.resource-search input) {
  width: 100%;
  min-width: 0;
  padding: 0.85rem 0;
  border: 0;
  background: transparent;
  color: var(--ink);
  outline: none;
  font-size: 1rem;
}
.resource-page :deep(.resource-search input::placeholder) {
  color: var(--text-muted);
}
.resource-page :deep(.resource-filter-group) {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}
.resource-page :deep(.resource-filter) {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.65rem 1rem;
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-xl);
  background: var(--bg-card);
  color: var(--text-secondary);
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
}
.resource-page :deep(.resource-filter[aria-pressed='true']) {
  background: var(--verdant);
  color: #fff;
  border-color: var(--verdant);
}
.resource-page :deep(.resource-filter .app-icon) {
  width: 17px;
  height: 17px;
}
.resource-page :deep(.resource-count) {
  color: var(--text-secondary);
  font-size: 0.85rem;
  margin: 1.4rem 0;
}
.resource-page :deep(.resource-empty) {
  padding: 3rem 1.5rem;
  text-align: center;
  border: 1px dashed var(--border-strong);
  border-radius: var(--radius-lg);
}
.resource-page :deep(.resource-empty p) {
  margin: 0.8rem auto 1.5rem;
  max-width: 520px;
  color: var(--text-secondary);
  line-height: 1.8;
}
.resource-page :deep(.resource-support) {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem;
  background: var(--surface-soft);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
}
.resource-page :deep(.resource-support p) {
  margin-top: 0.7rem;
  color: var(--text-secondary);
  line-height: 1.8;
  max-width: 680px;
  font-size: 0.95rem;
}
.resource-page :deep(.resource-links) {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem 1.5rem;
}
.resource-page :deep(.resource-link) {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--verdant);
  font-size: 0.88rem;
  font-weight: 700;
}
.resource-page :deep(.resource-support .btn) {
  flex-shrink: 0;
  text-align: center;
  line-height: 1.4;
}
.resource-page :deep(a:focus-visible),
.resource-page :deep(button:focus-visible),
.resource-page :deep(summary:focus-visible) {
  outline: 3px solid var(--verdant);
  outline-offset: 4px;
}
@media (max-width: 640px) {
  .resource-hero {
    padding-bottom: 2rem;
  }
  .resource-crumbs {
    margin-bottom: 2rem;
  }
  .resource-hero h1 {
    font-size: 2.35rem;
  }
  .resource-page :deep(.resource-support) {
    align-items: flex-start;
    flex-direction: column;
    gap: 1.25rem;
    padding: 1.5rem;
  }
  .resource-page :deep(.resource-filter) {
    font-size: 0.78rem;
    padding: 0.6rem 0.8rem;
  }
}
</style>
