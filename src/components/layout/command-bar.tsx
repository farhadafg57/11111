'use client';

import { useState } from 'react';
import { CornerDownLeft, LoaderCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { handleCommand } from '@/app/actions';
import type { Message } from '@/app/hub/[agentId]/page';
import { useLanguage } from '@/lib/language';

type CommandBarProps = {
  userId?: string;
  agentId: string;
  onNewMessage: (message: Message) => void;
  onAgentResponse: (message: Message) => void;
  onThinking: () => void;
  isResponding: boolean;
};

export default function CommandBar({ userId, agentId, onNewMessage, onAgentResponse, onThinking, isResponding }: CommandBarProps) {
  const [inputValue, setInputValue] = useState('');
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim() || isResponding) return;

    const userMessage: Message = { role: 'user', content: inputValue };
    onNewMessage(userMessage);
    onThinking();
    
    const commandToSubmit = inputValue;
    setInputValue('');

    const result = await handleCommand(commandToSubmit, userId);

    if (result.success && result.data) {
      const agentResponse: Message = {
        role: 'agent',
        agentName: result.data.isCached ? `${result.data.agentName} (Cached)` : result.data.agentName,
        content: result.data.agentResponse,
      };
      onAgentResponse(agentResponse);
    } else {
      const errorResponse: Message = {
        role: 'agent',
        agentName: 'System Error',
        content: result.error || 'An unknown error occurred.',
      };
      onAgentResponse(errorResponse);
    }
  };

  return (
    <div className="mt-auto p-4 bg-background/80 backdrop-blur-sm border-t z-10">
      <div className="container mx-auto max-w-3xl">
        <form onSubmit={handleSubmit} className="relative group">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={t('commandBarPlaceholder')}
            className="w-full text-base pl-4 pr-20 h-12 rounded-full bg-background transition-all duration-300 focus-visible:ring-primary focus-visible:ring-2 focus-visible:shadow-lg focus-visible:shadow-primary/20"
            disabled={isResponding}
            aria-label="User command input"
          />
          <Button
            type="submit"
            variant="ghost"
            className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full h-9 w-12 text-muted-foreground hover:text-foreground"
            disabled={isResponding || !inputValue.trim()}
            aria-label="Submit command"
          >
            {isResponding ? <LoaderCircle className="animate-spin" /> : <CornerDownLeft />}
          </Button>
        </form>
        <p className="text-xs text-center text-muted-foreground mt-2">
          {t('commandBarShortcut')}
        </p>
      </div>
    </div>
  );
}
