import { useChat } from '@ai-sdk/react';
import { useState, useRef, useEffect } from 'react';
import { FaRobot, FaUser } from 'react-icons/fa';

export default function AIChat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
  });
  
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Scroll to bottom of messages when new messages are added
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <section id="ai-chat" className="py-16 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Ask Me Anything
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have questions about my work, companies, or expertise? My AI assistant can help you learn more about what I do.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
          <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center">
            <FaRobot className="text-white mr-2" />
            <h3 className="text-white font-medium">Nick&apos;s AI Assistant</h3>
          </div>
          
          <div className={`transition-all duration-300 ${isOpen ? 'h-96' : 'h-0'} overflow-hidden`}>
            <div className="h-full flex flex-col">
              <div className="flex-1 p-4 overflow-y-auto">
                {messages.length === 0 ? (
                  <div className="text-center py-8 text-gray-400">
                    <p>Ask me anything about Nick&apos;s work, companies, or expertise!</p>
                  </div>
                ) : (
                  messages.map((message, i) => (
                    <div 
                      key={i} 
                      className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}
                    >
                      <div 
                        className={`inline-block p-3 rounded-lg max-w-xs sm:max-w-md ${
                          message.role === 'user' 
                            ? 'bg-blue-600 text-white rounded-br-none' 
                            : 'bg-gray-700 text-gray-200 rounded-bl-none'
                        }`}
                      >
                        <div className="flex items-center mb-1">
                          {message.role === 'user' ? (
                            <>
                              <span className="font-medium">You</span>
                              <FaUser className="ml-2 text-xs" />
                            </>
                          ) : (
                            <>
                              <FaRobot className="mr-2 text-xs" />
                              <span className="font-medium">AI Assistant</span>
                            </>
                          )}
                        </div>
                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                      </div>
                    </div>
                  ))
                )}
                <div ref={messagesEndRef} />
              </div>
              
              <div className="p-4 border-t border-gray-700">
                <form onSubmit={handleSubmit} className="flex">
                  <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Ask about Nick's work or companies..."
                    className="flex-1 bg-gray-700 text-white rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-r-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    {isLoading ? 'Thinking...' : 'Send'}
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full p-2 bg-gray-800 text-gray-300 hover:text-white transition-colors"
          >
            {isOpen ? 'Close Chat' : 'Open Chat'}
          </button>
        </div>
      </div>
    </section>
  );
}
