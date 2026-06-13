<template>
  <div id="sendora-app">
    <header class="site-header">
      <div class="container site-nav">
        <RouterLink to="/" class="brand" aria-label="Sendora, accueil">
          <span class="brand-mark" aria-hidden="true"></span>
          <span>Sendora</span>
        </RouterLink>

        <nav class="nav-links" aria-label="Navigation principale">
          <RouterLink to="/" class="nav-link">Accueil</RouterLink>
          <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
          <RouterLink to="/terms" class="nav-link">CGU</RouterLink>
          <RouterLink to="/privacy" class="nav-link">Confidentialité</RouterLink>
          <RouterLink to="/cgu" class="nav-link">Mentions</RouterLink>
        </nav>
      </div>
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
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 160ms ease, transform 160ms ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>
