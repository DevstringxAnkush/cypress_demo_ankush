import config from "../../config.json";
const filePath = './cypress/fixtures/bestInShow.json';
import BestInShowPage from "../../pages/BestInShowPage";

describe('Best In Show Tests', () =>
    {
        beforeEach(() => {
            cy.visit(config.baseUrl);
          })

          it('Verify Best In Show category Text', {defaultCommandTimeOut:10000},() => {
            const bestInShowPage = new BestInShowPage();
            cy.wait(10000);
            bestInShowPage.mouseHoverShoppingNavBar();
            bestInShowPage.clickOnBestInShowDropDown();
            bestInShowPage.bestInShowCategoryText().then((categoryList) => {
              cy.log("DropDownList: "+ categoryList);
              cy.readJSON(filePath).then((data) => {
              expect(categoryList).to.deep.equal(data.CategoryText);
              })
          }).catch((error) => {
              // Handle any errors that might occur
              console.error(error);
          });})


        });