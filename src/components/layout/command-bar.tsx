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
  const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };
  
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [inputValue]);


  const handleSubmit = async () => {
    if (!inputValue.trim() || isResponding) return;

    const commandToSubmit = inputValue;
    
    setIsResponding(true);
    setInputValue('');

    const userMessage: Message = { role: 'user', content: commandToSubmit };
    const thinkingMessage: Message = {role: 'agent', agentName: agent.name, content: '...'};
    onNewMessage(userMessage, thinkingMessage);

    const result = await handleCommand(commandToSubmit, user?.uid);

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
    setIsResponding(false);
    textareaRef.current?.focus();
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        formRef.current?.requestSubmit();
    }
  }
  
  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit();
  }

  return (
    <div className="mt-auto p-4 bg-background/80 backdrop-blur-sm border-t z-10">
      <div className="container mx-auto max-w-3xl">
        <form ref={formRef} onSubmit={onFormSubmit} className="relative group flex items-start gap-2">
          <Textarea
            ref={textareaRef}
            value={inputValue}
            onChange={handleInputChange}
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
