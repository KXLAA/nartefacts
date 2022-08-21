describe('Header Tests', () => {
  it('The Primary Header is visible on home page', () => {
    cy.visit('/')
    cy.get('[data-testid="primary-header"]').should('be.visible').click()
  })

  it('Clicking on the saved button redirects to /saved', () => {
    cy.visit('/')
    cy.get('[data-testid="saved-button"]').should('be.visible').click()
    cy.url().should('include', '/saved')
  })

  it('Clicking on the create button redirects to /create', () => {
    cy.visit('/')
    cy.get('[data-testid="create-button"]').should('be.visible').click()
    cy.url().should('include', '/create')
  })

  it('The Secondary Header is visible on /saved & /create', () => {
    cy.visit('/saved')
    cy.get('[data-testid="secondary-header"]').should('be.visible').click()
  })

  it('The Secondary Header is visible on  /create', () => {
    cy.visit('/create')
    cy.get('[data-testid="secondary-header"]').should('be.visible').click()
  })

  it('Clicking on the Logo on the header redirects to the landing page', () => {
    cy.visit('/saved/')
    cy.get('[data-testid="secondary-header"]').click()
    cy.url().should('include', '/')
  })
})

export {}
