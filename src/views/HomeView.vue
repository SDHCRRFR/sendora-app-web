<template>
  <main class="home">

    <!-- ═══════════════════ HERO ═══════════════════ -->
    <section class="hero">
      <div class="hero-bg">
        <div class="hero-blob blob1"></div>
        <div class="hero-blob blob2"></div>
        <div class="hero-grid"></div>
      </div>
      <div class="container hero-inner">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="badge-dot"></span>
            Déjà disponible en bêta
          </div>
          <h1 class="hero-title">
            Expédiez malin,<br>
            <em>gagnez en chemin.</em>
          </h1>
          <p class="hero-sub">
            Sendora connecte expéditeurs et transporteurs particuliers pour
            une livraison de colis accessible, économique et de confiance.
            Votre voisin voyage ? Il peut transporter votre colis.
          </p>
          <div class="hero-actions" id="download">
            <a href="https://apps.apple.com/app/sendora" target="_blank" rel="noopener" class="btn-store btn-apple">
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              <div class="store-label">
                <span class="store-sub">Télécharger sur</span>
                <span class="store-name">App Store</span>
              </div>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.sendoraapp" target="_blank" rel="noopener" class="btn-store btn-google">
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M3.18 23.76c.37.21.8.22 1.2.02l12.44-7.18-2.62-2.62-11.02 9.78zM20.77 10.34L18.21 8.8 15.3 11.7l2.9 2.9 2.58-1.49c.73-.42.73-1.35-.01-1.77zM1.02 1.44C.97 1.62.94 1.81.94 2.02v19.98c0 .2.03.39.08.57l.13.12L12.06 12l-.12-.12L1.02 1.44zM4.38.24L16.82 7.4 14.2 10.02 1.76.24C2.16.04 2.59.05 2.96.26L4.38.24z"/></svg>
              <div class="store-label">
                <span class="store-sub">Disponible sur</span>
                <span class="store-name">Google Play</span>
              </div>
            </a>
          </div>
          <p class="hero-note">Gratuit · iOS &amp; Android · Vérification d'identité intégrée</p>
        </div>
        <div class="hero-visual">
          <div class="phone-mockup">
            <div class="phone-screen">
              <div class="phone-status"></div>
              <div class="app-preview">
                <div class="app-header-preview">
                  <div class="app-logo-preview"></div>
                  <div class="app-title-preview"></div>
                </div>
                <div class="map-preview">
                  <div class="map-pin pin1">
                    <div class="pin-icon">📦</div>
                  </div>

                  <div class="map-pin pin2">
<i class="fa-solid fa-car"></i>                  </div>
                  <div class="map-route"></div>
                </div>
                <div class="card-preview">
                  <div class="card-avatar"></div>
                  <div class="card-info">
                    <div class="card-line line-short"></div>
                    <div class="card-line line-long"></div>
                  </div>
                  <div class="card-price">12€</div>
                </div>
                <div class="card-preview card-preview2">
                  <div class="card-avatar av2"></div>
                  <div class="card-info">
                    <div class="card-line line-medium"></div>
                    <div class="card-line line-short"></div>
                  </div>
                  <div class="card-price">8€</div>
                </div>
              </div>
            </div>
            <div class="phone-notch"></div>
          </div>
          <div class="hero-float float1">
            <span>📦</span>
            <div>
              <p class="float-title">Colis livré !</p>
              <p class="float-sub">Paris → Lyon · 2h</p>
            </div>
          </div>
          <div class="hero-float float2">
            <span>⭐</span>
            <div>
              <p class="float-title">4.9 / 5</p>
              <p class="float-sub">Note moyenne</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════ STATS ═══════════════════ -->
    <section class="stats-band">
      <div class="container stats-inner">
        <div class="stat" v-for="s in stats" :key="s.label">
          <span class="stat-value">{{ s.value }}</span>
          <span class="stat-label">{{ s.label }}</span>
        </div>
      </div>
    </section>

    <!-- ═══════════════════ FEATURES ═══════════════════ -->
    <section class="features">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Pourquoi Sendora ?</span>
          <h2>La livraison repensée<br><em>pour tout le monde</em></h2>
        </div>
        <div class="features-grid">
          <div class="feature-card" v-for="f in features" :key="f.title">
            <div class="feature-icon">{{ f.icon }}</div>
            <h3>{{ f.title }}</h3>
            <p>{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════ HOW IT WORKS ═══════════════════ -->
    <section class="how">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Comment ça marche ?</span>
          <h2>Simple en <em>3 étapes</em></h2>
        </div>
        <div class="steps">
          <div class="step" v-for="(step, i) in steps" :key="step.title">
            <div class="step-num">{{ String(i+1).padStart(2,'0') }}</div>
            <div class="step-content">
              <div class="step-icon">{{ step.icon }}</div>
              <h3>{{ step.title }}</h3>
              <p>{{ step.desc }}</p>
            </div>
            <div v-if="i < steps.length - 1" class="step-connector"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════ DUAL ROLE ═══════════════════ -->
    <section class="roles">
      <div class="container roles-grid">
        <div class="role-card role-sender">
          <span class="role-emoji">📦</span>
          <h3>Vous expédiez ?</h3>
          <p>Publiez votre annonce, choisissez un transporteur vérifié et suivez votre colis en temps réel. Économisez jusqu'à 60% par rapport aux transporteurs traditionnels.</p>
          <ul class="role-list">
            <li>✓ Prix transparents et fixes</li>
            <li>✓ Transporteurs vérifiés (KYC)</li>
            <li>✓ Suivi en temps réel</li>
            <li>✓ Paiement sécurisé via Stripe</li>
          </ul>
        </div>
        <div class="role-card role-transporter">
          <span class="role-emoji">🚗</span>
          <h3>Vous transportez ?</h3>
          <p>Transformez vos trajets quotidiens en revenus complémentaires. Acceptez les colis sur votre route et recevez vos paiements directement sur votre compte.</p>
          <ul class="role-list">
            <li>✓ Revenus complémentaires</li>
            <li>✓ Flexibilité totale</li>
            <li>✓ Paiement rapide (Stripe Connect)</li>
            <li>✓ Interface intuitive</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ═══════════════════ TRUST ═══════════════════ -->
    <section class="trust">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Sécurité & Confiance</span>
          <h2>Votre sécurité,<br><em>notre priorité</em></h2>
        </div>
        <div class="trust-grid">
          <div class="trust-item" v-for="t in trust" :key="t.title">
            <div class="trust-icon">{{ t.icon }}</div>
            <div>
              <h4>{{ t.title }}</h4>
              <p>{{ t.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════ DOWNLOAD CTA ═══════════════════ -->
    <section class="cta-section" id="download-section">
      <div class="cta-bg"></div>
      <div class="container cta-inner">
        <h2>Prêt à envoyer<br><em>ou transporter ?</em></h2>
        <p>Rejoignez la communauté Sendora. Téléchargez l'application gratuitement.</p>
        <div class="hero-actions">
          <a href="https://apps.apple.com/app/sendora" target="_blank" rel="noopener" class="btn-store btn-apple">
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            <div class="store-label">
              <span class="store-sub">Télécharger sur</span>
              <span class="store-name">App Store</span>
            </div>
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.sendoraapp" target="_blank" rel="noopener" class="btn-store btn-google">
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M3.18 23.76c.37.21.8.22 1.2.02l12.44-7.18-2.62-2.62-11.02 9.78zM20.77 10.34L18.21 8.8 15.3 11.7l2.9 2.9 2.58-1.49c.73-.42.73-1.35-.01-1.77zM1.02 1.44C.97 1.62.94 1.81.94 2.02v19.98c0 .2.03.39.08.57l.13.12L12.06 12l-.12-.12L1.02 1.44zM4.38.24L16.82 7.4 14.2 10.02 1.76.24C2.16.04 2.59.05 2.96.26L4.38.24z"/></svg>
            <div class="store-label">
              <span class="store-sub">Disponible sur</span>
              <span class="store-name">Google Play</span>
            </div>
          </a>
        </div>
      </div>
    </section>

  </main>
</template>

<script lang="ts" setup>
const stats = [
  { value: '100%', label: 'Transporteurs vérifiés (KYC)' },
  { value: '0€',   label: "Frais d'inscription" },
  { value: '−60%', label: 'vs. livraison traditionnelle' },
  { value: '24/7', label: 'Support disponible' },
]

const features = [
  {
    icon: '🔐',
    title: 'Identité vérifiée',
    desc: "Chaque transporteur passe par une vérification d'identité complète (KYC) avant de pouvoir transporter un colis.",
  },
  {
    icon: '💳',
    title: 'Paiement sécurisé',
    desc: 'Votre argent est sécurisé par Stripe et libéré uniquement après confirmation de la livraison.',
  },
  {
    icon: '📍',
    title: 'Suivi en temps réel',
    desc: "Suivez l'avancée de votre colis et communiquez directement avec votre transporteur via le chat intégré.",
  },
  {
    icon: '💬',
    title: 'Chat intégré',
    desc: 'Coordonnez directement avec votre transporteur ou expéditeur via la messagerie sécurisée de l\'application.',
  },
  {
    icon: '🌍',
    title: 'Partout en France',
    desc: 'Que ce soit entre villes voisines ou à travers tout le pays, trouvez un transporteur sur votre route.',
  },
  {
    icon: '⭐',
    title: 'Système de notation',
    desc: 'Évaluez chaque transaction pour maintenir une communauté de confiance et de qualité.',
  },
]

const steps = [
  {
    icon: '📝',
    title: 'Publiez votre annonce',
    desc: "Décrivez votre colis, indiquez les villes de départ et d'arrivée, et fixez votre budget.",
  },
  {
    icon: '🤝',
    title: 'Choisissez un transporteur',
    desc: 'Parcourez les offres des transporteurs disponibles sur votre trajet et sélectionnez le meilleur.',
  },
  {
    icon: '✅',
    title: 'Livraison & paiement',
    desc: "Le transporteur livre votre colis. Confirmez la réception et le paiement est libéré automatiquement.",
  },
]

const trust = [
  {
    icon: '🔒',
    title: 'Vérification KYC complète',
    desc: "Tous les transporteurs sont vérifiés via Didit, notre partenaire de vérification d'identité agréé.",
  },
  {
    icon: '💰',
    title: 'Paiement sous séquestre',
    desc: 'Votre paiement est bloqué sur un compte sécurisé et libéré uniquement à la livraison confirmée.',
  },
  {
    icon: '🛡️',
    title: 'Données chiffrées',
    desc: 'Vos données personnelles sont chiffrées et hébergées en Europe, conformément au RGPD.',
  },
  {
    icon: '📱',
    title: 'Double authentification',
    desc: 'Connexion sécurisée via Apple ID, Google ou email avec authentification renforcée.',
  },
]
</script>

<style scoped>
/* ─── Hero ─────────────────────────────────────────── */
.hero {
  position: relative;
  min-height: calc(100vh - 76px);
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: 2rem;
  padding-bottom: 2.5rem;
}
.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.hero-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.18;
}
.blob1 {
  width: 600px; height: 600px;
  background: var(--brand-400);
  top: -100px; right: -100px;
}
.blob2 {
  width: 400px; height: 400px;
  background: var(--accent);
  bottom: -80px; left: 10%;
}
.hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, rgba(15,95,48,.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(15,95,48,.04) 1px, transparent 1px);
  background-size: 40px 40px;
}
.hero-inner {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: clamp(2rem, 6vw, 5rem);
  align-items: center;
  padding-top: 4rem;
  padding-bottom: 5rem;
}
.hero-content {
  position: relative;
  z-index: 1;
  max-width: 620px;
}
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(15,95,48,.08);
  border: 1px solid rgba(15,95,48,.15);
  color: var(--brand-700);
  padding: 6px 14px;
  border-radius: var(--radius-xl);
  font-size: .82rem;
  font-weight: 600;
  letter-spacing: .02em;
  margin-bottom: 28px;
}
.badge-dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: var(--brand-500);
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: .5; transform: scale(1.4); }
}
.hero-title {
  font-family: var(--font-display);
  font-size: clamp(2.6rem, 5vw, 4.4rem);
  line-height: 1.05;
  letter-spacing: -0.04em;
  color: var(--text-primary);
  margin-bottom: 24px;
}
.hero-title em {
  font-style: italic;
  color: var(--brand-700);
}
.hero-sub {
  font-size: 1.08rem;
  color: var(--text-secondary);
  line-height: 1.8;
  max-width: 540px;
  margin-bottom: 40px;
}
.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}
.btn-store {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 22px;
  border-radius: var(--radius);
  font-weight: 500;
  transition: transform var(--transition), box-shadow var(--transition);
  border: 2px solid transparent;
}
.btn-store:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow);
}
.btn-apple {
  background: var(--text-primary);
  color: white;
}
.btn-google {
  background: white;
  color: var(--text-primary);
  border-color: var(--border);
}
.store-label {
  display: flex;
  flex-direction: column;
  text-align: left;
}
.store-sub {
  font-size: .7rem;
  opacity: .7;
  line-height: 1;
}
.store-name {
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.3;
}
.hero-note {
  font-size: .82rem;
  color: var(--text-muted);
}

