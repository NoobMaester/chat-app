"use client";

import { useParams } from "next/navigation";
import ChatWindow from "@/components/ChatWindow";

export default function ChatRoomPage() {
  const { chatId } = useParams();

  if (!chatId) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <ChatWindow chatId={chatId as string} />
    </div>
  );
}
