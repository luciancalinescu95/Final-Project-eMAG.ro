/// <reference types="Cypress" />

describe("Project",()=>{
    it("Visit eMAG.ro",()=>{
        cy.visit("https://emag.ro");
    })

    /* it.only("TM-QA08-448 : Sign In",()=>{
        cy.visit("https://emag.ro").wait(5000);
        cy.get('#my_account > .visible-lg-inline').click({force:true}).wait(5000);
          });
          // after typing the password we have a captcha login and we can't automate the test */


});
