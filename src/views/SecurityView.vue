<template>
  <ResourceLayout
    title="Sécurité et paiement"
    eyebrow="Comprendre avant de commencer"
    icon="shield-check"
    lead="Du profil vérifié au versement, chacun a un rôle à jouer. Découvrez ce qui se passe à chaque étape et à quel moment transmettre le code de validation."
  >
    <template #title>Votre colis avance.<br /><em>Le paiement suit les étapes.</em></template>

    <section class="resource-section" aria-label="Le parcours de sécurité et de paiement">
      <div class="container">
        <p class="security-instruction">Choisissez une étape pour voir le rôle de chacun.</p>
        <ol class="security-flow">
          <li v-for="(step, index) in stages" :key="step.id">
            <button
              type="button"
              :aria-pressed="activeId === step.id"
              aria-controls="security-detail"
              @click="activeId = step.id"
            >
              <span class="security-step-number">0{{ index + 1 }}</span
              ><AppIcon :name="step.icon" /><strong>{{ step.label }}</strong
              ><span>{{ step.short }}</span>
            </button>
          </li>
        </ol>

        <div id="security-detail" class="security-detail" aria-live="polite" aria-atomic="true">
          <div class="security-detail-intro">
            <span class="chip"><AppIcon :name="active.icon" />{{ active.label }}</span>
            <h2>{{ active.title }}</h2>
            <p>{{ active.description }}</p>
          </div>
          <div class="security-roles">
            <div>
              <h3><AppIcon name="package" />Côté expéditeur</h3>
              <p>{{ active.sender }}</p>
            </div>
            <div>
              <h3><AppIcon name="map-pin" />Côté transporteur</h3>
              <p>{{ active.carrier }}</p>
            </div>
          </div>
          <RouterLink
            :to="{ path: '/aide', query: { theme: active.helpCategory } }"
            class="resource-link"
            >Une difficulté à cette étape ? Trouver de l’aide →</RouterLink
          >
        </div>
      </div>
    </section>

    <section class="resource-section">
      <div class="container security-code">
        <div class="security-code-icon"><AppIcon name="lock" /></div>
        <div>
          <span class="security-eyebrow">Le bon moment pour partager le code</span>
          <h2>Visible dès la récupération.<br />Transmis après la livraison.</h2>
          <p>
            Le code se trouve chez l’expéditeur, sur la fiche du colis concerné. Il est communiqué
            au transporteur une fois le colis remis au destinataire, puis saisi dans l’application
            pour valider la livraison.
          </p>
          <RouterLink to="/blog/validation-colis"
            >Lire le guide complet de validation <AppIcon name="arrow-right"
          /></RouterLink>
        </div>
      </div>
    </section>

    <section class="resource-section">
      <div class="container security-faq">
        <h2>Les points à clarifier</h2>
        <details v-for="item in faq" :key="item.q">
          <summary>{{ item.q }}</summary>
          <p>{{ item.a }}</p>
        </details>
      </div>
    </section>

    <section class="resource-section">
      <div class="container resource-support">
        <div>
          <h2>Une étape vous bloque ?</h2>
          <p>
            Le centre d’aide regroupe les réponses par problème et vous permet de joindre le support
            avec le bon sujet.
          </p>
        </div>
        <RouterLink to="/aide" class="btn btn-primary">Ouvrir le centre d’aide →</RouterLink>
      </div>
    </section>
  </ResourceLayout>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import AppIcon from '@/components/AppIcon.vue'
import ResourceLayout from '@/components/ResourceLayout.vue'
import { useSeo } from '@/composables/useSeo'
import { breadcrumb, faqPage } from '@/seo/schema'

