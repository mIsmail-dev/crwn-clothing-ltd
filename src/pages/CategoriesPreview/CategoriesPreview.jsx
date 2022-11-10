import { useContext } from 'react'
import { Helmet } from 'react-helmet'
import CategoryPreview from '../../components/category-preview/CategoryPreview'
import CategoriesContext from '../../contexts/CategoriesContext'

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext)
  return (
    <>
      <Helmet>
        <title>Shop page</title>
        <meta
          name='description'
          content='Previewing all the categories of the clothes.'
        />
      </Helmet>
      {Object.keys(categoriesMap).map((title) => (
        <CategoryPreview
          key={title}
          title={title}
          products={categoriesMap[title]}
        />
      ))}
    </>
  )
}

export default CategoriesPreview
