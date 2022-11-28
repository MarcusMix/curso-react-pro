import { useContext } from 'react'
import { BsCart3 } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

//Styles
import { HeaderContainer, HeaderItems, HeaderItem, HeaderTitle } from './header.styles'

//Ultilities
import { CartContext } from '../../contexts/cart.context'
import { useDispatch } from 'react-redux'
import { signOut } from 'firebase/auth'
import { auth } from '../../config/firebase.config'

const Header = () => {
    
const {isAuthenticated} = useSelector((rootReducer: any) => rootReducer.userReducer)

    const { toggleCart, productsCount } = useContext(CartContext)

    const navigate = useNavigate()

    const dispatch = useDispatch()

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

    const handleSignOutClick = () => {
        dispatch({type: 'LOGOUT_USER'})
        signOut(auth)
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
                        <HeaderItem onClick={handleSignOutClick}>Sair</HeaderItem>
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