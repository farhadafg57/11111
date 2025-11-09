import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { Providers } from './providers';
import { Cormorant_Garamond, Source_Serif_4, Noto_Naskh_Arabic } from 'next/font/google';

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
  themeColor: '#030612',
};

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-headline',
  display: 'swap',
});

const sourceSerif4 = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const notoNaskhArabic = Noto_Naskh_Arabic({
  subsets: ['arabic'],
  variable: '--font-arabic',
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
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
      </head>
      <body className={cn(
        'font-body antialiased',
        cormorantGaramond.variable,
        sourceSerif4.variable,
        notoNaskhArabic.variable
      )}>
        <Providers>
            {children}
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
