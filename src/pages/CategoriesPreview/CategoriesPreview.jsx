import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'
import { selectCategoriesMap } from '../../store/categories/categorySelector'
import CategoryPreview from '../../components/category-preview/CategoryPreview'

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap)

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
