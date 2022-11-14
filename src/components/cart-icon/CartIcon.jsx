import { useDispatch, useSelector } from 'react-redux'
import { setIsCartOpen } from '../../store/cart/cartAction'
import {
  selectIsCartOpen,
  selectCartCount,
} from '../../store/cart/cartSelector'
import { CartIconContainer, ShoppingIcon, ItemCount } from './cartIcon.styles'
const CartIcon = () => {
  const cartCount = useSelector(selectCartCount)
  const isCartOpen = useSelector(selectIsCartOpen)

  const dispatch = useDispatch()

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon
