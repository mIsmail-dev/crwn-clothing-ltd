import { useState } from 'react'
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../firebase.config'
import FormInput from '../../components/form-input/FormInput'
import Button from '../../components/button/Button'
import './signIn.scss'

const SignIn = () => {
  const signInWithGoogle = async () => {
    const res = await signInWithGooglePopup()
    await createUserDocumentFromAuth(res.user)
  }

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const { email, password } = formData

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
    <div className='sign-in-container'>
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

        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignIn
