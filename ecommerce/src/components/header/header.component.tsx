import { BsCart3 } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'


import { HeaderContainer, HeaderItems, HeaderItem, HeaderTitle } from './header.styles'

const Header = () => {
    const navigate = useNavigate()

    const handleLoginClick = () => {
        navigate('/login')
    }

    return (
        <HeaderContainer>
            <HeaderTitle>Marcus Store</HeaderTitle>

            <HeaderItems>
                <HeaderItem>Explorar</HeaderItem>
                <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
                <HeaderItem>Criar Conta</HeaderItem>
                <HeaderItem>
                    <BsCart3 size={25} />
                </HeaderItem>
            </HeaderItems>
        </HeaderContainer>
    )
}

export default Header