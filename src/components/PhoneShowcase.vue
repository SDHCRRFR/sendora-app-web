<script lang="ts" setup>
import { computed } from 'vue'
import AppIcon from '@/components/AppIcon.vue'

/**
 * Éventail de 3 téléphones pour le hero.
 *
 * Pour intégrer de vraies captures / une vidéo plus tard, passez un tableau
 * `screens` de 3 entrées [centre, gauche, droite]. Tant qu'une entrée n'a ni
 * `image` ni `video`, un aperçu d'app brandé (placeholder) est affiché.
 *
 *   <PhoneShowcase :screens="[
 *     { image: '/screens/accueil.png', alt: 'Écran d’accueil Sendora' },   // centre
 *     { image: '/screens/recherche.png', alt: 'Recherche de trajets' },    // gauche
 *     { video: '/screens/demo.mp4', poster: '/screens/demo.jpg' },         // droite
 *   ]" />
 *
 * Déposez les fichiers dans /public/screens/ et référencez-les en '/screens/...'.
 */
export interface PhoneScreen {
  /** Capture d'écran (ex. '/screens/accueil.png'). */
  image?: string
  /** Vidéo (ex. '/screens/demo.mp4'). Prioritaire sur image, jouée en boucle muette. */
  video?: string
  /** Image d'attente affichée avant la lecture de la vidéo. */
  poster?: string
  /** Texte alternatif pour l'accessibilité. */
  alt?: string
  /** Style du placeholder quand aucun média n'est fourni. */
  variant?: 'track' | 'search' | 'profile' | 'step'
  /** Contenu de l'écran « étape » (utilisé quand variant === 'step'). */
  step?: { n: number; title: string; desc: string }
}

const props = withDefaults(
  defineProps<{
    screens?: PhoneScreen[]
    /**
     * Disposition des téléphones.
     * - 'fan' (défaut) : éventail, latéraux pivotés/réduits qui se chevauchent (hero).
     * - 'row' : les 3 côte à côte, même taille, espacés, écrans entièrement visibles.
     */
    layout?: 'fan' | 'row'
  }>(),
  {
    screens: () => [{ variant: 'track' }, { variant: 'search' }, { variant: 'profile' }],
    layout: 'fan',
  },
)

const titles: Record<string, string> = {
  track: 'Mes trajets',
  search: 'Recherche',
  profile: 'Profil',
}

// Screen header label — steps show "Étape n", others use the map above.
const headOf = (screen: PhoneScreen) =>
  screen.variant === 'step' && screen.step
    ? `Étape ${screen.step.n} / 3`
    : (titles[screen.variant ?? 'track'] ?? '')

// [centre (avant), gauche, droite] → ordre visuel dans l'éventail.
const slots = computed(() => {
  const s = props.screens
  return [
    { key: 'lead', cls: 'slot-lead', screen: s[0] ?? { variant: 'track' as const } },
    { key: 'left', cls: 'slot-left', screen: s[1] ?? { variant: 'search' as const } },
    { key: 'right', cls: 'slot-right', screen: s[2] ?? { variant: 'profile' as const } },
  ]
})

const variantOf = (screen: PhoneScreen) => screen.variant ?? 'track'
</script>

