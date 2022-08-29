/// <reference types="cypress" />

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('login')
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type(Cypress.env('user'))
        cy.get('[data-test="login-password"]').type(Cypress.env('password'))
        cy.get('[data-test="login-submit"]').click()
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo')
    });

    it('Validar mensagem de erro para usuário inválido', () => {

        cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type('user@teste.com')
        cy.get('[data-test="login-password"]').type('password')
        cy.get('[data-test="login-submit"]').click()
        cy.get('[data-test="alert"]').should('be.visible')
    });

    it('Validar obrigatoriedade dos campos email e senha', () => {
        cy.get('[data-test="login-submit"]').click()
        cy.get('[data-test="login-email"] > .MuiFormHelperText-root').should('be.visible')
        cy.get('[data-test="login-password"] > .MuiFormHelperText-root').should('be.visible')
    });
});