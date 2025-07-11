import React from 'react';
import ChatbotIcon from './ChatbotIcon';

const ChatMessage = ({ chat }) => {
  if (chat.hideInChat) return null;

  const isBot = chat.role === 'model';

  return (
    <div className={`flex ${isBot ? 'items-start' : 'justify-end'} mb-2`}>
      {isBot && <ChatbotIcon />}
      <p
        className={`px-4 py-2 rounded-lg text-sm max-w-[75%] whitespace-pre-line
          ${isBot ? 'bg-orange-100 text-black rounded-tl-none ml-2' : 'bg-orange-400 rounded-tr-none'}
          ${chat.isError ? 'text-red-500' : ''}
        `}
      >
        {chat.text}
      </p>
    </div>
  );
};

export default ChatMessage;
