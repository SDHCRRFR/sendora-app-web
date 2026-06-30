<template>
  <main class="home">
    <section class="hero">
      <div class="hero-noise"></div>
      <div class="container hero-inner">
        <div class="hero-content">
          <div class="hero-eyebrow">
            <span class="pulse-dot"></span>
            Application en bêta ouverte · iOS &amp; Android
          </div>

          <h1 class="hero-headline">
            Vos colis voyagent<br />
            <em class="hero-italic">avec vos voisins.</em>
          </h1>

          <p class="hero-body">
            Sendora connecte les expéditeurs avec des particuliers qui font déjà le trajet. Plus
            rapide, écologique et moins cher, . L'Airbnb du transport de colis.
          </p>

          <div class="hero-pills">
            <span class="pill">✓ Vérification KYC</span>
            <span class="pill">✓ Paiement Stripe escrow</span>
            <span class="pill">✓ Suivi en direct</span>
          </div>

          <div class="hero-cta" id="download">
            <a
              href="https://apps.apple.com/fr/app/sendora/id6773115334"
              target="_blank"
              rel="noopener"
              class="store-btn store-apple"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path
                  d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
                />
              </svg>
              <div>
                <span class="store-sub">Télécharger sur</span>
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
                <span class="store-sub">Bientôt sur</span>
                <span class="store-name">Google Play</span>
              </div>
            </a>
          </div>

          <p class="hero-fine">Gratuit · Aucun abonnement · Données hébergées en Europe</p>
        </div>

        <div class="hero-visual" aria-hidden="true">
          <div class="route-card">
            <div class="rc-head">
              <span class="rc-live"><span class="rc-live-dot"></span>Trajet en cours</span>
              <span class="rc-km">462 km</span>
            </div>

            <div class="rc-journey">
              <div class="rc-end">
                <div class="rc-avatar rc-av-from"></div>
                <span class="rc-city">Paris</span>
                <span class="rc-role">Expéditeur</span>
              </div>

              <div class="rc-track">
                <div class="rc-track-line"></div>
                <div class="rc-track-fill"></div>
                <div class="rc-parcel"><AppIcon name="package" /></div>
              </div>

              <div class="rc-end">
                <div class="rc-avatar rc-av-to"></div>
                <span class="rc-city">Lyon</span>
                <span class="rc-role">Voisin</span>
              </div>
            </div>

            <div class="rc-carrier">
              <div class="rc-c-avatar"></div>
              <div class="rc-c-info">
                <div class="rc-c-name">Thomas G.<span class="rc-badge">✓ Vérifié KYC</span></div>
                <div class="rc-c-meta">★ 4,9 · 128 trajets partagés</div>
              </div>
              <div class="rc-c-price">14&nbsp;€</div>
            </div>

            <div class="rc-timeline">
              <div class="rc-step rc-done"><span class="rc-dot"></span>Publié</div>
              <div class="rc-step rc-done"><span class="rc-dot"></span>En route</div>
              <div class="rc-step"><span class="rc-dot"></span>Livré</div>
            </div>
          </div>

          <div class="rc-chip rc-chip-save"><strong>−60 %</strong> vs transporteur classique</div>
          <div class="rc-chip rc-chip-eco"><strong>0 km</strong> en plus · trajet déjà prévu</div>
        </div>
      </div>

      <!-- Scroll hint -->
      <div class="hero-scroll-hint" aria-hidden="true">
        <div class="scroll-line"></div>
      </div>
    </section>

    <section class="stats-strip">
      <div class="container stats-row">
        <div class="stat-item" v-for="s in stats" :key="s.label">
          <span class="stat-val">{{ s.value }}</span>
          <span class="stat-lbl">{{ s.label }}</span>
        </div>
      </div>
    </section>

    <section class="how-section">
      <div class="container">
        <div class="section-head">
          <span class="section-tag">Comment ça marche</span>
          <h2 class="section-title">Trois étapes.<br /><em>C'est tout.</em></h2>
          <p class="section-sub">
            De la publication à la livraison, l'expérience est pensée pour être aussi fluide que
            possible.
          </p>
        </div>

        <div class="steps-track">
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
    </section>

    <section class="roles-section">
      <div class="container roles-grid">
        <div class="role-card role-sender">
          <div class="role-eyebrow">Pour les expéditeurs</div>
          <h2>Envoyez malin,<br /><em>payez moins.</em></h2>
          <p>
            Publiez votre colis en 2 minutes. Des transporteurs particuliers déjà sur votre route
            répondent avec leurs tarifs. Vous choisissez, vous payez en sécurité, vous suivez en
            direct.
          </p>
          <ul class="role-checklist">
            <li>Prix jusqu'à 60 % moins chers qu'un transporteur classique</li>
            <li>Transporteurs vérifiés par vérification d'identité complète</li>
            <li>Paiement sous séquestre Stripe - libéré à la livraison</li>
            <li>Chat direct et suivi en temps réel</li>
            <li>Aucun frais d'inscription, aucun abonnement</li>
          </ul>
          <a href="#download" class="role-action role-action-dark">Publier un colis →</a>
        </div>

        <div class="role-card role-transporter">
          <div class="role-eyebrow">Pour les transporteurs</div>
          <h2>Vos trajets vous<br /><em>rapportent enfin.</em></h2>
          <p>
            Vous partez de Paris à Moroni demain ? Des colis vous attendent déjà sur votre route.
            Acceptez les missions qui vous conviennent et recevez votre paiement directement.
          </p>
          <ul class="role-checklist">
            <li>Revenus complémentaires sans contrainte de planning</li>
            <li>Missions sur votre trajet habituel - aucun détour imposé</li>
            <li>Virement rapide via Stripe Connect (2–7 jours ouvrés)</li>
            <li>Application intuitive, pas de paperasse</li>
            <li>Communauté vérifiée et assurance en cours d'étude</li>
          </ul>
          <a href="#download" class="role-action role-action-light">Devenir transporteur →</a>
        </div>

        <div class="role-card role-pro">
          <div class="role-eyebrow">Pour les professionnels</div>
          <h2>Expédiez en volume,<br /><em>sans la logistique.</em></h2>
          <p>
            E-commerçants, TPE et associations : confiez vos envois récurrents à notre réseau de
            transporteurs vérifiés. Un tableau de bord, une facture, un interlocuteur dédié.
          </p>
          <ul class="role-checklist">
            <li>Tarifs dégressifs selon votre volume d'envois</li>
            <li>Facturation centralisée et compatible TVA</li>
            <li>Tableau de bord multi-colis et multi-utilisateurs</li>
            <li>Intégration API &amp; e-commerce (sur demande)</li>
            <li>Account manager dédié et support prioritaire</li>
          </ul>
          <RouterLink to="/contact" class="role-action role-action-pro"
            >Bientôt disponible</RouterLink
          >
        </div>
      </div>
    </section>

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
          <div class="feat-card feat-large-right">
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

          <div class="trust-visual" aria-hidden="true">
            <div class="trust-card">
              <div class="tc-header">
                <div class="tc-avatar"></div>
                <div>
                  <div class="tc-name">Mission confirmée</div>
                  <div class="tc-meta">Paris → Bordeaux · 587 km</div>
                </div>
                <div class="tc-badge verified">✓ Vérifié</div>
              </div>
              <div class="tc-divider"></div>
              <div class="tc-row">
                <span class="tc-label">Transporteur</span>
                <span class="tc-val">Jean-Marc V. · ★ 4.8</span>
              </div>
              <div class="tc-row">
                <span class="tc-label">Statut paiement</span>
                <span class="tc-val tc-green"><AppIcon name="lock" /> Sous séquestre</span>
              </div>
              <div class="tc-row">
                <span class="tc-label">Départ prévu</span>
                <span class="tc-val">Lun. 12 jan. · 08h30</span>
              </div>
              <div class="tc-row">
                <span class="tc-label">Colis</span>
                <span class="tc-val">2 kg - Fragile</span>
              </div>
              <div class="tc-actions">
                <div class="tc-btn tc-btn-outline"><AppIcon name="message-circle" /> Chat</div>
                <div class="tc-btn tc-btn-solid">Confirmer la livraison</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <PriceMarket />

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
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path
                d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
              />
            </svg>
            <div>
              <span class="store-sub">Télécharger sur</span>
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
              <span class="store-sub">Bientôt sur</span>
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
import AppIcon from '@/components/AppIcon.vue'
import PriceMarket from '@/components/PriceMarket.vue'
import { useSeo } from '@/composables/useSeo'
import { faqPage, howTo, mobileApplication, service } from '@/seo/schema'

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
    a: 'Oui, Sendora est disponible gratuitement sur l’App Store (iOS) et le sera très bientôt sur Google Play (Android).',
  },
  {
    q: 'Comment gagner de l’argent en transportant des colis ?',
    a: 'Si vous effectuez des trajets, vous pouvez proposer de transporter des colis sur votre route. Vous définissez vos disponibilités, acceptez les missions qui vous conviennent et êtes payé via Stripe Connect sous 2 à 7 jours ouvrés.',
  },
]

useSeo({
  title:
    'Sendora : envoyer un colis entre particuliers, en France et vers la diaspora',
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
  { name: 'MyShelf', url: 'https://myshelfapp.app', logo: '' },
  { name: 'DigitalPowers', url: 'https://digitalpowers.fr', logo: '/partners/logo2.png' },
]
// Repeat the set, then duplicate it so the -50% scroll loops seamlessly.
const partnerHalf = Array.from({ length: 6 }, () => partners).flat()
const partnerMarquee = [...partnerHalf, ...partnerHalf]

const stats = [
  { value: '0 €', label: "Frais d'inscription" },
  { value: '−60 %', label: 'vs. livraison traditionnelle' },
  { value: '50 %', label: 'Transporteurs vérifiés KYC' },
  { value: '24 h', label: 'Délai moyen de réponse' },
]

const steps = [
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
</script>

<style scoped>
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
  padding-top: 3rem;
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
/* Hero route card */
.route-card {
  position: relative;
  width: 360px;
  max-width: 100%;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.4rem;
  box-shadow: var(--shadow-lg);
}
.rc-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
}
.rc-live {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--verdant);
}
.rc-live-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--verdant-lt);
  box-shadow: 0 0 0 4px rgba(45, 181, 108, 0.15);
}
.rc-km {
  font-size: 0.72rem;
  font-weight: 800;
  color: var(--text-muted);
  background: var(--cream-deep);
  padding: 3px 11px;
  border-radius: var(--radius-xl);
}

