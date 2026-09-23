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

          <!-- Départ -->
          <div class="est-field est-field-city">
            <label class="est-label" for="est-departure">Départ</label>
            <div class="est-control">
              <AppIcon name="map-pin" />
              <input
                id="est-departure"
                type="text"
                class="est-input"
                placeholder="Paris, Lyon…"
                v-model="departureQuery"
                autocomplete="off"
                spellcheck="false"
                @input="onDepartureInput"
                @focus="departureFocused = true; if (departureResults.length) showDepartureList = true"
                @blur="onBlur('departure')"
              />
              <span v-if="departureLoading" class="est-spin" />
            </div>
            <ul
              v-if="showDepartureList && departureResults.length"
              class="est-dropdown"
              role="listbox"
            >
              <li
                v-for="r in departureResults"
                :key="r.label"
                class="est-dd-item"
                role="option"
                @mousedown.prevent="selectDeparture(r)"
              >
                <AppIcon name="map-pin" class="est-dd-pin" />
                <span>{{ r.label }}</span>
              </li>
            </ul>
          </div>

          <span class="est-arrow" aria-hidden="true"><AppIcon name="arrow-right" /></span>

          <!-- Arrivée -->
          <div class="est-field est-field-city">
            <label class="est-label" for="est-arrival">Arrivée</label>
            <div class="est-control">
              <AppIcon name="map-pin" />
              <input
                id="est-arrival"
                type="text"
                class="est-input"
                placeholder="Dakar, Tunis…"
                v-model="arrivalQuery"
                autocomplete="off"
                spellcheck="false"
                @input="onArrivalInput"
                @focus="arrivalFocused = true; if (arrivalResults.length) showArrivalList = true"
                @blur="onBlur('arrival')"
              />
              <span v-if="arrivalLoading" class="est-spin" />
            </div>
            <ul
              v-if="showArrivalList && arrivalResults.length"
              class="est-dropdown"
              role="listbox"
            >
              <li
                v-for="r in arrivalResults"
                :key="r.label"
                class="est-dd-item"
                role="option"
                @mousedown.prevent="selectArrival(r)"
              >
                <AppIcon name="map-pin" class="est-dd-pin" />
                <span>{{ r.label }}</span>
              </li>
            </ul>
          </div>

          <!-- Poids -->
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
            <!-- <span class="est-dot"></span> -->
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
        Estimation indicative pour {{ weight }}&nbsp;kg · le prix final est librement proposé par
        les transporteurs qui font déjà votre trajet.
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import AppIcon from '@/components/AppIcon.vue'

// Constants
const MIN_KG = 1
const MAX_KG = 30
const MIN_PRICE = 15
const DEBOUNCE_MS = 380
const PHOTON_URL = 'https://photon.komoot.io/api/'

// Types
interface CityOption {
  label: string // "Paris, France"
  lat: number
  lon: number
}

interface PhotonFeature {
  geometry: { coordinates: [number, number] } // [lon, lat]
  properties: { name: string; country?: string; state?: string }
}

// Weight
const weight = ref(5)
const setWeight = (v: number) => {
  weight.value = Math.min(MAX_KG, Math.max(MIN_KG, v))
}

// Departure state
const departureQuery = ref('')
const departureCity = ref<CityOption | null>(null)
const departureResults = ref<CityOption[]>([])
const departureLoading = ref(false)
const showDepartureList = ref(false)
const departureFocused = ref(false)
let deptTimer = 0

// Arrival state
const arrivalQuery = ref('')
const arrivalCity = ref<CityOption | null>(null)
const arrivalResults = ref<CityOption[]>([])
const arrivalLoading = ref(false)
const showArrivalList = ref(false)
const arrivalFocused = ref(false)
let arrvTimer = 0

// Geocoding via Photon (OSM, gratuit, sans clé)
async function searchCities(query: string): Promise<CityOption[]> {
  if (query.trim().length < 2) return []
  try {
    const url = new URL(PHOTON_URL)
    url.searchParams.set('q', query)
    url.searchParams.set('limit', '6')
    url.searchParams.set('lang', 'fr')
    url.searchParams.set('layer', 'city')
    const res = await fetch(url.toString())
    if (!res.ok) return []
    const data: { features: PhotonFeature[] } = await res.json()
    const seen = new Set<string>()
    return data.features
      .map((f) => {
        const name = f.properties.name
        const country = f.properties.country ?? ''
        const label = country ? `${name}, ${country}` : name
        const [lon, lat] = f.geometry.coordinates
        return { label, lat, lon }
      })
      .filter(({ label }) => {
        if (!label || seen.has(label)) return false
        seen.add(label)
        return true
      })
  } catch {
    return []
  }
}

