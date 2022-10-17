import { BsCart3 } from 'react-icons/bs'

import { HeaderContainer, HeaderItems, HeaderItem, HeaderTitle } from './header.styles'

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderTitle>Marcus Store</HeaderTitle>

            <HeaderItems>
                <HeaderItem>Explorar</HeaderItem>
                <HeaderItem>Login</HeaderItem>
                <HeaderItem>Criar Conta</HeaderItem>
                <HeaderItem>
                    <BsCart3 size={25} />
                </HeaderItem>
            </HeaderItems>
        </HeaderContainer>
    )
}

export default Header