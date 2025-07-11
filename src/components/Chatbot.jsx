// src/components/Chatbot.jsx
import React, { useRef, useState, useEffect } from 'react';
import ChatbotIcon from './ChatbotIcon';
import ChatForm from './ChatForm';
import ChatMessage from './ChatMessage';
import { companyinfo } from './companyinfo';

const Chatbot = ({ showChatbot, setShowChatbot }) => {
  const [chatHistory, setChatHistory] = useState([
    { hideInChat: true, role: 'model', text: companyinfo },
  ]);
  const chatBodyRef = useRef();

  const generateBotResponse = async (history) => {
    const updateHistory = (text, isError = false) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== 'Thinking...'),
        { role: 'model', text, isError },
      ]);
    };

    history = history.map(({ role, text }) => ({
      role,
      parts: [{ text }],
    }));

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: history }),
    };

    try {
      const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.error.message || 'Something went wrong!');
      const apiResponseText = data.candidates[0].content.parts[0].text
        .replace(/\*\*(.*?)\*\*/g, '$1')
        .trim();
      updateHistory(apiResponseText);
    } catch (error) {
      updateHistory(error.message, true);
    }
  };

  useEffect(() => {
    chatBodyRef.current?.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: 'smooth' });
  }, [chatHistory]);

  if (!showChatbot) return null;

  return (
    <div className="fixed bottom-20 right-5 w-[400px] h-[500px] shadow-lg rounded-lg overflow-hidden bg-white text-black z-50">
      {/* Chat Header */}
      <div className="flex justify-between items-center bg-orange-600 text-white p-3">
        <div className="flex items-center gap-2">
          <ChatbotIcon />
          <h2 className="text-lg font-semibold">Chatbot</h2>
        </div>
        <button onClick={() => setShowChatbot(false)}>✕</button>
      </div>

      {/* Chat Body */}
      <div className="chat-body overflow-auto p-4 h-[calc(100%-130px)]" ref={chatBodyRef}>
        <div className="message bot-message mb-2">
          <ChatbotIcon />
          <p className="message-text">hi, hello good morning</p>
        </div>
        {chatHistory.map((chat, index) => (
          <ChatMessage key={index} chat={chat} />
        ))}
      </div>

      {/* Chat Footer */}
      <div className="chat-footer p-2">
        <ChatForm
          chatHistory={chatHistory}
          setChatHistory={setChatHistory}
          generateBotResponse={generateBotResponse}
        />
      </div>
    </div>
  );
};

export default Chatbot;
