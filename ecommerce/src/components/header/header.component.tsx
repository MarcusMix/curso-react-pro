import { BsCart3 } from 'react-icons/bs'

import './header.styles.css'
import { HeaderContainer, HeaderItems, HeaderItem, HeaderTitle } from './header.styles'

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderTitle>Marcus Store</HeaderTitle>
            <HeaderItems>
                <HeaderItems>Explorar</HeaderItems>
                <HeaderItems>Login</HeaderItems>
                <HeaderItems>Criar Conta</HeaderItems>
                <HeaderItems>
                    <BsCart3 size={25} />
                </HeaderItems>
            </HeaderItems>
        </HeaderContainer>
    )
}

export default Header