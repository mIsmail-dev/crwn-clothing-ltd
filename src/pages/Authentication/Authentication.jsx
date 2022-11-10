import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SignUp'
import { AuthenticationContainer } from './authetication.styles.js'

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignIn />
      <SignUp />
    </AuthenticationContainer>
  )
}

export default Authentication
