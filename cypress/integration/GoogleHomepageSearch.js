before(() => {  
    cy.clearCookies()       
    cy.visit('/');
    cy.get('form');
})

describe('Search on Google', ()=>{
    it("Click on Search Bar", ()=>{
        cy.get('input[class="gLFyf gsfi"').click();
    })
    it("Type 'The Name of the Wind'", ()=>{
        cy.get('input[class="gLFyf gsfi"').type('The Name of the Wind');
    })
    it("Click on the Google Search Button", ()=>{
        cy.get('#tsf > div:nth-child(2) > div.A8SBwf > div.FPdoLc.tfB0Bf > center > input.gNO89b').click();
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
    
