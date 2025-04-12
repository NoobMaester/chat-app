'use client';

import { useEffect, useState } from 'react';
import { db } from '@/firebase/config';
import { collection, onSnapshot } from 'firebase/firestore';
import { useChat } from '../context/ChatContext';

interface Chat {
  id: string;
  name: string;
}

export default function Sidebar() {
  const [chats, setChats] = useState<Chat[]>([]);
  const { selectedChatId, setSelectedChatId } = useChat();

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, 'chats'),
      (snapshot) => {
        setChats(snapshot.docs.map((doc) => ({ ...(doc.data() as Chat), id: doc.id })));
      },
      (error) => {
        console.error('Error fetching chats:', error);
      }
    );
    return () => unsub();
  }, []);

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-900 h-full">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Chats</h2>
      <ul className="space-y-2">
        {chats.length > 0 ? (
          chats.map((chat) => (
            <li
              key={chat.id}
              className={`cursor-pointer p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 ${
                selectedChatId === chat.id ? 'bg-blue-500 text-white' : 'bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
              }`}
              onClick={() => setSelectedChatId(chat.id)}
            >
              {chat.name}
            </li>
          ))
        ) : (
          <p className="text-gray-500 dark:text-gray-400">No chats available</p>
        )}
      </ul>
    </div>
  );
}
