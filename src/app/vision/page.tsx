'use client';

import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BrainCircuit, BookOpenCheck, ShieldCheck, HeartHandshake, ArrowRight } from 'lucide-react';
import { ChaosComponent } from '@/components/animations/chaos';
import { OrderedMosaic } from '@/components/animations/ordered';
import Link from 'next/link';
import { Button } from '@/components/ui/button';


const acts = [
  {
    title: "Act I: The Digital Orrery",
    Icon: BrainCircuit,
    id: "arrival",
    content: () => (
      <div className="w-full h-full relative flex items-center justify-center">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <ChaosComponent />
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="relative flex flex-col items-center"
        >
          <BrainCircuit className="w-48 h-48 text-primary drop-shadow-2xl" />
        </motion.div>
      </div>
    ),
  },
  {
    title: "Act II: The Promise of Clarity",
    Icon: BookOpenCheck,
    id: "clarity",
    content: () => (
       <div className="w-full h-full relative flex items-center justify-center">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <OrderedMosaic />
        </motion.div>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="relative text-center p-8"
        >
          <h2 className="text-5xl md:text-7xl font-headline font-bold text-foreground mb-4 drop-shadow-lg">Wisdom Without Weight</h2>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto">From scattered data, a universe of knowledge. We transform chaos into clarity, delivering profound insights on any device.</p>
        </motion.div>
      </div>
    ),
  },
  {
    title: "Act III: The Pillars of Knowledge",
    Icon: ShieldCheck,
    id: "pillars",
    content: () => (
      <div className="flex items-center justify-center h-full">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 max-w-6xl mx-auto">
            <motion.div initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} transition={{delay: 0.2, duration: 0.7}} className="bg-background/50 backdrop-blur-sm p-6 rounded-lg border border-primary/20 shadow-xl">
               <h3 className="text-2xl font-headline font-semibold text-primary mb-3">Hafiz: The Guardian</h3>
               <p className="font-body text-foreground/90">Our high-speed model for instant answers. Hafiz provides quick, accurate information for everyday questions, ensuring you're never without a guide.</p>
            </motion.div>
             <motion.div initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} transition={{delay: 0.4, duration: 0.7}} className="bg-background/50 backdrop-blur-sm p-6 rounded-lg border-2 border-primary/50 shadow-2xl scale-105">
               <h3 className="text-2xl font-headline font-semibold text-primary mb-3">The Oracle</h3>
               <p className="font-body text-foreground/90">The central intelligence of the Hub. The Oracle analyzes your command, understands its complexity, and routes it to the perfect agent for the task.</p>
            </motion.div>
             <motion.div initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} transition={{delay: 0.6, duration: 0.7}} className="bg-background/50 backdrop-blur-sm p-6 rounded-lg border border-primary/20 shadow-xl">
               <h3 className="text-2xl font-headline font-semibold text-primary mb-3">Hakim: The Sage</h3>
               <p className="font-body text-foreground/90">Our deep-reasoning model for complex challenges. Hakim tackles creative, strategic, and multi-step problems with profound insight and wisdom.</p>
            </motion.div>
         </div>
      </div>
    ),
  },
  {
    title: "Act IV: The Foundation of Trust",
    Icon: HeartHandshake,
    id: "trust",
    content: () => (
        <div className="flex items-center justify-center h-full text-center p-8">
            <div>
                <h2 className="text-5xl md:text-7xl font-headline font-bold text-foreground mb-4 drop-shadow-lg">Power Without Price</h2>
                <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto">
                    Built on a foundation of trust, privacy, and cultural respect. Your data is yours alone. Our responses are aligned with Afghan values, providing a safe and reliable digital sanctuary.
                </p>
            </div>
        </div>
    ),
  },
  {
    title: "Act V: The Invitation",
    Icon: BrainCircuit,
    id: "invitation",
    content: () => (
       <div className="flex items-center justify-center h-full text-center p-8">
            <div>
                <h2 className="text-5xl md:text-7xl font-headline font-bold text-foreground mb-6 drop-shadow-lg">Begin Your Renaissance.</h2>
                 <Link href="/hub" passHref>
                  <Button size="lg" className="group text-xl h-14 px-12 bg-primary/90 text-primary-foreground hover:bg-primary">
                    Enter the Hub
                    <ArrowRight className="ml-2 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
                 <div className="mt-12 flex gap-8 justify-center text-foreground/60">
                    <Link href="/vision" className="hover:text-primary transition-colors pointer-events-auto">The Vision</Link>
                    <Link href="/#features" className="hover:text-primary transition-colors pointer-events-auto">The Technology</Link>
                    <Link href="/about" className="hover:text-primary transition-colors pointer-events-auto">The Heritage</Link>
                </div>
            </div>
        </div>
    ),
  },
];

export default function VisionPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });

  const actOpacities = useMemo(() => [
    useTransform(scrollYProgress, [0, 0.18, 0.20], [1, 1, 0]),
    useTransform(scrollYProgress, [0.20, 0.22, 0.38, 0.40], [0, 1, 1, 0]),
    useTransform(scrollYProgress, [0.40, 0.42, 0.58, 0.60], [0, 1, 1, 0]),
    useTransform(scrollYProgress, [0.60, 0.62, 0.78, 0.80], [0, 1, 1, 0]),
    useTransform(scrollYProgress, [0.80, 0.82, 1], [0, 1, 1]),
  ], [scrollYProgress]);

  return (
    <main>
      <div ref={scrollRef} className="relative h-[500svh] w-full">
        <div className="sticky top-0 h-svh w-full overflow-hidden">
          {acts.map((act, i) => (
            <motion.div
              key={act.id}
              style={{
                opacity: actOpacities[i],
              }}
              className="absolute inset-0 h-full w-full"
            >
              <div className="h-full w-full">
                {act.content()}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
