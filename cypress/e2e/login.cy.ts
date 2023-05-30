describe('Login', () => {
  //antes de iniciar todos os teste.
  before(() => {})

  //ele roda o script a cada antes de iniciar o teste
  beforeEach(() => {
  cy.visit('/login')
  })

  // ele roda o script deppois que rodar cada teste.
  afterEach(() => {

  })

  //depois de percorrer todos os teste.
  after(() => {

  })
})