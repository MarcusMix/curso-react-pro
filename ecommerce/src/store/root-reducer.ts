import { combineReducers } from 'redux'
import cartReducer from './reducers/cart/cart.reducer'
import categoryReducer from './reducers/category/category.reducer'
import userReducer from './reducers/user/user.reducer'

const rootReducer = combineReducers({
    userReducer,
    cartReducer,
    categoryReducer
})

export default rootReducer