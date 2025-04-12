
import { useEffect, useState } from 'react'
import { db } from '@/firebase/config'
import { onSnapshot, doc } from 'firebase/firestore'

export const useTypingStatus = (userId: string) => {
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'status', userId), (doc) => {
      setIsTyping(doc.data()?.typing || false)
    })

    return () => unsub()
  }, [userId])

  return isTyping
}
