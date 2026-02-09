"use client";

import { useChat } from '@ai-sdk/react';
import { useState, useRef, useEffect } from 'react';
import { FaRobot, FaUser } from 'react-icons/fa';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { BackgroundGradient } from '@/components/ui/aceternity/background-gradient';

export default function AIChat() {
  // PRESERVE: All existing chat logic - DO NOT MODIFY
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

        <div className="max-w-3xl mx-auto">
          <BackgroundGradient
            containerClassName="rounded-3xl"
            className="rounded-3xl"
          >
            <Card className="bg-gray-800/90 border-gray-700 backdrop-blur-sm rounded-3xl">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-3xl">
                <CardTitle className="flex items-center text-white">
                  <FaRobot className="mr-2" />
                  Nick&apos;s AI Assistant
                </CardTitle>
              </CardHeader>

              <div className={`transition-all duration-300 ${isOpen ? 'h-96' : 'h-0'} overflow-hidden`}>
                <div className="h-full flex flex-col">
                  <ScrollArea className="flex-1 p-4">
                    {messages.length === 0 ? (
                      <div className="text-center py-8 text-gray-400">
                        <p>Ask me anything about Nick&apos;s work, companies, or expertise!</p>
                      </div>
                    ) : (
                      messages.map((message, i) => (
                        <div
                          key={i}
                          className={`mb-4 flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`flex items-start gap-2 max-w-xs sm:max-w-md ${
                              message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                            }`}
                          >
                            <Avatar size="sm" className={message.role === 'user' ? 'bg-blue-600' : 'bg-gray-700'}>
                              <AvatarFallback className={message.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-200'}>
                                {message.role === 'user' ? <FaUser className="text-xs" /> : <FaRobot className="text-xs" />}
                              </AvatarFallback>
                            </Avatar>
                            <div
                              className={`p-3 rounded-lg ${
                                message.role === 'user'
                                  ? 'bg-blue-600 text-white rounded-br-none'
                                  : 'bg-gray-700 text-gray-200 rounded-bl-none'
                              }`}
                            >
                              <div className="flex items-center mb-1">
                                <span className="font-medium text-xs">
                                  {message.role === 'user' ? 'You' : 'AI Assistant'}
                                </span>
                              </div>
                              <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                    <div ref={messagesEndRef} />
                  </ScrollArea>

                  <CardContent className="p-4 border-t border-gray-700">
                    <form onSubmit={handleSubmit} className="flex gap-2">
                      <Input
                        type="text"
                        value={input}
                        onChange={handleInputChange}
                        placeholder="Ask about Nick's work or companies..."
                        className="flex-1 bg-gray-700 text-white border-gray-600 focus:ring-2 focus:ring-blue-500"
                        disabled={isLoading}
                      />
                      <Button
                        type="submit"
                        disabled={isLoading || !input.trim()}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90"
                      >
                        {isLoading ? 'Thinking...' : 'Send'}
                      </Button>
                    </form>
                  </CardContent>
                </div>
              </div>

              <Button
                onClick={() => setIsOpen(!isOpen)}
                variant="ghost"
                className="w-full rounded-b-3xl text-gray-300 hover:text-white hover:bg-gray-700/50"
              >
                {isOpen ? 'Close Chat' : 'Open Chat'}
              </Button>
            </Card>
          </BackgroundGradient>
        </div>
      </div>
    </section>
  );
}
