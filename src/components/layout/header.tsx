import { BrainCircuit } from 'lucide-react';
import LanguageSwitcher from './language-switcher';
import { SidebarTrigger } from '../ui/sidebar';

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
        <LanguageSwitcher />
      </div>
    </header>
  );
}
