/// <reference types="cypress"/>
/// <reference types="cypress-file-upload"/>

describe('Create Page Tests', () => {
  it('Uploads the image', () => {
    cy.visit('/create')
    cy.get('[data-testid="dropzone"]').attachFile('test-image.png', {
      subjectType: 'drag-n-drop',
    })
  })
})

export {}
