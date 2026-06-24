<template>
  <main class="contact-page">
    <section class="contact-hero">
      <div class="container contact-inner">
        <div class="contact-intro">
          <span class="chip">Contact</span>
          <h1 class="contact-title">Une question ?<br /><em>On vous répond.</em></h1>
          <p class="contact-lead">
            L'équipe Sendora est disponible pour toute question liée à l'application, à votre
            compte, aux paiements ou à la confidentialité de vos données.
          </p>

          <div class="contact-emails">
            <a class="contact-email-row" href="mailto:powerdigital.fr@gmail.com">
              <div class="cer-icon"><AppIcon name="mail" /></div>
              <div>
                <div class="cer-label">Support général</div>
                <div class="cer-addr">contact@sendora.app</div>
              </div>
            </a>
            <a class="contact-email-row" href="mailto:powerdigital.fr@gmail.com">
              <div class="cer-icon"><AppIcon name="shield-check" /></div>
              <div>
                <div class="cer-label">Données & RGPD</div>
                <div class="cer-addr">privacy@sendora.app</div>
              </div>
            </a>
            <a class="contact-email-row" href="mailto:powerdigital.fr@gmail.com">
              <div class="cer-icon"><AppIcon name="scale" /></div>
              <div>
                <div class="cer-label">Questions légales</div>
                <div class="cer-addr">legal@sendora.app</div>
              </div>
            </a>
          </div>
        </div>

        <div class="surface form-card">
          <div v-if="sent" class="form-success">
            <div class="success-icon"><AppIcon name="check-circle" /></div>
            <h2>Message envoyé !</h2>
            <p>
              Merci ! On reviendra vers <strong>{{ form.email }}</strong> dans les meilleurs délais.
            </p>
            <button class="btn btn-primary" @click="reset">Envoyer un autre message</button>
          </div>

          <div v-else-if="serverError" class="form-server-error">
            <div class="success-icon"><AppIcon name="alert-triangle" /></div>
            <h2>Oups, quelque chose a raté</h2>
            <p>{{ serverError }}</p>
            <button class="btn btn-secondary" @click="serverError = ''">Réessayer</button>
          </div>

          <template v-else>
            <div class="form-header">
              <h2>Nous écrire</h2>
              <p>Remplissez le formulaire, on vous répond rapidement.</p>
            </div>

            <div class="form-body">
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
                    <AppIcon :name="s.icon" />
                    {{ s.label }}
                  </button>
                </div>
              </div>

              <div class="field-row">
                <div class="field">
                  <label class="field-label" for="f-name">Nom <span class="req">*</span></label>
                  <input
                    id="f-name"
                    type="text"
                    class="field-input"
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
                    id="f-email"
                    type="email"
                    class="field-input"
                    placeholder="jean@exemple.fr"
                    v-model="form.email"
                    :class="{ error: errors.email }"
                    @blur="validate('email')"
                  />
                  <span v-if="errors.email" class="field-error">{{ errors.email }}</span>
                </div>
              </div>

              <div class="field" v-if="form.subject === 'partnership'">
                <label class="field-label" for="f-company">Société / Organisation</label>
                <input
                  id="f-company"
                  type="text"
                  class="field-input"
                  placeholder="Nom de votre entreprise"
                  v-model="form.company"
                />
              </div>

              <div class="field">
                <label class="field-label" for="f-msg">Message <span class="req">*</span></label>
                <textarea
                  id="f-msg"
                  class="field-input field-textarea"
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
                <p class="form-note">* champs obligatoires - aucune donnée revendue</p>
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
import AppIcon from '@/components/AppIcon.vue'
import { useSeo } from '@/composables/useSeo'

useSeo({
  title: 'Contact - Support, paiement & RGPD | Sendora',
  description:
    "Contactez l'équipe Sendora pour toute question sur l'application, votre compte, les paiements ou la confidentialité de vos données. Réponse rapide garantie.",
  path: '/contact',
})

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xqeowyqo'

const subjects = [
  { value: 'support', icon: 'life-buoy', label: 'Support' },
  { value: 'payment', icon: 'credit-card', label: 'Paiement' },
  { value: 'account', icon: 'user', label: 'Mon compte' },
  { value: 'privacy', icon: 'lock', label: 'Confidentialité' },
  { value: 'bug', icon: 'bug', label: 'Bug' },
  { value: 'partnership', icon: 'handshake', label: 'Partenariat' },
]

const form = reactive({
  subject: 'support',
  name: '',
  email: '',
  message: '',
  company: '',
})

const errors = reactive({ name: '', email: '', message: '' })
const submitting = ref(false)
const sent = ref(false)
const serverError = ref('')

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
    if (l < 10) errors.message = 'Votre message est trop court (min. 10 caractères).'
    else if (l > 1000) errors.message = 'Message trop long (max. 1000 caractères).'
    else errors.message = ''
  }
}

function validateAll() {
  validate('name')
  validate('email')
  validate('message')
  return !errors.name && !errors.email && !errors.message
}

