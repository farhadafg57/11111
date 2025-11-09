'use client';

import LanguageSwitcher from './language-switcher';
import { SidebarTrigger } from '../ui/sidebar';
import Link from 'next/link';
import { Logo } from './logo';

type AppHeaderProps = {
  showSidebarTrigger?: boolean;
};

export default function AppHeader({ showSidebarTrigger = false }: AppHeaderProps) {
  return (
    <header className="p-4 border-b bg-background/80 backdrop-blur-sm sticky top-0 z-20">
      <div className="container mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {showSidebarTrigger && <SidebarTrigger />}
          <Link href="/" className="flex items-center gap-2 text-2xl font-headline font-bold text-foreground tracking-tight">
            <Logo className="h-8 w-8" />
            AfghanAI
          </Link>
        </div>
        <div className="flex items-center gap-2">
            <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
