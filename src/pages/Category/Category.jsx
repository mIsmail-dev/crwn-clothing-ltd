import { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import ProductCard from '../../components/product-card/ProductCard'
import CategoriesContext from '../../contexts/CategoriesContext'
import { CategoryContainer, Title } from './category.styles.js'

const Category = () => {
  const { category } = useParams()
  const { categoriesMap } = useContext(CategoriesContext)
  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => {
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
