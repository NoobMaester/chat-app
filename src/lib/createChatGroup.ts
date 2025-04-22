import { db } from "@/firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function createChatGroup(name: string, currentUser: { uid: string }) {
  try {
    const docRef = await addDoc(collection(db, "chats"), {
      type: "group",
      name,
      createdAt: serverTimestamp(),
      members: [currentUser.uid],
    });
    return docRef.id;
  } catch (error) {
    console.error("Error creating chat:", error);
    throw error;
  }
}