/* Phone mockup */
.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.phone-mockup {
  width: 260px;
  height: 520px;
  background: linear-gradient(135deg, #1a2e1a, #0f1a0d);
  border-radius: 40px;
  padding: 16px;
  box-shadow: 0 40px 80px rgba(0,0,0,.3), 0 0 0 1px rgba(255,255,255,.08) inset;
  position: relative;
  animation: float 4s ease-in-out infinite;
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-12px); }
}
.phone-notch {
  position: absolute;
  top: 20px; left: 50%;
  transform: translateX(-50%);
  width: 80px; height: 24px;
  background: #0f1a0d;
  border-radius: 12px;
  z-index: 10;
}
.phone-screen {
  width: 100%;
  height: 100%;
  background: var(--bg);
  border-radius: 28px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.phone-status {
  height: 36px;
  background: var(--brand-700);
  flex-shrink: 0;
}
.app-preview {
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}
.app-header-preview {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
}
.app-logo-preview {
  width: 28px; height: 28px;
  background: var(--brand-700);
  border-radius: 8px;
}
.app-title-preview {
  flex: 1; height: 10px;
  background: var(--border);
  border-radius: 4px;
}
.map-preview {
  background: linear-gradient(135deg, #e8f5ee, #d0edd9);
  border-radius: 12px;
  height: 120px;
  position: relative;
  overflow: hidden;
}
.map-route {
  position: absolute;
  top: 50%; left: 20%;
  width: 60%; height: 2px;
  background: var(--brand-500);
  transform: translateY(-50%);
  border-radius: 2px;
}
.map-pin {
  position: absolute;
  width: 32px; height: 32px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0,0,0,.15);
  font-size: 14px;
}
.pin1 { top: 30%; left: 15%; }
.pin2 { top: 30%; right: 15%; }
.card-preview {
  background: white;
  border-radius: 10px;
  padding: 10px 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: var(--shadow-sm);
}
.card-avatar {
  width: 32px; height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--brand-300), var(--brand-600));
  flex-shrink: 0;
}
.card-avatar.av2 {
  background: linear-gradient(135deg, var(--accent), #e8a000);
}
.card-info { flex: 1; display: flex; flex-direction: column; gap: 5px; }
.card-line {
  height: 7px;
  background: var(--border);
  border-radius: 4px;
}
.line-short { width: 60%; }
.line-long  { width: 90%; }
.line-medium{ width: 75%; }
.card-price {
  font-size: .85rem;
  font-weight: 700;
  color: var(--brand-700);
  flex-shrink: 0;
}

/* Floating badges */
.hero-float {
  position: absolute;
  background: white;
  border-radius: var(--radius);
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: var(--shadow);
  font-size: .82rem;
  white-space: nowrap;
  animation: floatBadge 5s ease-in-out infinite;
}
.float1 { bottom: 80px; left: -40px; animation-delay: 0.5s; }
.float2 { top: 100px; right: -20px; animation-delay: 2s; }
.hero-float span { font-size: 1.4rem; }
.float-title { font-weight: 700; font-size: .85rem; }
.float-sub { color: var(--text-muted); font-size: .75rem; }
@keyframes floatBadge {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-6px); }
}

