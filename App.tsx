import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import TopicGrid from './components/TopicGrid';
import ChatArea from './components/ChatArea';
import { generateLegalResponse } from './services/geminiService';
import { Message, Topic } from './types';
import { v4 as uuidv4 } from 'uuid';

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Helper to add a message
  const addMessage = (text: string, role: 'user' | 'model') => {
    const newMessage: Message = {
      id: uuidv4(),
      role,
      text,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  // Handle sending a message
  const handleSend = useCallback(async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim() || isLoading) return;

    if (!textOverride) {
      setInput('');
    }

    // Add user message
    addMessage(textToSend, 'user');
    setIsLoading(true);

    try {
      // Fetch AI response
      const response = await generateLegalResponse(textToSend);
      addMessage(response, 'model');
    } catch (error) {
      addMessage("Hubo un error de conexión. Por favor intenta de nuevo.", 'model');
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading]);

  // Handle topic selection from the grid
  const handleSelectTopic = (topic: Topic) => {
    handleSend(topic.prompt);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column: Topics / Dashboard */}
          <div className="w-full lg:w-5/12 xl:w-4/12 flex flex-col">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Temas Clave</h2>
              <p className="text-slate-600">Selecciona un tema para iniciar una consulta rápida sobre la legislación vigente.</p>
            </div>
            
            <TopicGrid onSelectTopic={handleSelectTopic} />

            <div className="bg-amber-50 border border-amber-100 rounded-xl p-6 mt-auto">
              <h3 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Marco Legal
              </h3>
              <p className="text-sm text-amber-900/70">
                La información provista está basada en los principios fundamentales del Código de Comercio y leyes complementarias como la Ley 1116 de 2006 y Ley 527 de 1999.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Chat */}
          <div className="w-full lg:w-7/12 xl:w-8/12">
            <ChatArea 
              messages={messages} 
              isLoading={isLoading} 
              input={input} 
              setInput={setInput} 
              onSend={() => handleSend()} 
            />
          </div>

        </div>
      </main>
    </div>
  );
};

export default App;