describe('My First Test', () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    });

    it('shows navbar and dropdown', () => {
        cy.contains("plt").should("be.visible");
        cy.contains("SKU").should("be.visible")
    })
    it("can find the stock remaining for SKU",() => {
        cy.get("select").select("MQI908424/70/79")
        cy.contains("remaining stock").should("be.visible")
    });
    it("cant find matching SKU",() => {
        cy.get("select").select("")
        cy.contains("found").should("be.visible")
    });
})