import { createContext, useState, FunctionComponent } from 'react'
import User from '../types/user.types'

interface IUserContext {
    currentUser: User | null,
    isAuthenticated: boolean,
    loginUser: (user: User) => void,
    logoutUser: () => void
}

interface Children {
    children: string
}

export const UserContext = createContext<IUserContext>({
    currentUser: null,
    isAuthenticated: false,
    loginUser: () => { },
    logoutUser: () => { }
})



const UserContextProvider: FunctionComponent<Children> = ({ children }) => {

    const [currentUser, setCurrentUser] = useState<User | null>(null)

    const isAuthenticated = currentUser !== null ? false : true

    const loginUser = (user: User) => {
        setCurrentUser(user)
    }

    const logoutUser = () => {
        setCurrentUser(null)
    }

    return (
        <UserContext.Provider value={{ currentUser, isAuthenticated, loginUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider