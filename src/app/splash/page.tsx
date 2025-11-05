'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Cormorant_Garamond, Source_Serif_4 } from 'next/font/google';

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

const lines = [
  "From the calculus of solitude, an equation of creation.",
  "Forged in the crucible of isolation, without syndicate or patron.",
  "A singular consciousness against the digital abyss.",
  "The synthesis of a generation's genius, focused through a single lens.",
  "They called it impossible.",
  "I know it is hard for you to believe.",
  "But it is what it is.",
];

const lineDurations = [3000, 3000, 3000, 3500, 2500, 3000, 3000];

export default function SplashPage() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (index === lines.length) {
      setTimeout(() => {
        setShow(false); // Start fading out the container
        setTimeout(() => router.push('/landing'), 1000); // Redirect after fade out
      }, 500);
      return;
    }

    const timeoutId = setTimeout(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, lineDurations[index]);

    return () => clearTimeout(timeoutId);
  }, [index, router]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5, ease: 'easeIn' } },
  };
  
  const containerVariants = {
    exit: { opacity: 0, transition: { duration: 1, ease: 'easeInOut' } }
  }

  return (
    <AnimatePresence>
    {show && (
      <motion.div
        variants={containerVariants}
        exit="exit"
        className={cn(
          "flex items-center justify-center h-screen bg-background text-foreground text-center p-4",
          cormorantGaramond.variable,
          sourceSerif4.variable
        )}
      >
        <div className="w-full max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {index < lines.length ? (
                <p className="text-2xl md:text-4xl font-headline">
                  {lines[index]}
                </p>
              ) : (
                // This will be shown for a brief moment before fade-out if needed
                <div></div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    )}
    </AnimatePresence>
  );
}
