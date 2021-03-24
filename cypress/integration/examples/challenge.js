/// <reference types="cypress" />

describe('Get Logo', () => {
    it('Getting logo element', () => {
      cy.visit('https://www.award.co/');
      cy.get('.logo-white').click();
      cy.scrollTo('bottom');
      cy.contains('Recognize');
      cy.contains('Celebrate');
      cy.contains('Reward');
      cy.contains('Manage');
      //navigate to url
      //get logo
      //click logo
    })
  })