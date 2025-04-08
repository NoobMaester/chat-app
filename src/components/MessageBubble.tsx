
interface MessageBubbleProps {
    text: string
    sender: string
    isCurrentUser: boolean
  }
  
  export default function MessageBubble({ text, sender, isCurrentUser }: MessageBubbleProps) {
    return (
      <div className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'}`}>
        <div className={`max-w-xs px-4 py-2 rounded-lg shadow text-gray-100 ${isCurrentUser ? 'bg-[#7a3fd1]' : 'bg-[#ad87e4]'}`}>
          <p className="text-sm">{sender}</p>
          <p>{text}</p>
        </div>
      </div>
    )
  }
  