const stages = [
  {
    id: 'profile',
    label: 'Profil vérifié',
    icon: 'user',
    short: 'Connaître son interlocuteur',
    title: 'Commencer avec un profil identifié.',
    description:
      'Les transporteurs effectuent une vérification d’identité via Didit. Le profil, les avis et les échanges dans l’application vous aident à préparer la prise en charge.',
    sender:
      'Consultez le profil du transporteur et échangez sur le colis et le trajet avant de vous mettre d’accord.',
    carrier:
      'Complétez votre profil et effectuez la vérification d’identité proposée dans l’application.',
    helpCategory: 'account',
  },
  {
    id: 'payment',
    label: 'Paiement',
    icon: 'credit-card',
    short: 'Conservé jusqu’à validation',
    title: 'Un prix convenu, un paiement dans l’app.',
    description:
      'Le paiement effectué dans l’application est conservé sous séquestre par Stripe jusqu’à la confirmation de livraison. Il n’est pas libéré à la seule récupération du colis.',
    sender:
      'Vérifiez le prix et les modalités convenus, puis effectuez le paiement depuis l’application.',
    carrier:
      'Convenez clairement du prix, des dates et des lieux avec l’expéditeur avant de prendre le colis en charge.',
    helpCategory: 'payment',
  },
  {
    id: 'delivery',
    label: 'Livraison',
    icon: 'package',
    short: 'Remise au destinataire',
    title: 'Transporter le colis, puis le remettre.',
    description:
      'Le transporteur récupère le colis et le remet au destinataire convenu. Dès la récupération, le code apparaît du côté de l’expéditeur sur la fiche de ce colis.',
    sender:
      'Préparez les coordonnées utiles et restez joignable. Gardez le code jusqu’à ce que la réception soit confirmée.',
    carrier:
      'Coordonnez la remise avec le destinataire et prévenez l’expéditeur lorsque le colis est livré.',
    helpCategory: 'first-delivery',
  },
  {
    id: 'code',
    label: 'Code',
    icon: 'lock',
    short: 'Confirmation de la livraison',
    title: 'Valider uniquement après la remise.',
    description:
      'L’expéditeur transmet le code au transporteur après la livraison au destinataire. Le transporteur le saisit sur la page de validation du colis concerné.',
    sender:
      'Si vous n’êtes pas le destinataire, confirmez la réception avec lui avant de communiquer le code au transporteur.',
    carrier:
      'Demandez le code à l’expéditeur une fois la remise effectuée et vérifiez le résultat de la validation dans l’application.',
    helpCategory: 'validation',
  },
  {
    id: 'payout',
    label: 'Versement',
    icon: 'check-circle',
    short: 'Traité via Stripe Connect',
    title: 'Après validation, le versement est traité.',
    description:
      'La validation de la livraison permet de libérer le paiement. Le versement au transporteur est ensuite traité via Stripe Connect : l’arrivée des fonds dépend du traitement et de sa banque.',
    sender:
      'Si un problème concerne le colis ou sa réception, expliquez la situation au support plutôt que de communiquer le code pour terminer la livraison.',
    carrier:
      'Consultez les informations de paiement disponibles dans votre compte. En cas de blocage, indiquez au support le colis et sa date de validation.',
    helpCategory: 'payment',
  },
] as const
const activeId = ref<string>('profile')
const active = computed(() => stages.find((stage) => stage.id === activeId.value) ?? stages[0])
const faq = [
  {
    q: 'Dois-je donner le code quand le transporteur récupère le colis ?',
    a: 'Non. Le code apparaît chez l’expéditeur dès la récupération, mais il est communiqué au transporteur uniquement une fois le colis livré au destinataire. Il sert à valider une livraison effectuée.',
  },
  {
    q: 'Le destinataire et l’expéditeur sont différents : qui a le code ?',
    a: 'Le code est affiché dans le compte de l’expéditeur, sur la fiche du colis. Après confirmation de la réception par le destinataire, c’est avec l’expéditeur que le transporteur voit pour obtenir ce code.',
  },
  {
    q: 'Que faire si le colis n’a pas été remis ou si sa réception est contestée ?',
    a: 'Ne validez pas la livraison et ne communiquez pas le code pour la finaliser. Échangez dans l’application et contactez le support depuis la page Contact avec la référence du colis et une description de la situation.',
  },
  {
    q: 'Le versement est-il instantané après validation ?',
    a: 'La validation permet de libérer le paiement. Le versement est ensuite traité via Stripe Connect ; la date d’arrivée des fonds dépend des délais de traitement et de la banque du transporteur. Le centre d’aide explique quoi vérifier en cas d’attente.',
  },
]
useSeo({
  title: 'Sécurité et paiement Sendora : du profil vérifié au versement',
  description:
    'Comprenez les étapes Sendora : vérification du profil, paiement sous séquestre, livraison, code de validation et versement via Stripe Connect.',
  path: '/securite-et-paiement',
  jsonLd: [
    breadcrumb([
      { name: 'Accueil', path: '/' },
      { name: 'Sécurité et paiement', path: '/securite-et-paiement' },
    ]),
    faqPage(faq),
  ],
})
</script>

