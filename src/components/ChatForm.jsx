import React, { useState } from 'react';

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage = { role: 'user', text: message };
    setChatHistory((prev) => [...prev, newMessage, { role: 'model', text: 'Thinking...' }]);
    setMessage('');
    await generateBotResponse([...chatHistory, newMessage]);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center border rounded-full px-3 py-2">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 outline-none bg-transparent text-sm px-2"
        required
      />
      <button
        type="submit"
        className="bg-orange-600 hover:bg-orange-700 text-white px-3 py-1 rounded-full text-sm"
      >
        Send
      </button>
    </form>
  );
};

export default ChatForm;
