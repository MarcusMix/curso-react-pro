import { onAuthStateChanged } from 'firebase/auth'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { FunctionComponent, useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Componentes
import HomePage from './pages/home/home.page'
import LoginPage from './pages/login/login.page'
import SignUpPage from './pages/sign-up/sign-up.page'

//Ultilities
import { UserContext } from './contexts/user.context'
import { auth, db } from './config/firebase.config'

const App: FunctionComponent = () => {

  const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext)

  onAuthStateChanged(auth, async (user) => {
    const isSigningOut = isAuthenticated && !user

    if (isSigningOut) {
      return logoutUser()
    }
    const isSigningIn = !isAuthenticated && user

    if (isSigningIn) {
      const querySnapshot = await getDocs(
        query(collection(db, 'users'), where('id', '==', user.uid))
      )

      const userFromFirestore = querySnapshot.docs[0]?.data()


      return loginUser(userFromFirestore as any)
    }
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

