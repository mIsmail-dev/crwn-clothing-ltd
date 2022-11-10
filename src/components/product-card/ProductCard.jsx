import Button, { BUTTON_TYPE_CLASSES } from '../button/Button'
import CartContext from '../../contexts/CartContext'
import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from './productCard.styles.js'
import { useContext } from 'react'

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product
  const { addItemToCart } = useContext(CartContext)
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={() => {
          addItemToCart(product)
        }}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  )
}

export default ProductCard
