import type { Message } from '@/app/hub/[agentId]/page';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { agents } from '@/lib/agents';
import { BrainCircuit, User } from 'lucide-react';
import { motion } from 'framer-motion';
import placeholderData from '@/lib/placeholder-images.json';
import { useUser } from '@/firebase';

const ChatBubbleSkeleton = () => (
    <motion.div 
      className="flex items-center space-x-2"
      initial={{ opacity: 0.5, y: 5 }}
      animate={{ opacity: [0.5, 1, 0.5], y: [5, 0, 5] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <span className="h-2 w-2 bg-muted-foreground/50 rounded-full" />
      <span className="h-2 w-2 bg-muted-foreground/50 rounded-full" />
      <span className="h-2 w-2 bg-muted-foreground/50 rounded-full" />
    </motion.div>
);


export default function ChatDisplay({ messages }: { messages: Message[] }) {
  const { user } = useUser();
  const userAvatarImage = placeholderData.images.find(img => img.id === 'user-avatar-chat');

  const getAgentInfo = (agentName?: string) => {
    if (!agentName) return { Icon: BrainCircuit, name: 'System' };
    const cleanAgentName = agentName.split('(')[0].trim();
    const agent = agents.find(a => a.name === cleanAgentName);
    return agent ? { Icon: agent.Icon, name: agentName } : { Icon: BrainCircuit, name: agentName };
  };
  
  return (
    <div className="flex-1 overflow-y-auto p-4">
      <div className="container mx-auto max-w-3xl space-y-8">
        {messages.map((message, index) => {
          const isUserMessage = message.role === 'user';
          const { Icon: AgentIcon, name: agentName } = getAgentInfo(message.agentName);
          const isThinking = message.isThinking;
          const showUserAvatar = isUserMessage && user && !user.isAnonymous && userAvatarImage;

          return (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className={cn(
                'flex items-start gap-4',
                isUserMessage ? 'justify-end' : 'justify-start'
              )}
            >
              {!isUserMessage && (
                <Avatar className="bg-accent text-accent-foreground border size-10">
                  <AvatarFallback asChild>
                    <AgentIcon className="size-5" />
                  </AvatarFallback>
                </Avatar>
              )}
              <div className="flex flex-col gap-1 max-w-[calc(100%-4rem-1rem)] md:max-w-xl">
                 {!isUserMessage && (
                    <div className="font-bold text-sm font-headline text-foreground/80">
                      {agentName}
                    </div>
                  )}
                <Card
                  className={cn(
                    'shadow-md',
                    isUserMessage
                      ? 'bg-primary text-primary-foreground rounded-br-none'
                      : 'bg-card rounded-bl-none'
                  )}
                >
                  <CardContent className="p-3">
                    {isThinking ? <ChatBubbleSkeleton /> : <div className="text-base font-body whitespace-pre-wrap">{message.content}</div> }
                  </CardContent>
                </Card>
              </div>
              {isUserMessage && (
                <Avatar className="size-10 bg-muted">
                  {showUserAvatar && user?.uid ? (
                    <AvatarImage src={userAvatarImage.src.replace('{{id}}', user.uid)} alt="User" width={userAvatarImage.width} height={userAvatarImage.height} data-ai-hint={userAvatarImage.hint} />
                  ) : (
                  <AvatarFallback>
                    <User className="size-5" />
                  </AvatarFallback>
                  )}
                </Avatar>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
