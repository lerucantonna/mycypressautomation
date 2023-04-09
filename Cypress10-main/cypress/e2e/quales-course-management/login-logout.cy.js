/// <reference types="cypress" />

//This is a describe block
describe('This is a login test suite for the  Quales course  management system', () => { 

//This is an it block

 it('Verify that users with correct credentials can login into the quales course management app',() => {

 // This is where we shall be writing our cypress tests

//Cypress Visits the quales app
cy.visit('https://academy.quales.tech/'); 
 //Cypress spies and gets the element for the sign in button and click the sign button
cy.get('.css-48p1y4 > .MuiButtonBase-root').click();
 //Cypress spies the inpiut field for the Email address and type into the Email address field
 cy.get('[data-testid="EmailAddress"]').type('ay@mail.com');
 cy.get('[data-testid="Password"]').type('pass1234');
 cy.get('.MuiButton-contained').click();
 cy.contains('Courses').should('be.visible')
 cy.contains('Login Successful').should('be.visible')
 cy.contains('List of Courses').should('be.visible')
});

it('Verify that users with correct credentials already logged  into the quales course management app can logout',() => {

    // This is where we shall be writing our cypress tests
   
   //Cypress Visits the quales app
   cy.visit('https://academy.quales.tech/'); 
    //Cypress spies and gets the element for the sign in button and click the sign button
   cy.get('.css-48p1y4 > .MuiButtonBase-root').click();
    //Cypress spies the inpiut field for the Email address and type into the Email address field
    cy.get('[data-testid="EmailAddress"]').type('ay@mail.com');
    cy.get('[data-testid="Password"]').type('pass1234');
    cy.get('.MuiButton-contained').click();
    cy.contains('Courses').should('be.visible')
    cy.contains('Login Successful').should('be.visible');
    cy.contains('List of Courses').should('be.visible');
    cy.wait(5000);
    cy.get('.MuiToolbar-root > .MuiButton-root').click();
    cy.contains('Logged out successfully').should('be.visible');
    cy.contains('Email Address').should('be.visible');

    
   
   
    });



});








    
     




 