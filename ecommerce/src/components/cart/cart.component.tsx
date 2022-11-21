import { FunctionComponent, useContext } from "react";
import { BsCartCheck } from "react-icons/bs";

// Ultilities
import { CartContext } from '../../contexts/cart.context'
import CartItem from "../cart-item/cart-item.component";

// Components
import CustomButton from "../custom-button/custom-button.component";

// Styles
import { CartContainer, CartEscapeArea, CartTitle, CartTotal, CartDiv } from "./cart.styles";


const Cart: FunctionComponent = () => {

    const { isVisible, products, toggleCart, productsTotalPrice } = useContext(CartContext)
    return (
        <CartContainer isVisible={isVisible}>
            <CartEscapeArea onClick={toggleCart} />
            <CartDiv>
                <CartTitle>Seu Carrinho</CartTitle>

                {products.map(product => <CartItem key={product.id} product={product} />)}

                <CartTotal> Total: R${productsTotalPrice}</CartTotal>
                <CustomButton startIcon={<BsCartCheck />}>Ir para o checkout</CustomButton>
            </CartDiv>
        </CartContainer>
    )
}

export default Cart;