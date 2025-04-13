'use client'

import { db } from '@/firebase/config'
import { collection, onSnapshot } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Chat {
  id: string;
  name: string;
}

export default function Sidebar() {
  const [chats, setChats] = useState<Chat[]>([])

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'chats'), (snapshot) => {
      const rooms = snapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name || 'Unnamed Chat',
      }))
      setChats(rooms)
    })

    return () => unsubscribe()
  }, [])

  return (
    <div className="p-4 space-y-2">
      <h2 className="text-lg font-semibold">Chats</h2>
      {chats.map((chat) => (
        <Link key={chat.id} href={`/chat/${chat.id}`} className="block p-2 rounded hover:bg-[#7a3fd1] dark:hover:bg-[#7a3fd1]">
          {chat.name}
        </Link>
      ))}
    </div>
  )
}
