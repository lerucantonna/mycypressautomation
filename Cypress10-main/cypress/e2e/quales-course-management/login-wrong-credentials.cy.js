/// <reference types="cypress" />

//This is a describe block
describe('This is a login test suite for the  Quales course  management system', () => { 

//This is an it block

 it('Verify that users with incorrect credentials cannot login into the quales course management app',() => {

 // This is where we shall be writing our cypress tests

//Cypress Visits the quales app
cy.visit('https://academy.quales.tech/'); 
 //Cypress spies and gets the element for the sign in button and click the sign button
cy.get('.css-48p1y4 > .MuiButtonBase-root').click();
 //Cypress spies the inpiut field for the Email address and type into the Email address field
 cy.get('[data-testid="EmailAddress"]').type('aypm@mail.com');
 cy.get('[data-testid="Password"]').type('pass12345666');
 cy.get('.MuiButton-contained').click();
 cy.contains('Invalid Login Credential').should('be.visible')
 
});




});








    
     




 