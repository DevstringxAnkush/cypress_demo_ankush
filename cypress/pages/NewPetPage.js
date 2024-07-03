class NewPetpage{

elements = { 
    newPetMenu : () => cy.xpath("//*[@id='mainnavigation']/li/*[contains(text(),'new pet')]"),
    petMenuDropDown : () => cy.xpath("//ul[@id='new petMenu']//li"),
    petNavBar : () => cy.xpath("//nav//div//div//div | //div[@id='tab-container-mobile']//a/div"),
    acceptCookies : () => cy.get('button.banner-close-button'),
    continueReading : () => cy.xpath("//button[contains(text(),'Continue Reading')]")
    
}

clickOnContinueReading(){
    cy.wait(5000);
    this.elements.continueReading().then($element => {
        if ($element.should('be.visible')) {
          // If element exists, perform certain actions
          cy.log('Element exists!')
          $element.click();
          // Other actions here...
}})
}


clickOnPet(index){
    this.elements.petNavBar().eq(index).click();
    cy.wait(10000);
}
  

 mouseHoverNewPet() {
        this.elements.newPetMenu().realHover('mouseover');
    }



petDropDownText() {
    return new Cypress.Promise((resolve, reject) => {
        let dropDownList = [];
        cy.xpath("//ul[@id='new petMenu']//li").each(($a) => {
            const address = $a.text();
            const actualMainValue = address.split('opens in a new tab')[0].trim();
            cy.log(actualMainValue);
            dropDownList.push(actualMainValue);
        }).then(() => {
            // Resolve the promise with the addresses array
            resolve(dropDownList);
        });
    });
}

selectedPetDropDownPageText(index) {
    return new Cypress.Promise((resolve, reject) => {
    const page_Text_List = [];
    this.elements.petNavBar().eq(index).click();
    this.elements.newPetMenu().realHover('mouseover');
    cy.wait(10000);
    this.elements.newPetMenu().realHover('mouseover');
    cy.xpath("//ul[@id='new petMenu']//li").its('length').then(list => {
        cy.log('The size of the list is: ', list);
        cy.wait(1000);
    for (let i = 0; i < list; i++) {
        this.elements.petNavBar().eq(index).click();
        cy.wait(3000);
        this.elements.newPetMenu().realHover('mouseover');
        let dropDown = "(//ul[@id='new petMenu']//a | //ul[@id='new petMenu']//span[not(@id)])";
        dropDown = dropDown + "[" + (i + 1) + "]";
        cy.xpath(dropDown).click();
        cy.wait(12000);
        cy.get('div h1').invoke('text').then(dropDown_Text => {
            cy.log(dropDown_Text);
            page_Text_List.push(dropDown_Text);
            
        });
        
    }}).then(() => {
        // Resolve the promise with the addresses array
        resolve(page_Text_List);
        cy.log("=========page_Text_List=======: "+ page_Text_List)
    });
});
}


    
}






export default NewPetpage;