.rc-journey {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}
.rc-end {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  width: 64px;
  flex-shrink: 0;
}
.rc-avatar {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(13, 26, 18, 0.15);
}
.rc-av-from {
  background: linear-gradient(135deg, var(--verdant-lt), var(--verdant));
}
.rc-av-to {
  background: linear-gradient(135deg, var(--gold-lt), var(--gold));
}
.rc-city {
  font-size: 0.82rem;
  font-weight: 800;
  color: var(--ink);
  line-height: 1;
}
.rc-role {
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--text-muted);
}
.rc-track {
  flex: 1;
  position: relative;
  height: 46px;
  display: flex;
  align-items: center;
}
.rc-track-line {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  border-top: 2px dashed var(--border);
  transform: translateY(-50%);
}
.rc-track-fill {
  position: absolute;
  left: 0;
  width: 58%;
  top: 50%;
  border-top: 2px dashed var(--verdant);
  transform: translateY(-50%);
}
.rc-parcel {
  position: absolute;
  left: 58%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 34px;
  height: 34px;
  border-radius: 11px;
  background: var(--white);
  box-shadow: 0 4px 14px rgba(13, 26, 18, 0.18);
  display: flex;
  align-items: center;
  justify-content: center;
}
.rc-parcel .app-icon {
  width: 18px;
  height: 18px;
  color: var(--verdant);
}

.rc-carrier {
  display: flex;
  align-items: center;
  gap: 12px;
  background: var(--cream-deep);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 11px 13px;
}
.rc-c-avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: linear-gradient(135deg, #c8e8d4, var(--verdant-lt));
  flex-shrink: 0;
}
.rc-c-info {
  flex: 1;
  min-width: 0;
}
.rc-c-name {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  font-weight: 800;
  color: var(--ink);
}
.rc-badge {
  font-size: 0.6rem;
  font-weight: 800;
  color: var(--verdant);
  background: rgba(26, 102, 64, 0.1);
  padding: 2px 8px;
  border-radius: var(--radius-xl);
  white-space: nowrap;
}
.rc-c-meta {
  font-size: 0.74rem;
  color: var(--text-muted);
  margin-top: 2px;
}
.rc-c-price {
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--verdant);
  flex-shrink: 0;
}

