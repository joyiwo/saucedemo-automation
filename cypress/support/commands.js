// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click()
  })

  Cypress.Commands.add('loginn', () => {
    cy.fixture('user').then((user) => {
      const username = user.username
      const password = user.password

      cy.login(username, password)
    
      cy.url().should('include', '/inventory.html')
    })
  }) 
  
  Cypress.Commands.add('logout', () => {
    cy.get('.bm-burger-button').click()
    cy.get('#logout_sidebar_link').click()
  })
  
  Cypress.Commands.add('addToCart', (itemName) => {
    cy.contains(itemName).parent().find('[data-test="add-to-cart-sauce-labs-backpack"]').click()
  })
  
  Cypress.Commands.add('openCart', () => {
    cy.get('.shopping_cart_link').click()
  })
  
  Cypress.Commands.add('checkout', () => {
    cy.get('[data-test="checkout"]').click()
  })