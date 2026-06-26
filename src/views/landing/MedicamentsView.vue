<template>
  <main class="med">
    <!-- Hero -->
    <section class="med-hero">
      <div class="container">
        <nav class="crumbs" aria-label="Fil d'Ariane">
          <RouterLink to="/">Accueil</RouterLink>
          <span aria-hidden="true">›</span>
          <span>Envoyer des médicaments</span>
        </nav>
        <span class="chip"><AppIcon name="pill" /> Diaspora · Santé</span>
        <h1>Envoyer des <em>médicaments</em> à un proche à l'étranger</h1>
        <p class="med-lead">
          Paracétamol, vitamines, parapharmacie, matériel de premiers soins… Avec Sendora, un
          voyageur vérifié transporte en main propre les médicaments <strong>sans ordonnance</strong>
          dont votre famille a besoin — dans le respect de la réglementation. Pas un colis postal
          anonyme : un bagage accompagné, remis directement au destinataire.
        </p>
        <div class="med-cta">
          <a
            href="https://apps.apple.com/fr/app/sendora/id6773115334"
            target="_blank"
            rel="noopener"
            class="btn btn-primary"
          >
            Télécharger l'app →
          </a>
          <a href="#autorise" class="btn btn-ghost">Ce que vous pouvez envoyer →</a>
        </div>
      </div>
    </section>

    <!-- Intro / le besoin -->
    <section class="med-block">
      <div class="container">
        <h2>Un besoin réel de la diaspora</h2>
        <p class="med-text">
          Une boîte de Doliprane, des vitamines pour les enfants, des pansements ou un peu de
          parapharmacie introuvable ou hors de prix au pays : la famille en demande souvent, et les
          transporteurs classiques (La Poste, DHL, UPS…) refusent presque toujours les colis de
          médicaments. Sendora ouvre une autre voie : un particulier qui voyage déjà vers la
          destination emporte vos médicaments comme un bagage accompagné et les remet en main propre.
          Plus simple, plus humain, et au respect des règles.
        </p>
      </div>
    </section>

    <!-- Autorisé -->
    <section id="autorise" class="med-block med-alt">
      <div class="container">
        <h2>Ce que vous pouvez envoyer</h2>
        <p class="med-text">
          Les médicaments <strong>sans ordonnance</strong>, en quantité raisonnable pour un usage
          personnel ou familial (l'équivalent de 3 mois de traitement maximum).
        </p>
        <div class="card-grid">
          <div v-for="item in allowed" :key="item.title" class="info-card info-ok">
            <div class="info-icon info-icon-ok"><AppIcon :name="item.icon" /></div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Interdit -->
    <section class="med-block">
      <div class="container">
        <h2>Ce qui est <em class="danger">interdit</em></h2>
        <p class="med-text">
          Certains produits sont strictement exclus de la plateforme. Les envoyer vous expose, vous
          et le voyageur, à de lourdes sanctions.
        </p>
        <div class="card-grid">
          <div v-for="item in forbidden" :key="item.title" class="info-card info-ko">
            <div class="info-icon info-icon-ko"><AppIcon name="x-circle" /></div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Réglementation -->
    <section class="med-block med-alt">
      <div class="container">
        <div class="reg">
          <div class="reg-head">
            <div class="info-icon info-icon-law"><AppIcon name="scale" /></div>
            <h2>La réglementation à connaître</h2>
          </div>
          <ul class="reg-list">
            <li v-for="(r, i) in reglementation" :key="i">
              <AppIcon name="check-circle" />
              <span>{{ r }}</span>
            </li>
          </ul>
          <p class="reg-disclaimer">{{ disclaimer }}</p>
        </div>
      </div>
    </section>

    <!-- Bonnes pratiques -->
    <section class="med-block">
      <div class="container">
        <h2>Bonnes pratiques pour un envoi serein</h2>
        <div class="why-grid">
          <div v-for="(tip, i) in bonnesPratiques" :key="i" class="why-card">
            <h3>{{ tip.title }}</h3>
            <p>{{ tip.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Comment ça marche -->
    <section class="med-block med-alt">
      <div class="container">
        <h2>Comment ça marche</h2>
        <ol class="how-steps">
          <li v-for="(step, i) in howSteps" :key="step.title">
            <span class="how-num">{{ i + 1 }}</span>
            <div>
              <h3>{{ step.title }}</h3>
              <p>{{ step.text }}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <!-- Liens internes -->
    <section class="med-block">
      <div class="container">
        <h2>Envoyer vers la diaspora</h2>
        <p class="med-text">
          Sendora dessert déjà de nombreuses destinations. Découvrez les tarifs et le fonctionnement
          pour votre pays.
        </p>
        <div class="links-row">
          <RouterLink
            v-for="l in countryLinks"
            :key="l.path"
            :to="l.path"
            class="link-card"
          >
            Envoyer un colis {{ l.prep }} {{ l.country }} →
          </RouterLink>
          <RouterLink to="/envoyer-colis-pas-cher" class="link-card">
            Envoyer un colis pas cher →
          </RouterLink>
          <RouterLink to="/blog" class="link-card">Guides & conseils →</RouterLink>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="med-block med-alt">
      <div class="container">
        <h2>Questions fréquentes</h2>
        <div class="faq-list">
          <details v-for="(f, i) in faq" :key="i" class="faq-item">
            <summary>{{ f.q }}</summary>
            <p>{{ f.a }}</p>
          </details>
        </div>
      </div>
    </section>

    <!-- CTA final -->
    <section class="med-final">
      <div class="container">
        <h2>Faites livrer leurs médicaments en main propre</h2>
        <p>Téléchargez Sendora gratuitement et publiez votre demande en 2 minutes.</p>
        <a
          href="https://apps.apple.com/fr/app/sendora/id6773115334"
          target="_blank"
          rel="noopener"
          class="btn btn-primary"
        >
          Télécharger sur l'App Store →
        </a>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import AppIcon from '@/components/AppIcon.vue'
import { useSeo } from '@/composables/useSeo'
import { breadcrumb, faqPage, howTo, service, SITE_URL } from '@/seo/schema'
import { destinations } from '@/data/destinations'

const countryLinks = destinations.map((d) => ({
  path: d.path,
  country: d.country,
  prep: d.prep,
}))

const allowed = [
  {
    icon: 'pill',
    title: 'Médicaments sans ordonnance',
    text: 'Antidouleurs et antipyrétiques courants (paracétamol…) et autres médicaments délivrés sans prescription.',
  },
  {
    icon: 'check-circle',
    title: 'Parapharmacie & vitamines',
    text: 'Compléments alimentaires, vitamines, produits de soin et d’hygiène vendus librement.',
  },
  {
    icon: 'life-buoy',
    title: 'Matériel de premiers soins',
    text: 'Pansements, désinfectant, thermomètre, petit matériel de soin du quotidien.',
  },
  {
    icon: 'shield-check',
    title: 'Usage personnel ou familial',
    text: 'En quantité raisonnable — l’équivalent de 3 mois de traitement maximum, sans but commercial.',
  },
]

const forbidden = [
  {
    title: 'Stupéfiants & psychotropes',
    text: 'Interdiction absolue : transportables uniquement par le patient lui-même, avec certificat — jamais par un tiers ni par voie postale.',
  },
  {
    title: 'Ordonnance sans la prescription',
    text: 'Un médicament soumis à prescription ne peut pas voyager sans l’ordonnance correspondante qui l’accompagne.',
  },
  {
    title: 'Quantités excessives',
    text: 'Au-delà de l’usage personnel (3 mois de traitement), l’importation est prohibée à titre absolu et assimilée à du trafic.',
  },
  {
    title: 'Contrefaçons & revente',
    text: 'Médicaments contrefaits ou non autorisés, et tout envoi à but commercial, sont strictement exclus.',
  },
]

const reglementation = [
  'Principe d’usage personnel : sans ordonnance, on ne peut transporter que l’équivalent de 3 mois de traitement maximum (règle de la douane française). Au-delà, l’importation est prohibée à titre absolu.',
  'Médicaments sur ordonnance : la prescription correspondante est indispensable et doit accompagner l’envoi.',
  'Stupéfiants et psychotropes : transport personnel uniquement par le patient, avec certificat (ANSM/ARS). Ils ne peuvent jamais être confiés à un tiers ni envoyés par la poste.',
  'Pays de destination : chaque pays a ses propres règles d’importation et certains interdisent certaines substances. Plusieurs pays, dont le Sénégal, luttent activement contre les faux médicaments — vérifiez toujours les règles locales avant l’envoi.',
]

const disclaimer =
  'Ces informations sont données à titre indicatif et ne constituent ni un conseil juridique ni un conseil médical. Sendora n’est pas une pharmacie et ne vend aucun médicament : la plateforme met en relation un expéditeur et un voyageur, et le respect de la réglementation relève de l’expéditeur. En cas de doute, demandez conseil à votre pharmacien ou aux autorités douanières.'

const bonnesPratiques = [
  {
    title: 'Gardez l’emballage d’origine',
    text: 'Conservez la boîte et la notice : le contenu est identifiable d’un coup d’œil, ce qui facilite le passage en douane.',
  },
  {
    title: 'Joignez l’ordonnance si besoin',
    text: 'Pour tout médicament qui en nécessite une, glissez l’ordonnance (idéalement traduite) avec l’envoi.',
  },
  {
    title: 'Déclarez honnêtement le contenu',
    text: 'Décrivez précisément les médicaments dans votre annonce et au voyageur. La transparence protège tout le monde.',
  },
  {
    title: 'Vérifiez les règles du pays',
    text: 'Renseignez-vous sur les conditions d’importation de la destination : certaines substances peuvent y être interdites.',
  },
  {
    title: 'Restez sur des quantités raisonnables',
    text: 'Un usage familial, pas un stock : au-delà de 3 mois de traitement, l’envoi devient illégal.',
  },
  {
    title: 'Au moindre doute, demandez',
    text: 'Votre pharmacien ou la douane peuvent confirmer ce qui est autorisé pour votre situation précise.',
  },
]

const howSteps = [
  {
    title: 'Publiez votre demande',
    text: 'Indiquez les médicaments sans ordonnance à transporter, la ville de destination et votre budget. Moins de 2 minutes.',
  },
  {
    title: 'Choisissez un voyageur vérifié',
    text: 'Sélectionnez un particulier vérifié KYC qui se rend déjà à destination. Comparez profils, notes et tarifs.',
  },
  {
    title: 'Remise en main propre & paiement sécurisé',
    text: 'Le voyageur remet les médicaments directement au destinataire. Vous confirmez la réception et le paiement sous séquestre est libéré.',
  },
]

const faq = [
  {
    q: 'Peut-on vraiment envoyer des médicaments à l’étranger avec Sendora ?',
    a: 'Oui, pour les médicaments sans ordonnance (paracétamol, parapharmacie, vitamines, premiers soins), en quantité raisonnable pour un usage personnel ou familial — l’équivalent de 3 mois de traitement maximum. Un voyageur vérifié les transporte en main propre, comme un bagage accompagné. Sendora n’est pas une pharmacie et ne vend aucun médicament.',
  },
  {
    q: 'Faut-il une ordonnance pour envoyer des médicaments ?',
    a: 'Pas pour les médicaments vendus sans ordonnance, tant que la quantité ne dépasse pas un usage personnel (3 mois de traitement). Pour un médicament soumis à prescription, l’ordonnance correspondante est indispensable et doit accompagner l’envoi.',
  },
  {
    q: 'Quels médicaments sont strictement interdits ?',
    a: 'Les stupéfiants et les psychotropes ne peuvent jamais être transportés par un tiers ni par voie postale : seul le patient peut les transporter personnellement, avec un certificat. Sont aussi exclus les médicaments contrefaits, les quantités au-delà de l’usage personnel et tout envoi à but commercial.',
  },
  {
    q: 'Comment ça se passe à la douane du pays de destination ?',
    a: 'Chaque pays a ses propres règles d’importation et certains interdisent certaines substances. Plusieurs pays, dont le Sénégal, sont très vigilants face aux faux médicaments. Conservez l’emballage d’origine et la notice, déclarez honnêtement le contenu et renseignez-vous sur les règles locales avant l’envoi.',
  },
  {
    q: 'Pourquoi passer par Sendora plutôt que par la poste ?',
    a: 'La plupart des transporteurs (La Poste, DHL, UPS…) refusent les colis de médicaments. Avec Sendora, un voyageur vérifié les emporte en main propre sur un trajet qu’il fait déjà : remise directe au destinataire, paiement sécurisé sous séquestre et suivi en temps réel.',
  },
]

useSeo({
  title: 'Envoyer des médicaments à un proche à l’étranger',
  description:
    'Comment envoyer des médicaments sans ordonnance à votre famille à l’étranger ? Ce qui est autorisé ou interdit, la réglementation, et la remise en main propre par un voyageur vérifié avec Sendora.',
  path: '/envoyer-medicaments',
  keywords:
    'envoyer des médicaments à l’étranger, envoyer médicaments sans ordonnance, envoyer médicaments au Sénégal, transporter des médicaments en avion, envoyer médicaments diaspora, envoyer paracétamol à l’étranger',
  jsonLd: [
    breadcrumb([
      { name: 'Accueil', path: '/' },
      { name: 'Envoyer des médicaments', path: '/envoyer-medicaments' },
    ]),
    service({
      name: 'Envoyer des médicaments sans ordonnance à l’étranger',
      serviceType: 'Transport de médicaments sans ordonnance entre particuliers',
      description:
        'Faire transporter des médicaments sans ordonnance à un proche à l’étranger, en main propre par un voyageur vérifié, dans le respect de la réglementation.',
      areaServed: destinations.map((d) => d.country),
      url: `${SITE_URL}/envoyer-medicaments`,
    }),
    howTo(
      'Comment envoyer des médicaments à un proche à l’étranger avec Sendora',
      'Faire transporter des médicaments sans ordonnance en main propre, en 3 étapes.',
      howSteps.map((s) => ({ name: s.title, text: s.text })),
    ),
    faqPage(faq.map((f) => ({ q: f.q, a: f.a }))),
  ],
})
</script>

<style scoped>
.med-hero {
  background: var(--cream);
  padding: 2.5rem 0 3.5rem;
}
.crumbs {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-size: 0.82rem;
  color: var(--text-muted);
  margin-bottom: 1rem;
}
.crumbs a {
  color: var(--verdant);
  font-weight: 700;
}
.chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(26, 102, 64, 0.09);
  color: var(--verdant);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.03em;
  padding: 5px 12px;
  border-radius: var(--radius-xl);
  border: 1px solid rgba(26, 102, 64, 0.15);
}
.chip .app-icon {
  width: 15px;
  height: 15px;
}
.med-hero h1 {
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  line-height: 1.07;
  letter-spacing: -0.03em;
  color: var(--ink);
  margin: 1rem 0 1.25rem;
}
.med-hero h1 em {
  font-style: italic;
  color: var(--verdant);
}
.med-lead {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  max-width: 740px;
  margin-bottom: 1.75rem;
}
.med-lead strong {
  color: var(--ink);
  font-weight: 800;
}
.med-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.btn {
  display: inline-flex;
  align-items: center;
  font-weight: 800;
  font-size: 0.95rem;
  padding: 0.8rem 1.5rem;
  border-radius: var(--radius-xl);
  transition:
    transform var(--transition),
    box-shadow var(--transition);
}
.btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}
.btn-primary {
  background: var(--verdant);
  color: #fff;
}
.btn-ghost {
  background: var(--bg-card);
  color: var(--ink);
  border: 1.5px solid var(--border-strong);
}

.med-block {
  padding: 4rem 0;
}
.med-alt {
  background: var(--cream-deep);
}
.med-block h2 {
  font-family: var(--font-display);
  font-size: clamp(1.7rem, 3.5vw, 2.3rem);
  letter-spacing: -0.02em;
  color: var(--ink);
  margin-bottom: 1rem;
}
.med-block h2 em {
  font-style: italic;
  color: var(--verdant);
}
.med-block h2 em.danger {
  color: var(--danger, #c0392b);
}
.med-text {
  font-size: 1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  max-width: 760px;
  margin-bottom: 2rem;
}
.med-text strong {
  color: var(--ink);
  font-weight: 800;
}

/* Allowed / forbidden cards */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.25rem;
}
.info-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
}
.info-card h3 {
  font-size: 1.02rem;
  font-weight: 800;
  color: var(--ink);
  margin-bottom: 0.5rem;
}
.info-card p {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.7;
}
.info-ok {
  border-color: rgba(26, 102, 64, 0.2);
}
.info-ko {
  border-color: rgba(192, 57, 43, 0.22);
}
.info-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border-radius: 13px;
  margin-bottom: 1rem;
}
.info-icon .app-icon {
  width: 24px;
  height: 24px;
}
.info-icon-ok {
  background: rgba(26, 102, 64, 0.1);
  color: var(--verdant);
}
.info-icon-ko {
  background: rgba(192, 57, 43, 0.1);
  color: #c0392b;
}
.info-icon-law {
  background: rgba(26, 102, 64, 0.1);
  color: var(--verdant);
  flex-shrink: 0;
}

