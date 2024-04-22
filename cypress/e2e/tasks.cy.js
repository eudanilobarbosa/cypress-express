/// <reference types="cypress" />

describe('tarefas', () => {

    it('deve cadastrar uma nova tarefa', () => {
        cy.request({
            url: 'http://localhost:3333/helper/tasks',
            method: 'DELETE',
            body: { name: 'Ler um livro de Node.js' }
        }).then(response => {
            expect(response.status).to.eq(204)
        })

        cy.visit('http://localhost:3000')

        cy.get('input[placeholder="Add a new Task"]')
            .type('Ler um livro de Node.js')

        cy.contains('button', 'Create').click()

        cy.contains('main div p', 'Ler um livro de Node.js')
            .should('be.visible')
    })

    it('não deve permitir tarefa duplicada', () => {

        cy.request({
            url: 'http://localhost:3333/helper/tasks',
            method: 'DELETE',
            body: { name: 'Estudar Javascript' }
        }).then(response => {
            expect(response.status).to.eq(204)
        })

        // Dado  que eu tenho uma tarefa duplicada
        cy.request({
            url: 'http://localhost:3333/tasks',
            method: 'POST',
            body: { name: 'Estudar Javascript', is_done: false }
        }).then(response => {
            expect(response.status).to.eq(201)
        })       

        // Quando faço o cadastro dessa tarefa
        cy.visit('http://localhost:3000')

        cy.get('input[placeholder="Add a new Task"]')
            .type('Estudar Javascript')

        cy.contains('button', 'Create').click()

        // Então vejo a mensagem de duplicidade

        cy.get('.swal2-html-container')
            .should('be.visible')
            .should('have.text', 'Task already exists!')
    })

})