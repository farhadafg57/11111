import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Manrope } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'AfghanAI Hub',
  description: 'An AI Hub for classical and modern knowledge.',
};

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
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
        manrope.variable
      )}>
        <Providers>
            {children}
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
