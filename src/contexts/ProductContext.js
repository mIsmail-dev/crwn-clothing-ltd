import { createContext, useState } from 'react'
import PRODUCTS from '../shop-data.json'

const ProductContext = createContext({
  products: [],
})

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS)
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContext
