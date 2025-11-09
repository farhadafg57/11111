'use client';

import * as React from 'react';
import { PanelLeft } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import AgentList from '../layout/agent-list';

export function SidebarTrigger() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = React.useState(false);

  if (!isMobile) {
    return null;
  }
  
  const handleAgentSelect = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <PanelLeft />
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full max-w-xs bg-background p-0 text-foreground flex flex-col">
        <SheetHeader className="p-4 border-b">
          <SheetTitle className="text-2xl font-headline font-semibold">Scriptorium</SheetTitle>
        </SheetHeader>
        <AgentList onAgentSelect={handleAgentSelect} />
      </SheetContent>
    </Sheet>
  );
}
