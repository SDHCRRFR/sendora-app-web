<template>
  <main class="home">
    <section class="hero">
      <div class="hero-noise"></div>
      <div class="container hero-inner">
        <div class="hero-content" data-aos="fade-up" data-aos-duration="1200">
          <div class="hero-audience" role="group" aria-label="Votre utilisation de Sendora">
            <button
              v-for="option in audienceOptions"
              :key="option.value"
              type="button"
              :aria-pressed="audience === option.value"
              @click="audience = option.value"
            >
              <AppIcon :name="option.icon" />
              {{ option.label }}
            </button>
          </div>

          <h1 class="hero-headline">
            {{ heroCopy.title }}<br />
            <em class="hero-italic">{{ heroCopy.emphasis }}</em>
          </h1>

          <p class="hero-body">{{ heroCopy.body }}</p>

          <div class="hero-pills">
            <span v-for="pill in heroCopy.pills" :key="pill" class="pill">✓ {{ pill }}</span>
          </div>

          <p class="hero-download-label">{{ heroCopy.downloadLabel }}</p>
          <div class="hero-cta" id="download">
            <a
              href="https://apps.apple.com/fr/app/sendora/id6773115334"
              target="_blank"
              rel="noopener"
              class="store-btn store-apple"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="30" height="30">
                <path
                  d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
                />
              </svg>
              <div>
                <span class="store-name">App Store</span>
              </div>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.sendoraapp"
              target="_blank"
              rel="noopener"
              class="store-btn store-google"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path
                  d="M3.18 23.76c.37.21.8.22 1.2.02l12.44-7.18-2.62-2.62-11.02 9.78zM20.77 10.34L18.21 8.8 15.3 11.7l2.9 2.9 2.58-1.49c.73-.42.73-1.35-.01-1.77zM1.02 1.44C.97 1.62.94 1.81.94 2.02v19.98c0 .2.03.39.08.57l.13.12L12.06 12l-.12-.12L1.02 1.44zM4.38.24L16.82 7.4 14.2 10.02 1.76.24C2.16.04 2.59.05 2.96.26L4.38.24z"
                />
              </svg>
              <div>
                <span class="store-name">Google Play</span>
              </div>
            </a>
          </div>

          <p class="hero-fine">Gratuit · Aucun abonnement · Données hébergées en Europe</p>
          <RouterLink :to="heroCopy.path" class="hero-explore">
            {{ heroCopy.linkLabel }} <AppIcon name="arrow-right" />
          </RouterLink>
        </div>

        <div data-aos="zoom-in" data-aos-duration="1600" class="hero-visual" aria-hidden="true">
          <PhoneShowcase :screens="heroScreens" />

          <div class="rc-chip rc-chip-save">
            <strong>{{ audience === 'sender' ? '−60 %' : 'Votre trajet' }}</strong>
            {{ audience === 'sender' ? 'vs transporteur classique' : 'vos colis, votre choix' }}
          </div>
          <div class="rc-chip rc-chip-eco"><strong>0 km</strong> en plus · trajet déjà prévu</div>
        </div>
      </div>

      <!-- Scroll hint -->
      <div class="hero-scroll-hint" aria-hidden="true">
        <div class="scroll-line"></div>
      </div>
    </section>

    <section class="earn-section">
      <div class="container">
        <div class="earn-banner" data-aos="fade-up" data-aos-duration="1000">
          <h2 class="earn-title">Rentabilisez vos trajets +250€ ou plus</h2>
          <p class="earn-text">
            Vous voyagez déjà ? Faites travailler la place libre de votre valise (et pas l'inverse).
            Transportez des colis sur votre route et soyez payé dès la livraison.
          </p>
          <a href="#download" class="earn-btn" @click.prevent="openApp">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 12h16M14 6l6 6-6 6" />
            </svg>
            Publier vos trajets
          </a>
          <RouterLink to="/devenir-transporteur" class="earn-more">
            Découvrir le parcours transporteur →
          </RouterLink>
        </div>

        <div class="earn-cols">
          <div class="earn-col">
            <div class="earn-icon"><AppIcon name="map-pin" /></div>
            <h3>Où et quand vous voulez</h3>
            <p>
              Publiez votre trajet, en France ou vers la diaspora, et choisissez uniquement les
              colis qui vous conviennent. Aucun détour imposé.
            </p>
          </div>
          <div class="earn-col">
            <div class="earn-icon"><AppIcon name="credit-card" /></div>
            <h3>Vos trajets enfin rentables</h3>
            <p>
              Acceptez les missions qui vous plaisent et recevez votre paiement directement via
              Stripe Connect, sous 2 à 7 jours ouvrés.
            </p>
          </div>
          <div class="earn-col">
            <div class="earn-icon"><AppIcon name="shield-check" /></div>
            <h3>Voyagez en toute confiance</h3>
            <p>
              Identités vérifiées par KYC, paiement sous séquestre Stripe, notes et avis : vous
              savez toujours avec qui vous échangez avant de vous engager.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="how-section">
      <div class="how-inner">
        <div class="how-copy">
          <div class="section-head how-head" data-aos="fade-up" data-aos-duration="1000">
            <span class="section-tag">Comment ça marche</span>
            <h2 class="section-title">Trois étapes.<br /><em>C'est tout.</em></h2>
            <p class="section-sub">
              {{ audience === 'sender'
                ? 'De la publication à la livraison, l’expérience est pensée pour être aussi fluide que possible.'
                : 'De votre premier trajet à la validation du colis, vous gardez la main à chaque étape.' }}
            </p>
          </div>

          <div class="steps-track" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
            <div class="step-item" v-for="(step, i) in steps" :key="step.title">
              <div class="step-left">
                <div class="step-number">{{ String(i + 1).padStart(2, '0') }}</div>
                <div v-if="i < steps.length - 1" class="step-line"></div>
              </div>
              <div class="step-body">
                <div class="step-text">
                  <h3>{{ step.title }}</h3>
                  <p>{{ step.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="how-visual" data-aos="zoom-in" data-aos-duration="1400" aria-hidden="true">
          <PhoneShowcase :screens="audience === 'sender' ? stepScreens : appScreens" layout="row" />
        </div>
      </div>
    </section>

    <PriceMarket v-show="audience === 'sender'" />

    <PriceEstimator v-show="audience === 'sender'" />

    <section class="features-section">
      <div class="container">
        <div class="section-head">
          <span class="section-tag">Fonctionnalités</span>
          <h2 class="section-title">Tout ce dont vous avez<br /><em>besoin, rien de plus.</em></h2>
        </div>

        <div class="features-bento">
          <div class="feat-card feat-large">
            <div class="feat-icon-wrap"><AppIcon name="fingerprint" /></div>
            <h3>Vérification d'identité KYC</h3>
            <p>
              Chaque transporteur passe par un processus de vérification d'identité complet via
              notre partenaire Didit, agréé eIDAS. Vous savez toujours à qui vous faites confiance.
            </p>
          </div>
          <div class="feat-card">
            <div class="feat-icon-wrap"><AppIcon name="credit-card" /></div>
            <h3>Paiement sous séquestre</h3>
            <p>
              Votre argent est bloqué par Stripe et libéré uniquement après confirmation de
              livraison. Zéro risque de paiement à blanc.
            </p>
          </div>
          <div class="feat-card">
            <div class="feat-icon-wrap"><AppIcon name="map-pin" /></div>
            <h3>Suivi en temps réel</h3>
            <p>
              Suivez chaque étape du parcours de votre colis directement depuis l'application,
              notifications incluses.
            </p>
          </div>
          <div class="feat-card">
            <div class="feat-icon-wrap"><AppIcon name="message-circle" /></div>
            <h3>Chat sécurisé intégré</h3>
            <p>
              Coordonnez avec votre transporteur ou expéditeur via la messagerie chiffrée. Pas
              besoin d'échanger vos numéros.
            </p>
          </div>
          <div class="feat-card">
            <div class="feat-icon-wrap"><AppIcon name="star" /></div>
            <h3>Réputation communautaire</h3>
            <p>
              Après chaque mission, expéditeurs et transporteurs se notent mutuellement. Un système
              de réputation transparent qui incite à l'excellence et fait naître la confiance sur le
              long terme.
            </p>
          </div>
          <div class="feat-card feat-wide">
            <div class="feat-icon-wrap"><AppIcon name="globe" /></div>
            <h3>Partout en France, depuis votre smartphone</h3>
            <p>
              Que ce soit entre deux villes voisines ou d'un bout à l'autre du pays, le matching
              géographique de Sendora trouve des transporteurs dans un rayon de 50 km autour de
              votre itinéraire. iOS et Android.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="trust-section">
      <div class="container">
        <div class="trust-inner">
          <div class="trust-content">
            <span class="section-tag">Sécurité &amp; Confiance</span>
            <h2 class="section-title">
              Conçu pour la confiance<br /><em>dès le premier jour.</em>
            </h2>
            <p class="section-sub">
              Sendora ne fait aucun compromis sur la sécurité. Chaque décision technique et chaque
              partenariat ont été choisis pour protéger expéditeurs et transporteurs.
            </p>

            <div class="trust-badges">
              <div class="trust-badge" v-for="t in trust" :key="t.title">
                <div>
                  <div class="tb-title">{{ t.title }}</div>
                  <div class="tb-desc">{{ t.desc }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="trust-visual">
            <div class="trust-stack">
              <div class="ts-eyebrow">
                <AppIcon name="shield-check" />
                <span>Pour garantir votre sécurité</span>
              </div>

              <div class="ts-grid">
                <a
                  v-for="s in securityStack"
                  :key="s.key"
                  class="ts-tile"
                  :class="{ 'ts-tile-wide': s.wide }"
                  :href="s.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  :aria-label="`${s.name} — ${s.role} (site officiel, nouvel onglet)`"
                >
                  <img
                    v-if="brandLogoStyle === 'color'"
                    :src="s.img"
                    :alt="s.name"
                    class="ts-img"
                    :class="s.cls"
                    loading="lazy"
                    decoding="async"
                  />
                  <BrandLogo v-else :name="s.key" :class="s.cls" />
                </a>
              </div>

              <p class="ts-note">
                Marques citées à titre informatif. Elles appartiennent à leurs propriétaires
                respectifs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="faq-section">
      <div class="container">
        <div class="section-head">
          <span class="section-tag">FAQ</span>
          <h2 class="section-title">Questions <em>fréquentes</em></h2>
          <p class="section-sub">
            Tout ce qu'il faut savoir pour envoyer un colis entre particuliers, en France et vers la
            diaspora.
          </p>
        </div>

        <div class="faq-list">
          <details v-for="(f, i) in homeFaq" :key="i" class="faq-item">
            <summary>{{ f.q }}</summary>
            <p>{{ f.a }}</p>
          </details>
        </div>
        <div class="home-help-links">
          <RouterLink to="/aide">Consulter le centre d’aide →</RouterLink>
          <RouterLink to="/securite-et-paiement">Comprendre la sécurité et le paiement →</RouterLink>
        </div>
      </div>
    </section>

    <section class="partners-section">
      <div class="container">
        <div class="section-head">
          <span class="section-tag">Écosystème</span>
          <h2 class="section-title">Nos <em>partenaires</em></h2>
          <p class="section-sub">
            Des partenaires de confiance qui nous accompagnent au quotidien.
          </p>
        </div>
      </div>

      <div class="partners-marquee">
        <div class="partners-track">
          <a
            v-for="(p, i) in partnerMarquee"
            :key="i"
            class="partner-card"
            :href="p.url"
            :target="p.url !== '#' ? '_blank' : undefined"
            :rel="p.url !== '#' ? 'noopener' : undefined"
            :aria-hidden="i >= partners.length ? 'true' : undefined"
            :tabindex="i >= partners.length ? -1 : undefined"
            :aria-label="`Visiter ${p.name}`"
          >
            <img v-if="p.logo" :src="p.logo" :alt="p.name" class="partner-logo" />
            <span v-else class="partner-name">{{ p.name }}</span>
          </a>
        </div>
      </div>
    </section>

    <section class="cta-section" id="download-section">
      <div class="cta-grain"></div>
      <div class="container cta-inner">
        <div class="cta-eyebrow">Rejoignez Sendora</div>
        <h2 class="cta-title">Prêt à envoyer,<br />ou à transporter ?</h2>
        <p class="cta-sub">
          Téléchargez l'application gratuitement. Créez votre compte en moins de 2 minutes.
        </p>

        <div class="cta-stores">
          <a
            href="https://apps.apple.com/fr/app/sendora/id6773115334"
            target="_blank"
            rel="noopener"
            class="store-btn store-apple-dark"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="30" height="30">
              <path
                d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
              />
            </svg>
            <div>
              <span class="store-name">App Store</span>
            </div>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.sendoraapp"
            target="_blank"
            rel="noopener"
            class="store-btn store-google-dark"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path
                d="M3.18 23.76c.37.21.8.22 1.2.02l12.44-7.18-2.62-2.62-11.02 9.78zM20.77 10.34L18.21 8.8 15.3 11.7l2.9 2.9 2.58-1.49c.73-.42.73-1.35-.01-1.77zM1.02 1.44C.97 1.62.94 1.81.94 2.02v19.98c0 .2.03.39.08.57l.13.12L12.06 12l-.12-.12L1.02 1.44zM4.38.24L16.82 7.4 14.2 10.02 1.76.24C2.16.04 2.59.05 2.96.26L4.38.24z"
              />
            </svg>
            <div>
              <span class="store-name">Google Play</span>
            </div>
          </a>
        </div>

        <p class="cta-note">
          Inscription gratuite · KYC sécurisé · Aucune CB requise pour commencer
        </p>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import AppIcon from '../components/AppIcon.vue'
import BrandLogo from '../components/BrandLogo.vue'
import PhoneShowcase, { type PhoneScreen } from '../components/PhoneShowcase.vue'
import PriceMarket from '../components/PriceMarket.vue'
import PriceEstimator from '../components/PriceEstimator.vue'
import { useSeo } from '../composables/useSeo'
import { faqPage, howTo, mobileApplication, service } from '../seo/schema'

type Audience = 'sender' | 'carrier'
const audience = ref<Audience>('sender')
const audienceOptions: { value: Audience; label: string; icon: string }[] = [
  { value: 'sender', label: 'J’envoie un colis', icon: 'package' },
  { value: 'carrier', label: 'Je transporte', icon: 'map-pin' },
]
const heroCopy = computed(() => audience.value === 'sender' ? {
  title: 'Vos colis voyagent',
  emphasis: 'avec vos voisins.',
  body: 'Sendora connecte les expéditeurs avec des particuliers qui font déjà le trajet. Plus rapide, écologique et moins cher. Le Blablacar du colis.',
  pills: ['Vérification KYC', 'Paiement Stripe escrow', 'Suivi en direct'],
  downloadLabel: 'Votre prochain envoi commence dans l’app.',
  path: '/transport-colis-entre-particuliers',
  linkLabel: 'Découvrir comment envoyer un colis',
} : {
  title: 'Votre trajet.',
  emphasis: 'Un colis en plus.',
  body: 'Vous voyagez déjà ? Emportez un colis dans votre direction et partagez les frais de votre trajet. Choisissez les envois qui vous conviennent, en France ou vers la diaspora.',
  pills: ['Vous choisissez vos colis', 'Identités vérifiées', 'Paiement après livraison'],
  downloadLabel: 'Publiez votre premier trajet dans l’app.',
  path: '/devenir-transporteur',
  linkLabel: 'Découvrir le parcours transporteur',
})

const APP_STORE_URL = 'https://apps.apple.com/fr/app/sendora/id6773115334'
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.sendoraapp'
const APP_SCHEME = 'sendora' // à remplacer par le "scheme" de ton app.json Expo

function openApp() {
  const ua = navigator.userAgent
  const isAndroid = /android/i.test(ua)
  const isIOS =
    /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)

  if (isAndroid) {
    // Chrome ouvre l'app si installée, sinon redirige vers le Play Store
    window.location.href = `intent://open#Intent;scheme=${APP_SCHEME};package=com.sendoraapp;S.browser_fallback_url=${encodeURIComponent(PLAY_STORE_URL)};end`
    return
  }

  if (isIOS) {
    let left = false
    const onHide = () => {
      if (document.hidden) left = true
    }
    document.addEventListener('visibilitychange', onHide)
    window.location.href = `${APP_SCHEME}://`
    setTimeout(() => {
      document.removeEventListener('visibilitychange', onHide)
      if (!left) window.location.href = APP_STORE_URL
    }, 1500)
    return
  }

  // Desktop : on scroll vers les boutons de téléchargement
  document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })
}

/* Éventail du hero [centre, gauche, droite].
   Pour afficher de vraies captures : déposez les fichiers dans /public/screens/
   et renseignez `image` (ou `video` + `poster` pour une démo). Tant qu'un écran
   n'a pas de média, un aperçu d'app brandé est affiché à la place.
   Ex. : { image: '/screens/accueil.png', alt: 'Écran d’accueil Sendora' }
   `imageLight` = la même capture en version claire (fichier « -w »), servie
   automatiquement quand le site est en thème light. */
const appScreens: [PhoneScreen, PhoneScreen, PhoneScreen] = [
  {
    variant: 'track',
    image: '/screens/hero-centre.png',
    imageLight: '/screens/hero-centre-w.png',
    alt: 'Écran Mes trajets de l’application Sendora',
  },
  {
    variant: 'search',
    image: '/screens/hero-gauche.png',
    imageLight: '/screens/hero-gauche-w.png',
    alt: 'Écran de recherche de trajets Sendora',
  },
  {
    variant: 'profile',
    image: '/screens/hero-droite.png',
    imageLight: '/screens/hero-droite-w.png',
    alt: 'Écran profil Sendora',
  },
]

const heroScreens = computed(() => audience.value === 'sender'
  ? appScreens
  : [appScreens[0], appScreens[2], appScreens[1]])

// « Comment ça marche » un écran d'étape par téléphone. Ordre [centre, gauche,
// droite] : gauche = étape 1, centre = étape 2, droite = étape 3 (lecture 1→2→3).
const stepScreens: PhoneScreen[] = [
  {
    variant: 'step',
    image: '/screens/etape-2.png',
    imageLight: '/screens/etape-2-w.png',
    alt: 'Étape 2 - Choisissez votre transporteur',
    step: {
      n: 2,
      title: 'Choisissez votre transporteur',
      desc: 'Comparez les profils vérifiés qui font déjà votre trajet.',
    },
  },
  {
    variant: 'step',
    image: '/screens/etape-1.png',
    imageLight: '/screens/etape-1-w.png',
    alt: 'Étape 1 - Publiez votre annonce',
    step: {
      n: 1,
      title: 'Publiez votre annonce',
      desc: 'Décrivez votre colis et votre trajet en moins de 2 minutes.',
    },
  },
  {
    variant: 'step',
    image: '/screens/etape-3.png',
    imageLight: '/screens/etape-3-w.png',
    alt: 'Étape 3 - Livraison sécurisée',
    step: {
      n: 3,
      title: 'Livraison sécurisée',
      desc: 'Confirmez la réception, le paiement est libéré au transporteur.',
    },
  },
]

const DIASPORA_COUNTRIES = [
  'Sénégal',
  'Maroc',
  'Algérie',
  "Côte d'Ivoire",
  'Cameroun',
  'Comores',
  'Soudan',
  'Mayotte',
  'La Réunion',
]

const homeFaq = [
  {
    q: 'Comment fonctionne Sendora ?',
    a: 'Sendora fonctionne en 3 étapes : publiez votre annonce colis en 2 minutes, choisissez un transporteur particulier vérifié qui fait déjà votre trajet, puis confirmez la livraison pour libérer le paiement. Simple, rapide et sécurisé.',
  },
  {
    q: 'Comment envoyer un colis pas cher entre particuliers ?',
    a: 'Avec Sendora, vous confiez votre colis à un particulier qui fait déjà le trajet : il n’y a donc pas de coût logistique supplémentaire. Résultat, des tarifs jusqu’à 60 % moins chers qu’un transporteur classique en France, et jusqu’à 10× moins chers vers la diaspora.',
  },
  {
    q: 'Peut-on envoyer un colis vers la diaspora (Sénégal, Maroc, Algérie…) ?',
    a: 'Oui. Sendora met en relation des expéditeurs avec des voyageurs vérifiés qui se rendent au Sénégal, au Maroc, en Algérie, en Côte d’Ivoire, au Cameroun, aux Comores ou en Outre-mer. Votre colis est remis en main propre, sans entrepôt ni intermédiaire, pour une fraction du prix d’un transporteur express.',
  },
  {
    q: 'Combien coûte l’envoi d’un colis avec Sendora ?',
    a: 'Sendora est gratuit à l’inscription et sans abonnement. Le prix de chaque livraison est proposé par les transporteurs ; à titre indicatif, un colis de 10 kg vers le Maroc revient à environ 40 € contre 120 € en express.',
  },
  {
    q: 'Comment Sendora garantit-il la sécurité des paiements ?',
    a: 'Sendora utilise le séquestre (escrow) de Stripe : votre paiement est bloqué jusqu’à la confirmation de réception du colis. Le transporteur ne reçoit ses fonds qu’après validation de la livraison.',
  },
  {
    q: 'Peut-on envoyer des médicaments avec Sendora ?',
    a: 'Oui, pour les médicaments sans ordonnance (paracétamol, parapharmacie, vitamines, premiers soins), en quantité raisonnable pour un usage personnel ou familial (3 mois de traitement maximum). Un voyageur vérifié les transporte en main propre. Les médicaments sur ordonnance sans la prescription, les stupéfiants et les psychotropes sont en revanche interdits. Voir notre page dédiée « Envoyer des médicaments ».',
  },
  {
    q: 'Les transporteurs sont-ils vérifiés ?',
    a: 'Oui, tous les transporteurs passent par une vérification d’identité complète (KYC) via Didit, partenaire agréé eIDAS. Vous savez toujours à qui vous confiez votre colis.',
  },
  {
    q: 'Sendora est-il disponible sur iPhone et Android ?',
    a: 'Oui, Sendora est disponible gratuitement sur l’App Store (iOS) et Google Play (Android).',
  },
  {
    q: 'Comment gagner de l’argent en transportant des colis ?',
    a: 'Si vous effectuez des trajets, vous pouvez proposer de transporter des colis sur votre route. Vous définissez vos disponibilités, acceptez les missions qui vous conviennent et êtes payé via Stripe Connect sous 2 à 7 jours ouvrés.',
  },
]

useSeo({
  title: 'Sendora : envoyer un colis entre particuliers, en France et vers la diaspora',
  description:
    "Envoyez vos colis avec des particuliers qui font déjà le trajet : en France et vers la diaspora (Sénégal, Maroc, Algérie, Côte d'Ivoire, Cameroun…). Jusqu'à 60 % moins cher, transporteurs vérifiés KYC, paiement Stripe sous séquestre, suivi en direct. iOS & Android.",
  path: '/',
  keywords:
    'envoyer un colis entre particuliers, transport collaboratif de colis, envoyer colis pas cher, envoyer colis au Sénégal, envoyer colis au Maroc, envoyer colis en Algérie, colis diaspora, covoiturage de colis, Sendora',
  jsonLd: [
    mobileApplication(),
    service({
      name: 'Transport collaboratif de colis en France',
      serviceType: 'Livraison de colis entre particuliers',
      description:
        'Mise en relation d’expéditeurs avec des particuliers effectuant déjà le trajet, partout en France. Vérification KYC, paiement sécurisé sous séquestre et suivi temps réel.',
      areaServed: 'France',
      url: 'https://sendoraapp.com/',
    }),
    service({
      name: 'Envoi de colis vers la diaspora',
      serviceType: 'Transport de colis entre particuliers à l’international',
      description:
        'Envoyez vos colis depuis la France vers la diaspora grâce à des voyageurs vérifiés qui font déjà le trajet : remise en main propre, jusqu’à 10× moins cher qu’un transporteur express.',
      areaServed: DIASPORA_COUNTRIES,
      url: 'https://sendoraapp.com/',
    }),
    howTo(
      'Comment envoyer un colis avec Sendora',
      'Envoyer un colis entre particuliers, en France ou vers la diaspora, en 3 étapes.',
      [
        {
          name: 'Publiez votre annonce',
          text: 'Décrivez votre colis (poids, dimensions), indiquez les villes de départ et d’arrivée et votre budget. Moins de 2 minutes.',
        },
        {
          name: 'Choisissez un transporteur',
          text: 'Sendora vous propose des particuliers vérifiés KYC qui font déjà votre trajet. Comparez leurs profils, notes et tarifs, puis sélectionnez.',
        },
        {
          name: 'Livraison & paiement sécurisé',
          text: 'Le transporteur remet le colis en main propre. Vous confirmez la réception et le paiement sous séquestre Stripe est libéré.',
        },
      ],
    ),
    faqPage(homeFaq),
  ],
})

/* Partners - set `url` to the real site and `logo` to an image in
   /public (e.g. '/partners/myshelf.png') to swap the wordmark. */
const partners = [
  { name: 'MyShelf', url: 'https://myshelfapp.app', logo: '/partners/myshelf.png' },
  { name: 'DigitalPowers', url: 'https://digitalpowers.fr', logo: '/partners/logo2.png' },
  { name: 'Noomi', url: 'https://noomiapp.com/', logo: '/partners/noomi.png' },
]
// Repeat the set, then duplicate it so the -50% scroll loops seamlessly.
const partnerHalf = Array.from({ length: 6 }, () => partners).flat()
const partnerMarquee = [...partnerHalf, ...partnerHalf]

const senderSteps = [
  {
    icon: '',
    title: 'Publiez votre annonce',
    desc: "Décrivez votre colis (dimensions, poids, fragilité), indiquez les villes de départ et d'arrivée, choisissez vos dates et fixez votre budget. Ça prend moins de 2 minutes.",
  },
  {
    icon: '',
    title: 'Choisissez un transporteur',
    desc: "Sendora vous suggère des transporteurs qui font déjà votre trajet. Consultez leurs profils vérifiés, leurs notes et leurs disponibilités, puis sélectionnez l'offre qui vous convient.",
  },
  {
    icon: '',
    title: 'Livraison & paiement automatique',
    desc: "Le transporteur remet le colis. Vous confirmez la réception dans l'application et le paiement est libéré instantanément. Le transporteur reçoit ses fonds sous 2 à 7 jours ouvrés.",
  },
]

const carrierSteps = [
  {
    title: 'Publiez votre trajet',
    desc: 'Indiquez votre départ, votre arrivée et vos dates dans l’application. Complétez votre profil et la vérification d’identité pour commencer à transporter.',
  },
  {
    title: 'Choisissez vos colis',
    desc: 'Échangez avec l’expéditeur pour convenir du colis, de sa prise en charge et de sa remise au destinataire. Acceptez uniquement ce qui correspond à votre trajet.',
  },
  {
    title: 'Livrez, puis validez avec le code',
    desc: 'Une fois le colis remis, demandez le code à l’expéditeur et saisissez-le dans l’application. Le paiement est libéré après validation de la livraison.',
  },
]
const steps = computed(() => audience.value === 'sender' ? senderSteps : carrierSteps)

const trust = [
  {
    icon: '',
    title: 'Vérification KYC via Didit',
    desc: 'Tous les transporteurs sont vérifiés par Didit, partenaire eIDAS de confiance.',
  },
  {
    icon: '',
    title: 'Escrow Stripe',
    desc: "Paiement bloqué jusqu'à confirmation de livraison. Aucun risque de perte.",
  },
  {
    icon: '',
    title: 'RGPD & données en Europe',
    desc: 'Données chiffrées, hébergées sur AWS EU. Conformité totale au RGPD.',
  },
  {
    icon: '',
    title: 'Auth multifacteur',
    desc: 'Connexion via Apple ID, Google ou email avec vérification renforcée.',
  },
]

/* 'mono'  = official marks redrawn as single-colour vectors (BrandLogo),
             they inherit currentColor and follow the light/dark theme.
   'color' = the brand assets dropped in /public/services, shown as-is. */
type BrandLogoStyle = 'mono' | 'color'
const brandLogoStyle = 'mono' as BrandLogoStyle

const securityStack = [
  {
    key: 'didit',
    name: 'Didit',
    role: "Vérification d'identité (KYC)",
    url: 'https://didit.me',
    img: '/services/api.svg',
    cls: 'bl-didit',
    wide: true,
  },
  {
    key: 'stripe',
    name: 'Stripe',
    role: 'Paiement sous séquestre',
    url: 'https://stripe.com',
    img: '/services/Stripe.png',
    cls: 'bl-stripe',
    wide: false,
  },
  {
    key: 'aws',
    name: 'Amazon Web Services',
    role: 'Hébergement des données en Europe',
    url: 'https://aws.amazon.com',
    img: '/services/Amazon_Web_Services_2025.svg.webp',
    cls: 'bl-aws',
    wide: false,
  },
  {
    key: 'apple',
    name: 'Apple',
    role: 'Connexion sécurisée',
    url: 'https://www.apple.com',
    img: '/services/Apple_logo_black.svg',
    cls: 'bl-apple',
    wide: false,
  },
  {
    key: 'google',
    name: 'Google',
    role: 'Connexion sécurisée',
    url: 'https://www.google.com',
    img: '/services/format-vectoriel-google-logo-sur-fond-blanc-illustration-vectorielle-407571048.webp',
    cls: 'bl-google',
    wide: false,
  },
]
</script>

<style scoped>
/* Guarantee no horizontal page scroll - the hero phone fan spills by design
   and its transformed edges must never widen the document. */
.home {
  overflow-x: clip;
}
.hero {
  position: relative;
  min-height: calc(100vh - 72px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  background: var(--cream);
  padding: 3rem 0 2rem;
}
.hero-noise {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
  background-size: 200px 200px;
}
.hero-inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: clamp(2rem, 5vw, 5rem);
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 4rem;
}
.hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--verdant);
  margin-bottom: 1.75rem;
}
.pulse-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--verdant-lt);
  box-shadow: 0 0 0 0 rgba(45, 181, 108, 0.4);
  animation: pulse-ring 2.5s ease infinite;
}
@keyframes pulse-ring {
  0% {
    box-shadow: 0 0 0 0 rgba(45, 181, 108, 0.5);
  }
  70% {
    box-shadow: 0 0 0 8px rgba(45, 181, 108, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(45, 181, 108, 0);
  }
}
.hero-headline {
  font-family: var(--font-display);
  font-size: clamp(2.6rem, 5.2vw, 4.4rem);
  font-weight: 700;
  line-height: 1.08;
  letter-spacing: -0.03em;
  color: var(--ink);
  margin-bottom: 1.5rem;
}
.hero-audience {
  display: inline-flex;
  max-width: 100%;
  gap: 0.25rem;
  padding: 0.3rem;
  margin-bottom: 1.75rem;
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-xl);
  background: var(--bg-card);
}
.hero-audience button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  padding: 0.7rem 1rem;
  border: 0;
  border-radius: var(--radius-xl);
  background: transparent;
  color: var(--text-secondary);
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  transition: background var(--transition), color var(--transition);
}
.hero-audience button[aria-pressed='true'] {
  background: var(--verdant);
  color: #fff;
}
.hero-audience button:focus-visible,
.hero-explore:focus-visible {
  outline: 3px solid var(--verdant);
  outline-offset: 4px;
}
.hero-audience .app-icon,
.hero-explore .app-icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}
.hero-download-label {
  color: var(--ink);
  font-size: 0.85rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}
.hero-explore {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.2rem;
  color: var(--verdant);
  font-size: 0.88rem;
  font-weight: 700;
}
.hero-italic {
  font-style: italic;
  font-weight: 700;
  color: var(--verdant);
}
.hero-body {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  max-width: 500px;
  margin-bottom: 1.75rem;
}
.hero-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 2.25rem;
}
.pill {
  display: inline-flex;
  align-items: center;
  background: rgba(26, 102, 64, 0.09);
  color: var(--verdant);
  font-size: 0.78rem;
  font-weight: 700;
  padding: 5px 12px;
  border-radius: var(--radius-xl);
  border: 1px solid rgba(26, 102, 64, 0.15);
}
.hero-cta {
  display: flex;
  scroll-margin-top: 100px;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 1.25rem;
}
.store-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 13px 20px;
  border-radius: 14px;
  transition:
    transform var(--transition),
    box-shadow var(--transition);
  cursor: pointer;
}
.store-btn:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow);
}
.store-btn > div {
  display: flex;
  flex-direction: column;
  text-align: left;
}
.store-sub {
  font-size: 0.68rem;
  opacity: 0.7;
  line-height: 1;
}
.store-name {
  font-size: 0.98rem;
  font-weight: 800;
  line-height: 1.3;
}
.store-apple {
  background: var(--ink);
  color: var(--white);
}
.store-google {
  background: var(--white);
  color: var(--ink);
  border: 1.5px solid var(--border-strong);
}
.hero-fine {
  font-size: 0.78rem;
  color: var(--text-muted);
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 2rem 0;
}
/* Static accent chips */
.rc-chip {
  position: absolute;
  z-index: 4;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow);
  padding: 9px 15px;
  font-size: 0.76rem;
  font-weight: 600;
  color: var(--text-secondary);
  white-space: nowrap;
}
.rc-chip strong {
  font-weight: 900;
  color: var(--ink);
}
.rc-chip-save {
  top: 20px;
  left: -8px;
}
.rc-chip-save strong {
  color: var(--verdant);
}
.rc-chip-eco {
  bottom: 30px;
  right: -8px;
}