/* ─── Stats ─────────────────────────────────────────── */
.stats-band {
  background: var(--brand-700);
  padding: 40px 0;
}
.stats-inner {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  text-align: center;
}
.stat-value {
  display: block;
  font-family: var(--font-display);
  font-size: 2.2rem;
  color: var(--accent);
  line-height: 1;
  margin-bottom: 6px;
}
.stat-label {
  font-size: .85rem;
  color: rgba(255,255,255,0.7);
  font-weight: 500;
}

/* ─── Sections commons ───────────────────────────────── */
.section-header {
  text-align: center;
  margin-bottom: 64px;
}
.section-tag {
  display: inline-block;
  font-size: .78rem;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--brand-600);
  background: rgba(15,95,48,.07);
  padding: 5px 14px;
  border-radius: var(--radius-xl);
  margin-bottom: 16px;
}
.section-header h2 {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  line-height: 1.2;
  letter-spacing: -.02em;
}
.section-header h2 em {
  font-style: italic;
  color: var(--brand-700);
}

/* ─── Features ───────────────────────────────────────── */
.features {
  padding: 100px 0;
}
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.feature-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 36px 32px;
  transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);
}
.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow);
  border-color: rgba(15,95,48,.2);
}
.feature-icon {
  font-size: 2rem;
  margin-bottom: 16px;
}
.feature-card h3 {
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: var(--text-primary);
}
.feature-card p {
  font-size: .9rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

/* ─── Steps ──────────────────────────────────────────── */
.how {
  padding: 100px 0;
  background: linear-gradient(180deg, var(--bg) 0%, rgba(15,95,48,.03) 100%);
}
.steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  position: relative;
}
.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 32px;
  position: relative;
}
.step-num {
  font-family: var(--font-display);
  font-size: 4rem;
  color: rgba(15,95,48,.08);
  line-height: 1;
  margin-bottom: -8px;
  font-weight: 400;
}
.step-content {
  background: white;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 32px 24px;
  width: 100%;
}
.step-icon { font-size: 2rem; margin-bottom: 12px; }
.step-content h3 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 10px;
}
.step-content p {
  font-size: .88rem;
  color: var(--text-secondary);
  line-height: 1.7;
}
.step-connector {
  position: absolute;
  top: 56px;
  right: -16px;
  width: 32px; height: 2px;
  background: var(--brand-200);
  z-index: 1;
}

