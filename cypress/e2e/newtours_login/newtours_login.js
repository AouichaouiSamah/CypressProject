import {Before,After,Given,When,Then,And} from "cypress-cucumber-preprocessor/steps";

Before(()=>{
    cy.reload()
})

After(()=>{
    cy.reload()
})

Given("open newtours application",()=>{
    cy.visit("https://demo.guru99.com/test/newtours/");
})

When("click on submit button",()=>{
    cy.title().should('eq','Welcome: Mercury Tours')
})

Then("verify title should be  'Login: Mercury Tours'",()=>{
    cy.title().should('eq','Welcome: Mercury Tours')
})