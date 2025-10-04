class DashboardPage {
  getWelcome() {
    return cy.get('.oxd-userdropdown-name');
  }

  clickDirectoryMenu() {
    cy.contains('a.oxd-main-menu-item', 'Directory').click();
  }

  clickLogout() {
    this.getWelcome().click();
    cy.contains('Logout').click();
  }
}
export default DashboardPage;
