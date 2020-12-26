before(() => {  
    cy.clearCookies()       
    cy.visit('/');
    cy.get('form');
})

describe('Search on Google ussing suggestion', ()=>{
    it("Click on Search Bar", ()=>{
        cy.get('input[class="gLFyf gsfi"').click();
    })
    it("Type 'The Name of the W'", ()=>{
        cy.get('input[class="gLFyf gsfi"').type('The Name of the W');
        cy.wait(1000)
    })
    it("Click on the first result suggestion", ()=>{
        cy.get('li').first().click({force: true});
    })
    it("Check the first result link", ()=>{
        const  firstSuggestion=cy.get('h3').first();
        firstSuggestion.contains('The Name of the Wind - Patrick Rothfuss'); 
    })
    it("Click on the first result link", ()=>{
        cy.get('h3').first().click();
    })
    it("Check the page is 'Patrick Rothfuss - The Book'", ()=>{
        cy.title().should('eq', 'Patrick Rothfuss - The Books')
    })
})