/* Scroll hint */
.hero-scroll-hint {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  padding-bottom: 1.5rem;
}
.scroll-line {
  width: 1px;
  height: 48px;
  background: linear-gradient(to bottom, var(--verdant), transparent);
  animation: scroll-fade 2s ease-in-out infinite;
}
@keyframes scroll-fade {
  0%,
  100% {
    opacity: 0.3;
    transform: scaleY(0.8);
  }
  50% {
    opacity: 1;
    transform: scaleY(1);
  }
}

/* Earn section */
.earn-section {
  padding: 2rem 0 4rem;
}
.earn-banner {
  background: var(--brand-700);
  border-radius: 28px;
  padding: 1.3rem 1rem 1.3rem;
  text-align: center;
}
.earn-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 0.85rem 1.75rem;
  border-radius: 999px;
  background: #fff;
  color: var(--brand-700);
  font-weight: 800;
  font-size: 0.9rem;
  transition:
    transform var(--transition),
    box-shadow var(--transition);
}
.earn-more {
  display: block;
  width: fit-content;
  margin: 1rem auto 0;
  color: #fff;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 4px;
}
.earn-title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(1.8rem, 2.6vw, 2.6rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--band-ink);
  margin-bottom: 1.25rem;
}
.earn-text {
  max-width: 560px;
  margin: 0 auto 2rem;
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.6;
  color: var(--band-ink);
}

.earn-btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}
.earn-cols {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2.5rem;
  padding: 0 0.25rem;
}
.earn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--surface-soft);
  color: var(--ink);
  margin-bottom: 1.5rem;
}
.earn-icon .app-icon {
  width: 26px;
  height: 26px;
}
.earn-col h3 {
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--ink);
  margin-bottom: 0.5rem;
}
.earn-col p {
  font-size: 0.92rem;
  line-height: 1.5;
  color: var(--text-secondary);
}
@media (max-width: 860px) {
  .earn-cols {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .earn-banner {
    padding: 2.25rem 1.25rem;
  }
}

.section-head {
  text-align: center;
  max-width: 680px;
  margin: 0 auto 4rem;
}
.section-tag {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--verdant);
  background: rgba(26, 102, 64, 0.09);
  padding: 4px 12px;
  border-radius: var(--radius-xl);
  margin-bottom: 1.1rem;
}
.section-title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(1.9rem, 4vw, 2.9rem);
  line-height: 1.12;
  letter-spacing: -0.03em;
  color: var(--ink);
  margin-bottom: 0.85rem;
}
.section-title em {
  font-style: italic;
  color: var(--verdant);
}
.section-sub {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.75;
}

.how-section {
  padding: 7rem 0;
  background: var(--cream-deep);
  overflow: hidden;
}
/* Centered layout: steps on the left, step-phones on the right. */
.how-inner {
  width: min(var(--container), calc(100% - 40px));
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2rem, 5vw, 5rem);
  align-items: center;
}
.how-head {
  text-align: left;
  max-width: 540px;
  margin: 0 0 2.5rem;
}
.how-visual {
  display: flex;
  justify-content: center;
}
.steps-track {
  max-width: 560px;
  margin: 0;
  display: flex;
  flex-direction: column;
}
.step-item {
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 1.5rem;
}
.step-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
}
.step-number {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--verdant);
  color: white;
  border-radius: 50%;
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  flex-shrink: 0;
}
.step-line {
  flex: 1;
  width: 2px;
  background: linear-gradient(to bottom, var(--verdant-lt), transparent);
  margin: 0.5rem 0;
  min-height: 3rem;
}
.step-body {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
  padding-bottom: 3rem;
}
.step-item:last-child .step-body {
  padding-bottom: 0;
}
.step-emoji {
  font-size: 2rem;
  flex-shrink: 0;
  margin-top: 0.1rem;
}
.step-text h3 {
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--ink);
  margin-bottom: 0.5rem;
}
.step-text p {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.75;
}
/* Stack the "how it works" columns on tablet/mobile (phones stay visible). */
@media (max-width: 920px) {
  .how-inner {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    justify-items: center;
  }
  .how-head {
    text-align: center;
    margin-inline: auto;
  }
  .steps-track {
    margin-inline: auto;
  }
}

