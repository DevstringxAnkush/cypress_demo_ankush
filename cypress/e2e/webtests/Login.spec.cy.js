import config from "../../config.json";
import LoginPage from "../../pages/LoginPage";

describe('Login Tests', () =>
{
    beforeEach(() => {
        cy.visit(config.baseUrl);
      })

it('should log in successfully', {defaultCommandTimeOut:10000},() => {
  const loginPage = new LoginPage();
  cy.wait(5000);
  loginPage.enterUsername(config.email);
  loginPage.enterPassword(config.password);
  loginPage.clickSubmit();
  cy.wait(10000);
  loginPage.mouseHoverNewPet();
})
  });