describe("Filter Products",()=>{
    beforeEach(()=>{
        cy.visit("www.emag.ro");
    })

    it("TM-QA08-494:Price filter - Checkbox",()=>{
        cy.get('[data-id="1"] > .js-megamenu-list-department-link > .megamenu-list-department__department-name').click({force:true});
        cy.get('.emg-aside-links > :nth-child(2) > a').click();
        cy.get('.emg-menu-wrapper > :nth-child(1) > :nth-child(1) > a').click();
        cy.get('[href="https://www.emag.ro/telefoane-mobile/pret,intre-50-si-100/c?ref=lst_leftbar_6411_50-100"]').click();
        cy.get('.title-phrasing-xl').should("contain","Telefoane Mobile - Pret: 50 - 100");
        
    });

    it("TM-QA08-495:Price filter - Interval",()=>{
        cy.get('[data-id="1"] > .js-megamenu-list-department-link > .megamenu-list-department__department-name').click({force:true});
        cy.get('.emg-aside-links > :nth-child(2) > a').click();
        cy.get('.emg-menu-wrapper > :nth-child(1) > :nth-child(1) > a').click();
        cy.get('.js-custom-price-min').clear().type("50");
        cy.get('.js-custom-price-max').clear().type("1000");
        cy.get('.custom-price-slider-container > .input-group > .input-group-btn > .btn').click();
        cy.get('.title-phrasing-xl').should("contain","Telefoane Mobile - Pret: 50 - 1.000");

    });

    it("TM-QA08-496:Brand - Checkbox",()=>{
        cy.get('[data-id="1"] > .js-megamenu-list-department-link > .megamenu-list-department__department-name').click({force:true});
        cy.get('.emg-aside-links > :nth-child(2) > a').click();
        cy.get('.emg-menu-wrapper > :nth-child(1) > :nth-child(1) > a').click();
        cy.get('[href="https://www.emag.ro/telefoane-mobile/brand/samsung/c?ref=lst_leftbar_6415_42"]').click();
        cy.get('.title-phrasing-xl').should("contain","Telefoane Mobile Samsung");
        
    });

    it("TM-QA08-497:Brand - Search by keyword",()=>{
        cy.get('[data-id="1"] > .js-megamenu-list-department-link > .megamenu-list-department__department-name').click({force:true});
        cy.get('.emg-aside-links > :nth-child(2) > a').click();
        cy.get('.emg-menu-wrapper > :nth-child(1) > :nth-child(1) > a').click();
        cy.get('#js-filter-6415-collapse > :nth-child(2) > .filter-body-separator > .filter-extra-options-btn').click({force:true});
        cy.get('.form-inline > .form-group > .js-filter-search').type('oneplus');
        cy.get('body > div.ph-widget.ph-popup.filter-extra-options-box.ph-visible.ph-popup-n.ph-popup-w.ph-popup-top.ph-visible-done > div > div.filter-body-extra > div:nth-child(14) > div > a:nth-child(1)').click();
        cy.get('.filter-footer > .btn-primary').click();
        cy.get('.title-phrasing-xl').should("contain","Telefoane Mobile OnePlus");
        
    });

    it("TM-QA08-498:Order by price ascending",()=>{
        cy.get('[data-id="1"] > .js-megamenu-list-department-link > .megamenu-list-department__department-name').click({force:true});
        cy.get('.emg-aside-links > :nth-child(2) > a').click();
        cy.get('.emg-menu-wrapper > :nth-child(1) > :nth-child(1) > a').click();
        cy.get(':nth-child(2) > .sort-control-btn-dropdown > .btn').click({force:true});
        cy.get(':nth-child(3) > .js-sort-option').click({force:true});
        cy.get('#page-skin > div.container > div > div.clearfix.pad-btm-md > div.page-container > div.listing-panel.has-floating-listing-panel-footer > div.listing-panel-footer.js-head-sort-options > div > div:nth-child(2) > div.sort-control-btn-dropdown.hidden-xs > button > span.sort-control-btn-option.text-truncate').should("contain","Pret crescator");
    });

    it("TM-QA08-499:Order by price descending",()=>{
        cy.get('[data-id="1"] > .js-megamenu-list-department-link > .megamenu-list-department__department-name').click({force:true});
        cy.get('.emg-aside-links > :nth-child(2) > a').click();
        cy.get('.emg-menu-wrapper > :nth-child(1) > :nth-child(1) > a').click();
        cy.get(':nth-child(2) > .sort-control-btn-dropdown > .btn').click({force:true});
        cy.get(':nth-child(4) > .js-sort-option').click({force:true});
        cy.get('#page-skin > div.container > div > div.clearfix.pad-btm-md > div.page-container > div.listing-panel.has-floating-listing-panel-footer > div.listing-panel-footer.js-head-sort-options > div > div:nth-child(2) > div.sort-control-btn-dropdown.hidden-xs > button > span.sort-control-btn-option.text-truncate').should("contain","Pret descrescator");
    });

    it("TM-QA08-521:Compare products",()=>{
        cy.get('[data-id="1"] > .js-megamenu-list-department-link > .megamenu-list-department__department-name').click({force:true});
        cy.get('.emg-aside-links > :nth-child(2) > a').click();
        cy.get('.emg-menu-wrapper > :nth-child(1) > :nth-child(1) > a').click();
        cy.get('#card_grid > div:nth-child(1) > div.card > div > div.card-section-top > div.card-toolbox > button.card-toolbox-btn.card-compare-btn.hidden-xs.gtm_kz1kte2').click();
        cy.get('#card_grid > div:nth-child(2) > div.card > div > div.card-section-top > div.card-toolbox > button.card-toolbox-btn.card-compare-btn.hidden-xs.gtm_kz1kte2').click();
        cy.get('#compare-link > span').should("be.visible");
        cy.get('#compare-link > span').click();
        
    });

});
