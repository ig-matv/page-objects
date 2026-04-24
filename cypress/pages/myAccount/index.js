import { elements as el } from "./elements"

class myAccount{
    validarAcessoAPagina(){
        cy.url().should("eq", "https://automationpratice.com.br/my-account")
    }

    validarMensagemDeSucesso(mensagem){
        cy.get(el.sucessMessage)
            .should("contain.text", mensagem)
            cy.get(el.confirmButton).click()
    }

    
}

export default new myAccount()
