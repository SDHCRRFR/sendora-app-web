<template>
  <div id="sendora-app">
    <header class="site-header">
      <div class="container site-nav">
        <RouterLink to="/" class="brand" aria-label="Sendora, accueil" @click="closeMenu">
          <span class="brand-mark" aria-hidden="true"></span>
          <span>Sendora</span>
        </RouterLink>

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
          <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
          <RouterLink to="/terms" class="nav-link">CGU</RouterLink>
          <RouterLink to="/privacy" class="nav-link">Confidentialité</RouterLink>
          <RouterLink to="/cgu" class="nav-link">Mentions</RouterLink>
          <a href="#download" class="nav-cta">Télécharger →</a>
        </nav>
      </div>

      <transition name="mobile-overlay-fade">
        <div v-if="menuOpen" class="mobile-overlay" @click="closeMenu" aria-hidden="true"></div>
      </transition>
      <transition name="mobile-panel-slide">
        <nav v-if="menuOpen" class="mobile-menu" aria-label="Navigation mobile">
          <RouterLink to="/" class="mobile-link" @click="closeMenu">Accueil</RouterLink>
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
        <span>© 2026 Sendora - Tous droits réservés</span>
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
onMounted(()       => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<style>
/* All global styles are in main.css */
</style>
