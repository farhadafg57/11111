'use client';

import { useState } from 'react';
import AgentList from '@/components/layout/agent-list';
import AppHeader from '@/components/layout/header';
import ChatDisplay from '@/components/layout/chat-display';
import CommandBar from '@/components/layout/command-bar';
import { Sidebar, SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

export type Message = {
  role: 'user' | 'agent';
  agentName?: string;
  content: string;
};

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'agent',
      agentName: 'Oracle',
      content: 'Welcome to the AfghanAI Hub. The Scriptorium on the left lists available agents. How may I assist you today?',
    },
  ]);
  const [isResponding, setIsResponding] = useState(false);

  const handleNewMessage = (newMessage: Message) => {
    setMessages(prev => [...prev, newMessage]);
    setIsResponding(true);
  };

  const handleAgentResponse = (response: Message) => {
    setMessages(prev => {
      // Create a new array, removing the last message if it was a placeholder
      const newMessages = [...prev];
      if (newMessages[newMessages.length - 1]?.content === '...') {
        newMessages.pop();
      }
      return [...newMessages, response];
    });
    setIsResponding(false);
  };
  
  const handleThinking = () => {
     setMessages(prev => [...prev, {role: 'agent', agentName: 'Oracle', content: '...'}]);
  }


  return (
    <SidebarProvider>
      <Sidebar collapsible="icon" className="border-r">
        <AgentList />
      </Sidebar>
      <SidebarInset className="flex flex-col max-h-screen">
        <AppHeader />
        <ChatDisplay messages={messages} />
        <CommandBar
          onNewMessage={handleNewMessage}
          onAgentResponse={handleAgentResponse}
          onThinking={handleThinking}
          isResponding={isResponding}
        />
      </SidebarInset>
    </SidebarProvider>
  );
}
