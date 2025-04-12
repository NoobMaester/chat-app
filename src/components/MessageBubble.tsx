interface MessageBubbleProps {
  text: string;
  sender: string;
  isCurrentUser: boolean;
  timestamp?: string;
}

export default function MessageBubble({ 
  text, 
  isCurrentUser, 
  timestamp 
}: MessageBubbleProps) {
  return (
    <div className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div 
        className={`
          max-w-xs 
          px-4 
          py-2 
          rounded-lg 
          shadow 
          text-gray-100 
          ${isCurrentUser ? 'bg-[#7a3fd1]' : 'bg-[#ad87e4]'}
        `}
      >
        <p className="break-words">{text}</p>
        {timestamp && (
          <p className="text-xs mt-1 opacity-75">{timestamp}</p>
        )}
      </div>
    </div>
  );
}
