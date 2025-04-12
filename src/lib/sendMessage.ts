import {db} from '../firebase/config'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

export const sendMessage = async (message: string, senderId: string) => {
    if(!message.trim()) return

    await addDoc(collection(db, 'messages'), {
        message,
        senderId,
        timestamp: serverTimestamp()
    }).catch((error) => {
        console.error("Error adding document: ", error)
    })
}