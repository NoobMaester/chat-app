
import { collection, query, where, getDocs, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase/config";

export const createDirectMessageChat = async (uid1: string, uid2: string) => {
  const members = [uid1, uid2].sort(); // sort to keep consistent ordering

  const q = query(
    collection(db, "chats"),
    where("type", "==", "dm"),
    where("members", "array-contains", uid1)
  );

  const snapshot = await getDocs(q);
  const existingChat = snapshot.docs.find((doc) => {
    const data = doc.data();
    const chatMembers = (data.members || []).sort();
    return JSON.stringify(chatMembers) === JSON.stringify(members);
  });

  if (existingChat) {
    return existingChat.id;
  }

  const docRef = await addDoc(collection(db, "chats"), {
    type: "dm",
    members,
    createdAt: serverTimestamp(),
  });

  return docRef.id;
};
