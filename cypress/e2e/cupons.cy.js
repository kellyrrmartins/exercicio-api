/// <reference types="cypress"/>
describe('Funcionalidade Cupom ', () => {
  let token = "Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy"

  it('Listar cupons', () => {
    cy.request({
      method: "GET",
      url: "wc/v3/coupons",
      headers: {
        authorization: token
      }
    }).then((response) => {
      expect(response.status).to.equal(200)
    })
  });

  it('Cadastrar cupom', () => {
    let code = `Cupom ${Math.floor(Math.random() * 100000000)}`

    cy.cadastrarCupom(code, "10.00")
      .then((response) => {
        expect(response.status).to.equal(201)
      })
  });


});