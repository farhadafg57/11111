'use client';

import { FirebaseClientProvider } from '@/firebase';
import { LanguageProvider } from '@/lib/language';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <FirebaseClientProvider>{children}</FirebaseClientProvider>
    </LanguageProvider>
  );
}
