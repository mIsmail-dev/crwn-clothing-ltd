import { useState } from 'react'
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils'
import FormInput from '../../components/form-input/FormInput'
import Button, { BUTTON_TYPE_CLASSES } from '../../components/button/Button'
import { SignInContainer, ButtonsContainer } from './signIn.styles.js'

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const { email, password } = formData

  const signInWithGoogle = async () => {
    await signInWithGooglePopup()
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      await signInAuthUserWithEmailAndPassword(email, password)

      setFormData({
        email: '',
        password: '',
      })
    } catch (error) {
      console.log('Sign In Failed Error: ', error.message)
    }
  }

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={onSubmit}>
        <FormInput
          label='Email'
          type='email'
          id='email'
          value={email}
          onChange={onChange}
          required
        />

        <FormInput
          label='Password'
          type='password'
          id='password'
          value={password}
          onChange={onChange}
          required
        />

        <ButtonsContainer>
          <Button type='submit'>Sign In</Button>
          <Button
            type='button'
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  )
}

export default SignIn
