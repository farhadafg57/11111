import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Providers } from './providers';
import { Cormorant_Garamond, Source_Serif_4, Noto_Naskh_Arabic } from 'next/font/google';
import { cn } from '@/lib/utils';
import { SidebarProvider } from '@/components/ui/sidebar';

export const metadata: Metadata = {
  title: 'AfghanAI Hub',
  description: 'An AI Hub for classical and modern knowledge.',
};

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-headline',
  weight: ['400', '600', '700'],
});

const sourceSerif4 = Source_Serif_4({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  style: ['normal', 'italic'],
  axes: ['opsz']
});

const notoNaskhArabic = Noto_Naskh_Arabic({
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-arabic',
  weight: ['400', '700'],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        'font-body antialiased',
        cormorantGaramond.variable,
        sourceSerif4.variable,
        notoNaskhArabic.variable
      )}>
        <Providers>
          <SidebarProvider>
            {children}
          </SidebarProvider>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
