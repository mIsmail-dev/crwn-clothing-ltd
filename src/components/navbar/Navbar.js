import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/svg/083 crown.svg'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import UserContext from '../../contexts/UserContext'
import './navbar.scss'

const Navbar = () => {
  const { currentUser } = useContext(UserContext)

  const signOutHandler = async () => {
    await signOutUser()
  }

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>

        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            Shop
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

export default Navbar
