<template>
  <section class="estimator-section">
    <div class="container">
      <div class="section-head">
        <span class="section-tag"><AppIcon name="zap" /> Estimateur</span>
        <h2 class="section-title">Estimez votre prix<br /><em>en un instant.</em></h2>
        <p class="section-sub">
          Découvrez en quelques secondes le coût de votre livraison, calculé à partir des tarifs
          réels proposés par nos transporteurs.
        </p>
      </div>

      <div class="estimator-card">
        <!-- Champs -->
        <div class="est-form">
          <div class="est-field">
            <label class="est-label" for="est-departure">Départ</label>
            <div class="est-control">
              <AppIcon name="map-pin" />
              <select id="est-departure" v-model="departure" class="est-select">
                <option v-for="c in departures" :key="c.zip" :value="c.zip">
                  {{ c.name }} ({{ c.zip }})
                </option>
              </select>
            </div>
          </div>

          <span class="est-arrow" aria-hidden="true"><AppIcon name="arrow-right" /></span>

          <div class="est-field">
            <label class="est-label" for="est-arrival">Arrivée</label>
            <div class="est-control">
              <AppIcon name="map-pin" />
              <select id="est-arrival" v-model="arrivalId" class="est-select">
                <option v-for="d in destinations" :key="d.id" :value="d.id">
                  {{ d.city }}, {{ d.country }}
                </option>
              </select>
            </div>
          </div>

          <div class="est-field est-field-weight">
            <label class="est-label" for="est-weight">Poids du colis</label>
            <div class="est-stepper">
              <button
                type="button"
                class="est-step-btn"
                aria-label="Réduire le poids"
                :disabled="weight <= MIN_KG"
                @click="setWeight(weight - 1)"
              >
                −
              </button>
              <span id="est-weight" class="est-weight-val">{{ weight }}&nbsp;kg</span>
              <button
                type="button"
                class="est-step-btn"
                aria-label="Augmenter le poids"
                :disabled="weight >= MAX_KG"
                @click="setWeight(weight + 1)"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <!-- Résultat -->
        <div class="est-result">
          <p class="est-live">
            <span class="est-dot"></span>
            Des transporteurs font ce trajet actuellement&nbsp;!
          </p>
          <div class="est-price">
            <span class="est-from">À partir de</span>
            <span class="est-amount">{{ price }}&nbsp;€</span>
          </div>
          <a href="#download" class="est-cta">
            Publier mon colis <AppIcon name="arrow-right" />
          </a>
        </div>
      </div>

      <p class="est-foot">
        Estimation indicative pour {{ weight }}&nbsp;kg — le prix final est librement proposé par
        les transporteurs qui font déjà votre trajet.
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import AppIcon from '@/components/AppIcon.vue'

const MIN_KG = 1
const MAX_KG = 30

/* Villes de départ (métropole). Le prix « à partir de » dépend de la
   destination et du poids, pas de la ville de départ. */
const departures = [
  { name: 'Paris', zip: '75000' },
  { name: 'Lyon', zip: '69000' },
  { name: 'Marseille', zip: '13000' },
  { name: 'Toulouse', zip: '31000' },
  { name: 'Lille', zip: '59000' },
  { name: 'Bordeaux', zip: '33000' },
  { name: 'Nantes', zip: '44000' },
  { name: 'Strasbourg', zip: '67000' },
  { name: 'Nice', zip: '06000' },
  { name: 'Montpellier', zip: '34000' },
  { name: 'Rennes', zip: '35000' },
]

/* Destinations + tarif Sendora au kg. Les valeurs `perKg` sont calées pour que
   10 kg tombent exactement sur les prix affichés dans PriceMarket.vue — à garder
   synchronisées si ces chiffres bougent. */
interface Destination {
  id: string
  city: string
  country: string
  perKg: number
}
const destinations: [Destination, ...Destination[]] = [
  { id: 'dakar', city: 'Dakar', country: 'Sénégal', perKg: 6.0 },
  { id: 'abidjan', city: 'Abidjan', country: "Côte d'Ivoire", perKg: 5.8 },
  { id: 'douala', city: 'Douala', country: 'Cameroun', perKg: 6.5 },
  { id: 'casablanca', city: 'Casablanca', country: 'Maroc', perKg: 4.0 },
  { id: 'alger', city: 'Alger', country: 'Algérie', perKg: 4.8 },
  { id: 'mayotte', city: 'Mamoudzou', country: 'Mayotte', perKg: 6.0 },
  { id: 'reunion', city: 'Saint-Denis', country: 'La Réunion', perKg: 5.8 },
  { id: 'comores', city: 'Moroni', country: 'Comores', perKg: 6.5 },
]

