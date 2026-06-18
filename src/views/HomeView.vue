<template>
  <main class="home">

    <!-- ═══════════════════ HERO ═══════════════════ -->
    <section class="hero">
      <div class="hero-noise"></div>
      <div class="container hero-inner">

        <!-- Left column -->
        <div class="hero-content">
          <div class="hero-eyebrow">
            <span class="pulse-dot"></span>
            Application en bêta ouverte · iOS &amp; Android
          </div>

          <h1 class="hero-headline">
            Vos colis voyagent<br>
            <em class="hero-italic">avec vos voisins.</em>
          </h1>

          <p class="hero-body">
            Sendora connecte les expéditeurs avec des particuliers qui font déjà le trajet.
            Plus rapide, écologique, moins cher, humain. L'Airbnb du transport de colis.
          </p>

          <div class="hero-pills">
            <span class="pill">✓ Vérification KYC</span>
            <span class="pill">✓ Paiement Stripe escrow</span>
            <span class="pill">✓ Suivi en direct</span>
          </div>

          <div class="hero-cta" id="download">
            <a href="https://apps.apple.com/fr/app/sendora/id6773115334" target="_blank" rel="noopener" class="store-btn store-apple">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div>
                <span class="store-sub">Télécharger sur</span>
                <span class="store-name">App Store</span>
              </div>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.sendoraapp" target="_blank" rel="noopener" class="store-btn store-google">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M3.18 23.76c.37.21.8.22 1.2.02l12.44-7.18-2.62-2.62-11.02 9.78zM20.77 10.34L18.21 8.8 15.3 11.7l2.9 2.9 2.58-1.49c.73-.42.73-1.35-.01-1.77zM1.02 1.44C.97 1.62.94 1.81.94 2.02v19.98c0 .2.03.39.08.57l.13.12L12.06 12l-.12-.12L1.02 1.44zM4.38.24L16.82 7.4 14.2 10.02 1.76.24C2.16.04 2.59.05 2.96.26L4.38.24z"/>
              </svg>
              <div>
                <span class="store-sub">Disponible sur</span>
                <span class="store-name">Google Play</span>
              </div>
            </a>
          </div>

          <p class="hero-fine">Gratuit · Aucun abonnement · Données hébergées en Europe</p>
        </div>

        <!-- Right column — phone mockup -->
        <div class="hero-visual" aria-hidden="true">
          <div class="phone-wrap">
            <div class="phone">
              <div class="phone-island"></div>
              <div class="phone-screen">
                <!-- Status bar -->
                <div class="screen-status">
                  <span class="screen-time">09:41</span>
                  <div class="screen-icons">
                    <span class="icon-signal"></span>
                    <span class="icon-wifi"></span>
                    <span class="icon-battery"></span>
                  </div>
                </div>
                <!-- App header -->
                <div class="screen-header">
                  <div class="screen-logo">
                    <div class="sl-dot"></div>
                  </div>
                  <span class="screen-title">Sendora</span>
                  <div class="screen-avatar"></div>
                </div>
                <!-- Search bar -->
                <div class="screen-search">
                  <span class="search-icon">🔍</span>
                  <span class="search-text">Paris → Lyon</span>
                </div>
                <!-- Map area -->
                <div class="screen-map">
                  <div class="map-road"></div>
                  <div class="map-pin mp-a">
                    <span>📦</span>
                  </div>
                  <div class="map-pin mp-b">
                    <span>🏠</span>
                  </div>
                  <div class="map-car">🚗</div>
                </div>
                <!-- Match cards -->
                <div class="screen-label">Transporteurs disponibles</div>
                <div class="match-card mc1">
                  <div class="mc-avatar a1"></div>
                  <div class="mc-info">
                    <div class="mc-name">Thomas G.</div>
                    <div class="mc-route">Demain · 9h00 → 12h30</div>
                  </div>
                  <div class="mc-price">14€</div>
                </div>
                <div class="match-card mc2">
                  <div class="mc-avatar a2"></div>
                  <div class="mc-info">
                    <div class="mc-name">Marie L.</div>
                    <div class="mc-route">Demain · 14h → 18h</div>
                  </div>
                  <div class="mc-price">9€</div>
                </div>
              </div>
            </div>

            <!-- Floating badges -->
            <div class="badge badge-delivered">
              <span class="bd-icon">✅</span>
              <div>
                <div class="bd-title">Livré !</div>
                <div class="bd-sub">Paris → Marseille · 3h40</div>
              </div>
            </div>
            <div class="badge badge-rating">
              <span class="bd-stars">★★★★★</span>
              <div class="bd-sub">4.9 note moyenne</div>
            </div>
            <div class="badge badge-save">
              <span class="bd-icon">💸</span>
              <div>
                <div class="bd-title">Économisé 28€</div>
                <div class="bd-sub">vs. transporteur classique</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Scroll hint -->
      <div class="hero-scroll-hint" aria-hidden="true">
        <div class="scroll-line"></div>
      </div>
    </section>

    <!-- ═══════════════════ STATS TICKER ═══════════════════ -->
    <section class="stats-strip">
      <div class="container stats-row">
        <div class="stat-item" v-for="s in stats" :key="s.label">
          <span class="stat-val">{{ s.value }}</span>
          <span class="stat-lbl">{{ s.label }}</span>
        </div>
      </div>
    </section>

    <!-- ═══════════════════ HOW IT WORKS ═══════════════════ -->
    <section class="how-section">
      <div class="container">
        <div class="section-head">
          <span class="section-tag">Comment ça marche</span>
          <h2 class="section-title">Trois étapes.<br><em>C'est tout.</em></h2>
          <p class="section-sub">De la publication à la livraison, l'expérience est pensée pour être aussi fluide que possible.</p>
        </div>

        <div class="steps-track">
          <div class="step-item" v-for="(step, i) in steps" :key="step.title">
            <div class="step-left">
              <div class="step-number">{{ String(i + 1).padStart(2, '0') }}</div>
              <div v-if="i < steps.length - 1" class="step-line"></div>
            </div>
            <div class="step-body">
              <div class="step-emoji">{{ step.icon }}</div>
              <div class="step-text">
                <h3>{{ step.title }}</h3>
                <p>{{ step.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════ DUAL ROLE ═══════════════════ -->
    <section class="roles-section">
      <div class="container roles-grid">

        <div class="role-card role-sender">
          <div class="role-eyebrow">Pour les expéditeurs</div>
          <h2>Envoyez malin,<br><em>payez moins.</em></h2>
          <p>Publiez votre colis en 2 minutes. Des transporteurs particuliers déjà sur votre route répondent avec leurs tarifs. Vous choisissez, vous payez en sécurité, vous suivez en direct.</p>
          <ul class="role-checklist">
            <li>Prix jusqu'à 60 % moins chers qu'un transporteur classique</li>
            <li>Transporteurs vérifiés par vérification d'identité complète</li>
            <li>Paiement sous séquestre Stripe — libéré à la livraison</li>
            <li>Chat direct et suivi en temps réel</li>
            <li>Aucun frais d'inscription, aucun abonnement</li>
          </ul>
          <a href="#download" class="role-action role-action-dark">Publier un colis →</a>
        </div>

        <div class="role-card role-transporter">
          <div class="role-eyebrow">Pour les transporteurs</div>
          <h2>Vos trajets vous<br><em>rapportent enfin.</em></h2>
          <p>Vous partez de Paris à Lyon demain ? Des colis vous attendent déjà sur votre route. Acceptez les missions qui vous conviennent et recevez votre paiement directement.</p>
          <ul class="role-checklist">
            <li>Revenus complémentaires sans contrainte de planning</li>
            <li>Missions sur votre trajet habituel — aucun détour imposé</li>
            <li>Virement rapide via Stripe Connect (2–7 jours ouvrés)</li>
            <li>Application intuitive, pas de paperasse</li>
            <li>Communauté vérifiée et assurance en cours d'étude</li>
          </ul>
          <a href="#download" class="role-action role-action-light">Devenir transporteur →</a>
        </div>

      </div>
    </section>

    <!-- ═══════════════════ FEATURES GRID ═══════════════════ -->
    <section class="features-section">
      <div class="container">
        <div class="section-head">
          <span class="section-tag">Fonctionnalités</span>
          <h2 class="section-title">Tout ce dont vous avez<br><em>besoin, rien de plus.</em></h2>
        </div>

        <div class="features-bento">
          <div class="feat-card feat-large">
            <div class="feat-icon-wrap">🔐</div>
            <h3>Vérification d'identité KYC</h3>
            <p>Chaque transporteur passe par un processus de vérification d'identité complet via notre partenaire Didit, agréé eIDAS. Vous savez toujours à qui vous faites confiance.</p>
          </div>
          <div class="feat-card">
            <div class="feat-icon-wrap">💳</div>
            <h3>Paiement sous séquestre</h3>
            <p>Votre argent est bloqué par Stripe et libéré uniquement après confirmation de livraison. Zéro risque de paiement à blanc.</p>
          </div>
          <div class="feat-card">
            <div class="feat-icon-wrap">📍</div>
            <h3>Suivi en temps réel</h3>
            <p>Suivez chaque étape du parcours de votre colis directement depuis l'application, notifications incluses.</p>
          </div>
          <div class="feat-card">
            <div class="feat-icon-wrap">💬</div>
            <h3>Chat sécurisé intégré</h3>
            <p>Coordonnez avec votre transporteur ou expéditeur via la messagerie chiffrée. Pas besoin d'échanger vos numéros.</p>
          </div>
          <div class="feat-card feat-large-right">
            <div class="feat-icon-wrap">⭐</div>
            <h3>Réputation communautaire</h3>
            <p>Après chaque mission, expéditeurs et transporteurs se notent mutuellement. Un système de réputation transparent qui incite à l'excellence et fait naître la confiance sur le long terme.</p>
          </div>
          <div class="feat-card feat-wide">
            <div class="feat-icon-wrap">🌍</div>
            <h3>Partout en France, depuis votre smartphone</h3>
            <p>Que ce soit entre deux villes voisines ou d'un bout à l'autre du pays, le matching géographique de Sendora trouve des transporteurs dans un rayon de 50 km autour de votre itinéraire. iOS et Android.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════ TRUST ═══════════════════ -->
    <section class="trust-section">
      <div class="container">
        <div class="trust-inner">
          <div class="trust-content">
            <span class="section-tag">Sécurité &amp; Confiance</span>
            <h2 class="section-title">Conçu pour la confiance<br><em>dès le premier jour.</em></h2>
            <p class="section-sub">Sendora ne fait aucun compromis sur la sécurité. Chaque décision technique et chaque partenariat ont été choisis pour protéger expéditeurs et transporteurs.</p>

            <div class="trust-badges">
              <div class="trust-badge" v-for="t in trust" :key="t.title">
                <div class="tb-icon">{{ t.icon }}</div>
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
                <span class="tc-val tc-green">🔒 Sous séquestre</span>
              </div>
              <div class="tc-row">
                <span class="tc-label">Départ prévu</span>
                <span class="tc-val">Lun. 12 jan. · 08h30</span>
              </div>
              <div class="tc-row">
                <span class="tc-label">Colis</span>
                <span class="tc-val">2 kg — Fragile</span>
              </div>
              <div class="tc-actions">
                <div class="tc-btn tc-btn-outline">💬 Chat</div>
                <div class="tc-btn tc-btn-solid">Confirmer la livraison</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════ DOWNLOAD CTA ═══════════════════ -->
    <section class="cta-section" id="download-section">
      <div class="cta-grain"></div>
      <div class="container cta-inner">
        <div class="cta-eyebrow">Rejoignez Sendora</div>
        <h2 class="cta-title">
          Prêt à envoyer,<br>ou à transporter ?
        </h2>
        <p class="cta-sub">Téléchargez l'application gratuitement. Créez votre compte en moins de 2 minutes.</p>

        <div class="cta-stores">
          <a href="https://apps.apple.com/app/sendora" target="_blank" rel="noopener" class="store-btn store-apple-dark">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div>
              <span class="store-sub">Télécharger sur</span>
              <span class="store-name">App Store</span>
            </div>
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.sendoraapp" target="_blank" rel="noopener" class="store-btn store-google-dark">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M3.18 23.76c.37.21.8.22 1.2.02l12.44-7.18-2.62-2.62-11.02 9.78zM20.77 10.34L18.21 8.8 15.3 11.7l2.9 2.9 2.58-1.49c.73-.42.73-1.35-.01-1.77zM1.02 1.44C.97 1.62.94 1.81.94 2.02v19.98c0 .2.03.39.08.57l.13.12L12.06 12l-.12-.12L1.02 1.44zM4.38.24L16.82 7.4 14.2 10.02 1.76.24C2.16.04 2.59.05 2.96.26L4.38.24z"/>
            </svg>
            <div>
              <span class="store-sub">Disponible sur</span>
              <span class="store-name">Google Play</span>
            </div>
          </a>
        </div>

        <p class="cta-note">Inscription gratuite · KYC sécurisé · Aucune CB requise pour commencer</p>
      </div>
    </section>

  </main>
</template>

<script lang="ts" setup>
const stats = [
  { value: '0 €',   label: "Frais d'inscription" },
  { value: '−60 %', label: 'vs. livraison traditionnelle' },
  { value: '100 %', label: 'Transporteurs vérifiés KYC' },
  { value: '24 h',  label: 'Délai moyen de réponse' },
]

const steps = [
  {
    icon: '📝',
    title: 'Publiez votre annonce',
    desc: "Décrivez votre colis (dimensions, poids, fragilité), indiquez les villes de départ et d'arrivée, choisissez vos dates et fixez votre budget. Ça prend moins de 2 minutes.",
  },
  {
    icon: '🤝',
    title: 'Choisissez un transporteur',
    desc: "Sendora vous suggère des transporteurs qui font déjà votre trajet. Consultez leurs profils vérifiés, leurs notes et leurs disponibilités, puis sélectionnez l'offre qui vous convient.",
  },
  {
    icon: '✅',
    title: 'Livraison & paiement automatique',
    desc: "Le transporteur remet le colis. Vous confirmez la réception dans l'application et le paiement est libéré instantanément. Le transporteur reçoit ses fonds sous 2 à 7 jours ouvrés.",
  },
]

const trust = [
  {
    icon: '🔒',
    title: 'Vérification KYC via Didit',
    desc: "Tous les transporteurs sont vérifiés par Didit, partenaire eIDAS de confiance.",
  },
  {
    icon: '💰',
    title: 'Escrow Stripe',
    desc: "Paiement bloqué jusqu'à confirmation de livraison. Aucun risque de perte.",
  },
  {
    icon: '🛡️',
    title: 'RGPD & données en Europe',
    desc: "Données chiffrées, hébergées sur AWS EU. Conformité totale au RGPD.",
  },
  {
    icon: '📱',
    title: 'Auth multifacteur',
    desc: "Connexion via Apple ID, Google ou email avec vérification renforcée.",
  },
]
</script>

<style scoped>
/* ═══ HERO ═══════════════════════════════════════════ */
.hero {
  position: relative;
  min-height: calc(100vh - 72px);
  display: flex; flex-direction: column; justify-content: center;
  overflow: hidden;
  background: var(--cream);
  padding: 3rem 0 2rem;
}
.hero-noise {
  position: absolute; inset: 0; pointer-events: none; z-index: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
  background-size: 200px 200px;
}
.hero-inner {
  position: relative; z-index: 1;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: clamp(2rem, 5vw, 5rem);
  align-items: center;
  padding-top: 3rem; padding-bottom: 4rem;
}
.hero-eyebrow {
  display: inline-flex; align-items: center; gap: 8px;
  font-size: .8rem; font-weight: 700; letter-spacing: .06em;
  text-transform: uppercase; color: var(--verdant);
  margin-bottom: 1.75rem;
}
.pulse-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--verdant-lt);
  box-shadow: 0 0 0 0 rgba(45,181,108,.4);
  animation: pulse-ring 2.5s ease infinite;
}
@keyframes pulse-ring {
  0%   { box-shadow: 0 0 0 0 rgba(45,181,108,.5); }
  70%  { box-shadow: 0 0 0 8px rgba(45,181,108,0); }
  100% { box-shadow: 0 0 0 0 rgba(45,181,108,0); }
}
.hero-headline {
  font-family: var(--font-display);
  font-size: clamp(2.8rem, 5.5vw, 4.8rem);
  line-height: 1.03;
  letter-spacing: -.04em;
  color: var(--ink);
  margin-bottom: 1.5rem;
}
.hero-italic {
  font-style: italic;
  color: var(--verdant);
}
.hero-body {
  font-size: 1.1rem; line-height: 1.8;
  color: var(--text-secondary);
  max-width: 500px; margin-bottom: 1.75rem;
}
.hero-pills {
  display: flex; flex-wrap: wrap; gap: 8px;
  margin-bottom: 2.25rem;
}
.pill {
  display: inline-flex; align-items: center;
  background: rgba(26,102,64,.09);
  color: var(--verdant);
  font-size: .78rem; font-weight: 700;
  padding: 5px 12px; border-radius: var(--radius-xl);
  border: 1px solid rgba(26,102,64,.15);
}
.hero-cta {
  display: flex; flex-wrap: wrap; gap: 12px;
  margin-bottom: 1.25rem;
}
.store-btn {
  display: inline-flex; align-items: center; gap: 12px;
  padding: 13px 20px; border-radius: 14px;
  transition: transform var(--transition), box-shadow var(--transition);
  cursor: pointer;
}
.store-btn:hover { transform: translateY(-3px); box-shadow: var(--shadow); }
.store-btn > div { display: flex; flex-direction: column; text-align: left; }
.store-sub  { font-size: .68rem; opacity: .7; line-height: 1; }
.store-name { font-size: .98rem; font-weight: 800; line-height: 1.3; }
.store-apple  { background: var(--ink); color: var(--white); }
.store-google { background: var(--white); color: var(--ink); border: 1.5px solid var(--border-strong); }
.hero-fine {
  font-size: .78rem; color: var(--text-muted);
}

