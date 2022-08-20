describe('Landing Page Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Loads the landing page', () => {
    cy.get('[data-testid="album-list"]').should('be.visible')
    cy.get('[data-testid="album-item"]').should('be.visible')
  })

  it('Loads the only 9 album items by default', () => {
    cy.get('[data-testid="album-item"]')
      .should('be.visible')
      .should('have.length', 9)
  })

  it('Loads the next 9 album items when user scrolls down the page', () => {
    cy.get('[data-testid="album-item"]')
      .should('be.visible')
      .should('have.length', 9)

    cy.scrollTo(0, 1500)
    cy.get('[data-testid="loader"]').should('be.visible')
    cy.wait(3000).then(() => {
      cy.get('[data-testid="album-item"]')
        .should('be.visible')
        .should('have.length', 18)
    })
  })
})

export {}
