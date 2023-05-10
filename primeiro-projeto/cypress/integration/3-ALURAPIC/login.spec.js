describe('Login de usuarios alura pic', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com/#/home');
    })

    it('fazer login com usuario invalido', () => {
        cy.login('Jack', 1234);
        cy.on('window:alert', str => {
            expect(str).to.equal('Invalid user name or password')
        })
    });

    it('fazer login com usuario valido', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.contains('a', '(Logout)').should('be.visible');
    });
})