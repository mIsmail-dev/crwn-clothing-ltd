import { useContext } from 'react'
import CategoryPreview from '../../components/category-preview/CategoryPreview'
import CategoriesContext from '../../contexts/CategoriesContext'
import './shop.scss'

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext)
  return (
    <div className='shop-container'>
      {Object.keys(categoriesMap).map((title) => (
        <CategoryPreview
          key={title}
          title={title}
          products={categoriesMap[title]}
        />
      ))}
    </div>
  )
}

export default Shop
