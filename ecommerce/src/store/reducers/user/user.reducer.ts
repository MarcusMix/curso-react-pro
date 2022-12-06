import User from "../../../types/user.types";
import UserActionTypes from "./user.action-types";

interface initialState {
    currenntUser: User | null
    isAuthenticated: boolean
}

const initialState: initialState = {
    currenntUser: null,
    isAuthenticated: false
}

const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case UserActionTypes.LOGIN: {
            return { ...state, currentUser: action.payload, isAuthenticated: true }
        }
        case UserActionTypes.LOGOUT: {
            return { ...state, currentUser: null, isAuthenticated: false }
        }
        default: {
            return { ...state }
        }
    }
}

export default userReducer