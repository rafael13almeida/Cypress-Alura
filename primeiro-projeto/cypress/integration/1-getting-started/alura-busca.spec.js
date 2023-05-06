describe('alura busca cursos', () => {

    beforeEach(() => {
        //visite o site da aluta 
        cy.visit('https://www.alura.com.br');
    })

    it('buscar curso de php', () => {
        //busca o campo de busca e escreva php
        cy.get('#header-barraBusca-form-campoBusca').type('php');
        //busca a lupa e clique nela 
        cy.get('.header-barraBusca-form-submit').click();
        //busca o nome neste campo 
        cy.get('h4.busca-resultado-nome')
            //verifica se tem o texto, Formação Laravel: crie aplicações web em PHP
            .should('contain', 'Formação Laravel: crie aplicações web em PHP');
    })
})