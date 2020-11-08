describe("Search Bar",()=>{
    beforeEach(()=>{
        cy.visit("www.emag.ro");
    })

    it("TM-QA08-483:Input - Zero characters",()=>{
        cy.get('#searchboxTrigger').click().type('{enter}');
    });

    it("TM-QA08-485:Input - Numbers 10-99",()=>{
        cy.get('#searchboxTrigger').click().type('55').type('{enter}');
        cy.get('.title-phrasing-xl').should("contain","55");
    });

    it("TM-QA08-486:Input - Special Characters",()=>{
        cy.get('#searchboxTrigger').click().type('!@#$%^&*()').type('{enter}');
        cy.get('.title-phrasing-sm').should("contain","0 rezultate pentru:");
    });

    it("TM-QA08-487:Input - Valid Characters",()=>{
        cy.get('#searchboxTrigger').click().type('Jeans').type('{enter}');
        cy.get('.title-phrasing-xl').should("contain","Jeans");
    });

    it("TM-QA08-488:Input - Random Characters",()=>{
        cy.get('#searchboxTrigger').click().type('ajgkhasfgh').type('{enter}');
        cy.get('.title-phrasing-sm').should("contain","0 rezultate pentru:");
    });

    it("TM-QA08-489:Suggestions functionality",()=>{
        cy.get('#searchboxTrigger').click().type('Jeans');
        cy.get('#masthead > div > div > div.navbar-searchbox > div > form > div.searchbox-dropdown > div > div.searchbox-section.searchbox-suggestions-container.searchbox-active > ul.nav.nav-searchbox.searchbox-suggestions-list > li:nth-child(1) > a > span > span').should("contain","jeans");
    });

    it("TM-QA08-490:Search by Click",()=>{
        cy.get('#searchboxTrigger').click().type('Jeans');
        cy.get('.searchbox-submit-button > .em').click();
        cy.get('.title-phrasing-xl').should("contain","Jeans");
    });

    it("TM-QA08-491:Search by Enter",()=>{
        cy.get('#searchboxTrigger').click().type('Jeans').type('{enter}');
        cy.get('.title-phrasing-xl').should("contain","Jeans");
    });






});