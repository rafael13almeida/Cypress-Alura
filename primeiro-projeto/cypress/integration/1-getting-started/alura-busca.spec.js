describe('alura busca cursos', () => {

    beforeEach(() => {
        //busca o site da alura
        cy.visit('https://www.alura.com.br');
    })

    it('buscar curso de php', () => {
        //busca o input de busca e escreve 'php'
        cy.get('#header-barraBusca-form-campoBusca').type('php');
        //busca o input de lupa e clica
        cy.get('.header-barraBusca-form-submit').click();
        //busca o texto e verifica
        cy.get(':nth-child(6) > .busca-resultado-link > .busca-resultado-container > .busca-resultado-nome')
            .should('have.text', 'Formação Laravel: crie aplicações web em PHP');
    })
})