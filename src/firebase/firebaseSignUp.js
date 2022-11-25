import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { app } from './firebase.config'

const auth = getAuth(app)

export const createAccount = async(email, password) => {

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)

        return { user: userCredentials }

    } catch (error) {
        const errorString = error.message.split('auth/')[1]
        const errorField = errorString.split('-')[0]

        if (errorField === 'email') {
            return { error: { email: 'email already exists' } }
        }

        return { error: error.message }
    }
}
export const login = async(email, password) => {
    try {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password)
        return { user: userCredentials }
    } catch (error) {
        if (error.message === 'Firebase: Error (auth/wrong-password).' || error.message === 'Firebase: Error (auth/user-not-found).') {
            return { error: { multi: 'email or password incorrect' } }
        }
        console.error(error.message)
    }
}

export const userChange = (setUser, setLoadings) => {
    onAuthStateChanged(auth, (user) => {
        setUser(user)
        setLoadings(false)
    })
}