<template>
  <section class="market-section">
    <div class="container">
      <div class="section-head">
        <span class="section-tag">Comparez les prix</span>
        <h2 class="section-title">Le même colis,<br /><em>jusqu'à 5× moins cher.</em></h2>
        <p class="section-sub">
          Pour un colis de 10&nbsp;kg, voici ce que vous payez ailleurs… et ce que vous payez avec
          Sendora grâce aux voyageurs qui font déjà le trajet.
        </p>
      </div>

      <!-- Destination selector -->
      <div class="market-dests" role="tablist" aria-label="Choisir une destination">
        <button
          v-for="d in destinations"
          :key="d.id"
          type="button"
          class="dest-chip"
          :class="{ active: d.id === selectedId }"
          role="tab"
          :aria-selected="d.id === selectedId"
          @click="selectedId = d.id"
        >
          <AppIcon name="map-pin" />
          {{ d.city }}
          <span class="dest-country">{{ d.country }}</span>
        </button>
      </div>

      <p class="market-caption">
        <AppIcon name="package" />
        Colis de 10&nbsp;kg vers <strong>{{ current.city }}, {{ current.country }}</strong>
      </p>

      <!-- Comparison grid -->
      <div class="market-grid">
        <article v-for="opt in competitors" :key="opt.name" class="price-card price-card-rival">
          <div class="pc-head">
            <div class="pc-logo"><AppIcon :name="opt.icon" /></div>
            <div class="pc-titles">
              <div class="pc-name">{{ opt.name }}</div>
              <div class="pc-sub">{{ opt.sub }}</div>
            </div>
          </div>

          <div class="pc-price">
            <span class="pc-amount">{{ opt.price }}&nbsp;€</span>
            <span class="pc-unit">pour 10&nbsp;kg</span>
          </div>

          <div class="pc-tags">
            <span class="pc-tag">{{ opt.perKg }}</span>
            <span class="pc-tag pc-tag-delay">
              <AppIcon name="alert-triangle" />{{ opt.delay }}
            </span>
          </div>

          <div class="pc-divider"></div>

          <ul class="pc-points">
            <li v-for="n in opt.notes" :key="n" class="pc-con">
              <AppIcon name="alert-triangle" />{{ n }}
            </li>
          </ul>
        </article>

        <!-- Sendora — highlighted -->
        <article class="price-card price-card-sendora">
          <div class="pc-flag">Le meilleur choix</div>
          <div class="pc-head">
            <div class="pc-logo pc-logo-brand"><AppIcon name="package" /></div>
            <div class="pc-titles">
              <div class="pc-name">Sendora</div>
              <div class="pc-sub">Co-transport entre particuliers</div>
            </div>
          </div>

          <div class="pc-price">
            <span class="pc-amount pc-amount-brand">{{ current.sendora.price }}&nbsp;€</span>
            <span class="pc-unit">pour 10&nbsp;kg</span>
          </div>

          <div class="pc-tags">
            <span class="pc-tag pc-tag-brand">{{ current.sendora.perKg }}</span>
            <span class="pc-tag pc-tag-brand">
              <AppIcon name="check-circle" />{{ current.sendora.delay }}
            </span>
          </div>

          <div class="pc-save">
            <AppIcon name="check-circle" />
            Jusqu'à <strong>−{{ savings }}&nbsp;%</strong> vs transporteur express
          </div>

          <div class="pc-divider"></div>

          <ul class="pc-points">
            <li v-for="pro in sendoraPros" :key="pro" class="pc-pro">
              <AppIcon name="check-circle" />{{ pro }}
            </li>
          </ul>

          <a href="#download" class="pc-cta">Trouver un transporteur →</a>
        </article>
      </div>

      <p class="market-foot">
        Tarifs concurrents donnés à titre indicatif (juin 2026), variables selon la saison et le
        mode (aérien / maritime) · le prix Sendora dépend des annonces des transporteurs sur chaque
        trajet.
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import AppIcon from '@/components/AppIcon.vue'

interface Competitor {
  name: string
  sub: string
  icon: string
  price: number
  perKg: string
  delay: string
  notes: string[]
}
interface Destination {
  id: string
  city: string
  country: string
  competitors: Competitor[]
  sendora: { price: number; perKg: string; delay: string }
}

const destinations: [Destination, ...Destination[]] = [
  {
    id: 'dakar',
    city: 'Dakar',
    country: 'Sénégal',
    competitors: [
      {
        name: 'Transporteur express',
        sub: 'DHL · Chronopost',
        icon: 'globe',
        price: 280,
        perKg: '≈ 28 €/kg',
        delay: '3–5 j',
        notes: [
          'Tarif premium, vite hors budget',
          'Surcoûts carburant et dédouanement fréquents',
          "Pertinent uniquement pour l'urgent",
        ],
      },
      {
        name: 'Groupage aérien',
        sub: 'Transitaire / GP',
        icon: 'package',
        price: 110,
        perKg: '≈ 11 €/kg',
        delay: '7–10 j',
        notes: [
          'Dépôt en entrepôt, aucun suivi en direct',
          'Délais souvent dépassés en période chargée',
          'Frais de dédouanement à régler à l’arrivée',
        ],
      },
    ],
    sendora: { price: 60, perKg: '≈ 6 €/kg', delay: '2–6 j' },
  },
  {
    id: 'abidjan',
    city: 'Abidjan',
    country: "Côte d'Ivoire",
    competitors: [
      {
        name: 'Transporteur express',
        sub: 'DHL · Chronopost',
        icon: 'globe',
        price: 270,
        perKg: '≈ 27 €/kg',
        delay: '3–5 j',
        notes: [
          'Tarif premium, vite hors budget',
          'Surcoûts carburant et dédouanement fréquents',
          "Pertinent uniquement pour l'urgent",
        ],
      },
      {
        name: 'Groupage aérien',
        sub: 'Transitaire / GP',
        icon: 'package',
        price: 100,
        perKg: '≈ 10 €/kg',
        delay: '7–10 j',
        notes: [
          'Dépôt en entrepôt, aucun suivi en direct',
          'Délais souvent dépassés en période chargée',
          'Frais de dédouanement à régler à l’arrivée',
        ],
      },
    ],
    sendora: { price: 58, perKg: '≈ 5,80 €/kg', delay: '2–6 j' },
  },
  {
    id: 'douala',
    city: 'Douala',
    country: 'Cameroun',
    competitors: [
      {
        name: 'Transporteur express',
        sub: 'DHL · Chronopost',
        icon: 'globe',
        price: 320,
        perKg: '≈ 32 €/kg',
        delay: '4–5 j',
        notes: [
          'Tarif premium, vite hors budget',
          'Surcoûts carburant et dédouanement fréquents',
          "Pertinent uniquement pour l'urgent",
        ],
      },
      {
        name: 'Groupage aérien',
        sub: 'Transitaire / GP',
        icon: 'package',
        price: 120,
        perKg: '≈ 12 €/kg',
        delay: '7–12 j',
        notes: [
          'Dépôt en entrepôt, aucun suivi en direct',
          'Délais souvent dépassés en période chargée',
          'Frais de dédouanement à régler à l’arrivée',
        ],
      },
    ],
    sendora: { price: 65, perKg: '≈ 6,50 €/kg', delay: '3–7 j' },
  },
  {
    id: 'casablanca',
    city: 'Casablanca',
    country: 'Maroc',
    competitors: [
      {
        name: 'Transporteur express',
        sub: 'DHL · Chronopost',
        icon: 'globe',
        price: 120,
        perKg: '≈ 12 €/kg',
        delay: '2–4 j',
        notes: [
          'Tarif élevé pour la distance',
          'Déclaration douane obligatoire (CN23)',
          'Surcoûts fréquents à l’arrivée',
        ],
      },
      {
        name: 'Transport routier',
        sub: 'Car / transitaire',
        icon: 'package',
        price: 45,
        perKg: '≈ 4,50 €/kg',
        delay: '4–7 j',
        notes: [
          'Forfait minimum imposé sur les petits colis',
          'Point relais, rarement du porte-à-porte',
          'Départ selon remplissage du camion',
        ],
      },
    ],
    sendora: { price: 40, perKg: '≈ 4 €/kg', delay: '2–5 j' },
  },
  {
    id: 'alger',
    city: 'Alger',
    country: 'Algérie',
    competitors: [
      {
        name: 'Transporteur express',
        sub: 'DHL · Chronopost',
        icon: 'globe',
        price: 110,
        perKg: '≈ 11 €/kg',
        delay: '3–5 j',
        notes: [
          'Tarif élevé pour la distance',
          'Procédures douanières strictes',
          'Surcoûts fréquents à l’arrivée',
        ],
      },
      {
        name: 'Excédent bagages',
        sub: 'Transitaire / vol',
        icon: 'package',
        price: 60,
        perKg: '≈ 6 €/kg',
        delay: '5–9 j',
        notes: [
          'Dépend des vols et du fret disponible',
          'Manutention en agence, pas de suivi',
          'Délais variables selon les rotations',
        ],
      },
    ],
    sendora: { price: 48, perKg: '≈ 4,80 €/kg', delay: '2–6 j' },
  },
  {
    id: 'mayotte',
    city: 'Mayotte',
    country: 'Outre-mer',
    competitors: [
      {
        name: 'Express Outre-mer',
        sub: 'Chronopost · Colissimo',
        icon: 'globe',
        price: 180,
        perKg: '≈ 18 €/kg',
        delay: '3–6 j',
        notes: [
          'Tarif Outre-mer très élevé',
          'Taxes et octroi de mer à prévoir',
          'Rapide mais cher pour 10 kg',
        ],
      },
      {
        name: 'Groupage maritime',
        sub: 'Fret par bateau',
        icon: 'life-buoy',
        price: 90,
        perKg: '≈ 9 €/kg',
        delay: '4–8 sem.',
        notes: [
          'Départs espacés, parfois 1 fois/mois',
          'Retards de bateau fréquents',
          'Compte souvent plus long que prévu',
        ],
      },
    ],
    sendora: { price: 60, perKg: '≈ 6 €/kg', delay: '3–7 j' },
  },
  {
    id: 'reunion',
    city: 'La Réunion',
    country: 'Outre-mer',
    competitors: [
      {
        name: 'Express Outre-mer',
        sub: 'Chronopost · Colissimo',
        icon: 'globe',
        price: 150,
        perKg: '≈ 15 €/kg',
        delay: '3–6 j',
        notes: [
          'Tarif Outre-mer très élevé',
          'Taxes et octroi de mer à prévoir',
          'Rapide mais cher pour 10 kg',
        ],
      },
      {
        name: 'Groupage maritime',
        sub: 'Fret par bateau',
        icon: 'life-buoy',
        price: 80,
        perKg: '≈ 8 €/kg',
        delay: '4–7 sem.',
        notes: [
          'Départs espacés, parfois 1 fois/mois',
          'Retards de bateau fréquents',
          'Compte souvent plus long que prévu',
        ],
      },
    ],
    sendora: { price: 58, perKg: '≈ 5,80 €/kg', delay: '3–7 j' },
  },
  {
    id: 'comores',
    city: 'Moroni',
    country: 'Comores',
    competitors: [
      {
        name: 'Transporteur express',
        sub: 'DHL · Chronopost',
        icon: 'globe',
        price: 220,
        perKg: '≈ 22 €/kg',
        delay: '4–6 j',
        notes: [
          'Tarif premium, vite hors budget',
          'Dessertes limitées, surcoûts fréquents',
          "Pertinent uniquement pour l'urgent",
        ],
      },
      {
        name: 'Groupage maritime',
        sub: 'Fret par bateau',
        icon: 'life-buoy',
        price: 110,
        perKg: '≈ 11 €/kg',
        delay: '5–8 sem.',
        notes: [
          'Départs espacés, parfois 1 fois/mois',
          'Retards de bateau fréquents',
          'Compte souvent plus long que prévu',
        ],
      },
    ],
    sendora: { price: 65, perKg: '≈ 6,50 €/kg', delay: '4–8 j' },
  },
]

const sendoraPros = [
  'Remis en main propre par un voyageur vérifié KYC',
  'Paiement sous séquestre Stripe, libéré à la livraison',
  'Suivi en direct et chat intégré, sans intermédiaire',
]

const selectedId = ref(destinations[0].id)
const current = computed<Destination>(
  () => destinations.find((d) => d.id === selectedId.value) ?? destinations[0],
)
const competitors = computed(() => current.value.competitors)
const savings = computed(() => {
  const dearest = Math.max(...current.value.competitors.map((c) => c.price))
  return Math.round((1 - current.value.sendora.price / dearest) * 100)
})
</script>

<style scoped>
.market-section {
  padding: 4rem 0 4.5rem;
}
.market-section .section-head {
  margin-bottom: 2.5rem;
}

/* Destination selector */
.market-dests {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.6rem;
  margin-bottom: 1.25rem;
}
.dest-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.1rem;
  border-radius: var(--radius-xl);
  background: var(--bg-card);
  border: 1.5px solid var(--border-strong);
  color: var(--text-secondary);
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  transition:
    background var(--transition),
    color var(--transition),
    border-color var(--transition),
    transform var(--transition);
}
.dest-chip:hover {
  color: var(--verdant);
  border-color: var(--verdant);
  transform: translateY(-1px);
}
.dest-chip .app-icon {
  width: 16px;
  height: 16px;
  opacity: 0.7;
}
.dest-chip.active {
  background: var(--verdant);
  border-color: var(--verdant);
  color: var(--white);
}
.dest-chip.active .app-icon {
  opacity: 1;
}
.dest-country {
  font-size: 0.74rem;
  font-weight: 600;
  opacity: 0.6;
}

