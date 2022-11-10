import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'
import CategoryPreview from '../../components/category-preview/CategoryPreview'

const CategoriesPreview = () => {
  const { categoriesMap } = useSelector((state) => state.categories)

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
