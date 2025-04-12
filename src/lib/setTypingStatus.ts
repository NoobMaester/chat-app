import { db } from '../firebase/config';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

export const setTypingStatus = async (userId: string, isTyping: boolean) => {
    await setDoc(doc(db, 'users', userId), {
        typing: isTyping,
        lastTypingAt: serverTimestamp(),
    }, { merge: true });
}