.roles-section {
  padding: 7rem 0;
}
.roles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
.role-card {
  border-radius: var(--radius-lg);
  padding: clamp(2rem, 4vw, 3rem);
  position: relative;
  overflow: hidden;
}
.role-sender {
  background: var(--cream-deep);
  border: 1.5px solid rgba(26, 102, 64, 0.15);
}
.role-transporter {
  background: var(--band);
}
.role-eyebrow {
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}
.role-sender .role-eyebrow {
  color: var(--verdant);
}
.role-transporter .role-eyebrow {
  color: var(--gold);
}
.role-card h2 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  line-height: 1.15;
  letter-spacing: -0.03em;
  margin-bottom: 1.1rem;
}
.role-sender h2 {
  color: var(--ink);
}
.role-transporter h2 {
  color: var(--band-ink);
}
.role-sender h2 em {
  font-style: italic;
  color: var(--verdant);
}
.role-transporter h2 em {
  font-style: italic;
  color: var(--gold);
}
.role-card p {
  font-size: 0.95rem;
  line-height: 1.75;
  margin-bottom: 1.5rem;
}
.role-sender p {
  color: var(--text-secondary);
}
.role-transporter p {
  color: rgba(255, 255, 255, 0.7);
}
.role-checklist {
  list-style: none;
  display: grid;
  gap: 0.6rem;
  margin-bottom: 2rem;
}
.role-checklist li {
  font-size: 0.9rem;
  font-weight: 500;
  padding-left: 1.4rem;
  position: relative;
}
.role-checklist li::before {
  content: '✓';
  position: absolute;
  left: 0;
  font-weight: 900;
}
.role-sender .role-checklist li {
  color: var(--text-secondary);
}
.role-sender .role-checklist li::before {
  color: var(--verdant);
}
.role-transporter .role-checklist li {
  color: rgba(255, 255, 255, 0.75);
}
.role-transporter .role-checklist li::before {
  color: var(--gold);
}
.role-action {
  display: inline-flex;
  align-items: center;
  font-weight: 800;
  font-size: 0.9rem;
  padding: 0.7rem 1.4rem;
  border-radius: var(--radius-xl);
  transition:
    transform var(--transition),
    box-shadow var(--transition);
}
.role-action:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}
.role-action-dark {
  background: var(--ink);
  color: var(--white);
}
.role-action-light {
  background: var(--gold);
  color: var(--band);
}

