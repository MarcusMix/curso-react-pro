import { FunctionComponent, useContext } from "react";
import { BsCartCheck } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../hooks/redux.hooks";

// Ultilities
import { CartContext } from '../../contexts/cart.context'
import { toggleCart } from "../../store/reducers/cart/cart.actions";

// Components
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

// Styles
import { CartContainer, CartEscapeArea, CartTitle, CartTotal, CartDiv } from "./cart.styles";


const Cart: FunctionComponent = () => {

    const { isVisible, products } = useAppSelector(state => state.cartReducer)

    const { productsTotalPrice, productsCount } = useContext(CartContext)

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleGoToCheckoutClick = () => {
        navigate('/checkout')

    }

    const handleScapeAreaClick = () => {
        dispatch(toggleCart())
    }

    return (
        <CartContainer isVisible={isVisible}>
            <CartEscapeArea onClick={handleScapeAreaClick} />
            <CartDiv>
                <CartTitle>Seu Carrinho</CartTitle>

                {products.map(product => <CartItem key={product.id} product={product} />)}

                {productsCount > 0 && (
                    <CartTotal> Total: R${productsTotalPrice}</CartTotal>
                )}

                {productsCount > 0 && (
                    <CustomButton startIcon={<BsCartCheck />} onClick={handleGoToCheckoutClick}>Ir para o checkout</CustomButton>
                )}

                {productsCount === 0 && (
                    <p>Seu carrinho está vazio!</p>
                )}
            </CartDiv>
        </CartContainer>
    )
}

export default Cart;