
import React, { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { MusicPlayerIcon, ChatIcon } from './IconComponents';
import { Chatbot } from './Chatbot';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-700"> {/* Main background to white, text to dark slate */}
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
      
      {/* Music Player Button */}
      <div 
        className="fixed bottom-4 left-4 bg-slate-100 p-3 rounded-full shadow-lg border border-slate-300 hover:border-sky-500 cursor-pointer hover:bg-slate-200 transition-all duration-300 z-50 group force-focus-style"
        role="button"
        tabIndex={0}
        onClick={() => alert("Music player functionality coming soon!")}
        onKeyDown={(e) => e.key === 'Enter' && alert("Music player functionality coming soon!")}
        aria-label="Open music player (Feature coming soon)"
      >
        <MusicPlayerIcon className="w-6 h-6 text-sky-600 group-hover:text-sky-500" />
      </div>

      {/* Chatbot Button */}
      <div 
        className="fixed bottom-4 right-4 bg-slate-100 p-3 rounded-full shadow-lg border border-slate-300 hover:border-sky-500 cursor-pointer hover:bg-slate-200 transition-all duration-300 z-50 group force-focus-style"
        onClick={toggleChatbot}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && toggleChatbot()}
        aria-label={isChatbotOpen ? "Close Certified Marketplace chat assistant" : "Open Certified Marketplace chat assistant"}
        aria-expanded={isChatbotOpen}
        aria-haspopup="dialog"
      >
        <ChatIcon className="w-6 h-6 text-sky-600 group-hover:text-sky-500" />
      </div>
      
      <Chatbot isOpen={isChatbotOpen} onClose={toggleChatbot} />
    </div>
  );
};
