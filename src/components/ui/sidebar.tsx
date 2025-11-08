'use client';

import * as React from 'react';
import { PanelLeft } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import AgentList from '../layout/agent-list';

export function SidebarTrigger() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = React.useState(false);

  // We only render this component on mobile devices
  if (!isMobile) {
    return null;
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="h-7 w-7">
          <PanelLeft />
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full max-w-xs bg-background p-0 text-foreground">
        {/* By passing a function that closes the sheet, we allow AgentList to control its parent */}
        <AgentList onAgentSelect={() => setIsOpen(false)} />
      </SheetContent>
    </Sheet>
  );
}
