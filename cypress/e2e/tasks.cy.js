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
    })

})