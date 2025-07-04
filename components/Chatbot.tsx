
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat, GenerateContentResponse } from '@google/genai';
import { CloseIcon, ChatSendIcon } from './IconComponents';

const API_KEY = process.env.API_KEY; 

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  isStreaming?: boolean;
}

export const Chatbot: React.FC<ChatbotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [chat, setChat] = useState<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const focusRingStyle = "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-sky-400 focus-visible:ring-offset-white rounded-md";

  useEffect(() => {
    if (!API_KEY) {
      setError("API Key is missing. Chatbot functionality is unavailable.");
      console.error("API Key is missing. Chatbot will not function.");
      return;
    }
    
    try {
      const ai = new GoogleGenAI({ apiKey: API_KEY });
      const newChat = ai.chats.create({
        model: 'gemini-2.5-flash-preview-04-17',
        config: {
          systemInstruction: 'You are a friendly and helpful AI assistant for Certified Marketplace, a modern online trading platform. Users might ask about listings, how to sell, platform features, or general advice related to buying and selling online. Keep your answers concise, helpful, and in a conversational tone. If asked about specific product availability or prices, explain that you can provide general information but for real-time details, they should browse the site or contact sellers directly. Do not make up product listings or prices. If you don\'t know the answer to something, say so politely. Do not provide financial advice or make guarantees about transactions.',
        },
      });
      setChat(newChat);
      setMessages([{ id: Date.now().toString(), sender: 'ai', text: "Hello! I'm the Certified Marketplace assistant. How can I help you today?" }]);
    } catch (e) {
      console.error("Failed to initialize Gemini AI:", e);
      setError("Failed to initialize AI. Please try again later or contact support.");
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);


  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading || !chat) return;

    const userMessage: Message = { id: Date.now().toString(), sender: 'user', text: inputValue.trim() };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');
    setIsLoading(true);
    setError(null);

    const aiMessageId = (Date.now() + 1).toString();
    // Add a temporary "Thinking..." message for AI
    setMessages(prev => [...prev, { id: aiMessageId, sender: 'ai', text: 'Thinking...', isStreaming: true }]);

    try {
      const stream = await chat.sendMessageStream({ message: currentInput });
      let currentText = '';
      let firstChunk = true;
      for await (const chunk of stream) {
        currentText += chunk.text;
        setMessages(prev => prev.map(msg => 
          msg.id === aiMessageId ? { ...msg, text: firstChunk ? chunk.text : currentText, isStreaming: true } : msg
        ));
        firstChunk = false;
      }
      setMessages(prev => prev.map(msg => 
        msg.id === aiMessageId ? { ...msg, text: currentText, isStreaming: false } : msg
      ));

    } catch (e) {
      console.error("Error sending message to Gemini:", e);
      const errorText = e instanceof Error ? e.message : "An unknown error occurred communicating with the AI.";
      setError(`AI Error: ${errorText} Please try again.`);
      setMessages(prev => prev.map(msg => 
        msg.id === aiMessageId ? { ...msg, text: "Sorry, I encountered an error processing your request. Please try again.", isStreaming: false } : msg
      ));
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };
  
  if (!isOpen) return null;

  return (
    <div className="fixed bottom-20 right-4 w-full max-w-md h-[70vh] max-h-[600px] bg-white border-2 border-slate-300 rounded-lg shadow-2xl flex flex-col z-[60] overflow-hidden" role="dialog" aria-modal="true" aria-labelledby="chatbot-title">
      <header className="flex items-center justify-between p-4 bg-slate-100 border-b border-slate-200">
        <h2 id="chatbot-title" className="text-xl font-semibold text-sky-600">Marketplace Assistant</h2>
        <button onClick={onClose} className={`text-slate-500 hover:text-slate-800 p-1 ${focusRingStyle}`} aria-label="Close chat assistant">
          <CloseIcon className="w-6 h-6" />
        </button>
      </header>

      <div className="flex-grow p-4 space-y-3 overflow-y-auto bg-white" aria-live="polite" aria-atomic="false">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-3 rounded-lg text-sm md:text-base shadow-sm ${msg.sender === 'user' ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-800 border border-slate-200'}`}>
              {msg.text}
              {msg.isStreaming && msg.text === 'Thinking...' && <span className="inline-block w-1.5 h-1.5 ml-1 bg-slate-400 rounded-full animate-pulse"></span>}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {error && <p role="alert" className="p-3 text-sm text-red-700 bg-red-100 border-t border-slate-200">{error}</p>}
      
      {!chat && API_KEY && !error && (
         <div className="p-4 text-center text-sky-600 border-t border-slate-200" aria-label="AI assistant status">Initializing AI assistant...</div>
      )}
      {!API_KEY && (
         <div role="alert" className="p-3 text-sm text-red-700 bg-red-100 border-t border-slate-200">Chatbot unavailable: API Key not configured.</div>
      )}


      <div className="p-4 bg-slate-100 border-t border-slate-200">
        <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="flex items-center space-x-2">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={API_KEY && chat ? "Ask something..." : "AI loading or unavailable..."}
            className={`flex-grow p-3 rounded-md bg-white text-slate-800 border border-slate-300 focus:border-sky-500 outline-none placeholder-slate-400 ${focusRingStyle}`}
            aria-label="Chat message input"
            disabled={isLoading || !chat || !API_KEY}
          />
          <button 
            type="submit" 
            className={`p-3 bg-sky-600 hover:bg-sky-500 rounded-md text-white disabled:opacity-60 disabled:cursor-not-allowed transition-colors ${focusRingStyle}`}
            disabled={isLoading || !inputValue.trim() || !chat || !API_KEY}
            aria-label="Send message to chat assistant"
          >
            <ChatSendIcon className="w-6 h-6" />
          </button>
        </form>
      </div>
    </div>
  );
};
