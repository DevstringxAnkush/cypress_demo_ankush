class BestInShowPage{

    elements = { 
        shopping_Nav_Bar : () => cy.xpath("//*[@id='mainnavigation']/li/*[contains(text(),'shopping')]"),
        bestInShow_Dropdown : () => cy.xpath("//ul[@id='shoppingMenu']//li//a[contains(text(),'Best in Show')] | //a[contains(text(),'Best in Show')]"),
        category_List : () => cy.xpath("//h1[contains(text(),'Best in Show')]/../div/a | //h2[contains(text(),'More in Shopping')]/../div/a")
        
    }


    mouseHoverShoppingNavBar() {
        this.elements.shopping_Nav_Bar().realHover('mouseover');
    }

    clickOnBestInShowDropDown() {
        this.elements.bestInShow_Dropdown().dblclick();
    }

    bestInShowCategoryText() {
        cy.wait(10000);
        return new Cypress.Promise((resolve, reject) => {
            let categoryList = [];
            this.elements.category_List().each(($a) => {
                const address = $a.text();
             //   const actualMainValue = address.split('opens in a new tab')[0].trim();
                cy.log(address);
                categoryList.push(address);
            }).then(() => {
                // Resolve the promise with the addresses array
                resolve(categoryList);
            });
        });
    }

}

export default BestInShowPage;