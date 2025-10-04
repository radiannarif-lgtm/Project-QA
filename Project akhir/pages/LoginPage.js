class LoginPage {
  visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { timeout: 120000 });
    cy.get('input[name="username"]', { timeout: 20000 }).should('be.visible');
  }

  enterUsername(username) {
    cy.get('input[name="username"]', { timeout: 20000 })
      .should('be.visible')
      .clear()
      .type(username);
  }

  enterPassword(password) {
    cy.get('input[name="password"]', { timeout: 20000 })
      .should('be.visible')
      .clear()
      .type(password);
  }

  clickLogin() {
    cy.get('button[type="submit"]', { timeout: 20000 })
      .should('be.visible')
      .click();
  }

  clickForgotPassword() {
    cy.contains('Forgot your password?').should('be.visible').click();
  }

  getErrorMessage() {
    return cy.get('.oxd-alert-content-text', { timeout: 20000 });
  }

  getRequiredMessage() {
    return cy.get('.oxd-input-field-error-message', { timeout: 20000 });
  }
}

export default LoginPage;