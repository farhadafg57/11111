'use client';

import { useState, useMemo } from 'react';
import ChatDisplay from '@/components/layout/chat-display';
import CommandBar from '@/components/layout/command-bar';
import { useUser } from '@/firebase';
import { useLanguage } from '@/lib/language';
import { agents } from '@/lib/agents';
import { notFound, useParams } from 'next/navigation';

export type Message = {
  role: 'user' | 'agent';
  agentName?: string;
  content: string;
};

export default function AgentChatPage({ params }: { params: { agentId: string } }) {
  const { agentId } = params;
  const { user } = useUser();
  const { t } = useLanguage();
  
  const agent = useMemo(() => agents.find(a => a.slug === agentId), [agentId]);

  if (!agent) {
    notFound();
  }

  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'agent',
      agentName: agent.name,
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
      // Replace the "thinking" message with the actual response
      const newMessages = prev.filter(msg => msg.content !== '...');
      return [...newMessages, response];
    });
    setIsResponding(false);
  };
  
  const handleThinking = () => {
     setMessages(prev => [...prev, {role: 'agent', agentName: agent.name, content: '...'}]);
  }

  return (
    <div className="flex flex-col h-full">
      <ChatDisplay messages={messages} />
      <CommandBar
        userId={user?.uid}
        onNewMessage={handleNewMessage}
        onAgentResponse={handleAgentResponse}
        onThinking={handleThinking}
        isResponding={isResponding}
      />
    </div>
  );
}
