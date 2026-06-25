<template>
  <div id="sendora-app">
    <header class="site-header">
      <div class="container site-nav">
        <RouterLink to="/" class="brand" aria-label="Sendora, accueil" @click="closeMenu">
          <span class="brand-mark" aria-hidden="true"></span>
          <span>Sendora</span>
        </RouterLink>

        <div class="nav-cluster">
          <button
            class="theme-toggle"
            type="button"
            :aria-label="isDark ? 'Activer le thème clair' : 'Activer le thème sombre'"
            :title="isDark ? 'Thème clair' : 'Thème sombre'"
            @click="toggleTheme"
          >
            <svg
              v-if="isDark"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="4" />
              <path
                d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
              />
            </svg>
            <svg
              v-else
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>

          <button
            class="burger"
            :class="{ open: menuOpen }"
            type="button"
            :aria-expanded="menuOpen"
            aria-label="Ouvrir le menu"
            @click="toggleMenu"
          >
            <span></span><span></span><span></span>
          </button>

          <nav class="nav-links desktop-nav" aria-label="Navigation principale">
            <RouterLink to="/" class="nav-link">Accueil</RouterLink>
            <RouterLink to="/blog" class="nav-link">Blog</RouterLink>
            <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
            <RouterLink to="/terms" class="nav-link">CGU</RouterLink>
            <RouterLink to="/privacy" class="nav-link">Confidentialité</RouterLink>
            <RouterLink to="/cgu" class="nav-link">Mentions</RouterLink>
            <a href="#download" class="nav-cta">Télécharger →</a>
          </nav>
        </div>
      </div>

      <transition name="mobile-overlay-fade">
        <div v-if="menuOpen" class="mobile-overlay" @click="closeMenu" aria-hidden="true"></div>
      </transition>
      <transition name="mobile-panel-slide">
        <nav v-if="menuOpen" class="mobile-menu" aria-label="Navigation mobile">
          <RouterLink to="/" class="mobile-link" @click="closeMenu">Accueil</RouterLink>
          <RouterLink to="/blog" class="mobile-link" @click="closeMenu">Blog</RouterLink>
          <RouterLink to="/contact" class="mobile-link" @click="closeMenu">Contact</RouterLink>
          <RouterLink to="/terms" class="mobile-link" @click="closeMenu">CGU</RouterLink>
          <RouterLink to="/privacy" class="mobile-link" @click="closeMenu">Confidentialité</RouterLink>
          <RouterLink to="/cgu" class="mobile-link" @click="closeMenu">Mentions légales</RouterLink>
        </nav>
      </transition>
    </header>

    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <footer class="site-footer">
      <div class="container site-footer-inner">
        <nav class="site-footer-seo" aria-label="Envois populaires">
          <RouterLink to="/transport-colis-entre-particuliers">Transport entre particuliers</RouterLink>
          <RouterLink to="/envoyer-colis-pas-cher">Colis pas cher</RouterLink>
          <RouterLink to="/envoyer-colis-senegal">Colis au Sénégal</RouterLink>
          <RouterLink to="/envoyer-colis-maroc">Colis au Maroc</RouterLink>
          <RouterLink to="/envoyer-colis-algerie">Colis en Algérie</RouterLink>
          <RouterLink to="/envoyer-colis-cameroun">Colis au Cameroun</RouterLink>
          <RouterLink to="/envoyer-colis-comores">Colis aux Comores</RouterLink>
          <RouterLink to="/envoyer-colis-soudan">Colis au Soudan</RouterLink>
          <RouterLink to="/blog">Blog</RouterLink>
        </nav>
        <span>© 2026 Sendora · Tous droits réservés</span>
        <div class="site-footer-links">
          <RouterLink to="/contact">Contact</RouterLink>
          <RouterLink to="/privacy">Confidentialité</RouterLink>
          <RouterLink to="/terms">CGU</RouterLink>
          <RouterLink to="/cgu">Mentions légales</RouterLink>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const menuOpen = ref(false)
const route = useRoute()
const toggleMenu = () => { menuOpen.value = !menuOpen.value }
const closeMenu  = () => { menuOpen.value = false }
watch(() => route.fullPath, closeMenu)
const onKeydown = (e: KeyboardEvent) => { if (e.key === 'Escape') closeMenu() }

/* Theme (light / dark)
   Default follows the device; an explicit choice is persisted. */
type Theme = 'light' | 'dark'
const THEME_KEY = 'theme'
// Guarded for SSG: during prerender there is no window/document.
const isClient = typeof window !== 'undefined'
const systemDark = isClient ? window.matchMedia('(prefers-color-scheme: dark)') : null

const isDark = ref(isClient && document.documentElement.getAttribute('data-theme') === 'dark')

const storedTheme = (): Theme | null => {
  try { return localStorage.getItem(THEME_KEY) as Theme | null } catch { return null }
}

const applyTheme = (theme: Theme) => {
  document.documentElement.setAttribute('data-theme', theme)
  isDark.value = theme === 'dark'
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', theme === 'dark' ? '#0c120e' : '#1a6640')
}

const toggleTheme = () => {
  const next: Theme = isDark.value ? 'light' : 'dark'
  try { localStorage.setItem(THEME_KEY, next) } catch { /* storage unavailable */ }
  applyTheme(next)
}

// Track the OS preference only while the user hasn't chosen explicitly.
const onSystemChange = (e: MediaQueryListEvent) => {
  if (!storedTheme()) applyTheme(e.matches ? 'dark' : 'light')
}

onMounted(() => {
  applyTheme(storedTheme() ?? (systemDark?.matches ? 'dark' : 'light'))
  systemDark?.addEventListener('change', onSystemChange)
  window.addEventListener('keydown', onKeydown)
})
onBeforeUnmount(() => {
  systemDark?.removeEventListener('change', onSystemChange)
  window.removeEventListener('keydown', onKeydown)
})
</script>

<style>
/* All global styles are in main.css */

/* SEO link row in the footer (internal linking for crawlers & users). */
.site-footer-seo {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.4rem 1.25rem;
  margin-bottom: 1rem;
}
.site-footer-seo a {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-secondary);
  transition: color var(--transition);
}
.site-footer-seo a:hover {
  color: var(--verdant);
}
</style>
