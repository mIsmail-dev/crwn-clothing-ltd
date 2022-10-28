import { useState } from 'react'
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../firebase.config'
import FormInput from '../../components/form-input/FormInput'
import Button from '../../components/button/Button'
import './signUp.scss'

const SignUp = () => {
  const [formData, setFormData] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const { displayName, email, password, confirmPassword } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }

    try {
      const userCredential = await createAuthUserWithEmailAndPassword(
        email,
        password
      ) // userCredential is a auth Object.
      await createUserDocumentFromAuth(userCredential.user, { displayName }) // sending DisplayName, bcz createUserDocument ftn is expecting a user Display name but the createAuthUserWithEmailAndPassword does not return us displayName. So, we send it by this way. Note: Google Auth return display name in the user :p

      setFormData({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      })
    } catch (error) {
      console.log('User Creation Error: ', error.message)
    }
  }

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={onSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          id='displayName'
          value={displayName}
          onChange={onChange}
          required
        />

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

        <FormInput
          label='Confirm Password'
          type='password'
          id='confirmPassword'
          value={confirmPassword}
          onChange={onChange}
          required
        />

        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUp
