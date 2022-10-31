import { useContext } from 'react'
import CheckoutItem from '../../components/checkout-item/CheckoutItem'
import CartContext from '../../contexts/CartContext'
import './CheckOut.scss'

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext)
  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-bloack'>
          <span>Product</span>
        </div>
        <div className='header-bloack'>
          <span>Description</span>
        </div>
        <div className='header-bloack'>
          <span>Quantity</span>
        </div>
        <div className='header-bloack'>
          <span>Price</span>
        </div>
        <div className='header-bloack'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className='total'>Total: ${cartTotal}</span>
    </div>
  )
}

export default Checkout
