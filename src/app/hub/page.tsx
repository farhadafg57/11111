'use client';

import { useLanguage } from '@/lib/language';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function HubPage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-background">
      <div className="max-w-md w-full">
        <h2 className="text-3xl font-headline font-bold text-foreground/80 mb-2">
          {t('welcomeToTheHub')}
        </h2>
        <p className="text-lg text-foreground/60 mb-8">
          {t('selectAgentPrompt')}
        </p>
        <Button asChild variant="outline">
          <Link href="/landing">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Landing
          </Link>
        </Button>
      </div>
    </div>
  );
}
