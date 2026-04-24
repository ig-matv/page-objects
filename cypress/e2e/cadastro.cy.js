import Cadastro from "../pages/cadastro"
import myAccount from "../pages/myAccount"


describe('Cadastro', () => {

  beforeEach(() => {

    //Arrange
    Cadastro.validarAcessoAPagina()

  })

  describe('Cadastro com sucesso', () => {

    it('Fazer cadastro com sucesso', () => {

        //Act
      Cadastro.preencherCadastroValido()

      //Assert
      myAccount.validarAcessoAPagina()
      myAccount.validarMensagemDeSucesso('Cadastro realizado!')

    })

  })

  describe('Cadastro com erros', () => {
    beforeEach(() => {
    //Arrange
    Cadastro.validarAcessoAPagina()

  })

    it('Cadastro com email invalido', () => {

       //Act
      Cadastro.preencherCadastroInvalido("Takizao00", "TesteTaki@.com", "Taki123456" )

      //Assert
      Cadastro.validarMensagemDeErro("O campo e-mail deve ser prenchido corretamente")


    })

    it('Cadastro com senha invalida', () => {

        //Act

        Cadastro.preencherCadastroInvalido("Takizao00", "TesteTaki@gmail.com", "Ta" )

      //Assert
      Cadastro.validarMensagemDeErro("O campo senha deve ter pelo menos 6 dígitos")

    })
  })

})