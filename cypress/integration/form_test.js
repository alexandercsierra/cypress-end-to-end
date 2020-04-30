// interchangable terms due to integrating multiple testing libraries
// describe === context, it === specify, beforeEach
// don't need to import cypress

describe('Test our form inputs', ()=>{

    //since each test will need to visit the url, it should be in a beforeEach
    beforeEach(()=>{
        cy.visit('http://localhost:3000/')
    })

    it('adds to inputs', ()=>{
        cy.get('[data-cy=name]').type('Alex').should('have.value', 'Alex')
        cy.get('[data-cy=email]').type('alex@alex.com').should('have.value', 'alex@alex.com')
        // cy.get('[data-cy=motivation]').type('reasons').should('have.value', 'reasons')
        cy.get('textarea').type('reasons').should('have.value', 'reasons')
        cy.get('#positions').select('Yard Work').should('have.value', 'Yard Work')
        cy.get('[type="checkbox"]').check().should('be.checked')
        cy.contains('Submit').click();
    })
})