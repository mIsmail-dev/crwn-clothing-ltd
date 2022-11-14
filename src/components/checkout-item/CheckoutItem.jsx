import { useDispatch, useSelector } from 'react-redux'
import { selectCartItems } from '../../store/cart/cartSelector'
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from '../../store/cart/cartAction'
import {
  CheckOutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from './checkoutItem.styles.js'

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()

  const addItemHandler = () => {
    dispatch(addItemToCart(cartItems, cartItem))
  }

  const removeItemHadler = () => {
    dispatch(removeItemFromCart(cartItems, cartItem))
  }

  const clearItemHandler = () => {
    dispatch(clearItemFromCart(cartItems, cartItem))
  }

  return (
    <CheckOutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHadler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckOutItemContainer>
  )
}

export default CheckoutItem
