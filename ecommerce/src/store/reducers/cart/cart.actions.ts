
import Product from "../../../types/product.types"
import CartActionType from "./cart.action-types"

export const toggleCart = () => ({
    type: CartActionType.toggleCart
})

export const addProductToCart = (payload: Product) => ({
    type: CartActionType.addProductToCart,
    payload
}) 

export const removeProductFromCart = (payload: string) => ({
    type: CartActionType.removeProductFromCart,
    payload
})

export const increaseCartProductQuantity = (payload: string) => ({
    type: CartActionType.increaseCartProductQuantity,
    payload
})

export const decreaseCartProductQuantity = (payload: string) => ({
    type: CartActionType.decreaseCartProductQuantity,
    payload
})

export const clearCartProducts = () => ({
    type: CartActionType.clearCartProducts
})
