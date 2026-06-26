<template>
  <main class="post">
    <article v-if="article" class="container post-inner">
      <nav class="crumbs" aria-label="Fil d'Ariane">
        <RouterLink to="/">Accueil</RouterLink>
        <span aria-hidden="true">›</span>
        <RouterLink to="/blog">Blog</RouterLink>
        <span aria-hidden="true">›</span>
        <span>{{ article.tag }}</span>
      </nav>

      <span class="post-tag">{{ article.tag }}</span>
      <h1 class="post-title">{{ article.title }}</h1>
      <div class="post-meta">
        <time :datetime="article.date">{{ formatDate(article.date) }}</time>
        <span>·</span>
        <span>{{ article.readingTime }} de lecture</span>
      </div>

      <div class="post-body">
        <div v-for="(s, i) in article.sections" :key="i" class="post-section">
          <h2 v-if="s.heading">{{ s.heading }}</h2>
          <p v-for="(p, j) in s.paragraphs ?? []" :key="`p-${i}-${j}`">{{ p }}</p>
          <ul v-if="s.list">
            <li v-for="(li, k) in s.list" :key="`li-${i}-${k}`">{{ li }}</li>
          </ul>
        </div>
      </div>

      <div class="post-cta">
        <h3>Prêt à envoyer votre colis ?</h3>
        <a
          href="https://apps.apple.com/fr/app/sendora/id6773115334"
          target="_blank"
          rel="noopener"
          class="btn btn-primary"
        >
          Télécharger Sendora →
        </a>
      </div>

      <RouterLink to="/blog" class="post-back">← Tous les articles</RouterLink>
    </article>

    <div v-else class="container post-missing">
      <h1>Article introuvable</h1>
      <p>Cet article n'existe pas ou a été déplacé.</p>
      <RouterLink to="/blog" class="btn btn-primary">Retour au blog</RouterLink>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useSeo } from '@/composables/useSeo'
import { blogPosting, breadcrumb } from '@/seo/schema'
import { getArticle } from '@/data/blog'

const route = useRoute()
const slug = computed(() => String(route.params.slug ?? ''))
const article = computed(() => getArticle(slug.value))

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

if (article.value) {
  const a = article.value
  const path = `/blog/${a.slug}`
  useSeo({
    title: a.title,
    description: a.description,
    path,
    type: 'article',
    jsonLd: [
      breadcrumb([
        { name: 'Accueil', path: '/' },
        { name: 'Blog', path: '/blog' },
        { name: a.title, path },
      ]),
      blogPosting({
        headline: a.title,
        description: a.description,
        path,
        datePublished: a.date,
        dateModified: a.updated,
      }),
    ],
  })
} else {
  useSeo({
    title: 'Article introuvable',
    description: 'Cet article n’existe pas ou a été déplacé.',
    path: '/blog',
    noindex: true,
  })
}
</script>

<style scoped>
.post-inner {
  max-width: 760px;
  padding-top: 2.5rem;
  padding-bottom: 4rem;
}
.crumbs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
  font-size: 0.82rem;
  color: var(--text-muted);
  margin-bottom: 1.25rem;
}
.crumbs a {
  color: var(--verdant);
  font-weight: 700;
}
.post-tag {
  display: inline-block;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--verdant);
  background: rgba(26, 102, 64, 0.1);
  padding: 3px 10px;
  border-radius: var(--radius-xl);
}
.post-title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(2rem, 4.5vw, 3rem);
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: var(--ink);
  margin: 1rem 0 0.75rem;
}
.post-meta {
  display: flex;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--text-muted);
  font-weight: 600;
  margin-bottom: 2.5rem;
}
.post-body :deep(h2),
.post-body h2 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: -0.02em;
  color: var(--ink);
  margin: 2.25rem 0 0.85rem;
}
.post-body p {
  font-size: 1.02rem;
  line-height: 1.85;
  color: var(--text-secondary);
  margin-bottom: 1.1rem;
}
.post-body ul {
  margin: 0 0 1.25rem;
  padding-left: 1.25rem;
  display: grid;
  gap: 0.5rem;
}
.post-body li {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
}
.post-cta {
  margin: 3rem 0 2rem;
  padding: 2rem;
  text-align: center;
  background: var(--cream-deep);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
}
.post-cta h3 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.4rem;
  color: var(--ink);
  margin-bottom: 1.25rem;
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
.post-back {
  display: inline-block;
  font-weight: 700;
  color: var(--verdant);
}
.post-missing {
  text-align: center;
  padding: 5rem 0;
}
.post-missing h1 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 2rem;
  color: var(--ink);
  margin-bottom: 0.75rem;
}
.post-missing p {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}
</style>
