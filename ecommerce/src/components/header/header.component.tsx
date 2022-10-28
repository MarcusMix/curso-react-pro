import { BsCart3 } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'


import { HeaderContainer, HeaderItems, HeaderItem, HeaderTitle } from './header.styles'

const Header = () => {
    const navigate = useNavigate()

    const handleLoginClick = () => {
        navigate('/login')
    }

    const handleSignUpClick = () => {
        navigate('/sign-up')
    }

    const handlePagePrincipal = () => {
        navigate('/')
    }

    return (
        <HeaderContainer>
            <HeaderTitle onClick={handlePagePrincipal}>Marcus Store</HeaderTitle>

            <HeaderItems>
                <HeaderItem>Explorar</HeaderItem>
                <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
                <HeaderItem onClick={handleSignUpClick}>Criar Conta</HeaderItem>
                <HeaderItem>
                    <BsCart3 size={25} />
                </HeaderItem>
            </HeaderItems>
        </HeaderContainer>
    )
}

export default Header