<template>
  <div class="phones-fan" :class="`is-${props.layout}`" aria-hidden="true">
    <div v-for="s in slots" :key="s.key" class="phone-slot" :class="s.cls">
      <div class="phone">
        <div class="phone-frame">
          <span class="phone-island"></span>
          <!-- Physical side buttons -->
          <span class="phone-btn phone-btn-mute"></span>
          <span class="phone-btn phone-btn-vup"></span>
          <span class="phone-btn phone-btn-vdown"></span>
          <span class="phone-btn phone-btn-power"></span>
          <div class="phone-screen">
            <!-- Vidéo (prioritaire) -->
            <video
              v-if="s.screen.video"
              class="phone-media"
              :poster="s.screen.poster"
              autoplay
              muted
              loop
              playsinline
            >
              <source :src="s.screen.video" />
            </video>

            <!-- Capture d'écran -->
            <img
              v-else-if="s.screen.image"
              class="phone-media"
              :src="s.screen.image"
              :alt="s.screen.alt || ''"
              loading="lazy"
              decoding="async"
            />

            <!-- Aperçu brandé (par défaut, en attendant les vraies captures) -->
            <div v-else class="ps">
              <div class="ps-status">
                <span class="ps-time">9:41</span>
                <span class="ps-sys"><i></i><i></i><i class="ps-bat"></i></span>
              </div>
              <div class="ps-head">{{ headOf(s.screen) }}</div>

              <div class="ps-body">
                <!-- Étape (Comment ça marche) -->
                <template v-if="variantOf(s.screen) === 'step'">
                  <div class="ps-step">
                    <span class="ps-step-num">{{ s.screen.step?.n }}</span>
                    <b class="ps-step-title">{{ s.screen.step?.title }}</b>
                    <p class="ps-step-desc">{{ s.screen.step?.desc }}</p>
                    <span class="ps-step-dots">
                      <i v-for="k in 3" :key="k" :class="{ on: k === s.screen.step?.n }"></i>
                    </span>
                  </div>
                </template>

                <!-- Trajet en cours -->
                <template v-else-if="variantOf(s.screen) === 'track'">
                  <div class="ps-chip"><span class="ps-livedot"></span>En cours · 462 km</div>
                  <div class="ps-route">
                    <span class="ps-av ps-av-a"></span>
                    <span class="ps-track">
                      <span class="ps-track-fill"></span>
                      <span class="ps-pkg"><AppIcon name="package" /></span>
                    </span>
                    <span class="ps-av ps-av-b"></span>
                  </div>
                  <div class="ps-cities"><span>Paris</span><span>Moroni</span></div>
                  <div class="ps-card">
                    <span class="ps-av ps-av-c"></span>
                    <span class="ps-card-lines"><b>Said H.</b><i>★ 4,9 · Vérifié</i></span>
                    <span class="ps-price">14 €</span>
                  </div>
                </template>

                <!-- Recherche de trajets -->
                <template v-else-if="variantOf(s.screen) === 'search'">
                  <div class="ps-search"><AppIcon name="map-pin" /><span>Paris → Marseille</span></div>
                  <div class="ps-row">
                    <span class="ps-av ps-av-c"></span>
                    <span class="ps-card-lines"><b>Karim B.</b><i>Demain · 2 places</i></span>
                    <span class="ps-price">18 €</span>
                  </div>
                  <div class="ps-row">
                    <span class="ps-av ps-av-d"></span>
                    <span class="ps-card-lines"><b>Léa V.</b><i>Ven. · 1 place</i></span>
                    <span class="ps-price">22 €</span>
                  </div>
                </template>

                <!-- Profil / stats -->
                <template v-else>
                  <div class="ps-profile">
                    <span class="ps-av ps-av-big"></span>
                    <b>Aïcha M.</b>
                    <i>★ 4,9 · Vérifiée KYC</i>
                  </div>
                  <div class="ps-stats">
                    <div><b>42</b><i>Envois</i></div>
                    <div><b>128</b><i>Trajets</i></div>
                    <div><b>4,9</b><i>Note</i></div>
                  </div>
                </template>
              </div>

              <div class="ps-tabs">
                <span
                  class="ps-tab"
                  :class="{ on: variantOf(s.screen) === 'track' || variantOf(s.screen) === 'step' }"
                >
                  <AppIcon name="package" />
                </span>
                <span class="ps-tab" :class="{ on: variantOf(s.screen) === 'search' }">
                  <AppIcon name="map-pin" />
                </span>
                <span class="ps-tab"><AppIcon name="message-circle" /></span>
                <span class="ps-tab" :class="{ on: variantOf(s.screen) === 'profile' }">
                  <AppIcon name="user" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.phones-fan {
  --phone-w: clamp(178px, 20vw, 222px);
  position: relative;
  /* Contain the per-phone z-indexes so hero chips can layer above the fan. */
  isolation: isolate;
  display: grid;
  place-items: center;
  justify-content: center;
  width: 100%;
  min-height: calc(var(--phone-w) * 2.35);
}

/* Each slot occupies the same grid cell; the fan geometry lives here so the
   inner .phone can carry an independent idle-float animation. */
.phone-slot {
  grid-area: 1 / 1;
}
.slot-lead {
  transform: translateY(-2%);
  z-index: 3;
}
.slot-left {
  transform: translateX(-54%) translateY(5%) rotate(-9deg) scale(0.84);
  z-index: 1;
}
.slot-right {
  transform: translateX(54%) translateY(5%) rotate(9deg) scale(0.84);
  z-index: 1;
}

/* ── Disposition « row » : 3 téléphones côte à côte, écrans entièrement visibles ── */
.phones-fan.is-row {
  --phone-w: clamp(128px, 14.5vw, 196px);
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  gap: clamp(10px, 1.4vw, 22px);
  min-height: 0;
}
.phones-fan.is-row .phone-slot {
  grid-area: auto;
  transform: none;
  z-index: auto;
}
/* Ordre de lecture gauche → droite : étape 1 (left), 2 (lead), 3 (right). */
.phones-fan.is-row .slot-left {
  order: 1;
}
.phones-fan.is-row .slot-lead {
  order: 2;
}
.phones-fan.is-row .slot-right {
  order: 3;
}

.phone {
  animation: phone-float 7s ease-in-out infinite;
}
.slot-left .phone {
  animation-delay: -2.3s;
}
.slot-right .phone {
  animation-delay: -4.6s;
}
@keyframes phone-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* ── Device frame ─────────────────────────────────────────────── */
.phone-frame {
  /* Bezel colour, driven by CSS vars. Default = dark titanium, kept as-is for
     dark mode; light mode overrides these per position (red/white/green). */
  --frame-bg: linear-gradient(155deg, #30363200, #1a1f1c 12%, #0c0f0d 88%, #05070600) #171c19;
  --frame-rim: rgba(255, 255, 255, 0.08);
  --frame-ring: 0 0 0 1px rgba(255, 255, 255, 0.07);
  position: relative;
  width: var(--phone-w);
  aspect-ratio: 9 / 19.5;
  padding: 8px;
  border-radius: 34px;
  background: var(--frame-bg);
  box-shadow:
    var(--shadow-lg),
    var(--frame-ring),
    inset 0 0 0 1.5px var(--frame-rim);
}

/* Light mode: coloured bodies — red (left), white (centre), green (right). */
:root[data-theme='light'] .slot-left .phone-frame {
  --frame-bg: linear-gradient(155deg, #e2604f, #c73f31 48%, #9f2a1e) #c73f31;
  --frame-rim: rgba(255, 255, 255, 0.34);
  --frame-ring: 0 0 0 1px rgba(13, 26, 18, 0.1);
}
:root[data-theme='light'] .slot-lead .phone-frame {
  --frame-bg: linear-gradient(155deg, #ffffff, #f4f2ea 58%, #e5e1d4) #f4f2ea;
  --frame-rim: rgba(255, 255, 255, 0.9);
  --frame-ring: 0 0 0 1px rgba(13, 26, 18, 0.16);
}
:root[data-theme='light'] .slot-right .phone-frame {
  --frame-bg: linear-gradient(155deg, #2fa065, #1a6640 48%, #114a2e) #1a6640;
  --frame-rim: rgba(255, 255, 255, 0.28);
  --frame-ring: 0 0 0 1px rgba(13, 26, 18, 0.1);
}

/* Physical side buttons — inherit the frame colour so they match each body. */
.phone-btn {
  position: absolute;
  width: 2.5px;
  background: var(--frame-bg);
  filter: brightness(0.9);
  z-index: 1;
}
.phone-btn-mute {
  left: -2px;
  top: 15%;
  height: 3.6%;
  border-radius: 2px 0 0 2px;
  box-shadow: -1px 0 2px rgba(0, 0, 0, 0.18);
}
.phone-btn-vup {
  left: -2px;
  top: 22%;
  height: 8%;
  border-radius: 2px 0 0 2px;
  box-shadow: -1px 0 2px rgba(0, 0, 0, 0.18);
}
.phone-btn-vdown {
  left: -2px;
  top: 32%;
  height: 8%;
  border-radius: 2px 0 0 2px;
  box-shadow: -1px 0 2px rgba(0, 0, 0, 0.18);
}
.phone-btn-power {
  right: -2px;
  top: 27%;
  height: 11%;
  border-radius: 0 2px 2px 0;
  box-shadow: 1px 0 2px rgba(0, 0, 0, 0.18);
}
.phone-island {
  position: absolute;
  top: 9px;
  left: 50%;
  transform: translateX(-50%);
  width: 32%;
  height: 15px;
  border-radius: 999px;
  background: #050706;
  z-index: 5;
}
.phone-screen {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 26px;
  overflow: hidden;
  background: #0c1310;
}
.phone-media {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ── Branded placeholder screen ───────────────────────────────── */
.ps {
  --ps-text: #eaf2ed;
  --ps-muted: #85a396;
  --ps-surface: #16211b;
  --ps-line: rgba(255, 255, 255, 0.09);
  --ps-green: #2fb56e;
  --ps-green-soft: rgba(47, 181, 110, 0.16);
  --ps-gold: #f5c842;
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  padding: 27px 12px 9px;
  background: radial-gradient(125% 80% at 50% -8%, #16271d 0%, #0b1310 55%);
  color: var(--ps-text);
  font-size: 9px;
  line-height: 1.25;
}

/* Status bar */
.ps-status {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4px 8px;
}
.ps-time {
  font-size: 8px;
  font-weight: 800;
  letter-spacing: 0.02em;
}
.ps-sys {
  display: inline-flex;
  align-items: center;
  gap: 3px;
}
.ps-sys i {
  width: 4px;
  height: 4px;
  border-radius: 1px;
  background: rgba(255, 255, 255, 0.55);
}
.ps-sys .ps-bat {
  width: 11px;
  height: 6px;
  border-radius: 2px;
}

.ps-head {
  font-size: 13px;
  font-weight: 800;
  letter-spacing: -0.02em;
  padding: 0 2px 8px;
}

.ps-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 0;
}

/* Shared bits */
.ps-av {
  flex-shrink: 0;
  border-radius: 50%;
}
.ps-av-a {
  width: 26px;
  height: 26px;
  background: linear-gradient(135deg, #54d693, #1a6640);
}
.ps-av-b {
  width: 26px;
  height: 26px;
  background: #05070680;
  box-shadow: inset 0 0 0 1.5px rgba(255, 255, 255, 0.35);
}
.ps-av-c {
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, #c8e8d4, #2fb56e);
}
.ps-av-d {
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, #f5c842, #e8a922);
}
.ps-price {
  margin-left: auto;
  font-size: 12px;
  font-weight: 800;
  color: var(--ps-green);
}
.ps-card-lines {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}
.ps-card-lines b {
  font-size: 10px;
  font-weight: 800;
}
.ps-card-lines i {
  font-size: 8px;
  font-style: normal;
  color: var(--ps-muted);
}

/* Variant: track */
.ps-chip {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  align-self: flex-start;
  padding: 4px 9px;
  border-radius: 999px;
  background: var(--ps-green-soft);
  color: var(--ps-green);
  font-size: 8px;
  font-weight: 800;
}
.ps-livedot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--ps-green);
  box-shadow: 0 0 0 3px rgba(47, 181, 110, 0.2);
}
.ps-route {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
}
.ps-track {
  position: relative;
  flex: 1;
  height: 26px;
  display: flex;
  align-items: center;
}
.ps-track::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  border-top: 1.5px dashed rgba(255, 255, 255, 0.22);
  transform: translateY(-50%);
}
.ps-track-fill {
  position: absolute;
  left: 0;
  width: 58%;
  top: 50%;
  border-top: 1.5px dashed var(--ps-green);
  transform: translateY(-50%);
}
.ps-pkg {
  position: absolute;
  left: 58%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border-radius: 7px;
  background: #16211b;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--ps-green);
}
.ps-pkg :deep(.app-icon) {
  width: 12px;
  height: 12px;
}
.ps-cities {
  display: flex;
  justify-content: space-between;
  font-size: 9px;
  font-weight: 800;
  padding: 0 2px;
}
.ps-card,
.ps-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-radius: 12px;
  background: var(--ps-surface);
  border: 1px solid var(--ps-line);
}
.ps-card {
  margin-top: auto;
}

/* Variant: search */
.ps-search {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 10px;
  border-radius: 999px;
  background: var(--ps-surface);
  border: 1px solid var(--ps-line);
  color: var(--ps-muted);
  font-size: 9px;
  font-weight: 700;
}
.ps-search :deep(.app-icon) {
  width: 12px;
  height: 12px;
  color: var(--ps-green);
}

/* Variant: profile */
.ps-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 3px;
  padding: 6px 0 4px;
}
.ps-av-big {
  width: 46px;
  height: 46px;
  background: linear-gradient(135deg, #54d693, #1a6640);
  margin-bottom: 2px;
}
.ps-profile b {
  font-size: 11px;
  font-weight: 800;
}
.ps-profile i {
  font-size: 8px;
  font-style: normal;
  color: var(--ps-muted);
}
.ps-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  margin-top: 2px;
}
.ps-stats div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 9px 2px;
  border-radius: 11px;
  background: var(--ps-surface);
  border: 1px solid var(--ps-line);
}
.ps-stats b {
  font-size: 14px;
  font-weight: 800;
  color: var(--ps-gold);
}
.ps-stats i {
  font-size: 7px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: var(--ps-muted);
}

/* Variant: step (Comment ça marche) */
.ps-step {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 9px;
  padding: 4px 4px 8px;
}
.ps-step-num {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: linear-gradient(135deg, #54d693, #1a6640);
  color: #04150c;
  font-size: 22px;
  font-weight: 900;
  box-shadow: 0 6px 18px rgba(47, 181, 110, 0.35);
}
.ps-step-title {
  font-size: 13px;
  font-weight: 800;
  line-height: 1.2;
}
.ps-step-desc {
  font-size: 9.5px;
  line-height: 1.45;
  color: var(--ps-muted);
}
.ps-step-dots {
  display: inline-flex;
  gap: 5px;
  margin-top: 2px;
}
.ps-step-dots i {
  width: 5px;
  height: 5px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.22);
}
.ps-step-dots i.on {
  width: 16px;
  background: var(--ps-green);
}

/* Tab bar */
.ps-tabs {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 8px -12px -9px;
  padding: 9px 0 12px;
  border-top: 1px solid var(--ps-line);
  background: rgba(6, 10, 8, 0.5);
}
.ps-tab {
  color: rgba(255, 255, 255, 0.32);
}
.ps-tab.on {
  color: var(--ps-green);
}
.ps-tab :deep(.app-icon) {
  width: 15px;
  height: 15px;
}

@media (prefers-reduced-motion: reduce) {
  .phone {
    animation: none;
  }
}

/* Keep the fan from crowding the hero copy on mid-size viewports. */
@media (max-width: 1080px) {
  .phones-fan {
    --phone-w: clamp(158px, 19vw, 190px);
  }
}

/* Mobile: the fan stacks under the hero copy — shrink it to fit narrow screens. */
@media (max-width: 860px) {
  .phones-fan {
    --phone-w: clamp(116px, 38vw, 176px);
    min-height: calc(var(--phone-w) * 2.15);
  }
  /* Row: keep the three side by side but small enough to fit narrow screens. */
  .phones-fan.is-row {
    --phone-w: clamp(90px, 27vw, 150px);
    gap: clamp(6px, 2vw, 12px);
    min-height: 0;
  }
}
</style>
