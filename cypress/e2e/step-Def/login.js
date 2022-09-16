import { Given, And } from "@badeball/cypress-cucumber-preprocessor";

Given("that I am logged in as admin", () =>{
    cy.visit(Cypress.env('baseUrl'))
    cy.get('#email').type(Cypress.env('email'))
    cy.get('#password').type(Cypress.env('password'))
    cy.get('#login-btn').click()
})
And("that I am on the admin page", () =>{
    cy.visit(Cypress.env('adminUrl'))
})