describe('Home', () => {
  //verificar se a home está ON
  it('should load the page', () => {
    cy.visit('/')
  });
  // verificar se está na linguagem en
  it('should load the page in english', () => {
    cy.visit('/')
    cy.get('body').should('contain', 'You are viewing the site in')
  });
  // verificar se está pagina está em portugues com a frase X
  it('should laod the page in wrong language', () => {
    cy.visit('/')
    cy.get('body').should('not.contain', 'Você está visualizando o site e')
  });

  it('should click page', () => {
    cy.visit('/')
    cy.contains('Acessar Login').click()
    cy.url().should('include', '/login')

  })
})