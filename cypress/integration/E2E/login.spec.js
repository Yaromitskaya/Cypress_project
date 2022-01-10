import { url } from '../../../config'
import Navbar from '../../page-objects/components/Navbar'
import LoginPage from '../../page-objects/pages/LoginPage'
import { loginName } from '../../../config'
import { loginPassword } from '../../../config'

describe('Login fail test', () => {
	before(function () {
		cy.visit(url)
		Navbar.clickSignin()
	})

	it('should login with invalid userame and password', () => {
		LoginPage.login('123', '123')
	})

	it('should display error message', () => {
		LoginPage.displayErrorMessage()
	})
})

describe('Login success test', () => {
	before(function () {
		cy.visit(url)
		Navbar.clickSignin()
	})
	it('should login with valid username and password', () => {
		LoginPage.login(loginName, loginPassword)
	})
	it('should logout of the application', () => {
		Navbar.logout()
		cy.contains('Signin').should('be.visible')
	})
})
