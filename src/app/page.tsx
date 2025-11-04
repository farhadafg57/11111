'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AppHeader from '@/components/layout/header';
import { motion } from 'framer-motion';
import { ArrowDown, BrainCircuit } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const letterContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200,
    }
  },
};


export default function LandingPage() {
  const title = "AfghanAI Hub";

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-hidden">
      <AppHeader />
      <main className="flex-1 flex flex-col items-center justify-center text-center p-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl flex flex-col items-center"
        >
          <motion.div 
            className="mb-8"
            animate={{
              scale: [1, 1.05, 1],
              transition: {
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
             <BrainCircuit className="w-24 h-24 text-primary mx-auto" />
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-headline font-bold tracking-tight mb-4 flex justify-center"
            variants={letterContainerVariants}
          >
            {title.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block"
                style={{whiteSpace: char === ' ' ? 'pre' : 'normal'}}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-foreground/80 font-body max-w-3xl mx-auto mb-8"
            variants={itemVariants}
          >
            A Digital Civilization. For Everyone.
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <Link href="/hub" passHref>
              <Button size="lg" className="group text-lg">
                Enter the Hub
              </Button>
            </Link>
          </motion.div>
          
          <motion.div
            className="mt-16"
            variants={itemVariants}
            animate={{
              y: [0, 10, 0],
              transition: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </motion.div>

        </motion.div>
      </main>
    </div>
  );
}
