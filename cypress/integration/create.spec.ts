describe('Create Page Tests', () => {
  beforeEach(() => {
    cy.visit('/create')
  })
  it('Uploads the image', () => {
    cy.get('input[type=file]').attachFile('test-image.png')
    cy.wait(3000).then(() => {
      cy.get('[data-testid="preview"]').should('be.visible')
    })
  })
  it('Clicking on the save button saves image ', () => {
    cy.get('input[type=file]').attachFile('test-image.png')
    cy.wait(3000).then(() => {
      cy.get('[data-testid="save-button"]')
        .click()
        .then(() => {
          cy.get('[data-testid="save-button"]').should('be.disabled')
          cy.get('[data-testid="saved-image"]').should('be.visible')
        })
    })
  })
  it('Clicking toast redirects to /saved ', () => {
    cy.get('input[type=file]').attachFile('test-image.png')
    cy.wait(2000).then(() => {
      cy.get('[data-testid="save-button"]')
        .click()
        .then(() => {
          cy.get('[data-testid="saved-image"]').should('be.visible').click()
          cy.url().should('include', '/saved')
        })
    })
  })
  it('Clicking the reset button resets the image', () => {
    cy.get('input[type=file]').attachFile('test-image.png')
    cy.wait(5000).then(() => {
      cy.get('[data-testid="reset-button"]')
        .click()
        .then(() => {
          cy.get('[data-testid="dropzone"]').should('be.visible')
        })
    })
  })
  it('Clicking the export button opens the export palette modal', () => {
    cy.get('input[type=file]').attachFile('test-image.png')
    cy.wait(5000).then(() => {
      cy.get('[data-testid="export-button"]')
        .click()
        .then(() => {
          cy.get('[data-testid="export-modal"]').should('be.visible')
        })
        .then(() => {
          cy.get('[data-testid="export-code"]')
            .should('be.visible')
            .click()
            .then(() => {
              cy.get('[data-testid="exported-modal"]').should('be.visible')
            })
        })
    })
  })
  it('Clicking the code & download button downloads the colors.js file', () => {
    cy.get('input[type=file]').attachFile('test-image.png')
    cy.wait(5000).then(() => {
      cy.get('[data-testid="export-button"]')
        .click()
        .then(() => {
          cy.get('[data-testid="export-code"]')
            .click()
            .then(() => {
              cy.get('[data-testid="download-button"]').click()
              cy.verifyDownload('colors.js')
            })
        })
    })
  })
  it('Clicking the css & download button downloads the colors.scss file', () => {
    cy.get('input[type=file]').attachFile('test-image.png')
    cy.wait(5000).then(() => {
      cy.get('[data-testid="export-button"]')
        .click()
        .then(() => {
          cy.get('[data-testid="export-css"]')
            .click()
            .then(() => {
              cy.get('[data-testid="download-button"]').click()
              cy.verifyDownload('colors.scss')
            })
        })
    })
  })
})

export {}
