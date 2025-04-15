import { useEffect, useRef, useState } from "react";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";
import useChatMessages from "@/hooks/useChatMessages";
import { useAuth } from "@/context/AuthContext";
import { formatRelative } from "date-fns";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

interface ChatWindowProps {
  chatId: string;
}

export default function ChatWindow({ chatId }: ChatWindowProps) {
  const { user } = useAuth();
  const messages = useChatMessages(chatId); // Fetch messages for the specific chat
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [chatName, setChatName] = useState<string>("");

  // Fetch chat name or user name
  useEffect(() => {
    const fetchChatName = async () => {
      try {
        const chatDoc = await getDoc(doc(db, "chats", chatId));
        if (chatDoc.exists()) {
          const chatData = chatDoc.data();
          const members: string[] = chatData.members || [];
          if (chatData.name) {
            // Use the chat name for group chats
            setChatName(chatData.name);
          } else if (members.length === 2 && user) {
            // Fetch the other user's name for direct messages
            const otherUserId = members.find((uid) => uid !== user.uid);
            if (otherUserId) {
              const otherUserDoc = await getDoc(doc(db, "users", otherUserId));
              if (otherUserDoc.exists()) {
                setChatName(otherUserDoc.data()?.displayName || "Unknown User");
              } else {
                setChatName("Unknown User");
              }
            }
          } else {
            setChatName("Unnamed Chat");
          }
        } else {
          setChatName("Chat Not Found");
        }
      } catch (error) {
        console.error("Error fetching chat name:", error);
        setChatName("Error Loading Chat");
      }
    };

    fetchChatName();
  }, [chatId, user]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <main className="flex-1 flex flex-col h-full bg-white dark:bg-gray-900">
      {/* Chat Header */}
      <div className="p-4 border-b-2 border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          {chatName}
        </h1>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col space-y-4 p-4">
          {messages.map((message) => (
            <div key={message.id}>
              <MessageBubble
                text={message.text}
                senderName={message.senderName || "Anonymous"}
                isCurrentUser={message.senderId === user?.uid}
                timestamp={
                  message.timestamp?.toDate
                    ? formatRelative(message.timestamp.toDate(), new Date())
                    : ""
                }
              />
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Message Input Area */}
      <div className="p-4 border-t-2 dark:border-gray-800">
        <MessageInput chatId={chatId} />
      </div>
    </main>
  );
}
