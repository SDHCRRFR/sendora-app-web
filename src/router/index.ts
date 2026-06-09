import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TermsView from '../views/TermsView.vue'
import CGUView from '../views/CGUView.vue'
import PrivacyView from '@/views/PrivacyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0, left: 0 }
  },
  routes: [
    { path: '/', component: HomeView, meta: { title: 'Sendora — Expédiez malin, gagnez en chemin' } },
    { path: '/terms', component: TermsView, meta: { title: "Conditions d'utilisation — Sendora" } },
    {
      path: '/privacy',
      component: PrivacyView,
      meta: { title: 'Politique de confidentialité — Sendora' },
    },
    { path: '/cgu', component: CGUView, meta: { title: 'CGU — Sendora' } },
  ],
})

router.afterEach((to) => {
  const title = to.meta.title
  document.title = typeof title === 'string' ? title : 'Sendora'
})

export default router
