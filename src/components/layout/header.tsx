'use client';

import LanguageSwitcher from './language-switcher';
import { SidebarTrigger } from '../ui/sidebar';
import Link from 'next/link';

export default function AppHeader() {
  return (
    <header className="p-4 border-b bg-background/80 backdrop-blur-sm sticky top-0 z-20">
      <div className="container mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
           <SidebarTrigger />
          <Link href="/" className="text-3xl font-headline font-bold text-foreground tracking-tight">
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
