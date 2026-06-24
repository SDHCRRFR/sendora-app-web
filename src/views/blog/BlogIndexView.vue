<template>
  <main class="blog">
    <section class="blog-hero">
      <div class="container">
        <nav class="crumbs" aria-label="Fil d'Ariane">
          <RouterLink to="/">Accueil</RouterLink>
          <span aria-hidden="true">›</span>
          <span>Blog</span>
        </nav>
        <span class="chip">Guides & conseils</span>
        <h1>Le blog Sendora</h1>
        <p class="blog-lead">
          Guides pratiques pour envoyer vos colis malin : diaspora, douane, prix, et conseils pour
          les transporteurs.
        </p>
      </div>
    </section>

    <section class="blog-list-section">
      <div class="container">
        <div class="blog-grid">
          <RouterLink
            v-for="a in articles"
            :key="a.slug"
            :to="`/blog/${a.slug}`"
            class="blog-card"
          >
            <span class="blog-tag">{{ a.tag }}</span>
            <h2>{{ a.title }}</h2>
            <p>{{ a.excerpt }}</p>
            <div class="blog-meta">
              <time :datetime="a.date">{{ formatDate(a.date) }}</time>
              <span>·</span>
              <span>{{ a.readingTime }}</span>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { useSeo } from '@/composables/useSeo'
import { breadcrumb, SITE_URL } from '@/seo/schema'
import { articles } from '@/data/blog'

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

useSeo({
  title: 'Blog Sendora - Guides envoi de colis, diaspora & transporteurs',
  description:
    'Conseils et guides pour envoyer vos colis : frais cachés vers la diaspora, douane, prix, devenir transporteur. Le blog de Sendora, le transport collaboratif de colis.',
  path: '/blog',
  keywords:
    'blog envoi colis, guide envoyer colis diaspora, conseils colis pas cher, douane colis, devenir transporteur',
  jsonLd: [
    breadcrumb([
      { name: 'Accueil', path: '/' },
      { name: 'Blog', path: '/blog' },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      '@id': `${SITE_URL}/blog#blog`,
      name: 'Blog Sendora',
      description:
        'Guides pratiques pour envoyer vos colis entre particuliers, en France et vers la diaspora.',
      url: `${SITE_URL}/blog`,
      publisher: { '@id': `${SITE_URL}/#organization` },
      blogPost: articles.map((a) => ({
        '@type': 'BlogPosting',
        headline: a.title,
        description: a.description,
        datePublished: a.date,
        url: `${SITE_URL}/blog/${a.slug}`,
      })),
    },
  ],
})
</script>

<style scoped>
.blog-hero {
  background: var(--cream);
  padding: 2.5rem 0 3rem;
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
.blog-hero h1 {
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  letter-spacing: -0.03em;
  color: var(--ink);
  margin: 1rem 0 1rem;
}
.blog-lead {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 640px;
}
.blog-list-section {
  padding: 3rem 0 5rem;
}
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.25rem;
}
.blog-card {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
  transition:
    transform var(--transition),
    box-shadow var(--transition),
    border-color var(--transition);
}
.blog-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow);
  border-color: rgba(26, 102, 64, 0.25);
}
.blog-tag {
  align-self: flex-start;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--verdant);
  background: rgba(26, 102, 64, 0.1);
  padding: 3px 10px;
  border-radius: var(--radius-xl);
}
.blog-card h2 {
  font-size: 1.2rem;
  font-weight: 800;
  line-height: 1.3;
  color: var(--ink);
}
.blog-card p {
  font-size: 0.92rem;
  color: var(--text-secondary);
  line-height: 1.65;
  flex: 1;
}
.blog-meta {
  display: flex;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: var(--text-muted);
  font-weight: 600;
}
</style>
