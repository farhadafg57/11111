'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LoaderCircle } from 'lucide-react';

export default function HubPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/canvas');
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-background">
      <div className="flex items-center gap-4">
        <LoaderCircle className="animate-spin text-primary" />
        <p className="text-lg text-foreground/60">Initializing Kael Interface...</p>
      </div>
    </div>
  );
}
