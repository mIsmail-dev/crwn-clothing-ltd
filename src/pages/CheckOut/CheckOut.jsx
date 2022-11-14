import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../store/cart/cartSelector'

import { Helmet } from 'react-helmet'
import CheckoutItem from '../../components/checkout-item/CheckoutItem'
import {
  CheckOutContainer,
  CheckOutHeader,
  HeaderBlock,
  Total,
} from './CheckOut.styles.js'

const Checkout = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

  return (
    <CheckOutContainer>
      <Helmet>
        <title>Checkout page</title>
        <meta
          name='description'
          content='Checkout page for all the cart Items.'
        />
      </Helmet>
      <CheckOutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckOutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total: ${cartTotal}</Total>
    </CheckOutContainer>
  )
}

export default Checkout
