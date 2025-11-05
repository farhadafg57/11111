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
  variable: '--font-headline',
  weight: ['400', '600', '700'],
  display: 'swap',
});

const sourceSerif4 = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-body',
  style: ['normal', 'italic'],
  axes: ['opsz'],
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/_next/static/media/0289ba911e8000e3-s.p.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/_next/static/media/7b89a4fd5e90ede0-s.p.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/_next/static/media/d6f3920df5a15b13-s.p.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/_next/static/media/f35bab321b697722-s.p.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
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
