// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCki0mRk1chsyKAifJ7kgjLWcCv-SXk3ro',
  authDomain: 'crwn-clothing-ltd-app.firebaseapp.com',
  projectId: 'crwn-clothing-ltd-app',
  storageBucket: 'crwn-clothing-ltd-app.appspot.com',
  messagingSenderId: '932792359830',
  appId: '1:932792359830:web:b632b34ca61afe6abc5bb7',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account',
})
export const auth = new getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const db = getFirestore()


// Utils Functions.
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid) // it will refer
    const userSnapShot = await getDoc(userDocRef) // it will get a doc

    if(!userSnapShot.exists()) {
        const {displayName, email} = userAuth
        const createdAt = new Date()
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log("Error Creating the user", error.message);
        }
    }

    return userDocRef
}