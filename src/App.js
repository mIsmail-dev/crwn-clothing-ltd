import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home/Home'
import Authentication from './pages/Authentication/Authentication'
import Shop from './pages/shop/Shop'
import CheckOut from './pages/CheckOut/CheckOut'
import { CategoriesProvider } from './contexts/CategoriesContext'
import { CartProvider } from './contexts/CartContext'
import { setCurrentUser } from './store/user/userActions'
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListner,
} from './utils/firebase/firebase.utils'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListner((user) => {
      if (user) {
        createUserDocumentFromAuth(user)
      }

      dispatch(setCurrentUser(user))
    })

    return unsubscribe
  }, [dispatch])

  return (
    <CategoriesProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/auth' element={<Authentication />} />
            <Route path='/shop/*' element={<Shop />} />
            <Route path='/checkout' element={<CheckOut />} />
          </Routes>
        </Router>
      </CartProvider>
    </CategoriesProvider>
  )
}

export default App
