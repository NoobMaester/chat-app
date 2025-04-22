import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

export async function getOrCreateDirectMessageChat(user1Id: string, user2Id: string) {
  // Generate a unique identifier for the direct message chat
  const chatId = [user1Id, user2Id].sort().join("_");

  // Query Firestore to check if the chat already exists
  const chatsRef = collection(db, "chats");
  const q = query(chatsRef, where("id", "==", chatId));
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    // Chat already exists, return the existing chat ID
    return querySnapshot.docs[0].id;
  }

  // Chat does not exist, create a new one
  const newChat = await addDoc(chatsRef, {
    id: chatId,
    members: [user1Id, user2Id],
    createdAt: new Date(),
  });

  return newChat.id;
}
