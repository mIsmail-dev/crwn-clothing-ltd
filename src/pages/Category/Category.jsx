import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { selectCategoriesMap } from '../../store/categories/categorySelector'
import ProductCard from '../../components/product-card/ProductCard'
import { CategoryContainer, Title } from './category.styles.js'

const Category = () => {
  const { category } = useParams()
  console.log('render/re-rendering category component')
  const categoriesMap = useSelector(selectCategoriesMap)
  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => {
    console.log('effect fired calling setProducts')
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <>
      <Helmet>
        <title>{category} page</title>
        <meta
          name='description'
          content='Showing all the products of a category'
        />
      </Helmet>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  )
}

export default Category
