import { useEffect, useState } from "react";
import { db } from "@/firebase/config";
import { collection, onSnapshot } from "firebase/firestore";

export interface UserProfile {
  uid: string;
  displayName: string;
  email?: string;
  photoURL?: string;
}

export default function useUsers(currentUserId: string) {
  const [users, setUsers] = useState<UserProfile[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "users"), (snapshot) => {
      const data = snapshot.docs
        .map((doc) => doc.data() as UserProfile)
        .filter((user) => user.uid !== currentUserId); // hide self
      setUsers(data);
    });

    return () => unsubscribe();
  }, [currentUserId]);

  return users;
}
