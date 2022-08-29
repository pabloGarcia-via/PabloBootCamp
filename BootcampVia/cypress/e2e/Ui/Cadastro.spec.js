/// <reference types="cypress"/>

import { GeraEmail } from '../../support/GeraEmail/GeraEmail'

const geraEmail = new GeraEmail();

describe('Funcionalidade: Cadastro', () => {

    beforeEach(() => {
        cy.visit('cadastrar')
    });

    it('Validar cadastro com sucesso', () => {
        let email = geraEmail.geraEmailSenha(5)
        let senha = geraEmail.geraEmailSenha(8)

        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').click().type('Pablo Garcia')
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email + "@bootcampvia.com.br")
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type(senha)
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type(senha)
        cy.get('[data-test="register-submit"]').click()
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo Pablo Garcia')
    });

    it('Validar obrigatoriedade dos campos', () => {
        cy.get('[data-test="register-submit"]').click()
        cy.get('[data-test="register-name"] > .MuiFormHelperText-root').should('be.visible')
        cy.get('[data-test="register-email"] > .MuiFormHelperText-root').should('be.visible')
        cy.get('[data-test="register-password"] > .MuiFormHelperText-root').should('be.visible')
        cy.get('[data-test="register-password2"] > .MuiFormHelperText-root').should('be.visible')
    });

    it('Validar erro ao informar e-mail com formato incorreto', () => {
        let email = geraEmail.geraEmailSenha(5)
        let senha = geraEmail.geraEmailSenha(8)

        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').click().type('Pablo Garcia')
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type(senha)
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type(senha)
        cy.get('[data-test="register-submit"]').click()

        cy.get('.MuiFormHelperText-root').should('be.visible')
    });

    it('Validar erro ao informar senha com menos de 6 caracteres', () => {
        let email = geraEmail.geraEmailSenha(6)
        let senha = geraEmail.geraEmailSenha(4)

        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').click().type('Pablo Garcia')
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email + "@bootcampvia.com.br")
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type(senha)
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type(senha)
        cy.get('[data-test="register-submit"]').click()

        cy.get('[data-test="register-password"] > .MuiFormHelperText-root').should('be.visible')
    });
});