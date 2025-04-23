import { db } from '../firebase/config';
import { doc, addDoc, collection, serverTimestamp, updateDoc } from 'firebase/firestore';

export const sendMessage = async (text: string, user: { uid: string; displayName?: string }, chatId: string) => {
  if (!text.trim()) return;

  const messageData = {
    text: text.trim(),
    senderId: user.uid,
    senderName: user.displayName || 'Anonymous',
    timestamp: serverTimestamp(),
  }

  try {
    await addDoc(collection(db, 'chats', chatId, 'messages'), {
      text,
      senderId: user.uid,
      senderName: user.displayName || 'Anonymous',
      timestamp: serverTimestamp(),
    });
    await updateDoc(doc(db, 'chats', chatId), {
      lastMessageAt: serverTimestamp(),
      lastMessage: messageData,
    });
    console.log('sending message as:', user)
  } catch (error) {
    console.error('Error adding document: ', error);
  }
};