'use client';

import { useState, useMemo } from 'react';
import ChatDisplay from '@/components/layout/chat-display';
import CommandBar from '@/components/layout/command-bar';
import { useUser } from '@/firebase';
import { agents } from '@/lib/agents';
import { notFound } from 'next/navigation';

export type Message = {
  role: 'user' | 'agent';
  agentName?: string;
  content: string;
};

export default function AgentChatPage({ params }: { params: { agentId: string } }) {
  const { agentId } = params;
  const { user } = useUser();
  
  const agent = useMemo(() => agents.find(a => a.slug === agentId), [agentId]);

  if (!agent) {
    notFound();
  }

  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'agent',
      agentName: agent.name,
      content: agent.description,
    },
  ]);
  
  const handleNewMessage = (newMessage: Message, thinkingMessage?: Message) => {
    setMessages(prev => [...prev, newMessage, ...(thinkingMessage ? [thinkingMessage] : [])]);
  };

  const handleAgentResponse = (response: Message) => {
    setMessages(prev => {
      // Replace the "thinking" message with the actual response
      const newMessages = prev.filter(msg => msg.content !== '...');
      return [...newMessages, response];
    });
  };

  return (
    <>
      <ChatDisplay messages={messages} />
      <CommandBar
        userId={user?.uid}
        agent={agent}
        onNewMessage={handleNewMessage}
        onAgentResponse={handleAgentResponse}
      />
    </>
  );
}
