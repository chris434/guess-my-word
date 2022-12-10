import { addDoc } from 'firebase/firestore'
import { gameRef, auth } from './firebase.config.js'

export const createGame = async(word, privacy) => {
    const userId = auth.currentUser.uid
    const { id } = await addDoc(gameRef, { word, privacy, userId })
    return id
}