/* ─── Roles ──────────────────────────────────────────── */
.roles { padding: 100px 0; }
.roles-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}
.role-card {
  border-radius: var(--radius-lg);
  padding: 48px 44px;
  position: relative;
  overflow: hidden;
}
.role-sender {
  background: linear-gradient(135deg, #f0faf4, #d9f2e3);
  border: 1px solid rgba(15,95,48,.15);
}
.role-transporter {
  background: var(--brand-700);
  color: var(--text-invert);
}
.role-emoji { font-size: 2.5rem; display: block; margin-bottom: 20px; }
.role-card h3 {
  font-family: var(--font-display);
  font-size: 1.8rem;
  margin-bottom: 16px;
  letter-spacing: -.01em;
}
.role-transporter h3 { color: white; }
.role-card p {
  font-size: .95rem;
  line-height: 1.75;
  margin-bottom: 28px;
  color: var(--text-secondary);
}
.role-transporter p { color: rgba(255,255,255,.75); }
.role-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.role-list li {
  font-size: .9rem;
  font-weight: 500;
  color: var(--text-secondary);
}
.role-transporter .role-list li { color: rgba(255,255,255,.85); }

/* ─── Trust ──────────────────────────────────────────── */
.trust { padding: 100px 0; background: var(--bg); }
.trust-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}
.trust-item {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  background: white;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 28px;
  transition: box-shadow var(--transition);
}
.trust-item:hover { box-shadow: var(--shadow-sm); }
.trust-icon { font-size: 1.8rem; flex-shrink: 0; }
.trust-item h4 { font-size: .95rem; font-weight: 700; margin-bottom: 6px; }
.trust-item p  { font-size: .88rem; color: var(--text-secondary); line-height: 1.65; }

/* ─── CTA section ────────────────────────────────────── */
.cta-section {
  position: relative;
  padding: 120px 0;
  overflow: hidden;
  text-align: center;
}
.cta-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--brand-800) 0%, var(--brand-700) 50%, var(--brand-600) 100%);
}
.cta-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 20% 50%, rgba(245,200,66,.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255,255,255,.05) 0%, transparent 50%);
}
.cta-inner {
  position: relative;
  z-index: 1;
}
.cta-inner h2 {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3.2rem);
  color: white;
  line-height: 1.15;
  margin-bottom: 20px;
  letter-spacing: -.02em;
}
.cta-inner h2 em {
  font-style: italic;
  color: var(--accent);
}
.cta-inner p {
  font-size: 1.05rem;
  color: rgba(255,255,255,.75);
  margin-bottom: 48px;
}
.cta-section .hero-actions {
  justify-content: center;
}
.cta-section .btn-apple {
  background: white;
  color: var(--text-primary);
}
.cta-section .btn-google {
  background: transparent;
  color: white;
  border-color: rgba(255,255,255,.3);
}
.cta-section .btn-google:hover { border-color: white; }

.contact-cta {
  align-self: center;
}

/* ─── Responsive ─────────────────────────────────────── */
@media (max-width: 900px) {
  .hero-inner { grid-template-columns: 1fr; gap: 48px; text-align: center; }
  .hero-sub { max-width: 100%; }
  .hero-actions { justify-content: center; }
  .hero-visual { display: none; }
  .features-grid { grid-template-columns: 1fr 1fr; }
  .steps { grid-template-columns: 1fr; gap: 24px; }
  .step-connector { display: none; }
  .step { padding: 0; }
  .roles-grid { grid-template-columns: 1fr; }
  .trust-grid { grid-template-columns: 1fr; }
  .stats-inner { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .features-grid { grid-template-columns: 1fr; }
  .stats-inner { grid-template-columns: 1fr 1fr; gap: 20px; }
  .role-card { padding: 36px 28px; }
}
</style>
