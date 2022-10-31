import { createContext, useEffect, useState } from 'react'
import { getCategoriesAndDocument } from '../utils/firebase/firebase.utils'

const CategoriesContext = createContext({
  categoriesMap: {},
})

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({})

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocument()
      console.log(categoryMap)
      setCategoriesMap(categoryMap)
    }
    getCategoriesMap()
  }, [])

  return (
    <CategoriesContext.Provider value={{ categoriesMap }}>
      {children}
    </CategoriesContext.Provider>
  )
}

export default CategoriesContext
