describe("Add to Bag",()=>{
    beforeEach(()=>{
        cy.visit("www.emag.ro");
    })

    it("TM-QA08-459:Add to empty Bag",()=>{
        cy.get('[data-id="1"] > .js-megamenu-list-department-link >.megamenu-list-department__department-name').click({force:true});
        cy.get('.emg-aside-links > :nth-child(1) > a').click({force:true});
        cy.get('.emg-menu-wrapper > :nth-child(1) > :nth-child(1) > a').click({force:true}); 
        // we navigated to laptops section
        cy.get('#card_grid > div:nth-child(1) > div > div > div.card-section-mid > h2 > a').click({force:true}); // selected the product
        cy.get('.product-page-actions > .btn-primary').click(); // added to product to shopping cart
        cy.get('body > div.ph-modal.modal.fade.product-purchased-modal.in > div > div > div.modal-header > h4').should("contain","Produsul a fost adaugat in cos"); // confirmation dialog
    });

    it("TM-QA08-460:Add to Bag - Same items",()=>{
        cy.get('[data-id="1"] > .js-megamenu-list-department-link >.megamenu-list-department__department-name').click({force:true});
        cy.get('.emg-aside-links > :nth-child(1) > a').click({force:true});
        cy.get('.emg-menu-wrapper > :nth-child(1) > :nth-child(1) > a').click({force:true}); 
        // we navigated to laptops section
        cy.get('#card_grid > div:nth-child(1) > div > div > div.card-section-mid > h2 > a').click({force:true}); // selected the product
        cy.get('.product-page-actions > .btn-primary').click(); // added to product to shopping cart
        cy.get('body > div.ph-modal.modal.fade.product-purchased-modal.in > div > div > div.modal-header > h4').should("contain","Produsul a fost adaugat in cos"); // confirmation dialog
        cy.get('body > div.ph-modal.modal.fade.product-purchased-modal.in > div > div > div.modal-header > button').click(); // closed confirmation box
        cy.get('.product-page-actions > .btn-primary').click(); // added to product again
        cy.get('body > div.ph-modal.modal.fade.product-purchased-modal.in > div > div > div.modal-header > button').click(); // closed confirmation box
        cy.get('#my_cart > span.jewel.jewel-danger').should("contain","2"); // quantity of the product is 2
    });

    it("TM-QA08-461:Add to Bag - Different items",()=>{
        cy.get('[data-id="1"] > .js-megamenu-list-department-link > .megamenu-list-department__department-name').click({force:true});
        cy.get('.emg-aside-links > :nth-child(2) > a').click({force:true});
        cy.get('.emg-menu-wrapper > :nth-child(1) > :nth-child(1) > a').click({force:true});
        // we navigated to mobile phones section
        cy.get('#card_grid > div:nth-child(1) > div > div > div.card-section-mid > h2 > a').click({force:true}); //selected a phone
        cy.get('.product-page-actions > .btn-primary').click({force:true}); //added to bag
        cy.get('body > div.ph-modal.modal.fade.product-purchased-modal.in > div > div > div.modal-header > button').click(); // closed confirmation box
        cy.go('back'); //we go back the the previous page
        cy.get('#card_grid > div:nth-child(2) > div > div > div.card-section-mid > h2 > a').click({force:true}); // selected a different phone
        cy.get('.product-page-actions > .btn-primary').click({force:true}); // added to bag
        cy.get('body > div.ph-modal.modal.fade.product-purchased-modal.in > div > div > div.modal-header > button').click(); // closed confirmation box
        cy.get('#my_cart > span.jewel.jewel-danger').should("contain","2"); // 2 products confirmation

     });

     it("TM-QA08-474:Add to Bag - Different Colour",()=>{
        cy.get('[data-id="1696"] > .js-megamenu-list-department-link > .megamenu-list-department__department-name').click({force:true});
        cy.get('#emg-body-overlay > div.emg-container > div > div.emg-clear.main-page-container > div > section:nth-child(2) > map > area:nth-child(1)').click({force:true}); // navigated to men's fashion items
        cy.get('#card_grid > div:nth-child(1) > div.card.card-fashion > div > div.card-section-mid > div > h2 > a').click(); // selected a product
        cy.get(':nth-child(2) > #product_colors > :nth-child(1) > .btn').click(); // selected a size
        cy.get('.product-page-actions > .btn-primary').click({force:true}); // added to bag
        cy.get('body > div.ph-modal.modal.fade.product-purchased-modal.in > div > div > div.modal-header > button').click(); // closed confirmation box 
        cy.get(':nth-child(1) > #product_colors > :nth-child(1) > .btn').click(); //selected another colour
        cy.get('.product-page-actions > .btn-primary').click({force:true}); // added to bag
        cy.get('body > div.ph-modal.modal.fade.product-purchased-modal.in > div > div > div.modal-header > button').click(); // closed confirmation box
        cy.get('#my_cart > span.jewel.jewel-danger').should("contain","2")

     });

     it("TM-QA08-475:Add to Bag - Different Size",()=>{
        cy.get('[data-id="1696"] > .js-megamenu-list-department-link > .megamenu-list-department__department-name').click({force:true});
        cy.get('#emg-body-overlay > div.emg-container > div > div.emg-clear.main-page-container > div > section:nth-child(2) > map > area:nth-child(1)').click({force:true}); // navigated to men's fashion items
        cy.get('#card_grid > div:nth-child(4) > div.card.card-fashion > div > div.card-section-mid > div > h2 > a').click();
        cy.get(':nth-child(1) > #product_colors > :nth-child(1) > .btn').click(); //selected a size
        cy.get('.product-page-actions > .btn-primary').click({force:true}); // added to bag
        cy.get('body > div.ph-modal.modal.fade.product-purchased-modal.in > div > div > div.modal-header > button').click(); // closed confirmation box
        cy.get(':nth-child(1) > #product_colors > :nth-child(2) > .btn').click();//selected a different size
        cy.get('.product-page-actions > .btn-primary').click({force:true}); // added to bag
        cy.get('body > div.ph-modal.modal.fade.product-purchased-modal.in > div > div > div.modal-header > button').click(); // closed confirmation box
        cy.get('#my_cart > span.jewel.jewel-danger').should("contain","2")

     });

     it("TM-QA08-520:Quick add to bag button",()=>{
        cy.get('[data-id="1"] > .js-megamenu-list-department-link > .megamenu-list-department__department-name').click({force:true});
        cy.get('.emg-aside-links > :nth-child(2) > a').click({force:true});
        cy.get('.emg-menu-wrapper > :nth-child(1) > :nth-child(1) > a').click({force:true});
        // we navigated to mobile phones section
        cy.get('#card_grid > div:nth-child(2) > div > div > div.card-section-btm > div.card-footer > form > button').click();
        cy.get('body > div.ph-modal.modal.fade.product-purchased-modal.in > div > div > div.modal-header > h4').should("contain","Produsul a fost adaugat in cos"); // confirmation dialog

     });


});