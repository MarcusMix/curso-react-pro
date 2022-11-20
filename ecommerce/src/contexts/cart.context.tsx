import { createContext, FunctionComponent, useState } from "react";
import CartProduct from "../types/cart.types";
import Product from "../types/product.types";


interface ICartContext {
    isVisible: boolean;
    products: CartProduct[]
    toggleCart: () => void;
    addProductsToCart: (product: Product) => void
    removeProductFromCart: (productId: string) => void
    increseProductQuantity: (productId: string) => void
}

export const CartContext = createContext<ICartContext>({
    isVisible: false,
    products: [],
    toggleCart: () => { },
    addProductsToCart: () => { },
    removeProductFromCart: () => { },
    increseProductQuantity: () => { }
})

const CartContextProvider: FunctionComponent = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [products, setProducts] = useState<CartProduct[]>([])

    const toggleCart = () => {
        setIsVisible((prevState) => !prevState)
    }

    const addProductsToCart = (product: Product) => {
        const productIsAlreadyInCart = products.some((item) => item.id === product.id)

        if (productIsAlreadyInCart) {
            return setProducts(products => products.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ))
        }

        setProducts(prevState => [...prevState, { ...product, quantity: 1 }])
    }


    const removeProductFromCart = (productId: string) => {
        setProducts(products => products.filter(product => product.id !== productId))
    }

    const increseProductQuantity = (productId: string) => {
        setProducts(products => products.map(product => product.id === productId ? 
            { ...product, quantity: product.quantity + 1 } : product))
    }

    return (
        <CartContext.Provider value={{ isVisible, products, toggleCart, addProductsToCart, removeProductFromCart, increseProductQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider