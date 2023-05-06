describe('Login e registro de usuarios alura pic', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com/#/home');
    })

    it('verificar mensagens de validação', () => {
        cy.contains('a', 'Register now').click();

        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');

        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');   
    })

    it('verificar mensagem de email invalido', () => {
        cy.contains('a', 'Register now').click();

        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('Codorninha');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    })

    it('verificar mensagem de full name invalido', () => {
        cy.contains('a', 'Register now').click();

        cy.get('input[formcontrolname="fullName"]').type('F');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
    })

    it('verificar mensagem de user name invalido', () => {
        cy.contains('a', 'Register now').click();

        cy.get('input[formcontrolname="userName"]').type('F');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
    })

    it('verificar mensagem de password invalido', () => {
        cy.contains('a', 'Register now').click();

        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    })
})