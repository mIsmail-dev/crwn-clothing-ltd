import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import CategoriesPreview from '../CategoriesPreview/CategoriesPreview'
import Category from '../Category/Category'
import { getCategoriesAndDocument } from '../../utils/firebase/firebase.utils'
import { setCategoriesMap } from '../../store/categories/categoryAction'

const Shop = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocument()
      dispatch(setCategoriesMap(categoryMap))
    }
    getCategoriesMap()
  }, [dispatch])

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  )
}

export default Shop
