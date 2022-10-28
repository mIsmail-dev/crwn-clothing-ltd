import { createContext, useState, useEffect } from 'react'
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListner,
} from '../firebase.config'

// as the actual value you want to access
const UserContext = createContext({
  currentUser: null, // Default Values, The benefit of this is only that we can access these values from any component which is outside of Provider.
  setCurrentUser: () => null,
})

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
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