.market-caption {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.88rem;
  color: var(--text-muted);
  margin-bottom: 2rem;
}
.market-caption .app-icon {
  width: 17px;
  height: 17px;
  color: var(--verdant);
}
.market-caption strong {
  color: var(--ink);
  font-weight: 800;
}

/* Comparison grid */
.market-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  align-items: stretch;
}
.price-card {
  display: flex;
  flex-direction: column;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.85rem;
  transition:
    transform var(--transition),
    box-shadow var(--transition),
    border-color var(--transition);
}
.price-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow);
}
.price-card-rival {
  background: var(--surface-soft);
  border-color: transparent;
}

.pc-head {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  margin-bottom: 1.4rem;
}
.pc-logo {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  flex-shrink: 0;
  border-radius: 13px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text-muted);
}
.pc-logo .app-icon {
  width: 24px;
  height: 24px;
}
.pc-logo-brand {
  background: var(--verdant);
  border-color: var(--verdant);
  color: var(--white);
}
.pc-name {
  font-size: 1.05rem;
  font-weight: 800;
  color: var(--ink);
  line-height: 1.1;
}
.pc-sub {
  font-size: 0.78rem;
  color: var(--text-muted);
  margin-top: 2px;
}

.pc-price {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.pc-amount {
  font-family: var(--font-display);
  font-size: 2.9rem;
  font-weight: 400;
  line-height: 1;
  color: var(--ink);
  letter-spacing: -0.02em;
}
.pc-amount-brand {
  color: var(--verdant);
}
.pc-unit {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-muted);
}

/* Tags row (per-kg + delay) */
.pc-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.9rem;
}
.pc-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.34rem 0.75rem;
  border-radius: var(--radius-xl);
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text-secondary);
  font-size: 0.76rem;
  font-weight: 700;
}
.pc-tag .app-icon {
  width: 14px;
  height: 14px;
}
.pc-tag-delay {
  color: var(--gold);
  border-color: rgba(232, 169, 34, 0.3);
  background: rgba(232, 169, 34, 0.12);
}
.pc-tag-brand {
  color: var(--verdant);
  border-color: rgba(26, 102, 64, 0.2);
  background: rgba(26, 102, 64, 0.1);
}

.pc-divider {
  height: 1px;
  background: var(--border);
  margin: 1.3rem 0;
}

.pc-points {
  list-style: none;
  display: grid;
  gap: 0.65rem;
}
.pc-points li {
  display: flex;
  align-items: flex-start;
  gap: 0.55rem;
  font-size: 0.84rem;
  line-height: 1.45;
}
.pc-points .app-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  margin-top: 1px;
}
.pc-con {
  color: var(--text-secondary);
}
.pc-con .app-icon {
  color: var(--gold);
}
.pc-pro {
  color: var(--text-secondary);
}
.pc-pro .app-icon {
  color: var(--verdant);
}

/* Sendora highlighted card */
.price-card-sendora {
  position: relative;
  border: 1.5px solid var(--verdant);
  background: linear-gradient(180deg, rgba(26, 102, 64, 0.06), var(--bg-card) 38%);
  box-shadow: var(--shadow);
}
.price-card-sendora:hover {
  box-shadow: var(--shadow-lg);
}
.pc-flag {
  position: absolute;
  top: -13px;
  right: 1.5rem;
  background: var(--verdant);
  color: var(--white);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.03em;
  padding: 5px 13px;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
}
.pc-save {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  margin-top: 1rem;
  padding: 0.5rem 0.85rem;
  border-radius: var(--radius-xl);
  background: rgba(26, 102, 64, 0.1);
  color: var(--verdant);
  font-size: 0.82rem;
  font-weight: 700;
  align-self: flex-start;
}
.pc-save .app-icon {
  width: 16px;
  height: 16px;
}
.pc-save strong {
  font-weight: 900;
}
.pc-cta {
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem 1.4rem;
  border-radius: var(--radius-xl);
  background: var(--verdant);
  color: var(--white);
  font-weight: 800;
  font-size: 0.92rem;
  transition:
    background var(--transition),
    transform var(--transition),
    box-shadow var(--transition);
}
.pc-cta:hover {
  background: var(--verdant-mid);
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}

.market-foot {
  text-align: center;
  font-size: 0.78rem;
  color: var(--text-muted);
  margin-top: 2.25rem;
  max-width: 680px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

@media (max-width: 900px) {
  .market-grid {
    grid-template-columns: 1fr;
    max-width: 460px;
    margin: 0 auto;
  }
  .price-card-sendora {
    order: -1;
  }
}
</style>