/* Professionals - deep-green premium card (stable in light & dark) */
.role-pro {
  background: var(--brand-700);
  border: 1.5px solid var(--brand-700);
}
.role-pro .role-eyebrow {
  color: var(--gold-lt);
}
.role-pro h2 {
  color: var(--band-ink);
}
.role-pro h2 em {
  font-style: italic;
  color: var(--gold-lt);
}
.role-pro p {
  color: rgba(255, 255, 255, 0.82);
}
.role-pro .role-checklist li {
  color: rgba(255, 255, 255, 0.88);
}
.role-pro .role-checklist li::before {
  color: var(--gold-lt);
}
.role-action-pro {
  background: var(--band-ink);
  color: var(--brand-700);
}

@media (max-width: 1080px) {
  .roles-grid {
    grid-template-columns: 1fr;
    max-width: 560px;
  }
}

.features-section {
  padding: 7rem 0;
  background: var(--cream-deep);
}
.features-bento {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto auto;
  gap: 1.25rem;
}
.feat-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 2rem;
  transition:
    transform var(--transition),
    box-shadow var(--transition),
    border-color var(--transition);
}
.feat-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow);
  border-color: rgba(26, 102, 64, 0.2);
}
.feat-large {
  grid-column: span 2;
}
.feat-wide {
  grid-column: span 3;
}
.feat-icon-wrap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: rgba(26, 102, 64, 0.1);
  color: var(--verdant);
  margin-bottom: 1.25rem;
}
.feat-icon-wrap .app-icon {
  width: 26px;
  height: 26px;
}
.feat-card h3 {
  font-size: 1.05rem;
  font-weight: 800;
  color: var(--ink);
  margin-bottom: 0.6rem;
}
.feat-card p {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.75;
}

