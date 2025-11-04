'use client';

import { useLanguage } from '@/lib/language';
import { BrainCircuit } from 'lucide-react';

export default function HubPage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-8">
      <BrainCircuit className="w-24 h-24 text-primary/20 mb-6" />
      <h2 className="text-3xl font-headline font-bold text-foreground/80 mb-2">
        {t('welcomeToTheHub')}
      </h2>
      <p className="text-lg text-foreground/60 max-w-md">
        {t('selectAgentPrompt')}
      </p>
    </div>
  );
}
