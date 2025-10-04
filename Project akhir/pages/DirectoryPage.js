class DirectoryPage {
  searchEmployee(name) {
    cy.get('input[placeholder="Type for hints..."]').clear().type(name);
    cy.contains('button', 'Search').click();
  }
  getResultsTable() {
  return cy.get('.oxd-table-body', { timeout: 20000 }).should('be.visible');
  }
  getResultsTable() {
    return cy.get('.oxd-table-body');
  }
}
export default DirectoryPage;