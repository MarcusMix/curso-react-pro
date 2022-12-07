
import Product from "../../../types/product.types"
import CartActionType from "./cart.action-types"

export const toggleCart = () => ({
    type: CartActionType.toggleCart
})

export const addProductToCart = (payload: Product) => ({
    type: CartActionType.addProductToCart,
    payload
}) 