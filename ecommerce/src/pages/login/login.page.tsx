import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'

//Components
import CustomButton from "../../components/custom-button/custom-button.component"
import CustomInput from '../../components/custom-input/custom-input.component'
import Header from "../../components/header/header.component"

//Styles
import { LoginContainer, LoginHeadline, LoginInputContainer, LoginSubtitle, LoginContent } from "./login.styles"

const LoginPage = () => {
    return (
        <>
            <Header />
            <LoginContainer>
                <LoginContent>

                    <LoginHeadline>Entre com a sua conta</LoginHeadline>

                    <CustomButton startIcon={<BsGoogle size={18} />}>Entrar com o Google</CustomButton>

                    <LoginSubtitle>ou entre com seu e-mail</LoginSubtitle>

                    <LoginInputContainer>
                        <p>E-mail</p>
                        <CustomInput placeholder='Digite seu e-mail'/>
                    </LoginInputContainer>

                    <LoginInputContainer>
                        <p>Senha</p>
                        <CustomInput placeholder='Digite sua senha'/>
                    </LoginInputContainer>

                    <CustomButton startIcon={<FiLogIn size={18} />}>Entrar</CustomButton>

                </LoginContent>
            </LoginContainer>
        </>
    )
}

export default LoginPage