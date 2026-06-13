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
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav class="nav-links desktop-nav" aria-label="Navigation principale">
          <RouterLink to="/" class="nav-link">Accueil</RouterLink>
          <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
          <RouterLink to="/terms" class="nav-link">CGU</RouterLink>
          <RouterLink to="/privacy" class="nav-link">Confidentialité</RouterLink>
          <RouterLink to="/cgu" class="nav-link">Mentions</RouterLink>
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
          <RouterLink to="/privacy" class="mobile-link" @click="closeMenu"
            >Confidentialité</RouterLink
          >
          <RouterLink to="/cgu" class="mobile-link" @click="closeMenu">Mentions</RouterLink>
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
        <span>© 2026 Sendora</span>
        <div class="site-footer-links">
          <RouterLink to="/contact">Contact</RouterLink>
          <RouterLink to="/privacy">Confidentialité</RouterLink>
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

const openMenu = () => {
  menuOpen.value = true
}

const closeMenu = () => {
  menuOpen.value = false
}

const toggleMenu = () => {
  if (menuOpen.value) {
    closeMenu()
  } else {
    openMenu()
  }
}

watch(
  () => route.fullPath,
  () => {
    closeMenu()
  },
)

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') closeMenu()
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition:
    opacity 160ms ease,
    transform 160ms ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(16px);
  background: rgba(255, 255, 255, 0.82);
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);
}

.site-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  min-height: 72px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  font-weight: 800;
  font-size: 1.1rem;
  text-decoration: none;
  color: #0f172a;
}

.brand-mark {
  width: 1rem;
  height: 1rem;
  border-radius: 999px;
  background: linear-gradient(135deg, #0ea5e9, #8b5cf6);
  box-shadow: 0 8px 24px rgba(14, 165, 233, 0.25);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.nav-link,
.site-footer-links a,
.mobile-link {
  text-decoration: none;
  color: #334155;
  font-weight: 600;
}

.nav-link {
  padding: 0.7rem 0.95rem;
  border-radius: 999px;
  transition:
    background 160ms ease,
    color 160ms ease,
    transform 160ms ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  background: rgba(14, 165, 233, 0.1);
  color: #0f172a;
}

.burger {
  display: none;
  width: 46px;
  height: 46px;
  border: 0;
  border-radius: 14px;
  background: rgba(15, 23, 42, 0.04);
  cursor: pointer;
  align-items: center;
  justify-content: center;
  position: relative;
}

.burger span {
  position: absolute;
  width: 20px;
  height: 2px;
  border-radius: 999px;
  background: #0f172a;
  transition:
    transform 220ms ease,
    opacity 180ms ease,
    top 220ms ease;
}

.burger span:nth-child(1) {
  top: 16px;
}
.burger span:nth-child(2) {
  top: 22px;
}
.burger span:nth-child(3) {
  top: 28px;
}

.burger.open span:nth-child(1) {
  top: 22px;
  transform: rotate(45deg);
}
.burger.open span:nth-child(2) {
  opacity: 0;
}
.burger.open span:nth-child(3) {
  top: 22px;
  transform: rotate(-45deg);
}

.mobile-overlay {
  position: fixed;
  inset: 72px 0 0 0;
  background: rgba(15, 23, 42, 0.35);
  backdrop-filter: blur(4px);
  z-index: 40;
}

.mobile-menu {
  position: fixed;
  top: 72px;
  left: 0;
  right: 0;
  z-index: 45;
  margin: 0 1rem;
  padding: 0.85rem;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.98);
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.14);
  display: grid;
  gap: 0.35rem;
}

.mobile-link {
  padding: 0.95rem 1rem;
  border-radius: 14px;
  transition:
    background 160ms ease,
    transform 160ms ease,
    color 160ms ease;
}

.mobile-link:hover,
.mobile-link.router-link-active {
  background: rgba(14, 165, 233, 0.1);
  color: #0f172a;
}

.site-footer {
  border-top: 1px solid rgba(15, 23, 42, 0.08);
  margin-top: 3rem;
}

.site-footer-inner {
  min-height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.site-footer-links {
  display: flex;
  gap: 1rem;
}

/* Animations */
.mobile-overlay-fade-enter-active,
.mobile-overlay-fade-leave-active {
  transition: opacity 180ms ease;
}
.mobile-overlay-fade-enter-from,
.mobile-overlay-fade-leave-to {
  opacity: 0;
}

.mobile-panel-slide-enter-active,
.mobile-panel-slide-leave-active {
  transition:
    transform 220ms ease,
    opacity 220ms ease;
  transform-origin: top;
}
.mobile-panel-slide-enter-from,
.mobile-panel-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.98);
}

/* Responsive */
@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }

  .burger {
    display: inline-flex;
  }

  .site-footer-inner {
    flex-direction: column;
    justify-content: center;
    padding: 1rem 0;
  }

  .site-footer-links {
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>
