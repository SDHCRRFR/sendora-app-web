describe('Parcours expéditeur et transporteur', () => {
  it('adapte l’accueil au profil choisi et permet de revenir au parcours expéditeur', () => {
    cy.viewport(1280, 720)
    cy.visit('/')
    cy.contains('.hero-audience button', 'J’envoie un colis').should(
      'have.attr',
      'aria-pressed',
      'true',
    )
    cy.contains('h1', 'Vos colis voyagent').should('be.visible')
    cy.get('.hero .store-apple').should(
      'have.attr',
      'href',
      'https://apps.apple.com/fr/app/sendora/id6773115334',
    )

    cy.contains('.hero-audience button', 'Je transporte').click()
    cy.contains('.hero-audience button', 'Je transporte').should(
      'have.attr',
      'aria-pressed',
      'true',
    )
    cy.contains('h1', 'Votre trajet.').should('be.visible')
    cy.contains('.steps-track h3', 'Publiez votre trajet').should('exist')
    cy.get('.hero-explore').should('have.attr', 'href', '/devenir-transporteur')
    cy.get('.estimator-section').should('not.be.visible')
    cy.document().then((doc) => {
      expect(doc.documentElement.scrollWidth).to.be.at.most(doc.documentElement.clientWidth)
    })
    cy.scrollTo('top')
    cy.screenshot('accueil-transporteur-desktop', { capture: 'viewport' })

    cy.contains('.hero-audience button', 'J’envoie un colis').click()
    cy.contains('h1', 'Vos colis voyagent').should('be.visible')
    cy.contains('.steps-track h3', 'Publiez votre annonce').should('exist')
    cy.get('.estimator-section').should('be.visible')
    cy.get('.hero-explore').should('have.attr', 'href', '/transport-colis-entre-particuliers')
  })

  it('relie le parcours transporteur au guide et au support de validation', () => {
    cy.viewport(1280, 720)
    cy.visit('/')
    cy.contains('.hero-audience button', 'Je transporte').click()
    cy.get('.hero-explore').click()
    cy.location('pathname').should('eq', '/devenir-transporteur')
    cy.contains('h1', 'Votre prochain trajet').should('be.visible')
    cy.get('.carrier-steps li').should('have.length', 4)
    cy.get('.site-header').invoke('css', 'position', 'relative')
    cy.screenshot('page-transporteur-desktop', { capture: 'fullPage' })
    cy.get('.site-header').invoke('css', 'position', 'sticky')
    cy.contains('.carrier-faq summary', 'Comment fonctionne le paiement ?').click()
    cy.contains('.carrier-faq details[open]', 'Stripe Connect').should('be.visible')
    cy.get('.carrier-payment a').click()
    cy.location('pathname').should('eq', '/blog/validation-colis')
    cy.contains('.post-cta a', 'Contacter le support').click()
    cy.location('search').should('eq', '?subject=validation-colis')
    cy.contains('.subject-tab.active', 'Validation colis').should('be.visible')
  })

  it('garde les liens de téléchargement accessibles en arrivant directement sur la nouvelle page', () => {
    cy.viewport(390, 720)
    cy.visit('/devenir-transporteur')
    cy.contains('h1', 'Votre prochain trajet').should('be.visible')
    cy.get('.carrier-steps li').should('have.length', 4)
    cy.get('.site-header').invoke('css', 'position', 'relative')
    cy.screenshot('page-transporteur-mobile', { capture: 'fullPage' })
    cy.get('.site-header').invoke('css', 'position', 'sticky')
    cy.contains('.carrier-intro a', 'Commencer avec Sendora').click()
    cy.location('hash').should('eq', '#download')
    cy.get('#download a[href*="apps.apple.com"]').should('be.visible')
    cy.get('#download a[href*="play.google.com"]').should('be.visible')
    cy.get('#download a[href*="apps.apple.com"]').should('have.attr', 'rel', 'noopener noreferrer')
    cy.document().then((doc) => {
      expect(doc.documentElement.scrollWidth).to.be.at.most(doc.documentElement.clientWidth)
    })
  })

  it('permet de naviguer sur petit écran dans les deux thèmes', () => {
    cy.viewport(320, 740)
    cy.visit('/')
    cy.contains('.hero-audience button', 'Je transporte').click()
    cy.document().then((doc) => {
      expect(doc.documentElement.scrollWidth).to.be.at.most(doc.documentElement.clientWidth)
    })
    cy.get('.burger').click()
    cy.contains('.mobile-menu a', 'Transporter').click()
    cy.location('pathname').should('eq', '/devenir-transporteur')
    cy.get('.mobile-menu').should('not.exist')
    cy.get('html').then(($html) => {
      const nextTheme = $html.attr('data-theme') === 'dark' ? 'light' : 'dark'
      cy.get('.theme-toggle').click()
      cy.get('html').should('have.attr', 'data-theme', nextTheme)
    })
    cy.document().then((doc) => {
      expect(doc.documentElement.scrollWidth).to.be.at.most(doc.documentElement.clientWidth)
    })
  })
})
