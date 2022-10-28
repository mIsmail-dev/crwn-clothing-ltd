import { useContext } from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/svg/111 shopping-bag.svg'
import CartContext from '../../contexts/CartContext'
import './cartIcon.scss'
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext)

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>10</span>
    </div>
  )
}

export default CartIcon
