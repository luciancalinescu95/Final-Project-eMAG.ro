describe("Shopping Cart",()=>{
    beforeEach(()=>{
        cy.visit("www.emag.ro");
    })

    it("TM-QA08-462:Empty Shopping Cart",()=>{
        cy.get('[data-id="1"] > .js-megamenu-list-department-link > .megamenu-list-department__department-name').click({force:true});
        cy.get('.emg-aside-links > :nth-child(4) > a').click();
        cy.get('.emg-menu-wrapper > :nth-child(1) > :nth-child(2) > a').click();
        cy.get('#card_grid > div:nth-child(1) > div > div > div.card-section-mid > h2 > a').click(); //navigated to
        cy.get('.product-page-actions > .btn-primary').click(); // added to cart
        cy.get('body > div.ph-modal.modal.fade.product-purchased-modal.in > div > div > div.modal-header > button').click(); //confirmation
        cy.get('#my_cart > i').click(); // go to shopping cart
        cy.get('.btn-remove-product').click(); // remove item
        cy.get('.title').should("contain","Cosul tau este gol"); // confirmation of removal
    });

    it("TM-QA08-463:Total Price Updated - 1 item",()=>{
        cy.get('[data-id="1"] > .js-megamenu-list-department-link > .megamenu-list-department__department-name').click({force:true});
        cy.get('.emg-aside-links > :nth-child(4) > a').click();
        cy.get('.emg-menu-wrapper > :nth-child(1) > :nth-child(2) > a').click();
        cy.get('#card_grid > div:nth-child(1) > div > div > div.card-section-mid > h2 > a').click(); //navigated to
        cy.get('.product-page-actions > .btn-primary').click(); // added to cart
        cy.get('body > div.ph-modal.modal.fade.product-purchased-modal.in > div > div > div.modal-header > button').click(); //confirmation
        cy.get('#my_cart > i').click(); // go to shopping cart
        cy.get('.price-main').should("contain","999");
        cy.get('#cartProductsPage > div.emg-col3 > div.cart-widget.order-summary-widget.cart-widget-side.emg-right > div > div.order-summary-text > div:nth-child(2) > span.emg-right.order-summary-items-price > span.money-int').should("contain","999");
        
    });

    it("TM-QA08-464:Total Price Updated - same multiple product",()=>{
        cy.get('[data-id="1"] > .js-megamenu-list-department-link > .megamenu-list-department__department-name').click({force:true});
        cy.get('.emg-aside-links > :nth-child(4) > a').click();
        cy.get('.emg-menu-wrapper > :nth-child(1) > :nth-child(2) > a').click();
        cy.get('#card_grid > div:nth-child(1) > div > div > div.card-section-mid > h2 > a').click(); //navigated to
        cy.get('.product-page-actions > .btn-primary').click(); // added to cart
        cy.get('body > div.ph-modal.modal.fade.product-purchased-modal.in > div > div > div.modal-header > button').click(); //confirmation
        cy.get('.product-page-actions > .btn-primary').click(); // added to cart
        cy.get('body > div.ph-modal.modal.fade.product-purchased-modal.in > div > div > div.modal-header > button').click(); //confirmation
        cy.get('#my_cart > i').click(); // go to shopping cart
        cy.get('.price-main > .money-int').should("contain","1.999")
        cy.get('#cartProductsPage > div.emg-col3 > div.cart-widget.order-summary-widget.cart-widget-side.emg-right > div > div.order-summary-text > div:nth-child(2) > span.emg-right.order-summary-items-price > span.money-int').should("contain","1.999")
        
    });

    it("TM-QA08-469:Continue Shopping when shopping cart is empty",()=>{
        cy.get('#my_cart > .visible-lg-inline').click({force:true});
        cy.get('.title').should("contain","Cosul tau este gol");
        cy.get('.empty-cart-primary-btn').should('be.visible');
        cy.get('.empty-cart-primary-btn').click();
        
    });

    it("TM-QA08-470:Checkout - Empty Shopping Cart",()=>{
        cy.get('#my_cart > .visible-lg-inline').click({force:true});
        cy.get('.title').should("contain","Cosul tau este gol");
        
    });

    it("TTM-QA08-472:Checkout",()=>{
        cy.get('[data-id="1"] > .js-megamenu-list-department-link > .megamenu-list-department__department-name').click({force:true});
        cy.get('.emg-aside-links > :nth-child(3) > a').click();
        cy.get('.emg-menu-wrapper > :nth-child(1) > :nth-child(1) > a').click();
        cy.get('#card_grid > div:nth-child(2) > div > div > div.card-section-btm > div.card-footer > form > button').click();
        cy.get('body > div.ph-modal.modal.fade.product-purchased-modal.in > div > div > div.modal-body.modal-content-extra-padding.pad-sep-xs.hidden-xs > div > div.table-cell.col-xs-12.col-sm-2.col-md-2.hidden-xs.hidden-sm > a').click();
        cy.get(':nth-child(3) > .order-summary-widget > .emg-row > .order-summary-text > .cart-widget-title').should("contain","Sumar comanda");
        cy.get(':nth-child(3) > .order-summary-widget > .emg-row > .order-summary-total > .title').should("contain","Total:");
        cy.get(':nth-child(3) > .order-summary-widget > .emg-row > .order-summary-total > .emg-button').should("be.visible");
        cy.get(':nth-child(3) > .order-summary-widget > .emg-row > .order-summary-total > .emg-button').click(); // the user will be redirected to login 
        
    });

});