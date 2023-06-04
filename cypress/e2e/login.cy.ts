describe('Login', () => {
  //antes de iniciar todos os teste.
  before(() => {})

  //ele roda o script antes de iniciar cada teste.
  beforeEach(() => {
  cy.visit('/login')
  })

  //VERIFICAR SE FEZ O LOGIN SEM O EMAIL CORRETO
  it('Test page LOGIN with invalid email ', () => {
    cy.title().should('contain', 'Login') // verificou que está na página de login
    const email = 'silastj'
    const nome = 'amos'
    cy.get('input[id="nome"]').type(nome)
    cy.get('input[id="email"]').type(email)
    cy.get('input[type="submit"]').click()
    cy.contains('Email obrigatorio....')
  })

  //VERIFICAR SE FEZ O LOGIN COM O EMAIL CORRETO
  it('should ENTER login page SUCESS', () => {
    cy.title().should('contain', 'Login')
    const email = 'silastj@gmail.com'
    const nome = 'Amós Silas'
    cy.get('input[id="nome"]').type(nome)
    cy.get('input[id="email"]').type(email)
    cy.get('input[type="submit"]').click()
    cy.contains('Cadastrado na newslestter')
  })

  // ele roda o script depois que rodar cada teste.
  afterEach(() => {

  })

  //depois de percorrer todos os teste.
  after(() => {

  })
})