async function submit() {
  serverError.value = ''
  if (!validateAll()) return

  submitting.value = true

  const subjectLabel = subjects.find((s) => s.value === form.subject)?.label ?? form.subject

  try {
    const payload: Record<string, string> = {
      _subject: `[Sendora] ${subjectLabel} - ${form.name}`,
      _replyto: form.email,
      name: form.name,
      email: form.email,
      sujet: subjectLabel,
      message: form.message,
    }
    if (form.company) payload.societe = form.company

    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    })

    if (res.ok) {
      sent.value = true
    } else {
      const data = await res.json().catch(() => ({}))
      serverError.value =
        (data as any)?.error ??
        "L'envoi a échoué. Essayez d'écrire directement à contact@sendora.app"
    }
  } catch {
    serverError.value = 'Problème réseau. Vérifiez votre connexion ou écrivez à contact@sendora.app'
  } finally {
    submitting.value = false
  }
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
  serverError.value = ''
}
</script>

<style scoped>
.contact-page {
  padding: 2.5rem 0 5rem;
}

.contact-inner {
  display: grid;
  grid-template-columns: 1fr 520px;
  gap: clamp(2rem, 4vw, 4rem);
  align-items: start;
}

.contact-intro {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding-top: 0.5rem;
}
.contact-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 2.9rem);
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: var(--ink);
  margin: 0;
}
.contact-title em {
  font-style: italic;
  color: var(--verdant);
}
.contact-lead {
  font-size: 0.97rem;
  color: var(--text-secondary);
  line-height: 1.75;
  margin: 0;
}

.contact-emails {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.contact-email-row {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  padding: 0.9rem 1.1rem;
  background: var(--cream-deep);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition:
    border-color var(--transition),
    box-shadow var(--transition);
}
.contact-email-row:hover {
  border-color: rgba(26, 102, 64, 0.3);
  box-shadow: var(--shadow-sm);
}
.cer-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 12px;
  background: rgba(26, 102, 64, 0.1);
  color: var(--verdant);
}
.cer-icon .app-icon {
  width: 22px;
  height: 22px;
}
.cer-label {
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-muted);
}
.cer-addr {
  font-size: 0.92rem;
  font-weight: 800;
  color: var(--verdant);
}

.form-card {
  padding: clamp(1.5rem, 3vw, 2rem);
}
.form-header {
  margin-bottom: 1.75rem;
}
.form-header h2 {
  font-family: var(--font-display);
  font-size: 1.5rem;
  letter-spacing: -0.02em;
  color: var(--ink);
  margin: 0 0 0.4rem;
}
.form-header p {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin: 0;
}
.form-body {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.field-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.field-label {
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--text-muted);
}
.req {
  color: var(--verdant);
}
.field-input {
  width: 100%;
  padding: 0.7rem 0.9rem;
  border: 1.5px solid var(--border);
  border-radius: var(--radius);
  background: var(--cream);
  font-size: 0.95rem;
  color: var(--ink);
  transition:
    border-color var(--transition),
    box-shadow var(--transition);
  outline: none;
  resize: none;
}
.field-input::placeholder {
  color: var(--text-muted);
}
.field-input:focus {
  border-color: var(--verdant);
  box-shadow: 0 0 0 3px rgba(26, 102, 64, 0.12);
}
.field-input.error {
  border-color: #d94f4f;
  box-shadow: 0 0 0 3px rgba(217, 79, 79, 0.1);
}
.field-textarea {
  min-height: 120px;
}
.field-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 1.2rem;
}
.field-error {
  font-size: 0.78rem;
  color: #d94f4f;
  font-weight: 600;
}
.char-count {
  font-size: 0.72rem;
  color: var(--text-muted);
  margin-left: auto;
}
.char-count.warn {
  color: #d94f4f;
  font-weight: 700;
}

.subject-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.subject-tab {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 0.85rem;
  border: 1.5px solid var(--border);
  border-radius: var(--radius-xl);
  background: var(--cream);
  color: var(--text-secondary);
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition:
    border-color var(--transition),
    background var(--transition),
    color var(--transition);
}
.subject-tab:hover {
  border-color: rgba(26, 102, 64, 0.3);
  color: var(--verdant);
}
.subject-tab.active {
  background: rgba(26, 102, 64, 0.1);
  border-color: var(--verdant);
  color: var(--verdant);
  font-weight: 800;
}
.subject-tab .app-icon {
  width: 17px;
  height: 17px;
  flex-shrink: 0;
}

.form-actions {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.btn-submit {
  width: 100%;
  justify-content: center;
  padding: 0.85rem;
  font-size: 1rem;
  border-radius: var(--radius);
  transition:
    background var(--transition),
    transform var(--transition),
    opacity var(--transition);
}
.btn-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
}
.form-note {
  font-size: 0.75rem;
  color: var(--text-muted);
  text-align: center;
  margin: 0;
}

.spinner {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.form-success,
.form-server-error {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  padding: 2rem 1rem;
}
.success-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.success-icon .app-icon {
  width: 56px;
  height: 56px;
  stroke-width: 1.75;
}
.form-success .success-icon {
  color: var(--verdant);
}
.form-server-error .success-icon {
  color: #d94f4f;
}
.form-success h2,
.form-server-error h2 {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--ink);
  margin: 0;
}
.form-success p,
.form-server-error p {
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0;
}

@media (max-width: 960px) {
  .contact-inner {
    grid-template-columns: 1fr;
  }
  .form-card {
    order: -1;
  }
}
@media (max-width: 540px) {
  .field-row {
    grid-template-columns: 1fr;
  }
  .subject-tabs .subject-tab {
    font-size: 0.76rem;
    padding: 0.4rem 0.7rem;
  }
}
</style>
