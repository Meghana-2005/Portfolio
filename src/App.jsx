import React, { useRef, useState, useEffect } from 'react';
import ChatbotIcon from './components/ChatbotIcon';
import ChatForm from './components/ChatForm';
import ChatMessage from './components/ChatMessage';
import { companyinfo } from './components/companyinfo';
import Navbar from './components/Navbar';
import Project from './components/Project';
import About from './components/About';
import Skill from './components/Skill';

const App = () => {
  const [chatHistory, setChatHistory] = useState([
    { hideInChat: true, role: 'model', text: companyinfo },
  ]);
  const [showChatbot, setShowChatbot] = useState(false);
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
      if (!response.ok) throw new Error(data.error.message || 'Something went wrong!');
      const apiResponseText = data.candidates[0].content.parts[0].text
        .replace(/\*\*(.*?)\*\*/g, '$1')
        .trim();
      updateHistory(apiResponseText);
    } catch (error) {
      updateHistory(error.message, true);
    }
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [chatHistory]
);
useEffect(() => {
  if (showChatbot) {
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  } else {
    document.body.style.overflow = 'auto';   // Restore when chatbot closed
  }
}, [showChatbot]);

  

  return (
    <div className="relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 to-black text-white min-h-screen">
      {/* Navbar */}
      <div className="z-50 relative">
        <Navbar />
      </div>

      {/* Portfolio Sections */}
      <div id="h" className="scroll-mt-10 md:scroll-mt-20">
        <About />
      </div>
      <div id="d" className="scroll-mt-10 md:scroll-mt-14">
        <Project />
      </div>
      <div id="p" className="scroll-mt-10 md:scroll-mt-14">
        <Skill />
      </div>

      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setShowChatbot((prev) => !prev)}
        id="chatbot-toggler"
        className="fixed bottom-[30px] right-[35px] border-none h-[50px] w-[50px] flex items-center justify-center cursor-pointer rounded-full bg-orange-600 text-white z-40"
      >
        {showChatbot ? '💬' : '💬'}
      </button>

      {/* Chatbot Popup */}
      {showChatbot && (
        <div className="fixed bottom-[90px] right-[35px] w-[340px] h-[400px] bg-white text-black rounded-[15px] shadow-2xl z-30 flex flex-col overflow-hidden">
          {/* Chat Header */}
          <div className="flex items-center justify-between px-5 py-3 bg-orange-600 text-white">
            <div className="flex items-center gap-2">
              <ChatbotIcon />
              <h2 className="font-bold">Chatbot</h2>
            </div>
            <button
              onClick={() => setShowChatbot(false)}
              className="text-2xl font-bold hover:text-orange-200"
            >
              ▼
            </button>
          </div>

          {/* Chat Body */}
          <div
            ref={chatBodyRef}
            className="flex-1 flex flex-col gap-4 overflow-auto px-4 py-3 bg-gray-50"
          >
            {/* First Greeting */}
            <div className="flex items-start gap-2">
              <ChatbotIcon />
              <p className="bg-orange-100 text-black px-4 py-2 rounded-xl rounded-bl-none max-w-[75%]">
                hi, hello good morning
              </p>
            </div>

            {chatHistory.map((chat, index) => (
              <ChatMessage key={index} chat={chat} />
            ))}
          </div>

          {/* Chat Footer */}
          <div className="p-3 border-t">
            <ChatForm
              chatHistory={chatHistory}
              setChatHistory={setChatHistory}
              generateBotResponse={generateBotResponse}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
