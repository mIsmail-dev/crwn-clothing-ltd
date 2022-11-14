import { useDispatch, useSelector } from 'react-redux'
import { selectCartItems } from '../../store/cart/cartSelector'
import { addItemToCart } from '../../store/cart/cartAction'

import Button, { BUTTON_TYPE_CLASSES } from '../button/Button'
import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from './productCard.styles.js'

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()

  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, product))
  }

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  )
}

export default ProductCard