/* ── Phone mockup ── */
.hero-visual {
  display: flex; justify-content: center; align-items: center;
  position: relative; padding: 2rem 0;
}
.phone-wrap {
  position: relative;
  animation: float-phone 5s ease-in-out infinite;
}
@keyframes float-phone {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-14px); }
}
.phone {
  width: 248px; height: 498px;
  background: linear-gradient(160deg, #1a2e1d, #0e1a10);
  border-radius: 44px;
  padding: 14px;
  box-shadow:
    0 50px 100px rgba(0,0,0,.35),
    0 0 0 1px rgba(255,255,255,.07) inset,
    0 1px 0 rgba(255,255,255,.12) inset;
  position: relative;
}
.phone-island {
  position: absolute; top: 18px; left: 50%;
  transform: translateX(-50%);
  width: 88px; height: 26px;
  background: #0b1109; border-radius: 14px; z-index: 10;
}
.phone-screen {
  width: 100%; height: 100%;
  background: var(--cream);
  border-radius: 32px; overflow: hidden;
  display: flex; flex-direction: column;
}
.screen-status {
  height: 44px; display: flex; align-items: flex-end;
  justify-content: space-between; padding: 0 18px 6px;
  background: var(--cream);
}
.screen-time { font-size: .68rem; font-weight: 800; color: var(--ink); }
.screen-icons { display: flex; gap: 4px; align-items: center; }
.icon-signal { width: 12px; height: 8px; background: var(--ink); clip-path: polygon(0 100%,33% 50%,66% 25%,100% 0,100% 100%); }
.icon-wifi   { width: 10px; height: 7px; background: var(--ink); border-radius: 0 0 50% 50%; clip-path: ellipse(50% 100% at 50% 100%); opacity: .8; }
.icon-battery{ width: 16px; height: 8px; border: 1.5px solid var(--ink); border-radius: 2px; position: relative; }
.icon-battery::after { content:''; position:absolute; right:-4px; top:2px; width:3px; height:4px; background:var(--ink); border-radius:1px; }
.screen-header {
  display: flex; align-items: center; gap: 8px;
  padding: 4px 14px 10px;
}
.screen-logo { width:24px;height:24px;background:var(--verdant);border-radius:7px;display:flex;align-items:center;justify-content:center;}
.sl-dot { width:8px;height:8px;border-radius:50%;background:var(--gold); }
.screen-title { flex:1; font-size:.75rem;font-weight:800;color:var(--ink); }
.screen-avatar { width:22px;height:22px;border-radius:50%;background:linear-gradient(135deg,var(--verdant-lt),var(--gold)); }
.screen-search {
  margin: 0 12px 10px; padding: 7px 10px;
  background: rgba(13,26,18,.06); border-radius: 10px;
  display: flex; align-items: center; gap: 6px;
  font-size: .68rem; color: var(--text-muted); font-weight: 600;
}
.search-icon { font-size: .8rem; }
.screen-map {
  margin: 0 12px; height: 110px;
  background: linear-gradient(145deg, #dff0e6, #c8e8d4);
  border-radius: 12px; position: relative; overflow: hidden;
}
.map-road {
  position: absolute; top: 50%; left: 5%; right: 5%;
  height: 3px; background: rgba(255,255,255,.7);
  transform: translateY(-50%); border-radius: 2px;
}
.map-road::before, .map-road::after {
  content:''; position:absolute; top:50%; height:1px;
  background:var(--verdant-lt); opacity:.5;
}
.map-road::before { width:100%; left:0; top:-4px; }
.map-road::after  { width:100%; left:0; top:4px; }
.map-pin {
  position: absolute; width:30px;height:30px;
  background:white; border-radius:50%;
  display:flex;align-items:center;justify-content:center;
  font-size:14px; box-shadow:0 2px 8px rgba(0,0,0,.2);
}
.mp-a { top:28%; left:10%; }
.mp-b { top:28%; right:10%; }
.map-car {
  position:absolute; top:55%; left:55%;
  font-size:18px;
  animation: drive 4s ease-in-out infinite;
}
@keyframes drive {
  0%,100% { transform:translateX(0); }
  50%      { transform:translateX(-30px); }
}
.screen-label {
  font-size:.62rem;font-weight:800;letter-spacing:.06em;
  text-transform:uppercase; color:var(--text-muted);
  padding: 8px 12px 4px;
}
.match-card {
  margin: 0 12px 6px;
  background:white; border-radius:10px;
  padding:8px 10px; display:flex; align-items:center; gap:8px;
  box-shadow: 0 2px 8px rgba(0,0,0,.07);
}
.mc-avatar { width:26px;height:26px;border-radius:50%;flex-shrink:0; }
.a1 { background:linear-gradient(135deg,var(--verdant-lt),var(--verdant)); }
.a2 { background:linear-gradient(135deg,var(--gold-lt),var(--gold)); }
.mc-info { flex:1; }
.mc-name { font-size:.67rem;font-weight:800;color:var(--ink);line-height:1.2; }
.mc-route{ font-size:.6rem;color:var(--text-muted); }
.mc-price { font-size:.8rem;font-weight:900;color:var(--verdant); }

/* Floating badges */
.badge {
  position:absolute; background:white;
  border-radius:14px; padding:10px 14px;
  box-shadow:var(--shadow); display:flex; align-items:center; gap:10px;
  white-space:nowrap; font-size:.78rem;
}
.badge-delivered { bottom:70px;left:-60px; animation:float-b1 4.5s ease-in-out infinite; }
.badge-rating    { top:80px;right:-50px; animation:float-b2 5s ease-in-out infinite; }
.badge-save      { top:200px;right:-60px; animation:float-b3 4s ease-in-out infinite 1s; }
@keyframes float-b1 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
@keyframes float-b2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
@keyframes float-b3 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
.bd-icon { font-size:1.2rem; }
.bd-title { font-weight:800;color:var(--ink);font-size:.82rem;line-height:1.2; }
.bd-sub   { color:var(--text-muted);font-size:.72rem; }
.bd-stars { font-size:1rem;color:var(--gold); }

/* Scroll hint */
.hero-scroll-hint {
  position:relative;z-index:1;display:flex;justify-content:center;
  padding-bottom:1.5rem;
}
.scroll-line {
  width:1px;height:48px;
  background:linear-gradient(to bottom,var(--verdant),transparent);
  animation:scroll-fade 2s ease-in-out infinite;
}
@keyframes scroll-fade {
  0%,100%{opacity:.3;transform:scaleY(.8)}
  50%{opacity:1;transform:scaleY(1)}
}

/* ═══ STATS STRIP ════════════════════════════════════ */
.stats-strip {
  background: var(--ink);
  padding: 2.5rem 0;
  overflow: hidden;
}
.stats-row {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 1rem; text-align: center;
}
.stat-item { padding: .5rem 1rem; }
.stat-val {
  display: block;
  font-family: var(--font-display);
  font-size: 2.4rem; font-weight: 400;
  color: var(--gold); line-height: 1;
  margin-bottom: .35rem;
}
.stat-lbl {
  font-size: .8rem; font-weight: 600; letter-spacing: .03em;
  color: rgba(255,255,255,.6);
}

/* ═══ SECTION COMMONS ════════════════════════════════ */
.section-head {
  text-align:center; max-width:680px; margin:0 auto 4rem;
}
.section-tag {
  display:inline-block;
  font-size:.72rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;
  color:var(--verdant);background:rgba(26,102,64,.09);
  padding:4px 12px;border-radius:var(--radius-xl);margin-bottom:1.1rem;
}
.section-title {
  font-family:var(--font-display);
  font-size:clamp(1.9rem,4vw,2.9rem);
  line-height:1.12;letter-spacing:-.03em;
  color:var(--ink);margin-bottom:.85rem;
}
.section-title em { font-style:italic;color:var(--verdant); }
.section-sub {
  font-size:1rem;color:var(--text-secondary);line-height:1.75;
}

/* ═══ HOW IT WORKS ════════════════════════════════════ */
.how-section {
  padding: 7rem 0;
  background: var(--cream-deep);
}
.steps-track {
  max-width: 680px; margin: 0 auto;
  display: flex; flex-direction: column;
}
.step-item {
  display:grid;grid-template-columns:56px 1fr;gap:1.5rem;
}
.step-left {
  display:flex;flex-direction:column;align-items:center;gap:0;
}
.step-number {
  width:44px;height:44px;
  display:flex;align-items:center;justify-content:center;
  background:var(--verdant);color:white;
  border-radius:50%; font-family:var(--font-display);
  font-size:1rem;font-weight:400;flex-shrink:0;
}
.step-line {
  flex:1;width:2px;background:linear-gradient(to bottom,var(--verdant-lt),transparent);
  margin:.5rem 0;min-height:3rem;
}
.step-body {
  display:flex;gap:1.25rem;align-items:flex-start;
  padding-bottom:3rem;
}
.step-item:last-child .step-body { padding-bottom:0; }
.step-emoji { font-size:2rem;flex-shrink:0;margin-top:.1rem; }
.step-text h3 { font-size:1.15rem;font-weight:800;color:var(--ink);margin-bottom:.5rem; }
.step-text p  { font-size:.95rem;color:var(--text-secondary);line-height:1.75; }

/* ═══ ROLES ══════════════════════════════════════════ */
.roles-section { padding:7rem 0; }
.roles-grid {
  display:grid;grid-template-columns:1fr 1fr;
  gap:2rem;
}
.role-card {
  border-radius:var(--radius-lg);padding:clamp(2rem,4vw,3rem);
  position:relative;overflow:hidden;
}
.role-sender {
  background:var(--cream-deep);
  border:1.5px solid rgba(26,102,64,.15);
}
.role-transporter {
  background:var(--ink);
}
.role-eyebrow {
  font-size:.72rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;
  margin-bottom:1rem;
}
.role-sender .role-eyebrow     { color:var(--verdant); }
.role-transporter .role-eyebrow{ color:var(--gold); }
.role-card h2 {
  font-family:var(--font-display);
  font-size:clamp(1.6rem,3vw,2.2rem);
  line-height:1.15;letter-spacing:-.03em;
  margin-bottom:1.1rem;
}
.role-sender h2      { color:var(--ink); }
.role-transporter h2 { color:var(--white); }
.role-sender h2 em      { font-style:italic;color:var(--verdant); }
.role-transporter h2 em { font-style:italic;color:var(--gold); }
.role-card p {
  font-size:.95rem;line-height:1.75;margin-bottom:1.5rem;
}
.role-sender p      { color:var(--text-secondary); }
.role-transporter p { color:rgba(255,255,255,.7); }
.role-checklist {
  list-style:none;display:grid;gap:.6rem;margin-bottom:2rem;
}
.role-checklist li {
  font-size:.9rem;font-weight:500;padding-left:1.4rem;position:relative;
}
.role-checklist li::before {
  content:'✓';position:absolute;left:0;
  font-weight:900;
}
.role-sender .role-checklist li          { color:var(--text-secondary); }
.role-sender .role-checklist li::before  { color:var(--verdant); }
.role-transporter .role-checklist li     { color:rgba(255,255,255,.75); }
.role-transporter .role-checklist li::before { color:var(--gold); }
.role-action {
  display:inline-flex;align-items:center;
  font-weight:800;font-size:.9rem;
  padding:.7rem 1.4rem;border-radius:var(--radius-xl);
  transition:transform var(--transition),box-shadow var(--transition);
}
.role-action:hover { transform:translateY(-2px);box-shadow:var(--shadow); }
.role-action-dark  { background:var(--ink);color:var(--white); }
.role-action-light { background:var(--gold);color:var(--ink); }

/* ═══ FEATURES BENTO ═════════════════════════════════ */
.features-section { padding:7rem 0;background:var(--cream-deep); }
.features-bento {
  display:grid;
  grid-template-columns:repeat(3,1fr);
  grid-template-rows:auto auto auto;
  gap:1.25rem;
}
.feat-card {
  background:var(--bg-card);border:1px solid var(--border);
  border-radius:var(--radius-lg);padding:2rem;
  transition:transform var(--transition),box-shadow var(--transition),border-color var(--transition);
}
.feat-card:hover {
  transform:translateY(-4px);box-shadow:var(--shadow);
  border-color:rgba(26,102,64,.2);
}
.feat-large       { grid-column:span 2; }
.feat-large-right { grid-column:span 2; grid-column-start:2; }
.feat-wide        { grid-column:span 3; }
.feat-icon-wrap   { font-size:2rem;margin-bottom:1rem; }
.feat-card h3     { font-size:1.05rem;font-weight:800;color:var(--ink);margin-bottom:.6rem; }
.feat-card p      { font-size:.9rem;color:var(--text-secondary);line-height:1.75; }

/* ═══ TRUST ══════════════════════════════════════════ */
.trust-section { padding:7rem 0; }
.trust-inner {
  display:grid;grid-template-columns:1fr 1fr;
  gap:clamp(2rem,5vw,5rem);align-items:center;
}
.trust-content { display:flex;flex-direction:column;gap:1rem; }
.trust-content .section-title { text-align:left;margin-bottom:.25rem; }
.trust-content .section-sub   { text-align:left;margin-bottom:1rem; }
.trust-badges { display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:.5rem; }
.trust-badge {
  display:flex;align-items:flex-start;gap:.85rem;
  background:var(--cream-deep);border:1px solid var(--border);
  border-radius:var(--radius);padding:1.1rem;
}
.tb-icon  { font-size:1.4rem;flex-shrink:0; }
.tb-title { font-size:.88rem;font-weight:800;color:var(--ink);margin-bottom:.2rem; }
.tb-desc  { font-size:.8rem;color:var(--text-secondary);line-height:1.5; }

/* Trust card visual */
.trust-visual { display:flex;justify-content:center; }
.trust-card {
  background:var(--white);border:1.5px solid var(--border);
  border-radius:var(--radius-lg);padding:1.5rem;
  max-width:345px;width:100%;box-shadow:var(--shadow-lg);
}
.tc-header {
  display:flex;align-items:center;gap:12px;margin-bottom:1rem;
}
.tc-avatar {
  width:40px;height:40px;border-radius:50%;
  background:linear-gradient(135deg,var(--verdant-lt),var(--verdant));flex-shrink:0;
}
.tc-name { font-size:.92rem;font-weight:800;color:var(--ink); }
.tc-meta { font-size:.78rem;color:var(--text-muted); }
.tc-badge {
  margin-left:auto;font-size:.72rem;font-weight:800;
  padding:3px 10px;border-radius:var(--radius-xl);
}
.verified { background:rgba(26,102,64,.1);color:var(--verdant); }
.tc-divider { height:1px;background:var(--border);margin-bottom:1rem; }
.tc-row {
  display:flex;justify-content:space-between;align-items:center;
  padding:.45rem 0;border-bottom:1px solid var(--border);
}
.tc-row:last-of-type { border-bottom:0; }
.tc-label { font-size:.8rem;color:var(--text-muted);font-weight:600; }
.tc-val   { font-size:.82rem;font-weight:700;color:var(--ink); }
.tc-green { color:var(--verdant); }
.tc-actions {
  display:flex;gap:.75rem;margin-top:1.1rem;
}
.tc-btn {
  flex:1;text-align:center;padding:.6rem;border-radius:10px;
  font-size:.78rem;font-weight:800;cursor:pointer;
}
.tc-btn-outline { border:1.5px solid var(--border);color:var(--ink); }
.tc-btn-solid   { background:var(--verdant);color:white; }

/* ═══ CTA SECTION ════════════════════════════════════ */
.cta-section {
  position:relative;padding:8rem 0;overflow:hidden;text-align:center;
  background:var(--ink);
}
.cta-grain {
  position:absolute;inset:0;pointer-events:none;
  background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.06'/%3E%3C/svg%3E");
  background-size:200px;
  background-blend-mode:overlay;
}
.cta-inner { position:relative;z-index:1; }
.cta-eyebrow {
  font-size:.72rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;
  color:var(--gold);margin-bottom:1.25rem;
}
.cta-title {
  font-family:var(--font-display);
  font-size:clamp(2.4rem,5vw,4rem);
  line-height:1.08;letter-spacing:-.04em;
  color:var(--white);margin-bottom:1.1rem;
}
.cta-sub {
  font-size:1.05rem;color:rgba(255,255,255,.65);
  max-width:460px;margin:0 auto 2.5rem;line-height:1.75;
}
.cta-stores {
  display:flex;flex-wrap:wrap;gap:14px;justify-content:center;
  margin-bottom:1.25rem;
}
.store-apple-dark {
  background:rgba(255,255,255,.12);
  border:1.5px solid rgba(255,255,255,.2);
  color:white;
}
.store-apple-dark:hover { background:rgba(255,255,255,.2); }
.store-google-dark {
  background:var(--gold);
  color:var(--ink);
}
.store-google-dark:hover { background:var(--gold-lt); }
.cta-note {
  font-size:.78rem;color:rgba(255,255,255,.4);
}

/* ═══ RESPONSIVE ════════════════════════════════════ */
@media (max-width: 1000px) {
  .features-bento { grid-template-columns:1fr 1fr; }
  .feat-large, .feat-large-right, .feat-wide { grid-column:span 2; }
  .feat-large-right { grid-column-start:auto; }
}
@media (max-width: 860px) {
  .hero-inner  { grid-template-columns:1fr; text-align:center; padding-top:2rem; }
  .hero-body   { max-width:100%;margin-left:auto;margin-right:auto; }
  .hero-pills  { justify-content:center; }
  .hero-cta    { justify-content:center; }
  .hero-visual { display:none; }
  .hero-scroll-hint { display:none; }
  .stats-row   { grid-template-columns:repeat(2,1fr); }
  .roles-grid  { grid-template-columns:1fr; }
  .trust-inner { grid-template-columns:1fr; }
  .trust-visual { order:-1; }
}
@media (max-width: 640px) {
  .features-bento { grid-template-columns:1fr; }
  .feat-large, .feat-large-right, .feat-wide { grid-column:span 1; }
  .trust-badges   { grid-template-columns:1fr; }
  .hero-headline  { font-size:2.4rem; }
}
</style>
