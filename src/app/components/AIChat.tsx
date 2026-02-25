import { useChat } from '@ai-sdk/react';
import { useState, useRef, useEffect } from 'react';
import { FaRobot, FaUser } from 'react-icons/fa';

export default function AIChat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
  });

  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <section id="ai-chat" className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gradient font-display">
            Ask Me Anything
          </h2>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto">
            Have questions about my work, companies, or expertise? My AI assistant can help you learn more about what I do.
          </p>
        </div>

        <div className="max-w-3xl mx-auto glass-card overflow-hidden">
          <div className="p-4 bg-accent flex items-center rounded-t-2xl">
            <FaRobot className="text-accent-foreground mr-2" />
            <h3 className="text-accent-foreground font-medium font-display">Nick&apos;s AI Assistant</h3>
          </div>

          <div className={`transition-all duration-300 ${isOpen ? 'h-96' : 'h-0'} overflow-hidden`}>
            <div className="h-full flex flex-col">
              <div className="flex-1 p-4 overflow-y-auto">
                {messages.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
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
                            ? 'bg-accent text-accent-foreground rounded-br-none'
                            : 'bg-muted text-foreground rounded-bl-none'
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

              <div className="p-4 border-t border-border">
                <form onSubmit={handleSubmit} className="flex">
                  <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Ask about Nick's work or companies..."
                    className="flex-1 bg-muted text-foreground rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="bg-accent text-accent-foreground px-4 py-2 rounded-r-lg font-medium hover:brightness-110 transition-all disabled:opacity-50"
                  >
                    {isLoading ? 'Thinking...' : 'Send'}
                  </button>
                </form>
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {isOpen ? 'Close Chat' : 'Open Chat'}
          </button>
        </div>
      </div>
    </section>
  );
}
