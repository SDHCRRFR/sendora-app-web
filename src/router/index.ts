import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TermsView from '../views/TermsView.vue'
import CGUView from '../views/CGUView.vue'
import PrivacyView from '@/views/PrivacyView.vue'
import ContactView from '@/views/ContactView.vue'

function setMeta(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setOg(property: string, content: string) {
  let el = document.querySelector(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setTwitter(name: string, content: string) {
  let el = document.querySelector(`meta[name="twitter:${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', `twitter:${name}`)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0, left: 0 }
  },
  routes: [
    {
      path: '/',
      component: HomeView,
      meta: {
        title: 'Sendora - Envoyez vos colis avec vos voisins | Transport collaboratif France',
        description:
          "Sendora connecte expéditeurs et particuliers qui font déjà le trajet. Envoyez vos colis jusqu'à 60 % moins cher, transporteurs vérifiés KYC, paiement Stripe escrow. iOS & Android.",
        canonical: 'https://sendoraapp.com/',
      },
    },
    {
      path: '/terms',
      component: TermsView,
      meta: {
        title: "Conditions Générales d'Utilisation - Sendora",
        description:
          "Consultez les conditions générales d'utilisation de Sendora, la plateforme de transport collaboratif de colis entre particuliers en France.",
        canonical: 'https://sendoraapp.com/terms',
      },
    },
    {
      path: '/privacy',
      component: PrivacyView,
      meta: {
        title: 'Politique de Confidentialité & RGPD - Sendora',
        description:
          'Sendora respecte votre vie privée. Découvrez comment nous collectons, utilisons et protégeons vos données personnelles. Conformité RGPD totale, hébergement EU.',
        canonical: 'https://sendoraapp.com/privacy',
      },
    },
    {
      path: '/contact',
      component: ContactView,
      meta: {
        title: 'Contact - Sendora | Support, Paiement, RGPD',
        description:
          "Contactez l'équipe Sendora pour toute question liée à l'application, aux paiements, à votre compte ou à la confidentialité de vos données. Réponse rapide garantie.",
        canonical: 'https://sendoraapp.com/contact',
      },
    },
    {
      path: '/cgu',
      component: CGUView,
      meta: {
        title: 'Mentions Légales - Sendora',
        description:
          "Mentions légales de Sendora. Informations sur l'éditeur, l'hébergeur et les conditions d'utilisation de la plateforme de transport collaboratif de colis.",
        canonical: 'https://sendoraapp.com/cgu',
      },
    },
  ],
})

router.afterEach((to) => {
  const { title, description, canonical } = to.meta as {
    title?: string
    description?: string
    canonical?: string
  }

  const resolvedTitle = typeof title === 'string' ? title : 'Sendora'
  const resolvedDesc =
    typeof description === 'string'
      ? description
      : "Sendora - Transport collaboratif de colis entre particuliers en France."
  const resolvedCanonical =
    typeof canonical === 'string' ? canonical : `https://sendoraapp.com${to.path}`

  document.title = resolvedTitle

  setMeta('description', resolvedDesc)

  setCanonical(resolvedCanonical)

  setOg('og:title', resolvedTitle)
  setOg('og:description', resolvedDesc)
  setOg('og:url', resolvedCanonical)

  setTwitter('title', resolvedTitle)
  setTwitter('description', resolvedDesc)
})

export default router
