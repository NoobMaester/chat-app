"use client";

import { db } from "@/firebase/config";
import { collection, onSnapshot, getDoc, doc as firestoreDoc } from "firebase/firestore";
import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import CreateChatModal from "../components/CreateChatModal";
import { NotebookPen } from "lucide-react";

interface Chat {
  id: string;
  name: string;
  members?: string[];
}

export default function Sidebar() {
  const [chats, setChats] = useState<Chat[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [showUserList, setShowUserList] = useState(false); // State to toggle user list
  const { chatId } = useParams(); // Get the active chatId from the URL
  const user = useMemo(() => ({ uid: "currentUserId" }), []); // Replace with actual user context or auth logic

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "chats"), async (snapshot) => {
      const rooms = await Promise.all(
        snapshot.docs.map(async (doc) => {
          const data = doc.data() as Chat;
          const members: string[] = data.members || [];
          let displayName = data.name || "Unnamed Chat";

          // If the chat is a direct message (DM), get the other user's display name
          if (!data.name && members.length === 2 && user) {
            const otherUserId = members.find((uid) => uid !== user.uid);
            if (otherUserId) {
              const otherUserDoc = await getDoc(firestoreDoc(db, "users", otherUserId));
              if (otherUserDoc.exists()) {
                const otherUserData = otherUserDoc.data() as { displayName?: string };
                displayName = otherUserData?.displayName || "Unknown User";
              }
            }
          }

          return {
            id: doc.id,
            name: displayName,
            members,
          };
        })
      );
      setChats(rooms);
    });

    return () => unsubscribe();
  }, [user]);

  return (
    <aside>
      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Chats</h2>
          <button
            className="text-purple-600 border hover:text-purple-800 text-xl font-bold cursor-pointer p-2 rounded"
            onClick={() => setShowModal(true)}
          >
            <NotebookPen />
          </button>
        </div>

        <button
          className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium mb-4"
          onClick={() => setShowUserList(!showUserList)} // Toggle user list visibility
        >
          {showUserList ? "Hide User List" : "Show User List"}
        </button>

        {showUserList && (
          <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded shadow">
            <h3 className="text-sm font-semibold mb-2">User List</h3>
            <ul className="space-y-1">
              {chats.map((chat) => (
                <li key={chat.id} className="text-gray-700 dark:text-gray-300">
                  {chat.name}
                </li>
              ))}
            </ul>
          </div>
        )}

        {chats.map((chat) => (
          <Link
            key={chat.id}
            href={`/chat/${chat.id}`}
            className={`block p-2 rounded ${
              chat.id === chatId
                ? "bg-[#7a3fd1] text-white"
                : "hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            {chat.name}
          </Link>
        ))}

        {showModal && <CreateChatModal onClose={() => setShowModal(false)} />}
      </div>
    </aside>
  );
}
