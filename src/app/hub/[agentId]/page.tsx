'use client';

import { useState, useMemo, useCallback } from 'react';
import ChatDisplay from '@/components/layout/chat-display';
import CommandBar from '@/components/layout/command-bar';
import { agents } from '@/lib/agents';
import { notFound, useParams } from 'next/navigation';

export type Message = {
  id: string;
  role: 'user' | 'agent';
  agentName?: string;
  content: string;
  isThinking?: boolean;
};

export default function AgentChatPage() {
  const params = useParams();
  const agentId = params.agentId as string;
  
  const agent = useMemo(() => agents.find(a => a.slug === agentId), [agentId]);

  if (!agent) {
    notFound();
  }

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'initial-message',
      role: 'agent',
      agentName: agent.name,
      content: agent.description,
    },
  ]);
  
  const handleNewMessage = useCallback((userMessage: Message, thinkingMessage: Message) => {
    setMessages(prev => [...prev, userMessage, thinkingMessage]);
  }, []);

  const handleAgentResponse = useCallback((response: Message) => {
    setMessages(prev => 
        prev.map(msg => 
            msg.id === response.id ? response : msg
        )
    );
  }, []);

  return (
    <>
      <ChatDisplay messages={messages} />
      <CommandBar
        agent={agent}
        onNewMessage={handleNewMessage}
        onAgentResponse={handleAgentResponse}
      />
    </>
  );
}
