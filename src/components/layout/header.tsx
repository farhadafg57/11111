'use client';

import { BrainCircuit, LogIn } from 'lucide-react';
import LanguageSwitcher from './language-switcher';
import { SidebarTrigger } from '../ui/sidebar';
import { useUser } from '@/firebase';
import { Button } from '../ui/button';
import Link from 'next/link';

const AuthButton = () => {
    const { user, isUserLoading } = useUser();

    if (isUserLoading) return null;
    if (user) return null;

    return (
        <Button asChild variant="ghost" size="sm">
            <Link href="/login">
                <LogIn className="mr-2 h-4 w-4" />
                Login
            </Link>
        </Button>
    )
}


export default function AppHeader() {
  return (
    <header className="p-4 border-b bg-background/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
           <SidebarTrigger className="md:hidden" />
          <h1 className="text-3xl font-headline font-bold text-foreground tracking-tight">
            AfghanAI
          </h1>
        </div>
        <div className="flex items-center gap-2">
            <AuthButton />
            <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
