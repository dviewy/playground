describe("This should open the main page", () => {
  it("Should open BASE_HOST", () => {
    cy.log("111");

    cy.visit(Cypress.env("BASE_HOST"));
  });
});
