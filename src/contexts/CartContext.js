import { createContext, useState } from 'react'

const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  return (
    <CartContext.Provider value={{ isCartOpen, setIsCartOpen }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext
