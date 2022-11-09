import { createContext, useEffect, useReducer } from 'react'
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListner,
} from '../utils/firebase/firebase.utils'

// as the actual value you want to access
const UserContext = createContext({
  currentUser: null, // Default Values, The benefit of this is only that we can access these values from any component which is outside of Provider.
  setCurrentUser: () => null,
})

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
}

const userReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        currentUser: payload,
      }
    default:
      throw new Error(`Unhandled type ${type} in the userReducer`)
  }
}

const INITIAL_STATE = {
  currentUser: null,
}

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)
  const { currentUser } = state

  const setCurrentUser = (user) => {
    dispatch({
      type: USER_ACTION_TYPES.SET_CURRENT_USER,
      payload: user,
    })
  }

  const value = { currentUser, setCurrentUser }

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListner((user) => {
      if (user) {
        createUserDocumentFromAuth(user)
      }
      setCurrentUser(user)
    })

    return unsubscribe
  }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserContext
