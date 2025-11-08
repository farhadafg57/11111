'use client';

import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { agents } from '@/lib/agents';
import AgentChatPage from './[agentId]/page';

// This page now serves as the entry point to the hub,
// automatically selecting the 'Oracle' as the default agent.
export default function HubEntryPoint() {
  const router = useRouter();
  const defaultAgent = useMemo(() => agents.find(a => a.slug === 'oracle'), []);

  if (!defaultAgent) {
    // Fallback in case 'oracle' agent is not found
    return (
      <div className="flex items-center justify-center h-full text-foreground">
        Error: Default agent not found.
      </div>
    );
  }

  // We are now rendering the AgentChatPage directly
  // This removes the need for a redirect and keeps the URL clean at /hub
  return <AgentChatPage />;
}
