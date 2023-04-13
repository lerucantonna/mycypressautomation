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
       cy.get('[data-testid="EmailAddress"]').type('ay@mail.com');
       cy.get('[data-testid="Password"]').type('pass1234');
       cy.get('.MuiButton-contained').click();
       cy.contains('Courses').should('be.visible')
       cy.contains('Login Successful').should('be.visible')
       cy.contains('List of Courses').should('be.visible')
     //Cypress spies and get the element for the Add course button
     cy.get('.MuiGrid-root > .MuiButtonBase-root').click();
     //Cypress spies the input field Title and type into the title
     cy.viewport('macbook-16');
     cy.get('[data-testid="Title*"]').type('OLUMIDE CYPRESS ASSIGNMENT')
     cy.get('[data-testid="Description*"]').type('cypress creates course')
     cy.get('#demo-simple-select').click();
     cy.get('[data-value="3"]').click();
     cy.get('[data-testid="isPremium"]').click();
     cy.get(':nth-child(4) > .MuiTypography-root').click();
     cy.get('[data-testid="ImageURL"]').type('"https://source.unsplash.com/user/c_v_r/900x800",');
     cy.get('[data-testid="online"]').click();
     cy.get('[data-testid="CourseURL*(mustbeyoutube)"]').type('"https://www.youtube.com/watch?v=8vXoMqWgbQQ",');
     cy.get('.css-tzsjye > .MuiButton-root').click();

      








    });


});

