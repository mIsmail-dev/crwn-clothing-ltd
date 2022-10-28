import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home/Home'
import Authentication from './pages/Authentication/Authentication'
import Shop from './pages/shop/Shop'
import { UserProvider } from './contexts/UserContext'
import { ProductProvider } from './contexts/ProductContext'

const App = () => {
  return (
    <UserProvider>
      <ProductProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/auth' element={<Authentication />} />
            <Route path='/shop' element={<Shop />} />
          </Routes>
        </Router>
      </ProductProvider>
    </UserProvider>
  )
}

export default App
