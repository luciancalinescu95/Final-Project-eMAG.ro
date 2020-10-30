/// <reference types="Cypress" />

describe("Project",()=>{
    it("eMAG.ro",()=>{
        cy.visit("https://emag.ro");
    })

    it("TM-QA08-448 : Sign In",()=>{
        cy.get('#my_account > .visible-lg-inline').click({force:true});
          });


});