<style scoped>
.security-instruction {
  color: var(--text-secondary);
  font-size: 0.88rem;
  margin-bottom: 1.1rem;
}
.security-flow {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 0.8rem;
}
.security-flow button {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 0.65rem;
  width: 100%;
  height: 100%;
  padding: 1.3rem;
  background: var(--bg-card);
  border: 1px solid var(--border-strong);
  border-radius: var(--radius);
  color: var(--text-secondary);
  cursor: pointer;
}
.security-flow button[aria-pressed='true'] {
  border-color: var(--verdant);
  background: var(--surface-soft);
  box-shadow: inset 0 0 0 1px var(--verdant);
}
.security-step-number {
  color: var(--text-muted);
  font-size: 0.72rem;
  font-weight: 700;
}
.security-flow .app-icon {
  color: var(--verdant);
  margin: 0.4rem 0;
}
.security-flow strong {
  color: var(--ink);
  font-size: 0.95rem;
}
.security-flow button > span:last-child {
  font-size: 0.78rem;
  line-height: 1.6;
}
.security-detail {
  padding: 2rem;
  margin-top: 1.25rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: var(--bg-card);
}
.security-detail-intro h2 {
  margin: 1.2rem 0 0.8rem;
}
.security-detail-intro > p {
  color: var(--text-secondary);
  line-height: 1.85;
  max-width: 840px;
  font-size: 0.97rem;
}
.security-roles {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 2rem 0;
  padding: 1.5rem 0;
  border-block: 1px solid var(--border);
}
.security-roles h3 {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--ink);
  font-size: 0.95rem;
  margin-bottom: 0.7rem;
}
.security-roles .app-icon {
  color: var(--verdant);
}
.security-roles p {
  color: var(--text-secondary);
  font-size: 0.93rem;
  line-height: 1.85;
}
.security-code {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: start;
  gap: 2rem;
  padding: 2.5rem;
  background: var(--band);
  color: var(--band-ink);
  border-radius: var(--radius-lg);
}
.security-code-icon {
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius);
}
.security-code-icon .app-icon {
  width: 30px;
  height: 30px;
}
.security-eyebrow {
  display: block;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.7rem;
  font-weight: 700;
  opacity: 0.8;
}
.security-code h2 {
  color: inherit !important;
  margin: 1rem 0;
}
.security-code p {
  max-width: 800px;
  line-height: 1.85;
  font-size: 0.95rem;
  opacity: 0.85;
}
.security-code a {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  margin-top: 1.5rem;
  color: inherit;
  font-weight: 700;
  font-size: 0.88rem;
}
.security-code a:focus-visible {
  outline-color: var(--band-ink);
}
.security-faq {
  max-width: 850px;
}
.security-faq h2 {
  margin-bottom: 1rem;
}
.security-faq details {
  border-bottom: 1px solid var(--border);
}
.security-faq summary {
  padding: 1.4rem 0;
  color: var(--ink);
  font-weight: 700;
  cursor: pointer;
}
.security-faq details p {
  padding-bottom: 1.5rem;
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.85;
}
@media (max-width: 860px) {
  .security-flow {
    grid-template-columns: 1fr;
  }
  .security-flow button {
    display: grid;
    grid-template-columns: 1.5rem 1.5rem 1fr;
    align-items: center;
    gap: 0.65rem;
    padding: 1rem;
  }
  .security-flow button > span:last-child {
    grid-column: 3;
  }
  .security-flow .app-icon {
    margin: 0;
  }
}
@media (max-width: 600px) {
  .security-detail {
    padding: 1.5rem;
  }
  .security-roles {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .security-code {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    padding: 1.75rem;
  }
  .security-code-icon {
    width: fit-content;
  }
}
</style>
