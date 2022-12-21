import { FunctionComponent, useContext } from "react";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from 'react-icons/ai'
import { useDispatch } from "react-redux";
import { decreaseCartProductQuantity, increaseCartProductQuantity, removeProductFromCart } from "../../store/toolkit/cart/cart.slice";

// Ultilities
import CartProduct from "../../types/cart.types";

// Styles
import { CartItemContainer, CartItemInfo, CartItemImage, CartItemQuantity, RemoveButton } from './cart-item.styles'


interface CartItemProps {
  product: CartProduct
}

const CartItem: FunctionComponent<CartItemProps> = ({ product }) => {
  const dispatch = useDispatch()

  const handleRemoveClick = () => {
    dispatch(removeProductFromCart(product.id))
  }


  const handleIncreseClick = () => {
    dispatch(increaseCartProductQuantity((product.id)))
  }

  const handleDecreaseClick = () => {
    dispatch(decreaseCartProductQuantity(product.id))
  }

  return (
    <CartItemContainer>
      <CartItemImage imageUrl={product.imageUrl} />

      <CartItemInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>

        <CartItemQuantity>
          <AiOutlineMinus size={20} onClick={handleDecreaseClick} />
          <p>{product.quantity}</p>
          <AiOutlinePlus size={20} onClick={handleIncreseClick} />
        </CartItemQuantity>
      </CartItemInfo>

      <RemoveButton onClick={handleRemoveClick}>
        <AiOutlineClose size={25} />
      </RemoveButton>
    </CartItemContainer>
  )
}

export default CartItem
