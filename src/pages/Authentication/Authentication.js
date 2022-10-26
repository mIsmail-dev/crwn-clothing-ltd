import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SignUp'
import './authetication.scss'

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default Authentication
