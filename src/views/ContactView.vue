<template>
  <main class="contact-page">

    <section class="contact-hero">
      <div class="container contact-inner">

        <!-- Intro -->
        <div class="contact-intro">
          <span class="chip">Contact</span>
          <h1 class="contact-title">Une question ?<br><em>On vous répond.</em></h1>
          <p class="contact-lead">
            L'équipe Sendora est disponible par email pour toute question liée à l'application,
            à votre compte, aux paiements ou à la confidentialité de vos données.
          </p>

          <div class="contact-emails">
            <a class="contact-email-row" href="mailto:contact@sendora.app">
              <div class="cer-icon">📬</div>
              <div>
                <div class="cer-label">Support général</div>
                <div class="cer-addr">contact@sendora.app</div>
              </div>
            </a>
            <a class="contact-email-row" href="mailto:privacy@sendora.app">
              <div class="cer-icon">🔒</div>
              <div>
                <div class="cer-label">Données & RGPD</div>
                <div class="cer-addr">privacy@sendora.app</div>
              </div>
            </a>
            <a class="contact-email-row" href="mailto:legal@sendora.app">
              <div class="cer-icon">⚖️</div>
              <div>
                <div class="cer-label">Questions légales</div>
                <div class="cer-addr">legal@sendora.app</div>
              </div>
            </a>
          </div>
        </div>

        <!-- Formulaire -->
        <div class="surface form-card">

          <!-- Succès -->
          <div v-if="sent" class="form-success">
            <div class="success-icon">✅</div>
            <h2>Message envoyé !</h2>
            <p>Merci de nous avoir contactés. Nous répondrons à <strong>{{ form.email }}</strong> dans les meilleurs délais.</p>
            <button class="btn btn-primary" @click="reset">Envoyer un autre message</button>
          </div>

          <!-- Formulaire actif -->
          <template v-else>
            <div class="form-header">
              <h2>Nous écrire</h2>
              <p>Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.</p>
            </div>

            <div class="form-body">

              <!-- Sujet -->
              <div class="field">
                <label class="field-label">Sujet <span class="req">*</span></label>
                <div class="subject-tabs">
                  <button
                    v-for="s in subjects"
                    :key="s.value"
                    type="button"
                    class="subject-tab"
                    :class="{ active: form.subject === s.value }"
                    @click="form.subject = s.value"
                  >
                    <span>{{ s.icon }}</span>
                    {{ s.label }}
                  </button>
                </div>
              </div>

              <!-- Nom + Email -->
              <div class="field-row">
                <div class="field">
                  <label class="field-label" for="f-name">Nom <span class="req">*</span></label>
                  <input
                    id="f-name" type="text" class="field-input"
                    placeholder="Jean Dupont"
                    v-model="form.name"
                    :class="{ error: errors.name }"
                    @blur="validate('name')"
                  />
                  <span v-if="errors.name" class="field-error">{{ errors.name }}</span>
                </div>
                <div class="field">
                  <label class="field-label" for="f-email">Email <span class="req">*</span></label>
                  <input
                    id="f-email" type="email" class="field-input"
                    placeholder="jean@exemple.fr"
                    v-model="form.email"
                    :class="{ error: errors.email }"
                    @blur="validate('email')"
                  />
                  <span v-if="errors.email" class="field-error">{{ errors.email }}</span>
                </div>
              </div>

              <!-- Message -->
              <div class="field">
                <label class="field-label" for="f-msg">Message <span class="req">*</span></label>
                <textarea
                  id="f-msg" class="field-input field-textarea"
                  placeholder="Décrivez votre demande en quelques lignes…"
                  rows="5"
                  v-model="form.message"
                  :class="{ error: errors.message }"
                  @blur="validate('message')"
                ></textarea>
                <div class="field-footer">
                  <span v-if="errors.message" class="field-error">{{ errors.message }}</span>
                  <span class="char-count" :class="{ warn: form.message.length > 900 }">
                    {{ form.message.length }} / 1000
                  </span>
                </div>
              </div>

              <!-- Partenariat optionnel -->
              <div class="field" v-if="form.subject === 'partnership'">
                <label class="field-label" for="f-company">Société / Organisation</label>
                <input
                  id="f-company" type="text" class="field-input"
                  placeholder="Nom de votre entreprise"
                  v-model="form.company"
                />
              </div>

              <!-- Submit -->
              <div class="form-actions">
                <button
                  type="button"
                  class="btn btn-primary btn-submit"
                  :disabled="submitting"
                  @click="submit"
                >
                  <span v-if="submitting" class="spinner"></span>
                  <span v-else>Envoyer le message →</span>
                </button>
                <p class="form-note">* champs obligatoires — aucune donnée revendue</p>
              </div>

              <div v-if="globalError" class="form-global-error">
                {{ globalError }}
              </div>

            </div>
          </template>
        </div>

      </div>
    </section>

  </main>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

