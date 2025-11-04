'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AppHeader from '@/components/layout/header';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, BrainCircuit } from 'lucide-react';
import { ChaosComponent } from '@/components/animations/chaos';
import { OrderedMosaic } from '@/components/animations/ordered';
import { useRef } from 'react';

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
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  
  // Orrery animation
  const orreryScale = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 0.5, 0.2]);
  const orreryY = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, -150, -250]);
  const orreryX = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 0, 200]);

  // Act II animations
  const act2Opacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const chaosOpacity = useTransform(scrollYProgress, [0.4, 0.5], [1, 0]);
  const orderedOpacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const textOpacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);


  return (
    <div className="flex flex-col min-h-[300vh] bg-background text-foreground overflow-hidden" ref={scrollRef}>
      <AppHeader />

      {/* ACT I */}
      <motion.main 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="flex-1 flex flex-col items-center justify-center text-center p-4 sticky top-0 h-screen"
      >
        <div className="max-w-4xl flex flex-col items-center">
          <motion.div 
            className="mb-8"
            style={{ scale: orreryScale, y: orreryY, x: orreryX }}
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
            initial="hidden"
            animate="visible"
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
            initial="hidden"
            animate="visible"
          >
            A Digital Civilization. For Everyone.
          </motion.p>
          
          <motion.div variants={itemVariants} initial="hidden" animate="visible">
            <Link href="/hub" passHref>
              <Button size="lg" className="group text-lg">
                Enter the Hub
              </Button>
            </Link>
          </motion.div>
          
          <motion.div
            className="mt-16"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            animate-y="[0, 10, 0]"
            transition-duration="1.5"
            transition-repeat="Infinity"
            transition-ease="easeInOut"
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </motion.div>
        </div>
      </motion.main>

      {/* ACT II */}
      <motion.section
        style={{ opacity: act2Opacity }}
        className="h-screen sticky top-0 flex items-center justify-center"
      >
        <div className="grid grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          <div className="relative h-96 w-96">
            <motion.div style={{ opacity: chaosOpacity }} className="absolute inset-0">
              <ChaosComponent />
            </motion.div>
            <motion.div style={{ opacity: orderedOpacity }} className="absolute inset-0">
               <OrderedMosaic />
            </motion.div>
          </div>
          <motion.div style={{ opacity: textOpacity }}>
            <h2 className="text-5xl font-headline font-bold">From Complexity to Cognition</h2>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
