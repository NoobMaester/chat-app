"use client";

import { db } from "@/firebase/config";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import CreateChatModal from "../components/CreateChatModal";

interface Chat {
  id: string;
  name: string;
}

export default function Sidebar() {
  const [chats, setChats] = useState<Chat[]>([]);
  const [showModal, setShowModal] = useState(false);
  const { chatId } = useParams(); // Get the active chatId from the URL

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "chats"), (snapshot) => {
      const rooms = snapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name || "Unnamed Chat",
      }));
      setChats(rooms);
    });

    return () => unsubscribe();
  }, []);

  return (
    <aside>
      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Chats</h2>
          <button
            className="text-purple-600 border hover:text-purple-800 text-xl font-bold cursor-pointer p-2 rounded"
            onClick={() => setShowModal(true)}
          >
            + New Chat
          </button>
        </div>

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