.trust-section {
  padding: 7rem 0;
}
.trust-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2rem, 5vw, 5rem);
  align-items: center;
}
.trust-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.trust-content .section-title {
  text-align: left;
  margin-bottom: 0.25rem;
}
.trust-content .section-sub {
  text-align: left;
  margin-bottom: 1rem;
}
.trust-badges {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 0.5rem;
}
.trust-badge {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  background: var(--cream-deep);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.1rem;
}
.tb-icon {
  font-size: 1.4rem;
  flex-shrink: 0;
}
.tb-title {
  font-size: 0.88rem;
  font-weight: 800;
  color: var(--ink);
  margin-bottom: 0.2rem;
}
.tb-desc {
  font-size: 0.8rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

/* Trust visual - the third-party security stack, as a monochrome logo wall.
   Marks inherit currentColor so they follow the light/dark theme. */
.trust-visual {
  display: flex;
  justify-content: center;
}
.trust-stack {
  background: var(--bg-card);
  border: 1.5px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.6rem;
  max-width: 345px;
  width: 100%;
  box-shadow: var(--shadow-lg);
}
.ts-eyebrow {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.15rem;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--text-muted);
}
.ts-eyebrow .app-icon {
  width: 15px;
  height: 15px;
  flex-shrink: 0;
  color: var(--verdant);
}
.ts-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.65rem;
}
.ts-tile {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 76px;
  padding: 1rem;
  background: var(--surface-soft);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--ink-soft);
  text-decoration: none;
  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    color 0.25s ease;
}
.ts-tile:focus-visible {
  outline: 2px solid var(--verdant);
  outline-offset: 2px;
}
.ts-tile:hover {
  transform: translateY(-2px);
  border-color: var(--border-strong);
  color: var(--verdant);
}
.ts-tile-wide {
  grid-column: 1 / -1;
  min-height: 68px;
}
/* Each mark keeps its own aspect ratio; the height is tuned per brand so they
   read at the same optical weight despite very different proportions. */
