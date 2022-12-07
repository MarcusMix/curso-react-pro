import CartProduct from "../../../types/cart.types";
import CartActionType from "./cart.action-types";

interface InitialState {
    isVisible: boolean;
    productsTotalPrice: number;
    productsCount: number;
    products: CartProduct[];
}

const initialState: InitialState = {
    isVisible: false,
    products: [],
    productsTotalPrice: 0,
    productsCount: 0
}

const cartReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CartActionType.toggleCart:
            return { ...state, isVisible: !state.isVisible }
        default:
            return { ...state }
    }
}

export default cartReducer