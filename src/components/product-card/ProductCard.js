import Button from '../button/Button'
import CartContext from '../../contexts/CartContext'
import './productCard.scss'
import { useContext } from 'react'

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product
  const { addItemToCart } = useContext(CartContext)
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button
        buttonType='inverted'
        onClick={() => {
          addItemToCart(product)
        }}
      >
        Add to cart
      </Button>
    </div>
  )
}

export default ProductCard
