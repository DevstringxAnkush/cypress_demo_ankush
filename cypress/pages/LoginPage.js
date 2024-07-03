
class Loginpage{

    element = { 
        loginButton : ()=> cy.get('button').contains('Sign up'),
        usernameInput : () => cy.get('input#email'),  
        nextButton : ()=>  cy.get('button').contains('Next'),   
        passwordInput : () => cy.get('input#password'),    
        loginBtn : () => cy.get('button').contains('Log In'),
    }

    enterUsername(username)
    {
        cy.wait(5000);
       this.element.loginButton().click();
        this.element.usernameInput().clear();
        this.element.usernameInput().type(username);
        this.element.nextButton().click();
    }

    enterPassword(password)
    {
        this.element.passwordInput().clear();
        this.element.passwordInput().type(password);
    }

    clickSubmit() {
        this.element.loginBtn().click();
    }
}

//     elements = { 
//         amazonSearchInput : () => cy.xpath("//input[@name='email']"),      
//         passwordInput : () => cy.xpath("(//span[contains(text(),'Age')]/parent::div//div)[1]"),    
//         randomClick : () => cy.get('span.a-text-normal'),
//         logoIcon : () => cy.get('a.navbar-brand'),
//         searchBtn : () => cy.get("a[title='Login'] button"),
//     }

//     enterAmazonSearchText(text)
//     {
//         this.elements.amazonSearchInput().clear();
//         this.elements.amazonSearchInput().type(text);
//     }

//     clickSearchBtn()
//     {
//         this.elements.searchBtn().click();
// 		}
    

//         // clickRandom() {
//         //     return cy.get('.a-link-normal > .a-size-medium').then(elements => {
//         //         const randomIndex = Math.floor(Math.random() * elements.length);
//         //         const randomElement = elements[randomIndex];
        
//         //         return cy.wrap(randomElement).click().invoke('text').then(text => {
//         //             cy.log(text);
//         //             localStorage.setItem('myText',text);
//         //             cy.log('------------My Text---------'+localStorage.getItem('myText'))
//         //         });
//         //     });
//         // }
        
//         clickRandom() {
//             return cy.get('.a-link-normal > .a-size-medium').then(elements => {
//                 const randomIndex = Math.floor(Math.random() * elements.length);
//                 const randomElement = elements[randomIndex];
        
//                 return cy.wrap(randomElement).click().then(() => {
//                     return cy.wrap(randomElement).invoke('text').then(text => {
//                         cy.log(text);
//                         localStorage.setItem('myText',text);
//         //             cy.log('------------My Text---------'+localStorage.getItem('myText'))
//                     });
//                 });
//             });
//         }


//     // logoDisplayed()
//     // {
//     //       Cypress.Commands.add('getRandomElement', { prevSubject: 'element' }, (subject) => {
//     //         return cy.wrap(subject).then((elements) => {
//     //           const randomIndex = Math.floor(Math.random() * elements.length);
//     //           return cy.wrap(elements[randomIndex]);
//     //         });
//     //       });
//     // }
    
// }
export default Loginpage;