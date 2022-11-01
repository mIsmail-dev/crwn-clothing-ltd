import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../button/Button'
import CartItem from '../cart-item/CartItem'
import CartContext from '../../contexts/CartContext'
import {
  CartDropDownContainer,
  EmptyMessage,
  CartItems,
} from './cartDropdown.styles.js'

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)
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
