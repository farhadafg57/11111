'use client';

import { useState, useRef, useEffect } from 'react';
import { CornerDownLeft, LoaderCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { handleCommand } from '@/app/actions';
import type { Message } from '@/app/hub/[agentId]/page';
import { useLanguage } from '@/lib/language';
import { Textarea } from '../ui/textarea';
import type { Agent } from '@/lib/agents';
import { useUser } from '@/firebase';

type CommandBarProps = {
  agent: Agent;
  onNewMessage: (userMessage: Message, thinkingMessage: Message) => void;
  onAgentResponse: (message: Message) => void;
};

export default function CommandBar({ agent, onNewMessage, onAgentResponse }: CommandBarProps) {
  const [inputValue, setInputValue] = useState('');
  const [isResponding, setIsResponding] = useState(false);
  const { t } = useLanguage();
  const { user } = useUser();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      const scrollHeight = textarea.scrollHeight;
      textarea.style.height = `${scrollHeight}px`;
    }
  }, [inputValue]);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim() || isResponding) return;

    const commandToSubmit = inputValue;
    const userMessageId = `user-${Date.now()}`;
    const agentMessageId = `agent-${Date.now()}`;
    
    setIsResponding(true);
    setInputValue('');

    onNewMessage(
      { id: userMessageId, role: 'user', content: commandToSubmit },
      { id: agentMessageId, role: 'agent', agentName: agent.name, content: '...', isThinking: true }
    );

    const result = await handleCommand(commandToSubmit, user?.uid);

    const responseMessage: Message = {
      id: agentMessageId,
      role: 'agent',
      agentName: result.success && result.data ? (result.data.isCached ? `${result.data.agentName} (Cached)` : result.data.agentName) : 'System Error',
      content: result.success && result.data ? result.data.agentResponse : result.error || 'An unknown error occurred.',
      isThinking: false,
    };
    onAgentResponse(responseMessage);
    
    setIsResponding(false);
    textareaRef.current?.focus();
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && !isResponding) {
        e.preventDefault();
        e.currentTarget.form?.requestSubmit();
    }
  }

  return (
    <div className="mt-auto p-4 bg-background/80 backdrop-blur-sm border-t z-10">
      <div className="container mx-auto max-w-3xl">
        <form onSubmit={handleSubmit} className="relative group flex items-start gap-2">
          <Textarea
            ref={textareaRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={t('commandBarPlaceholder')}
            className="w-full text-base pl-4 pr-16 py-3 rounded-2xl resize-none overflow-y-auto bg-background transition-all duration-300 focus-visible:ring-primary focus-visible:ring-2 focus-visible:shadow-lg focus-visible:shadow-primary/20 max-h-48"
            disabled={isResponding}
            aria-label="User command input"
            rows={1}
          />
          <Button
            type="submit"
            variant="ghost"
            className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full h-10 w-12 text-muted-foreground hover:text-foreground"
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