.rc-timeline {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: 1.25rem;
  padding-top: 0.25rem;
}
.rc-timeline::before,
.rc-timeline::after {
  content: '';
  position: absolute;
  top: 11px;
  height: 2px;
  border-radius: 2px;
}
.rc-timeline::before {
  left: 16%;
  right: 16%;
  background: var(--border);
}
.rc-timeline::after {
  left: 16%;
  width: 34%;
  background: var(--verdant);
}
.rc-step {
  position: relative;
  z-index: 1;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-size: 0.68rem;
  font-weight: 700;
  color: var(--text-muted);
}
.rc-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--white);
  border: 2px solid var(--border);
}
.rc-step.rc-done {
  color: var(--verdant);
}
.rc-step.rc-done .rc-dot {
  background: var(--verdant);
  border-color: var(--verdant);
}

/* Static accent chips */
.rc-chip {
  position: absolute;
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
  top: 34px;
  left: -52px;
}
.rc-chip-save strong {
  color: var(--verdant);
}
.rc-chip-eco {
  bottom: 40px;
  right: -44px;
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

.stats-strip {
  background: var(--band);
  padding: 2.5rem 0;
  overflow: hidden;
}
.stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  text-align: center;
}
.stat-item {
  padding: 0.5rem 1rem;
}
.stat-val {
  display: block;
  font-family: var(--font-display);
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--gold);
  line-height: 1;
  margin-bottom: 0.35rem;
}
.stat-lbl {
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  color: rgba(255, 255, 255, 0.6);
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
}
.steps-track {
  max-width: 680px;
  margin: 0 auto;
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
.feat-large-right {
  grid-column: span 2;
  grid-column-start: 2;
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

/* Trust card visual */
.trust-visual {
  display: flex;
  justify-content: center;
}
.trust-card {
  background: var(--white);
  border: 1.5px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  max-width: 345px;
  width: 100%;
  box-shadow: var(--shadow-lg);
}
.tc-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 1rem;
}
.tc-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--verdant-lt), var(--verdant));
  flex-shrink: 0;
}
.tc-name {
  font-size: 0.92rem;
  font-weight: 800;
  color: var(--ink);
}
.tc-meta {
  font-size: 0.78rem;
  color: var(--text-muted);
}
.tc-badge {
  margin-left: auto;
  font-size: 0.72rem;
  font-weight: 800;
  padding: 3px 10px;
  border-radius: var(--radius-xl);
}
.verified {
  background: rgba(26, 102, 64, 0.1);
  color: var(--verdant);
}
.tc-divider {
  height: 1px;
  background: var(--border);
  margin-bottom: 1rem;
}
.tc-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.45rem 0;
  border-bottom: 1px solid var(--border);
}
.tc-row:last-of-type {
  border-bottom: 0;
}
.tc-label {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-weight: 600;
}
.tc-val {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--ink);
}
.tc-val .app-icon {
  width: 14px;
  height: 14px;
}
.tc-green {
  color: var(--verdant);
}
.tc-actions {
  display: flex;
  gap: 0.75rem;
  margin-top: 1.1rem;
}
.tc-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 0.6rem;
  border-radius: 10px;
  font-size: 0.78rem;
  font-weight: 800;
  cursor: pointer;
}
.tc-btn .app-icon {
  width: 15px;
  height: 15px;
}
.tc-btn-outline {
  border: 1.5px solid var(--border);
  color: var(--ink);
}
.tc-btn-solid {
  background: var(--verdant);
  color: white;
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
  .feat-large-right,
  .feat-wide {
    grid-column: span 2;
  }
  .feat-large-right {
    grid-column-start: auto;
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
  .features-bento {
    grid-template-columns: 1fr;
  }
  .feat-large,
  .feat-large-right,
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
