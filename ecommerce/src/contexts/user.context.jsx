import { createContext, FunctionComponent, useState } from 'react'

export const UserContext = createContext({
    currentUser: null
})

const UserContextProvider: FunctionComponent = () => {
    const [currentUser, setCurrentUser] = useState(null)
    return (
        <UserContext.Provider value={{currentUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider