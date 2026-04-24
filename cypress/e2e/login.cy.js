import myAccount from "../pages/myAccount"
import Login from "../pages/login"


describe ('Login', ()=>{

    beforeEach(() => {
    //Arrange
    Login.visitarPagina()
  })

    describe('Login com sucesso',()=>{
        it('Login com credenciais válidas', ()=>{
            
            //Act
            Login.preencherCredenciaisValidas()
            
            //Assert
            myAccount.validarAcessoAPagina()
            myAccount.validarMensagemDeSucesso('Login realizado')
        })
    })

    describe("Login Invalido", ()=>{

        beforeEach(() => {
            Login.validarUrlLogin()
  })

        it("Login com e-mail invalido", ()=>{
        
            //Act
            Login.preencherCredenciaisInvalidas("TesteTaki@.com", "Taki123456")
            
            //Assert
            Login.validarMensagensDeErro("E-mail inválido.")
        })

        it("Login com senha invalida", ()=>{

            //Act
            Login.preencherCredenciaisInvalidas("TesteTaki@gmail.com", "T")

            //Assert
            Login.validarMensagensDeErro("Senha inválida.")
        })
    })
    
})