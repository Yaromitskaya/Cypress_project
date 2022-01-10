import BasePage from '../pages/BasePage'

export default class LoginPage extends BasePage {
	static login(username, password) {
		cy.login(username, password)
	}

	static clickOnForgotPassword() {
		cy.contains('Forgot your password ?').click()
	}

	static displayErrorMessage() {
		cy.get('.alert-error')
			.should('be.visible')
			.and('contain', 'Login and/or password are wrong.')
	}
}
