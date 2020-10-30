/// <reference types="Cypress" />

describe("Project",()=>{
    it("eMAG.ro",()=>{
        cy.visit("https://emag.ro");
    })

    it("Login Tests",()=>{
        cy.get('#my_account > .visible-lg-inline').click({force:true});
          });


});
