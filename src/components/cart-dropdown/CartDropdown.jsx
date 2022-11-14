import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Button from '../button/Button'
import CartItem from '../cart-item/CartItem'
import { selectCartItems } from '../../store/cart/cartSelector'

import {
  CartDropDownContainer,
  EmptyMessage,
  CartItems,
} from './cartDropdown.styles.js'

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems)
  const navigate = useNavigate()

  const goToCheckoutHandler = (e) => {
    navigate('/checkout')
  }

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage className='empty-message'>
            Your cart is empty
          </EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropDownContainer>
  )
}

export default CartDropdown
