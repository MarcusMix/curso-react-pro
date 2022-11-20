import { createContext, FunctionComponent, useState } from "react";
import CartProduct from "../types/cart.types";
import Product from "../types/product.types";


interface ICartContext {
    isVisible: boolean;
    products: CartProduct[]
    toggleCart: () => void;
    addProductsToCart: (product: Product) => void
}

export const CartContext = createContext<ICartContext>({
    isVisible: false,
    products: [],
    toggleCart: () => { },
    addProductsToCart: () => { }
})

const CartContextProvider: FunctionComponent = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [products, setProducts] = useState<CartProduct[]>([])

    const toggleCart = () => {
        setIsVisible((prevState) => !prevState)
    }

    const addProductsToCart = (product: Product) => {
        setProducts(prevState => [...prevState, { ...product, quantity: 1 }])
    }

    return (
        <CartContext.Provider value={{ isVisible, products, toggleCart, addProductsToCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider