import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Providers } from './providers';
import { Cormorant_Garamond, Source_Serif_4, Noto_Naskh_Arabic } from 'next/font/google';
import { cn } from '@/lib/utils';
import { SidebarProvider } from '@/components/ui/sidebar';

export const metadata: Metadata = {
  title: 'AfghanAI Hub - AI for Classical & Modern Knowledge',
  description: 'A world-class AI Hub bridging classical Afghan wisdom with modern AI technology. Explore intelligent agents, ask questions, and discover insights.',
  keywords: ['AI', 'Afghan', 'Generative AI', 'Knowledge Hub', 'Agents', 'Machine Learning'],
  authors: [{ name: 'AfghanAI Team' }],
  creator: 'AfghanAI',
  publisher: 'AfghanAI',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://afghan-ai.firebaseapp.com',
    title: 'AfghanAI Hub',
    description: 'AI for Classical & Modern Knowledge',
    images: [
      {
        url: 'https://afghan-ai.firebaseapp.com/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AfghanAI Hub',
    description: 'AI for Classical & Modern Knowledge',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0f172a',
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
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={cn(
        'font-body antialiased bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950',
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
