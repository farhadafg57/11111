'use client';

import { useState } from 'react';
import ChatDisplay from '@/components/layout/chat-display';
import CommandBar from '@/components/layout/command-bar';
import { useUser } from '@/firebase';
import { useLanguage } from '@/lib/language';

export type Message = {
  role: 'user' | 'agent';
  agentName?: string;
  content: string;
};

export default function HubPage() {
  const { user } = useUser();
  const { t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'agent',
      agentName: 'Oracle',
      content: t('welcomeMessage'),
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
    <>
      <ChatDisplay messages={messages} />
      <CommandBar
        userId={user?.uid}
        onNewMessage={handleNewMessage}
        onAgentResponse={handleAgentResponse}
        onThinking={handleThinking}
        isResponding={isResponding}
      />
    </>
  );
}
