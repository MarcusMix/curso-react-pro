import { signOut } from 'firebase/auth'
import { useContext } from 'react'
import { BsCart3 } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

//Styles
import { HeaderContainer, HeaderItems, HeaderItem, HeaderTitle } from './header.styles'

//Ultilities
import { UserContext } from '../../contexts/user.context'
import { auth } from '../../config/firebase.config'
import { CartContext } from '../../contexts/cart.context'

const Header = () => {
    const { isAuthenticated } = useContext(UserContext)
    const { toggleCart, productsCount } = useContext(CartContext)

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


    const handleExploreClick = () => {
        navigate('/explore')
    }
    return (
        <HeaderContainer>
            <HeaderTitle onClick={handlePagePrincipal}>CLUB CLOTHING</HeaderTitle>

            <HeaderItems>
                <HeaderItem onClick={handleExploreClick}>Explorar</HeaderItem>
                {!isAuthenticated && (
                    <>
                        <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
                        <HeaderItem onClick={handleSignUpClick}>Criar Conta</HeaderItem>
                    </>
                )}

                {isAuthenticated && (
                    <>
                        <HeaderItem onClick={() => signOut(auth)}>Sair</HeaderItem>
                    </>
                )}

                <HeaderItem onClick={toggleCart}>
                    <BsCart3 size={25} />
                    <p>{productsCount}</p>
                </HeaderItem>
            </HeaderItems>
        </HeaderContainer>
    )
}

export default Header