/* Regulation block */
.reg {
  max-width: 820px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: clamp(1.5rem, 3vw, 2.25rem);
}
.reg-head {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.reg-head h2 {
  margin-bottom: 0;
}
.reg-list {
  list-style: none;
  display: grid;
  gap: 1rem;
  margin-bottom: 1.75rem;
}
.reg-list li {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--text-secondary);
}
.reg-list .app-icon {
  width: 20px;
  height: 20px;
  color: var(--verdant);
  flex-shrink: 0;
  margin-top: 2px;
}
.reg-disclaimer {
  font-size: 0.85rem;
  line-height: 1.7;
  color: var(--text-muted);
  border-top: 1px solid var(--border);
  padding-top: 1.25rem;
}

/* Tips */
.why-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.25rem;
}
.why-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
}
.why-card h3 {
  font-size: 1.02rem;
  font-weight: 800;
  color: var(--ink);
  margin-bottom: 0.5rem;
}
.why-card p {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

/* How steps */
.how-steps {
  list-style: none;
  display: grid;
  gap: 1.5rem;
  max-width: 720px;
}
.how-steps li {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
}
.how-num {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--verdant);
  color: #fff;
  border-radius: 50%;
  font-family: var(--font-display);
  font-size: 1.1rem;
}
.how-steps h3 {
  font-size: 1.05rem;
  font-weight: 800;
  color: var(--ink);
  margin-bottom: 0.35rem;
}
.how-steps p {
  font-size: 0.92rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

/* Internal links */
.links-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 0.85rem;
}
.link-card {
  display: block;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1rem 1.25rem;
  font-weight: 700;
  color: var(--ink);
  transition:
    border-color var(--transition),
    transform var(--transition);
}
.link-card:hover {
  border-color: var(--verdant);
  transform: translateY(-2px);
  color: var(--verdant);
}

/* FAQ */
.faq-list {
  max-width: 760px;
  display: grid;
  gap: 0.75rem;
}
.faq-item {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 0.5rem 1.25rem;
}
.faq-item summary {
  cursor: pointer;
  font-weight: 700;
  color: var(--ink);
  padding: 0.85rem 0;
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
}
.faq-item[open] summary::after {
  content: '–';
}
.faq-item p {
  font-size: 0.92rem;
  color: var(--text-secondary);
  line-height: 1.7;
  padding-bottom: 1rem;
}

/* Final CTA */
.med-final {
  padding: 5rem 0;
  text-align: center;
  background: var(--band);
}
.med-final h2 {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  color: var(--band-ink);
  margin-bottom: 0.75rem;
}
.med-final p {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.75rem;
}
</style>