// Departure handlers
function onDepartureInput() {
  departureCity.value = null
  clearTimeout(deptTimer)
  if (departureQuery.value.trim().length < 2) {
    departureResults.value = []
    showDepartureList.value = false
    departureLoading.value = false
    return
  }
  departureLoading.value = true
  deptTimer = window.setTimeout(async () => {
    departureResults.value = await searchCities(departureQuery.value)
    departureLoading.value = false
    showDepartureList.value = true
  }, DEBOUNCE_MS)
}

function selectDeparture(c: CityOption) {
  departureCity.value = c
  departureQuery.value = c.label
  showDepartureList.value = false
  departureResults.value = []
}

// Arrival handlers
function onArrivalInput() {
  arrivalCity.value = null
  clearTimeout(arrvTimer)
  if (arrivalQuery.value.trim().length < 2) {
    arrivalResults.value = []
    showArrivalList.value = false
    arrivalLoading.value = false
    return
  }
  arrivalLoading.value = true
  arrvTimer = window.setTimeout(async () => {
    arrivalResults.value = await searchCities(arrivalQuery.value)
    arrivalLoading.value = false
    showArrivalList.value = true
  }, DEBOUNCE_MS)
}

function selectArrival(c: CityOption) {
  arrivalCity.value = c
  arrivalQuery.value = c.label
  showArrivalList.value = false
  arrivalResults.value = []
}

// Blur : ferme le dropdown en laissant le temps au click de s'enregistrer
function onBlur(field: 'departure' | 'arrival') {
  setTimeout(() => {
    if (field === 'departure') {
      departureFocused.value = false
      showDepartureList.value = false
    } else {
      arrivalFocused.value = false
      showArrivalList.value = false
    }
  }, 160)
}

// Haversine (distance en km entre deux coords)
function haversine(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371
  const rad = (d: number) => (d * Math.PI) / 180
  const dLat = rad(lat2 - lat1)
  const dLon = rad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLon / 2) ** 2
  return R * 2 * Math.asin(Math.sqrt(a))
}

// Tarif au kg selon la distance
// Calé sur les vrais prix Sendora : Paris-Dakar ~4500km → 6€/kg
function perKgFromDistance(km: number): number {
  if (km < 200) return 1.5
  if (km < 500) return 2.2
  if (km < 1200) return 3.5
  if (km < 3000) return 5.0
  if (km < 6000) return 6.5
  return 6.6
}

// Prix affiché
const price = computed(() => {
  if (departureCity.value && arrivalCity.value) {
    const km = haversine(
      departureCity.value.lat,
      departureCity.value.lon,
      arrivalCity.value.lat,
      arrivalCity.value.lon,
    )
    return Math.max(MIN_PRICE, Math.round(perKgFromDistance(km) * weight.value))
  }
  // Fallback : Paris → Dakar ~4500 km pour donner une idée
  return Math.max(MIN_PRICE, Math.round(perKgFromDistance(4500) * weight.value))
})
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

/* Formulaire */
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

/* Position relative pour que le dropdown se cale sur ce champ */
.est-field-city {
  position: relative;
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

/* Input texte (remplace l'ancien select) */
.est-input {
  flex: 1;
  min-width: 0;
  border: 0;
  background: transparent;
  color: var(--ink);
  font-family: inherit;
  font-size: 0.95rem;
  font-weight: 700;
  outline: none;
}
.est-input::placeholder {
  color: var(--text-muted);
  font-weight: 500;
}

/* Spinner de chargement */
.est-spin {
  display: inline-block;
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  border: 2px solid rgba(26, 102, 64, 0.2);
  border-top-color: var(--verdant);
  border-radius: 50%;
  animation: est-spin 0.6s linear infinite;
}
@keyframes est-spin {
  to {
    transform: rotate(360deg);
  }
}

/* Dropdown suggestions */
.est-dropdown {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  z-index: 200;
  list-style: none;
  margin: 0;
  padding: 0.35rem;
  background: var(--white, #fff);
  border: 1.5px solid var(--border-strong);
  border-radius: var(--radius);
  box-shadow: var(--shadow-lg);
  max-height: 280px;
  overflow-y: auto;
}
.est-dd-item {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.6rem 0.75rem;
  border-radius: calc(var(--radius) - 4px);
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--ink);
  cursor: pointer;
  transition:
    background var(--transition),
    color var(--transition);
}
.est-dd-item:hover {
  background: rgba(26, 102, 64, 0.08);
  color: var(--verdant);
}
.est-dd-pin {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  color: var(--text-muted);
  transition: color var(--transition);
}
.est-dd-item:hover .est-dd-pin {
  color: var(--verdant);
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

/* Résultat */
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
  .est-dot,
  .est-spin {
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
