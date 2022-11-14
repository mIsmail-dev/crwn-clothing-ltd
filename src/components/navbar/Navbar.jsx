import { useSelector } from 'react-redux'
import { ReactComponent as CrwnLogo } from '../../assets/svg/083 crown.svg'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'
import { selectIsCartOpen } from '../../store/cart/cartSelector'
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navbar.styles'

const Navbar = () => {
  const user = useSelector((state) => state.user)
  const { currentUser } = user
  const isCartOpen = useSelector(selectIsCartOpen)

  const signOutHandler = async () => {
    await signOutUser()
  }

  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>

        <NavLinks>
          <NavLink to='/shop'>Shop</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutHandler}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
    </>
  )
}

export default Navbar
