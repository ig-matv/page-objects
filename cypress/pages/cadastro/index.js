
import { elements as el } from "./elements"

class Cadastro{
    validarAcessoAPagina(){
        cy.visit('https://automationpratice.com.br/register')
    }

    preencherCadastroValido(){
      cy.get(el.username).type("Takizao")    
      cy.get(el.email).type("TesteTaki@gmail.com")  
      cy.get(el.password).type("Taki123456")  
      cy.get(el.LoginButton).click() 
    }

    preencherCadastroInvalido(username, email, senha){
      cy.get(el.username).type(username)    
      cy.get(el.email).clear().type(email)  
      cy.get(el.password).clear().type(senha)
      cy.get(el.LoginButton).click()
    }

    validarMensagemDeErro(mensagem){
        cy.get("#errorMessageFirstName")
        .should("contain.text", mensagem)
    }


}

export default new Cadastro()

