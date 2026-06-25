import type { RouteRecordRaw } from 'vue-router'

/**
 * Route table shared by the client app and the static-site generator (vite-ssg).
 * Per-page <head> (title, description, canonical, JSON-LD) is injected inside each
 * view via the `useSeo()` composable so it ends up baked into the prerendered HTML.
 */
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },

  // Diaspora / international landing pages
  {
    path: '/envoyer-colis-senegal',
    name: 'colis-senegal',
    component: () => import('@/views/destinations/SenegalView.vue'),
  },
  {
    path: '/envoyer-colis-maroc',
    name: 'colis-maroc',
    component: () => import('@/views/destinations/MarocView.vue'),
  },
  {
    path: '/envoyer-colis-algerie',
    name: 'colis-algerie',
    component: () => import('@/views/destinations/AlgerieView.vue'),
  },
  {
    path: '/envoyer-colis-cameroun',
    name: 'colis-cameroun',
    component: () => import('@/views/destinations/CamerounView.vue'),
  },
  {
    path: '/envoyer-colis-comores',
    name: 'colis-comores',
    component: () => import('@/views/destinations/ComoresView.vue'),
  },
  {
    path: '/envoyer-colis-soudan',
    name: 'colis-soudan',
    component: () => import('@/views/destinations/SoudanView.vue'),
  },

  // National / keyword landing pages
  {
    path: '/transport-colis-entre-particuliers',
    name: 'entre-particuliers',
    component: () => import('@/views/landing/EntreParticuliersView.vue'),
  },
  {
    path: '/envoyer-colis-pas-cher',
    name: 'pas-cher',
    component: () => import('@/views/landing/PasCherView.vue'),
  },

  // Blog
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/views/blog/BlogIndexView.vue'),
  },
  {
    path: '/blog/:slug',
    name: 'blog-post',
    component: () => import('@/views/blog/BlogPostView.vue'),
  },

  // Legal / utility 
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/ContactView.vue'),
  },
  {
    path: '/terms',
    name: 'terms',
    component: () => import('@/views/TermsView.vue'),
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('@/views/PrivacyView.vue'),
  },
  {
    path: '/cgu',
    name: 'cgu',
    component: () => import('@/views/CGUView.vue'),
  },
]
