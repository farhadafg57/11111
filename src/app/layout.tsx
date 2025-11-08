import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Manrope, Noto_Naskh_Arabic } from 'next/font/google';
import { cn } from '@/lib/utils';
import { SidebarProvider } from '@/components/ui/sidebar';
import { LanguageProvider } from '@/lib/language';
import { FirebaseClientProvider } from '@/firebase';

export const metadata: Metadata = {
  title: 'AfghanAI Hub',
  description: 'An AI Hub for classical and modern knowledge.',
};

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const notoNaskhArabic = Noto_Naskh_Arabic({
  subsets: ['arabic'],
  variable: '--font-arabic',
  weight: ['400', '700'],
  display: 'swap',
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }} suppressHydrationWarning>
      <head>
      </head>
      <body className={cn(
        'font-body antialiased',
        manrope.variable,
        notoNaskhArabic.variable
      )}>
        <LanguageProvider>
          <FirebaseClientProvider>
            <SidebarProvider>
              {children}
            </SidebarProvider>
          </FirebaseClientProvider>
        </LanguageProvider>
        <Toaster />
      </body>
    </html>
  );
}
