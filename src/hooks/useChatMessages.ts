import { useEffect, useState } from "react";
import {db} from "../firebase/config";
import { collection, onSnapshot, orderBy, query, Timestamp } from "firebase/firestore";

export interface ChatMessage {
    id: string;
    text: string;
    senderId: string;
    senderName: string;
    displayName?: string;
    timestamp: Timestamp;
}

export default function useChatMessages(chatId: string) {
    const [messages, setMessages] = useState<ChatMessage[]>([]);

    useEffect(() => {
        const q = query(collection(db, 'chats', chatId, 'messages'), orderBy('timestamp', 'asc'));

        const unsubscribe = onSnapshot(q, (snapshot)=> {
            const messagesData: ChatMessage[] = snapshot.docs.map(doc => ({
                id: doc.id,
                ...(doc.data() as Omit<ChatMessage, 'id'>)
        }))
            setMessages(messagesData);
        })
        return () => unsubscribe();
    }, [chatId]);

    return messages;
}