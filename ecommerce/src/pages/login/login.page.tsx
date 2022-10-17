import Header from "../../components/header/header.component"
import { LoginContainer, LoginHeadline, LoginInputContainer, LoginSubtitle, LoginContent } from "./login.styles"

const LoginPage = () => {
    return (
        <>
            <Header />
            <LoginContainer>
                <LoginContent>
                    
                    <LoginHeadline>Entre com a sua conta</LoginHeadline>

                    {/*button*/}

                    <LoginSubtitle>ou entre com seu e-mail</LoginSubtitle>

                    <LoginInputContainer>{/*email imput*/}</LoginInputContainer>
                    <LoginInputContainer>{/*password imput*/}</LoginInputContainer>
                    {/*button*/}

                </LoginContent>
            </LoginContainer>
        </>
    )
}

export default LoginPage