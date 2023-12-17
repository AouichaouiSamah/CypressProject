import {  Before,After,Given,When,Then,And} from "cypress-cucumber-preprocessor/steps";

Before(()=>{
    cy.reload()
})

After(()=>{
    cy.reload()
})
Given("open newtours application",()=>{
    cy.visit("https://demo.guru99.com/test/newtours/");
})

When("I log in as Following",(datatable)=>{
    datatable.hashes().forEach(element => {
        cy.get('[name=userName]').type(element.userName)
        cy.get('[name=password]').type(element.password) 
    });
 
})

//When("provide valid {string} and {string}",(username,password)=>{
  //  cy.get('[name=userName]').type(username)
   // cy.get('[name=password]').type(password)
//})

Then("click on submit button",()=>{
    cy.get('[name=submit]').click()
})

And ("verify title should be {string}",(title1)=>{
    cy.title().should('eq',title1)
})


/*** 
Given("precondition1",()=>{
    cy.visit("https://demo.guru99.com/test/newtours/")
})

When("action1",()=>{
    cy.title().should('eq','Welcome: Mercury Tours')
})

Then("test outcome1",()=>{
    cy.title().should('eq','Welcome: Mercury Tours')
})
*/