/* ── Sujets ── */
const subjects = [
  { value: 'support',     icon: '📦', label: 'Support' },
  { value: 'payment',     icon: '💳', label: 'Paiement' },
  { value: 'account',     icon: '👤', label: 'Mon compte' },
  { value: 'privacy',     icon: '🔒', label: 'Confidentialité' },
  { value: 'bug',         icon: '⚡', label: 'Bug' },
  { value: 'partnership', icon: '🤝', label: 'Partenariat' },
]

/* ── State ── */
const form = reactive({
  subject: 'support',
  name: '',
  email: '',
  message: '',
  company: '',
})

const errors    = reactive({ name: '', email: '', message: '' })
const submitting = ref(false)
const sent       = ref(false)
const globalError = ref('')

/* ── Validation ── */
function validate(field: 'name' | 'email' | 'message') {
  if (field === 'name') {
    errors.name = form.name.trim().length < 2 ? 'Merci de renseigner votre nom.' : ''
  }
  if (field === 'email') {
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    errors.email = !ok ? 'Adresse email invalide.' : ''
  }
  if (field === 'message') {
    const l = form.message.trim().length
    if (l < 10)   errors.message = 'Votre message est trop court (min. 10 caractères).'
    else if (l > 1000) errors.message = 'Message trop long (max. 1000 caractères).'
    else               errors.message = ''
  }
}

function validateAll() {
  validate('name'); validate('email'); validate('message')
  return !errors.name && !errors.email && !errors.message
}

/* ── Submit — mailto fallback simple ── */
async function submit() {
  globalError.value = ''
  if (!validateAll()) return

  submitting.value = true
  // Simulate a brief loading then open mailto (backend à brancher plus tard)
  await new Promise(r => setTimeout(r, 800))

  const subjectLabel = subjects.find(s => s.value === form.subject)?.label ?? form.subject
  const body = [
    `Nom : ${form.name}`,
    form.company ? `Société : ${form.company}` : '',
    `Sujet : ${subjectLabel}`,
    '',
    form.message,
  ].filter(Boolean).join('\n')

  const mailto = `mailto:contact@sendora.app?subject=${encodeURIComponent('[Sendora] ' + subjectLabel)}&body=${encodeURIComponent(body)}`
  window.location.href = mailto

  submitting.value = false
  sent.value = true
}

function reset() {
  form.subject = 'support'
  form.name = ''
  form.email = ''
  form.message = ''
  form.company = ''
  errors.name = ''
  errors.email = ''
  errors.message = ''
  sent.value = false
}
</script>

<style scoped>
.contact-page { padding: 2.5rem 0 5rem; }

/* ── Layout ── */
.contact-inner {
  display: grid;
  grid-template-columns: 1fr 520px;
  gap: clamp(2rem, 4vw, 4rem);
  align-items: start;
}

/* ── Intro ── */
.contact-intro { display: flex; flex-direction: column; gap: 1.25rem; padding-top: .5rem; }
.contact-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 2.9rem);
  line-height: 1.1; letter-spacing: -.03em;
  color: var(--ink); margin: 0;
}
.contact-title em { font-style: italic; color: var(--verdant); }
.contact-lead {
  font-size: .97rem; color: var(--text-secondary); line-height: 1.75; margin: 0;
}

/* Email rows */
.contact-emails { display: flex; flex-direction: column; gap: .6rem; }
.contact-email-row {
  display: flex; align-items: center; gap: .9rem;
  padding: .9rem 1.1rem;
  background: var(--cream-deep); border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: border-color var(--transition), box-shadow var(--transition);
}
.contact-email-row:hover {
  border-color: rgba(26,102,64,.3); box-shadow: var(--shadow-sm);
}
.cer-icon  { font-size: 1.25rem; flex-shrink: 0; }
.cer-label { font-size: .72rem; font-weight: 800; letter-spacing: .06em; text-transform: uppercase; color: var(--text-muted); }
.cer-addr  { font-size: .92rem; font-weight: 800; color: var(--verdant); }

