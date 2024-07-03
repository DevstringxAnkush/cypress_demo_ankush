import config from "../../config.json";
import LoginPage from "../../pages/LoginPage";
import NewPetPage from "../../pages/NewPetPage";
const filePath = './cypress/fixtures/newPet.json';

describe('New Pet Tests', () =>
{
    beforeEach(() => {
        cy.visit(config.baseUrl);
      })

// it('should log in successfully', {defaultCommandTimeOut:10000},() => {
//   const loginPage = new LoginPage();
//   cy.wait(5000);
//   loginPage.enterUsername(config.email);
//   loginPage.enterPassword(config.password);
//   loginPage.clickSubmit();
// })

it('Should All pet Hover successfully And Verify Dropdownlist', {defaultCommandTimeOut:10000},() => {
    const newPetPage = new NewPetPage();
    cy.wait(10000);
    newPetPage.clickOnPet(0);
    newPetPage.mouseHoverNewPet();
    newPetPage.petDropDownText().then((dropDownList) => {
      cy.log("DropDownList: "+ dropDownList);
      cy.readJSON(filePath).then((data) => {
      expect(dropDownList).to.deep.equal(data.AllPetDropDownList);
      })
  }).catch((error) => {
      // Handle any errors that might occur
      console.error(error);
  });})
  

  it('Should Hover successfully And Verify Dog Dropdownlist', {defaultCommandTimeOut:10000},() => {
    const newPetPage = new NewPetPage();
    cy.wait(10000);
    newPetPage.clickOnPet(1);
    newPetPage.mouseHoverNewPet();
    newPetPage.petDropDownText().then((dropDownList) => {
      cy.log("DropDownList: "+ dropDownList);
      cy.readJSON(filePath).then((data) => {
      expect(dropDownList).to.deep.equal(data.DogDropdownList);
      })
  }).catch((error) => {
      // Handle any errors that might occur
      console.error(error);
  });})

  it('should Hover successfully And Verify Cat Dropdownlist', {defaultCommandTimeOut:10000},() => {
    const newPetPage = new NewPetPage();
    cy.wait(10000);
    newPetPage.clickOnPet(2);
    newPetPage.mouseHoverNewPet();
    newPetPage.petDropDownText().then((dropDownList) => {
      cy.log("DropDownList: "+ dropDownList);
      cy.readJSON(filePath).then((data) => {
      expect(dropDownList).to.deep.equal(data.CatDropdownList);
      })
  }).catch((error) => {
      // Handle any errors that might occur
      console.error(error);
  });})


  it('Verify Selected All Pet DropdownText', {defaultCommandTimeOut:10000},() => {
    const newPetPage = new NewPetPage();
    cy.wait(10000);
   // newPetPage.clickOnContinueReading();
     newPetPage.selectedPetDropDownPageText(0).then((page_Text_List) => {
    cy.log("=========text========="+ page_Text_List);
    cy.readJSON(filePath).then((data) => {
      expect(page_Text_List).to.deep.equal(data.SelectedDogAndCatDropDownPageText);
      })
  }).catch((error) => {
    // Handle any errors that might occur
    console.error(error);
});
})

  it('Verify Selected Dog DropdownText', {defaultCommandTimeOut:10000},() => {
    const newPetPage = new NewPetPage();
    cy.wait(10000);
   // newPetPage.clickOnContinueReading();
     newPetPage.selectedPetDropDownPageText(1).then((page_Text_List) => {
    cy.log("=========text========="+ page_Text_List);
    cy.readJSON(filePath).then((data) => {
      expect(page_Text_List).to.deep.equal(data.SelectedDogDropDownPageText);
      })
  }).catch((error) => {
    // Handle any errors that might occur
    console.error(error);
});
})


it('Verify Selected Cat DropdownText', {defaultCommandTimeOut:10000},() => {
  const newPetPage = new NewPetPage();
  cy.wait(10000);
 // newPetPage.clickOnContinueReading();
   newPetPage.selectedPetDropDownPageText(2).then((page_Text_List) => {
  cy.log("=========text========= "+ page_Text_List);
  cy.readJSON(filePath).then((data) => {
    expect(page_Text_List).to.deep.equal(data.SelectedCatDropDownPageText);
    })
}).catch((error) => {
  // Handle any errors that might occur
  console.error(error);
});
})

  });

  