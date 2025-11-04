'use client';

import { useState } from 'react';
import { CornerDownLeft, LoaderCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { handleCommand } from '@/app/actions';
import type { Message } from '@/app/page';

type CommandBarProps = {
  userId?: string;
  onNewMessage: (message: Message) => void;
  onAgentResponse: (message: Message) => void;
  onThinking: () => void;
  isResponding: boolean;
};

export default function CommandBar({ userId, onNewMessage, onAgentResponse, onThinking, isResponding }: CommandBarProps) {
  const [inputValue, setInputValue] = useState('');

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
        agentName: result.data.agentName,
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
            placeholder="Oracle's Command: Enter your prompt here..."
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
          Press{' '}
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>B
          </kbd>{' '}
          to toggle the Scriptorium.
        </p>
      </div>
    </div>
  );
}
