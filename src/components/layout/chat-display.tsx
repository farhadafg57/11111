import type { Message } from '@/app/hub/page';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { agents } from '@/lib/agents';
import { BrainCircuit } from 'lucide-react';
import { Skeleton } from '../ui/skeleton';

const ChatBubbleSkeleton = () => (
    <div className="flex items-center space-x-2">
      <Skeleton className="h-4 w-4 rounded-full" />
      <Skeleton className="h-4 w-10" />
    </div>
);


export default function ChatDisplay({ messages }: { messages: Message[] }) {
  const getAgentInfo = (agentName?: string) => {
    if (!agentName) return { Icon: BrainCircuit, name: 'System' };
    const agent = agents.find(a => a.name === agentName);
    return agent ? { Icon: agent.Icon, name: agent.name } : { Icon: BrainCircuit, name: agentName };
  };
  
  return (
    <div className="flex-1 overflow-y-auto p-4">
      <div className="container mx-auto max-w-3xl space-y-8">
        {messages.map((message, index) => {
          const isUser = message.role === 'user';
          const { Icon: AgentIcon, name: agentName } = getAgentInfo(message.agentName);
          const isThinking = message.content === '...';

          return (
            <div
              key={index}
              className={cn(
                'flex items-start gap-4',
                isUser ? 'justify-end' : 'justify-start'
              )}
            >
              {!isUser && (
                <Avatar className="bg-accent text-accent-foreground border size-10">
                  <AvatarFallback asChild>
                    <AgentIcon className="size-5" />
                  </AvatarFallback>
                </Avatar>
              )}
              <div className="flex flex-col gap-1 max-w-xl">
                 {!isUser && (
                    <div className="font-bold text-sm font-headline text-foreground/80">
                      {agentName}
                    </div>
                  )}
                <Card
                  className={cn(
                    'shadow-md',
                    isUser
                      ? 'bg-primary text-primary-foreground rounded-br-none'
                      : 'bg-card rounded-bl-none'
                  )}
                >
                  <CardContent className="p-3">
                    {isThinking ? <ChatBubbleSkeleton /> : <p className="text-base font-body whitespace-pre-wrap">{message.content}</p> }
                  </CardContent>
                </Card>
              </div>
              {isUser && (
                <Avatar className="size-10">
                   <AvatarImage src="https://picsum.photos/seed/user/100/100" alt="User" data-ai-hint="portrait person" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
