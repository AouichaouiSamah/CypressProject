import {  Before,After,Given,When,Then,And} from "cypress-cucumber-preprocessor/steps";

Before(()=>{
    cy.reload()
})

After(()=>{
    cy.reload()
})
Given("open DayToDay application",()=>{
    cy.visit("https://testdaytoday.be");
})

When("I log in as Following",(datatable)=>{
    datatable.hashes().forEach(element => {
        cy.get('[name=userName]').type(element.userName)
        cy.get('[name=password]').type(element.password) 
    });
 
})



Then("click on connexion button",()=>{
    cy.get('[name=submit]').click()
})

And ("verify title should be {string}",(title1)=>{
    cy.title().should('eq',title1)
})