/* ── Form card ── */
.form-card { padding: clamp(1.5rem, 3vw, 2rem); }

.form-header { margin-bottom: 1.75rem; }
.form-header h2 {
  font-family: var(--font-display);
  font-size: 1.5rem; letter-spacing: -.02em;
  color: var(--ink); margin: 0 0 .4rem;
}
.form-header p { font-size: .9rem; color: var(--text-secondary); margin: 0; }

.form-body { display: flex; flex-direction: column; gap: 1.25rem; }

/* ── Fields ── */
.field { display: flex; flex-direction: column; gap: .4rem; }
.field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }

.field-label {
  font-size: .78rem; font-weight: 800; letter-spacing: .04em;
  text-transform: uppercase; color: var(--text-muted);
}
.req { color: var(--verdant); }

.field-input {
  width: 100%; padding: .7rem .9rem;
  border: 1.5px solid var(--border);
  border-radius: var(--radius);
  background: var(--cream);
  font-size: .95rem; color: var(--ink);
  transition: border-color var(--transition), box-shadow var(--transition);
  outline: none;
  resize: none;
}
.field-input::placeholder { color: var(--text-muted); }
.field-input:focus {
  border-color: var(--verdant);
  box-shadow: 0 0 0 3px rgba(26,102,64,.12);
}
.field-input.error {
  border-color: #d94f4f;
  box-shadow: 0 0 0 3px rgba(217,79,79,.1);
}
.field-textarea { min-height: 120px; }

.field-footer {
  display: flex; justify-content: space-between; align-items: flex-start;
  min-height: 1.2rem;
}
.field-error {
  font-size: .78rem; color: #d94f4f; font-weight: 600;
}
.char-count {
  font-size: .72rem; color: var(--text-muted); margin-left: auto;
}
.char-count.warn { color: #d94f4f; font-weight: 700; }

/* ── Subject tabs ── */
.subject-tabs {
  display: flex; flex-wrap: wrap; gap: .5rem;
}
.subject-tab {
  display: inline-flex; align-items: center; gap: .4rem;
  padding: .45rem .85rem;
  border: 1.5px solid var(--border); border-radius: var(--radius-xl);
  background: var(--cream); color: var(--text-secondary);
  font-size: .82rem; font-weight: 600; cursor: pointer;
  transition: border-color var(--transition), background var(--transition), color var(--transition);
}
.subject-tab:hover {
  border-color: rgba(26,102,64,.3); color: var(--verdant);
}
.subject-tab.active {
  background: rgba(26,102,64,.1);
  border-color: var(--verdant);
  color: var(--verdant);
  font-weight: 800;
}

/* ── Actions ── */
.form-actions { display: flex; flex-direction: column; gap: .6rem; }
.btn-submit {
  width: 100%; justify-content: center;
  padding: .85rem; font-size: 1rem;
  border-radius: var(--radius);
  transition: background var(--transition), transform var(--transition), opacity var(--transition);
}
.btn-submit:disabled { opacity: .6; cursor: not-allowed; transform: none !important; }
.form-note { font-size: .75rem; color: var(--text-muted); text-align: center; margin: 0; }

.spinner {
  display: inline-block;
  width: 16px; height: 16px;
  border: 2px solid rgba(255,255,255,.4);
  border-top-color: white;
  border-radius: 50%;
  animation: spin .7s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

.form-global-error {
  padding: .75rem 1rem;
  background: rgba(217,79,79,.08); border: 1px solid rgba(217,79,79,.2);
  border-radius: var(--radius); color: #d94f4f;
  font-size: .88rem; font-weight: 600;
}

/* ── Success state ── */
.form-success {
  display: flex; flex-direction: column; align-items: center;
  gap: 1rem; text-align: center; padding: 2rem 1rem;
}
.success-icon { font-size: 3rem; }
.form-success h2 {
  font-family: var(--font-display);
  font-size: 1.5rem; color: var(--ink); margin: 0;
}
.form-success p { color: var(--text-secondary); line-height: 1.7; margin: 0; }

/* ── Responsive ── */
@media (max-width: 960px) {
  .contact-inner { grid-template-columns: 1fr; }
  .form-card { order: -1; }
}
@media (max-width: 540px) {
  .field-row { grid-template-columns: 1fr; }
  .subject-tabs .subject-tab { font-size: .76rem; padding: .4rem .7rem; }
}
</style>
