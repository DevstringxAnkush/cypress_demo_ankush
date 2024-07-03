import config from "../../config.json";
const filePath = './cypress/fixtures/health.json';
import HealthPage from "../../pages/HealthPage";

describe('Health Tests', () =>
    {
        beforeEach(() => {
            cy.visit(config.baseUrl);
          })

          it.only('Verify Health Page Text', {defaultCommandTimeOut:10000},() => {
            const healthPage = new HealthPage();
            cy.wait(10000);
            healthPage.selectedDropDownPageText().then((pageTitle) => {
              cy.log("DropDownList: "+ pageTitle);
              cy.readJSON(filePath).then((data) => {
                cy.log("SelectedDropDownText: "+ data.SelectedDropDownText);
              expect(pageTitle).to.deep.equal(data.SelectedDropDownText);
              })
          }).catch((error) => {
              // Handle any errors that might occur
              console.error(error);
          });})


        });