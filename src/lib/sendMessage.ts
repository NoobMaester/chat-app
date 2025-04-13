import { db } from '../firebase/config';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

export const sendMessage = async (text: string, user: { uid: string; displayName?: string }, chatId: string) => {
  if (!text.trim()) return;

  try {
    await addDoc(collection(db, 'chats', chatId, 'messages'), {
      text,
      uid: user.uid,
      senderName: user.displayName || 'Anonymous',
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.error('Error adding document: ', error);
  }
};