import {db} from '../firebase/config'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { User } from 'firebase/auth'

export const sendMessage = async (text: string, senderId: string, user: User | null) => {

    if(!text.trim()) return

    await addDoc(collection(db, 'messages'), {
        text,
        senderId,
        senderName: user?.displayName || 'Anonymous',
        timestamp: serverTimestamp()
    }).catch((error) => {
        console.error("Error adding document: ", error)
    })
}