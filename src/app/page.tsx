'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AppHeader from '@/components/layout/header';
import { motion } from 'framer-motion';
import { ArrowRight, BrainCircuit } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <AppHeader />
      <main className="flex-1 flex flex-col items-center justify-center text-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          <motion.div 
            className="mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
          >
            <BrainCircuit className="w-24 h-24 text-primary mx-auto" />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tight mb-4">
            The Grand Vestibule of the AfghanAI Hub
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 font-body max-w-3xl mx-auto mb-8">
            An immersive classical environment designed for focus, clarity, and the pursuit of knowledge. A comprehensive engine for human potential.
          </p>
          <Link href="/hub" passHref>
            <Button size="lg" className="group text-lg">
              Enter the Hub
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </main>
      <footer className="p-4 text-center text-sm text-muted-foreground">
        <p>Built on a sovereign, hyper-modular AI ecosystem. &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
