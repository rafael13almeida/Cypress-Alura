describe('Usabilidade tela inicial', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com/#/home');
    })

    it('verifica botão hamburguer alurapic', () => {

        cy.get('.navbar-brand > .fa').click();
        cy.get('.menu-bar > .fa').should('be.visible');
    });

    it('verifica título da página', () =>{
        cy.contains('h4', 'Login').should('be.visible');
    })
})