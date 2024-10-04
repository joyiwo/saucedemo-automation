/// <reference types="cypress" />

describe('Sauce Labs Test Suite', () => {

    it('should log in successfully', () => {
      cy.visit('https://www.saucedemo.com/')
      
      cy.loginn()
    })
  
    it('should fail to log in with incorrect credentials', () => {
      cy.visit('https://www.saucedemo.com/')
      cy.fixture('user').then((user) => {
        const invalidUsername = user.invalidUsername
        const invalidPassword = user.invalidPassword
  
        cy.login(invalidUsername, invalidPassword)
      
        cy.get('[data-test="error"]').should('contain', 'Username and password do not match any user in this service')
      })
    })
  
    it('should add an item to the cart and checkout', () => {
      cy.visit('https://www.saucedemo.com/')
      cy.fixture('user').then((user) => {
        const username = user.username
        const password = user.password
  
        cy.login(username, password)
  
        cy.addToCart('Sauce Labs Backpack')
  
        cy.openCart()
  
        cy.url().should('include', '/cart.html')
        
        cy.checkout()
  
        cy.url().should('include', '/checkout-step-one.html')
      })
    })
  
    it('should log out successfully', () => {
      cy.visit('https://www.saucedemo.com/')
      cy.fixture('user').then((user) => {
        const username = user.username
        const password = user.password
     
        cy.login(username, password)
      
        cy.logout()
  
        cy.url().should('include', '/index.html')
      })
    })
  
  })
