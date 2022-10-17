import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'

//Components
import CustomButton from "../../components/custom-button/custom-button.component"
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

                    <LoginInputContainer>{/*email imput*/}</LoginInputContainer>
                    <LoginInputContainer>{/*password imput*/}</LoginInputContainer>

                    <CustomButton startIcon={<FiLogIn size={18} />}>Entrar</CustomButton>

                </LoginContent>
            </LoginContainer>
        </>
    )
}

export default LoginPage