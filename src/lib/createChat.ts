import { db } from "@/firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function createChatGroup(name: string, userId: string) {
  try {
    const docRef = await addDoc(collection(db, "chats"), {
      name,
      createdBy: userId,
      createdAt: serverTimestamp(),
      members: [userId], // Add the creator by default
    });
    return docRef.id;
  } catch (error) {
    console.error("Error creating chat:", error);
    throw error;
  }
}