/* Prix plancher : une livraison ne descend jamais sous ce montant. */
const MIN_PRICE = 15

const departure = ref(departures[0].zip)
const arrivalId = ref(destinations[0].id)
const weight = ref(5)

const setWeight = (v: number) => {
  weight.value = Math.min(MAX_KG, Math.max(MIN_KG, v))
}

const current = computed<Destination>(
  () => destinations.find((d) => d.id === arrivalId.value) ?? destinations[0],
)

const price = computed(() =>
  Math.max(MIN_PRICE, Math.round(current.value.perKg * weight.value)),
)
</script>

<style scoped>
.estimator-section {
  padding: 4rem 0 4.5rem;
}
.estimator-section .section-head {
  margin-bottom: 2.5rem;
}
.section-tag .app-icon {
  width: 15px;
  height: 15px;
  margin-right: 0.15rem;
  vertical-align: -2px;
}

/* Card : formulaire à gauche, résultat mis en avant à droite. */
.estimator-card {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 1.5rem;
  align-items: stretch;
  max-width: 960px;
  margin: 0 auto;
}

/* ── Formulaire ─────────────────────────────────────────────── */
.est-form {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: end;
  gap: 1rem 0.75rem;
}
.est-field {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  min-width: 0;
}
.est-field-weight {
  grid-column: 1 / -1;
}
.est-label {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--text-secondary);
}
.est-control {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 0.85rem;
  height: 52px;
  border-radius: var(--radius);
  background: var(--surface-soft);
  border: 1.5px solid var(--border-strong);
  transition:
    border-color var(--transition),
    box-shadow var(--transition);
}
.est-control:focus-within {
  border-color: var(--verdant);
  box-shadow: 0 0 0 3px rgba(26, 102, 64, 0.12);
}
.est-control .app-icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  color: var(--verdant);
}
.est-select {
  flex: 1;
  min-width: 0;
  border: 0;
  background: transparent;
  color: var(--ink);
  font-family: inherit;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  appearance: none;
  outline: none;
}
.est-select option {
  color: initial;
}
.est-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  color: var(--text-muted);
}
.est-arrow .app-icon {
  width: 20px;
  height: 20px;
}

/* Stepper poids */
.est-stepper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  height: 52px;
  padding: 0 0.5rem;
  border-radius: var(--radius);
  background: var(--surface-soft);
  border: 1.5px solid var(--border-strong);
}
.est-step-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  flex-shrink: 0;
  border: 0;
  border-radius: var(--radius-sm, 10px);
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--ink);
  font-size: 1.35rem;
  font-weight: 700;
  line-height: 1;
  cursor: pointer;
  transition:
    background var(--transition),
    color var(--transition),
    border-color var(--transition);
}
.est-step-btn:hover:not(:disabled) {
  background: var(--verdant);
  border-color: var(--verdant);
  color: var(--white);
}
.est-step-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
.est-weight-val {
  font-size: 1.05rem;
  font-weight: 800;
  color: var(--ink);
  letter-spacing: -0.01em;
}

/* ── Résultat ───────────────────────────────────────────────── */
.est-result {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.85rem;
  padding: 1.5rem;
  border-radius: var(--radius);
  background: linear-gradient(180deg, rgba(26, 102, 64, 0.08), var(--bg-card) 65%);
  border: 1.5px solid var(--verdant);
  text-align: center;
}
.est-live {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--verdant);
  line-height: 1.35;
}
.est-dot {
  width: 8px;
  height: 8px;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--verdant);
  box-shadow: 0 0 0 0 rgba(26, 102, 64, 0.4);
  animation: est-pulse 2s infinite;
}
@keyframes est-pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(26, 102, 64, 0.4);
  }
  70% {
    box-shadow: 0 0 0 8px rgba(26, 102, 64, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(26, 102, 64, 0);
  }
}
.est-price {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
}
.est-from {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-muted);
}
.est-amount {
  font-family: var(--font-body);
  font-size: 3.4rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.045em;
  color: var(--verdant);
}
.est-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  margin-top: 0.25rem;
  padding: 0.8rem 1.4rem;
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
.est-cta:hover {
  background: var(--verdant-mid);
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}
.est-cta .app-icon {
  width: 17px;
  height: 17px;
}

.est-foot {
  text-align: center;
  font-size: 0.78rem;
  color: var(--text-muted);
  margin: 1.75rem auto 0;
  max-width: 620px;
  line-height: 1.6;
}

@media (prefers-reduced-motion: reduce) {
  .est-dot {
    animation: none;
  }
}

@media (max-width: 760px) {
  .estimator-card {
    grid-template-columns: 1fr;
    padding: 1.35rem;
  }
  .est-amount {
    font-size: 2.9rem;
  }
}
</style>
