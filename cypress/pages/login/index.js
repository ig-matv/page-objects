import { elements as el } from "./elements"

class Login{
    visitarPagina(){
        cy.visit('https://automationpratice.com.br/login')
    }

    preencherCredenciaisValidas(){
        cy.get(el.username).type("TesteTaki@gmail.com")
        cy.get(el.password).type("Taki123456")
        cy.get(el.rememberMe).click()
        cy.get(el.LoginButton).click()
    }

    preencherCredenciaisInvalidas(email, senha){
        cy.get(el.username).clear().type(email)
        cy.get(el.password).clear().type(senha)
        cy.get(el.LoginButton).click()
     }

     validarUrlLogin(){
        cy.url().should("eq", "https://automationpratice.com.br/login")
     }

     validarMensagensDeErro(mensagem){
        cy.get(".invalid_input")
            .should("contain.text", mensagem)

     }

}

export default new Login()
