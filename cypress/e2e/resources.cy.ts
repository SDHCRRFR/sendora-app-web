describe('Centre d’aide, sécurité et destinations', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
  })

  it('trouve un code refusé sans accents et oriente vers le bon support', () => {
    cy.visit('/aide')
    cy.get('.help-answer').should('have.length', 10)
    cy.get('#help-search').type('CODE REFUSE')
    cy.get('.help-answer').should('have.length', 1)
    cy.contains('.help-answer summary', 'Le code est refusé').click()
    cy.get('.help-answer[open] a[href="/blog/validation-colis"]').should('be.visible')
    cy.contains('.help-answer[open] a', 'Contacter le support').click()
    cy.location('search').should('eq', '?subject=validation-colis')
    cy.contains('.subject-tab.active', 'Validation colis').should('be.visible')
  })

  it('combine les sujets avec la recherche et propose une sortie si rien ne correspond', () => {
    cy.visit('/aide')
    cy.contains('.resource-filter', 'Paiement').click()
    cy.get('.help-answer').should('have.length', 2)
    cy.get('#help-search').type('virement')
    cy.get('.help-answer').should('have.length', 1)
    cy.contains('.help-answer summary', 'versement est en attente').should('be.visible')
    cy.get('#help-search').clear().type('aucunresultat123')
    cy.get('.help-answer').should('not.exist')
    cy.contains('.resource-empty a', 'Contacter le support').should('have.attr', 'href', '/contact')
    cy.contains('button', 'Afficher tous les sujets').click()
    cy.get('#help-search').should('have.value', '')
    cy.get('.help-answer').should('have.length', 10)
    cy.screenshot('centre-aide-desktop', { capture: 'viewport' })
  })

  it('ouvre directement un sujet compte et conserve son contexte dans le formulaire', () => {
    cy.visit('/aide?theme=account')
    cy.contains('.resource-filter', 'Mon compte').should('have.attr', 'aria-pressed', 'true')
    cy.get('.help-answer').should('have.length', 2)
    cy.contains('.help-answer summary', 'me connecter').click()
    cy.contains('.help-answer[open] a', 'Contacter le support').click()
    cy.contains('.subject-tab.active', 'Mon compte').should('be.visible')
    cy.get('.contact-help-link').click()
    cy.location('pathname').should('eq', '/aide')
    cy.get('.help-answer').should('have.length', 10)
  })

  it('mène les premiers utilisateurs vers leur parcours existant', () => {
    cy.visit('/aide?theme=first-delivery')
    cy.get('.help-answer').should('have.length', 3)
    cy.contains('.help-answer summary', 'mon premier envoi').click()
    cy.get('.help-answer[open] a[href="/transport-colis-entre-particuliers"]').click()
    cy.location('pathname').should('eq', '/transport-colis-entre-particuliers')
    cy.contains('h1', 'entre particuliers').should('be.visible')
  })

  it('explore les étapes du paiement puis retrouve l’aide correspondant au code', () => {
    cy.visit('/securite-et-paiement')
    cy.get('.security-flow button').should('have.length', 5)
    cy.contains('.security-flow button', 'Profil vérifié').should(
      'have.attr',
      'aria-pressed',
      'true',
    )
    cy.contains('.security-flow button', 'Code').click()
    cy.contains('.security-flow button', 'Code').should('have.attr', 'aria-pressed', 'true')
    cy.contains('#security-detail h2', 'Valider uniquement après la remise').should('be.visible')
    cy.contains('.security-roles', 'Côté expéditeur').should('be.visible')
    cy.contains('.security-roles', 'Côté transporteur').should('be.visible')
    cy.get('#security-detail').screenshot('securite-code')
    cy.get('#security-detail a').click()
    cy.location('search').should('eq', '?theme=validation')
    cy.contains('.resource-filter', 'Validation colis').should('have.attr', 'aria-pressed', 'true')
    cy.get('.help-answer').should('have.length', 3)
  })

  it('distingue la validation du versement et oriente vers l’aide paiement', () => {
    cy.visit('/securite-et-paiement')
    cy.contains('.security-flow button', 'Versement').click()
    cy.contains('#security-detail', 'Stripe Connect').should('be.visible')
    cy.get('#security-detail a').click()
    cy.location('search').should('eq', '?theme=payment')
    cy.get('.help-answer').should('have.length', 2)
    cy.contains('.help-answer summary', 'versement est en attente').click()
    cy.contains('.help-answer[open] a', 'Contacter le support').click()
    cy.contains('.subject-tab.active', 'Paiement').should('be.visible')
  })

  it('recherche les pays et les villes sans accents ou avec des espaces', () => {
    cy.visit('/destinations')
    cy.get('.destination-card').should('have.length', 6)
    cy.screenshot('destinations-desktop', { capture: 'viewport' })
    cy.get('#destination-search').type('algerie')
    cy.get('.destination-card').should('have.length', 1)
    cy.contains('.destination-card h3', 'Algérie').should('be.visible')
    cy.get('#destination-search').clear().type('Saint Louis')
    cy.get('.destination-card').should('have.length', 1)
    cy.contains('.destination-card h3', 'Sénégal').should('be.visible')
    cy.get('#destination-search').clear().type('MORONI')
    cy.get('.destination-card').should('have.length', 1).click()
    cy.location('pathname').should('eq', '/envoyer-colis-comores')
    cy.contains('.crumbs a', 'Destinations').click()
    cy.get('.destination-card').should('have.length', 6)
  })

  it('explique une recherche sans guide et permet de repartir vers les envois en France', () => {
    cy.visit('/destinations')
    cy.get('#destination-search').type('aucunguide123')
    cy.get('.destination-card').should('not.exist')
    cy.contains('.resource-empty', 'Aucun guide').should('be.visible')
    cy.contains('button', 'Voir toutes les destinations').click()
    cy.get('.destination-card').should('have.length', 6)
    cy.contains('a', 'Envoyer en France').click()
    cy.location('pathname').should('eq', '/transport-colis-entre-particuliers')
  })

  it('relie les nouvelles pages au téléchargement depuis la navigation', () => {
    cy.visit('/aide')
    cy.get('.desktop-nav .nav-cta').click()
    cy.location('pathname').should('eq', '/')
    cy.location('hash').should('eq', '#download')
    cy.get('#download').should(($target) => {
      const top = $target[0]!.getBoundingClientRect().top
      expect(top).to.be.at.least(72).and.at.most(130)
    })
  })

  it('garde les trois pages et les liens légaux accessibles sur un petit écran', () => {
    cy.viewport(320, 640)
    cy.visit('/aide')
    cy.contains('h1', 'bloqué').should('be.visible')
    for (const [label, target] of [
      ['Destinations', '/destinations'],
      ['Sécurité et paiement', '/securite-et-paiement'],
      ['Centre d’aide', '/aide'],
    ]) {
      cy.get('.burger').click()
      cy.contains('.mobile-menu a', label!).click()
      cy.location('pathname').should('eq', target)
      cy.get('.mobile-menu').should('not.exist')
      cy.get('.resource-hero h1').should('be.visible')
      cy.document().then((doc) => {
        expect(doc.documentElement.scrollWidth).to.be.at.most(doc.documentElement.clientWidth)
      })
    }
    cy.get('html').then(($html) => {
      const nextTheme = $html.attr('data-theme') === 'dark' ? 'light' : 'dark'
      cy.get('.theme-toggle').click()
      cy.get('html').should('have.attr', 'data-theme', nextTheme)
    })
    cy.get('.burger').click()
    cy.contains('.mobile-menu a', 'Mentions légales').click()
    cy.location('pathname').should('eq', '/cgu')
  })
})