.brand-logo {
  display: block;
  width: auto;
  max-width: 100%;
}
.brand-logo.bl-didit {
  height: 28px;
}
.brand-logo.bl-stripe {
  height: 32px;
}
/* The AWS mark only fills about half of its 24x24 box, so it needs a taller
   frame than the letter-marks to read at the same optical weight. */
.brand-logo.bl-aws {
  height: 54px;
}
.brand-logo.bl-apple {
  height: 33px;
}
.brand-logo.bl-google {
  height: 31px;
}

/* 'color' variant: raw brand assets from /public/services */
.ts-img {
  display: block;
  width: auto;
  max-width: 100%;
  object-fit: contain;
}
.ts-img.bl-didit {
  height: 44px;
}
.ts-img.bl-stripe {
  height: 46px;
}
.ts-img.bl-aws {
  height: 34px;
}
.ts-img.bl-apple {
  height: 34px;
}
.ts-img.bl-google {
  height: 34px;
}
.ts-note {
  margin: 1rem 0 0;
  font-size: 0.66rem;
  line-height: 1.45;
  color: var(--text-muted);
  opacity: 0.75;
}
@media (prefers-reduced-motion: reduce) {
  .ts-tile {
    transition: none;
  }
  .ts-tile:hover {
    transform: none;
  }
}

/* Partners marquee */
.partners-section {
  padding: 2rem 0 7rem;
  overflow: hidden;
}
.partners-marquee {
  position: relative;
  width: 70%;
  max-width: 1000px;
  margin: 3rem auto 0;
  overflow: hidden;
  /* Fade the cards in/out at the edges */
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);
}
@media (max-width: 768px) {
  .partners-marquee {
    width: 90%;
  }
}
.partners-track {
  display: flex;
  width: max-content;
  animation: partners-scroll 32s linear infinite;
  will-change: transform;
}
.partners-marquee:hover .partners-track {
  animation-play-state: paused;
}
@keyframes partners-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
.partner-card {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-right: 1.5rem;
  min-width: 230px;
  height: 96px;
  padding: 0 2.25rem;
  border-radius: var(--radius-lg);
  background: var(--bg-card);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
  transition:
    transform var(--transition),
    box-shadow var(--transition),
    border-color var(--transition);
}
.partner-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow);
  border-color: rgba(26, 102, 64, 0.25);
}
.partner-logo {
  height: 64px;
  width: auto;
  max-width: 180px;
  object-fit: contain;
}
.partner-name {
  font-weight: 800;
  font-size: 1.5rem;
  letter-spacing: -0.03em;
  color: var(--text-primary);
  white-space: nowrap;
}
@media (prefers-reduced-motion: reduce) {
  .partners-track {
    animation: none;
  }
}

.cta-section {
  position: relative;
  padding: 8rem 0;
  overflow: hidden;
  text-align: center;
  background: var(--band);
}
.cta-grain {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.06'/%3E%3C/svg%3E");
  background-size: 200px;
  background-blend-mode: overlay;
}
.cta-inner {
  position: relative;
  z-index: 1;
}
.cta-eyebrow {
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 1.25rem;
}
.cta-title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(2.4rem, 5vw, 4rem);
  line-height: 1.08;
  letter-spacing: -0.04em;
  color: var(--band-ink);
  margin-bottom: 1.1rem;
}
.cta-sub {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.65);
  max-width: 460px;
  margin: 0 auto 2.5rem;
  line-height: 1.75;
}
.cta-stores {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  justify-content: center;
  margin-bottom: 1.25rem;
}
.store-apple-dark {
  background: rgba(255, 255, 255, 0.12);
  border: 1.5px solid rgba(255, 255, 255, 0.2);
  color: white;
}
.store-apple-dark:hover {
  background: rgba(255, 255, 255, 0.2);
}
.store-google-dark {
  background: var(--gold);
  color: var(--band);
}
.store-google-dark:hover {
  background: var(--gold-lt);
}
.cta-note {
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.4);
}

/* FAQ */
.faq-section {
  padding: 6rem 0;
}
.home-help-links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem 2rem;
  margin-top: 2rem;
  color: var(--verdant);
  font-size: 0.88rem;
  font-weight: 700;
}
.faq-list {
  max-width: 780px;
  margin: 0 auto;
  display: grid;
  gap: 0.75rem;
}
.faq-item {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 0.5rem 1.4rem;
}
.faq-item summary {
  cursor: pointer;
  font-weight: 700;
  font-size: 1rem;
  color: var(--ink);
  padding: 1rem 0;
  list-style: none;
}
.faq-item summary::-webkit-details-marker {
  display: none;
}
.faq-item summary::after {
  content: '+';
  float: right;
  color: var(--verdant);
  font-weight: 900;
  font-size: 1.2rem;
  line-height: 1;
}
.faq-item[open] summary::after {
  content: '–';
}
.faq-item p {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.75;
  padding-bottom: 1.1rem;
}

@media (max-width: 1000px) {
  .features-bento {
    grid-template-columns: 1fr 1fr;
  }
  .feat-large,
  .feat-wide {
    grid-column: span 2;
  }
}
@media (max-width: 860px) {
  .hero-inner {
    grid-template-columns: 1fr;
    text-align: center;
    padding-top: 2rem;
  }
  .hero-body {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  .hero-pills {
    justify-content: center;
  }
  .hero-cta {
    justify-content: center;
  }
  .hero-visual {
    padding: 0;
  }
  /* Chips would overlap the smaller fan on narrow screens - keep phones clean. */
  .rc-chip {
    display: none;
  }
  .hero-scroll-hint {
    display: none;
  }
  .stats-row {
    grid-template-columns: repeat(2, 1fr);
  }
  .roles-grid {
    grid-template-columns: 1fr;
  }
  .trust-inner {
    grid-template-columns: 1fr;
  }
  .trust-visual {
    order: -1;
  }
}
@media (max-width: 640px) {
  .hero-audience {
    width: 100%;
    max-width: 360px;
  }
  .hero-audience button {
    flex: 1;
    padding: 0.7rem 0.45rem;
    font-size: 0.78rem;
  }
  .features-bento {
    grid-template-columns: 1fr;
  }
  .feat-large,
  .feat-wide {
    grid-column: span 1;
  }
  .trust-badges {
    grid-template-columns: 1fr;
  }
  .hero-headline {
    font-size: 2.4rem;
  }
}
</style>
