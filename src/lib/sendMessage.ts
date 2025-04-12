import {db} from '../firebase/config'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

export const sendMessage = async (text: string, senderId: string) => {
    if(!text.trim()) return

    await addDoc(collection(db, 'messages'), {
        text,
        senderId,
        timestamp: serverTimestamp()
    }).catch((error) => {
        console.error("Error adding document: ", error)
    })
}