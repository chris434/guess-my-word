import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from 'firebase/auth'
import { getDocs, collection, query, where, addDoc } from 'firebase/firestore'
import { app, db, userRef } from './firebase.config.js'

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

export const verifyEmail = async() => {
    await sendEmailVerification(auth.currentUser)
}

export const emailHasBeenVerified = async(setUser) => {
    try {
        await auth.currentUser.reload()
        return auth.currentUser.emailVerified
    } catch (error) {
        return error
    }

}
export const getUser = async() => {
    const userId = auth.currentUser.uid
    const userRef = collection(db, 'users')
    const userQuery = query(userRef, where('userId', '==', userId))
    const user = await getDocs(userQuery)

    const userData = user.docs.map(doc => {
        return doc.data()
    })
    console.log(userData)
    return { user: userData[0] }
}

export const addUser = async(username) => {
    const userId = auth.currentUser.uid
    const { user } = await getUser()

    if (!user) {
        console.log(user)
        await addDoc(userRef, { userId, username })
        return { user: 'user has been created' }
    }
    return { usernameError: 'user already exists' }

}
export const userChange = (setUser, setLoadings) => {
    onAuthStateChanged(auth, async(user) => {

        if (!user) {
            setUser(null)
            return setLoadings(false)
        }
        const { user: userDoc } = await getUser()
        setUser({...user, username: userDoc ? userDoc.username : '' })
        setLoadings(false)

    })
}