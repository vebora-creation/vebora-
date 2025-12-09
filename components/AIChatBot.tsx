import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Loader2 } from 'lucide-react';
import { chatWithVera } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hi! I am Vera, your Vebora AI assistant. How can I help you grow your business today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    // Format history for Gemini (limited context window for simplicity)
    const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
    }));

    const responseText = await chatWithVera(userMsg, history);

    setMessages(prev => [...prev, { role: 'model', text: responseText || "Sorry, I couldn't process that." }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-brand-primary hover:bg-teal-500 text-brand-dark p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute -top-1 -right-1 bg-white text-brand-dark text-xs w-4 h-4 flex items-center justify-center rounded-full animate-bounce font-bold">1</span>
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-6 right-6 z-50 w-full max-w-sm bg-brand-accent border border-white/10 rounded-2xl shadow-2xl transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-t-2xl">
          <div className="flex items-center space-x-2">
            <div className="bg-white/20 p-1.5 rounded-lg">
                <Bot className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-brand-dark font-bold text-sm">Vera (AI Assistant)</h3>
              <p className="text-brand-dark/80 text-xs flex items-center">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></span> Online
              </p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-brand-dark/80 hover:text-white">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 space-y-4 bg-brand-dark/50">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                msg.role === 'user' 
                  ? 'bg-brand-primary text-brand-dark font-medium rounded-tr-none' 
                  : 'bg-slate-700 text-gray-100 rounded-tl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
             <div className="flex justify-start">
               <div className="bg-slate-700 rounded-2xl rounded-tl-none px-4 py-2 flex items-center space-x-2">
                 <Loader2 className="h-4 w-4 animate-spin text-gray-400" />
                 <span className="text-gray-400 text-xs">Thinking...</span>
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 border-t border-white/10 bg-brand-accent rounded-b-2xl">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about pricing or SEO..."
              className="flex-1 bg-slate-800 text-white text-sm rounded-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-primary border border-white/5 placeholder-gray-500"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-brand-primary disabled:opacity-50 hover:bg-teal-500 text-brand-dark p-2.5 rounded-full transition-colors"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-2 text-center text-[10px] text-gray-500">
            Powered by Gemini AI • Ask me anything!
          </div>
        </div>
      </div>
    </>
  );
};

export default AIChatBot;