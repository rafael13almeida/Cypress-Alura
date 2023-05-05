describe('alura busca cursos', () => {

    beforeEach(() => {
        cy.visit('https://www.alura.com.br');
    })

    it('buscar curso de php', () => {
        cy.get('#header-barraBusca-form-campoBusca').type('php');
        cy.get('.header-barraBusca-form-submit').click();
        cy.get(':nth-child(6) > .busca-resultado-link > .busca-resultado-container > .busca-resultado-nome')
            .should('have.text', 'Formação Laravel: crie aplicações web em PHP');
    })
})