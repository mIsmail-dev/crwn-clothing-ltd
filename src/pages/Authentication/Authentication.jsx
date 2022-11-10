import { Helmet } from 'react-helmet'
import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SignUp'
import { AuthenticationContainer } from './authetication.styles.js'

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <Helmet>
        <title>Authentication page</title>
        <meta name='description' content='Sign in & Sign Up Page' />
      </Helmet>
      <SignIn />
      <SignUp />
    </AuthenticationContainer>
  )
}

export default Authentication
