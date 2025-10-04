import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import DirectoryPage from './pages/DirectoryPage';



const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const directoryPage = new DirectoryPage();

describe('OrangeHRM Automation', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
  });

  // TC01
  it('Login gagal dengan password salah', () => {
    loginPage.visit();
    loginPage.enterUsername('Admin');
    loginPage.enterPassword('wrongpass');
    loginPage.clickLogin();
    loginPage.getErrorMessage().should('contain', 'Invalid credentials');
  });

  // TC02
  it('Akses halaman Forgot Password', () => {
    loginPage.visit();
    loginPage.clickForgotPassword();
    cy.url().should('include', 'requestPasswordResetCode');
    cy.get('input[name="username"]').should('be.visible');
  });

  // TC03
  it('Forgot password dengan username valid', () => {
    loginPage.visit();
    loginPage.clickForgotPassword();
    cy.get('input[name="username"]').type('Admin');
    cy.contains('button', 'Reset Password').click();
    cy.contains('Reset Password link sent successfully').should('exist');
  });

  // TC04
  it('Forgot password dengan username kosong', () => {
    loginPage.visit();
    loginPage.clickForgotPassword();
    cy.contains('button', 'Reset Password').click();
    cy.get('.oxd-input-field-error-message').should('contain', 'Required');
  });

  // TC05
  it('Akses menu Directory dari dashboard', () => {
    loginPage.visit();
    loginPage.enterUsername('Admin');
    loginPage.enterPassword('admin123');
    loginPage.clickLogin();
    dashboardPage.clickDirectoryMenu();
    cy.url().should('include', 'directory');
  });

  // TC06
  it('Cari employee di Directory', () => {
    loginPage.visit();
    loginPage.enterUsername('Admin');
    loginPage.enterPassword('admin123');
    loginPage.clickLogin();
    dashboardPage.clickDirectoryMenu();
    directoryPage.searchEmployee('Linda');
    directoryPage.getResultsTable().should('contain', 'Linda');
  });

  // TC7
  it('Logout dari dashboard', () => {
    loginPage.visit();
    loginPage.enterUsername('Admin');
    loginPage.enterPassword('admin123');
    loginPage.clickLogin();
    dashboardPage.clickLogout();
    cy.url().should('include', 'login');
  });
});
