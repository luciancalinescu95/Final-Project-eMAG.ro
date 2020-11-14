describe("Favourite Products",()=>{
    beforeEach(()=>{
        cy.visit("www.emag.ro");
    })

    it("TM-QA08-455:Add Favourite",()=>{
        cy.get('[data-id="1"] > .js-megamenu-list-department-link > .megamenu-list-department__department-name').click({force:true});
        cy.get('.emg-aside-links > :nth-child(2) > a').click({force:true});
        cy.get('.emg-menu-wrapper > :nth-child(1) > :nth-child(1) > a').click({force:true});
        cy.get('#card_grid > div:nth-child(3) > div > div > div.card-section-mid > h2 > a').click({force:true});
        cy.get('.product-page-actions > .add-to-favorites').click();
        cy.get('#my_wishlist > span.jewel.jewel-info').should("contain","1");

          });

    it("TM-QA08-456:Favourite - Display page",()=>{
        cy.get('[data-id="1"] > .js-megamenu-list-department-link > .megamenu-list-department__department-name').click({force:true});
        cy.get('.emg-aside-links > :nth-child(2) > a').click({force:true});
        cy.get('.emg-menu-wrapper > :nth-child(1) > :nth-child(1) > a').click({force:true});
        cy.get('#card_grid > div:nth-child(3) > div > div > div.card-section-mid > h2 > a').click({force:true});
        cy.get('.product-page-actions > .add-to-favorites').click();
        cy.get('#my_wishlist > .visible-lg-inline').click({force:true});
        cy.get('.product-title > span').should("contain","Telefon mobil Apple iPhone 11, 128GB, Black");

          });
    it("TM-QA08-457:Favourite - Delete item",()=>{
        cy.get('[data-id="1"] > .js-megamenu-list-department-link > .megamenu-list-department__department-name').click({force:true});
        cy.get('.emg-aside-links > :nth-child(2) > a').click({force:true});
        cy.get('.emg-menu-wrapper > :nth-child(1) > :nth-child(1) > a').click({force:true});
        cy.get('#card_grid > div:nth-child(3) > div > div > div.card-section-mid > h2 > a').click({force:true});
        cy.get('.product-page-actions > .add-to-favorites').click();
        cy.get('#my_wishlist > .visible-lg-inline').click({force:true});
        cy.get('.product-title > span').should("contain","Telefon mobil Apple iPhone 11, 128GB, Black");
        cy.get('.hidden-sm').click({force:true});
        cy.get('.products-number').should("contain","0 produse");
        
    
        
            
                      });
          





});