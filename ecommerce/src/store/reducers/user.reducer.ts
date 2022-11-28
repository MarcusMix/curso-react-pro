import User from "../../types/user.types";

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
        case 'LOGIN_USER': {
            return {...state, currentUser: action.payload, isAuthenticated: true}
        }
        case 'LOGOUT_USER': {
            return {...state, currentUser: null, isAuthenticated: false}
        }
        default: {
            return {...state}
        }
    }
}

export default userReducer