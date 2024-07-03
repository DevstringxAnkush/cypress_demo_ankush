class HealthPage{

    elements = {
        healthNavBar : () => cy.xpath("//*[@id='mainnavigation']/li/*[contains(text(),'health')]")
    }


    selectedDropDownPageText(index) {
        return new Cypress.Promise((resolve, reject) => {
        const pageTitle = [];
        this.elements.healthNavBar().realHover('mouseover');
        cy.wait(1000);
        cy.xpath("//ul[@id='healthMenu']//li").its('length').then(list => {
            cy.log('The size of the list is: ', list);
       //     this.elements.healthNavBar().realHover('mouseover');
            cy.wait(100);
        for (let i = 0; i < list; i++) {
            this.elements.healthNavBar().realHover('mouseover');
            let dropDown = "(//ul[@id='healthMenu']//a | //ul[@id='healthMenu']//span[not(@id)])";
            dropDown = dropDown + "[" + (i + 1) + "]";
            cy.xpath(dropDown).dblclick();
            cy.wait(12000);
            cy.get('div h1').invoke('text').then(dropDown_Text => {
                cy.log(dropDown_Text);
                pageTitle.push(dropDown_Text);
                
            });
            
        }}).then(() => {
            // Resolve the promise with the addresses array
            resolve(pageTitle);
            cy.log("=========page_Text_List=======: "+ pageTitle)
        });
    });
    }

}

export default HealthPage;