/// <reference types="Cypress" />

describe("Project",()=>{
    it("Visit eMAG.ro",()=>{
        cy.visit("https://emag.ro");
    })

    /* it.only("TM-QA08-448 : Sign In",()=>{
        cy.visit("https://emag.ro");
        cy.get('#my_account > .visible-lg-inline').click({force:true});
        cy.get('#user_login_email').click({force:true}).type('email@gmail.com');
        cy.get('#user_login_continue').click({force:true});

        -- captcha login further --

    }); 
    */
          


});
