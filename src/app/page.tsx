'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AppHeader from '@/components/layout/header';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, BrainCircuit, Zap, BookOpen, HandCoins, HeartPulse, Palette } from 'lucide-react';
import { ChaosComponent } from '@/components/animations/chaos';
import { OrderedMosaic } from '@/components/animations/ordered';
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/lib/language';

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
    },
  },
};

const pillarIcons = [
    { Icon: Palette, title: "creativity" },
    { Icon: BookOpen, title: "education" },
    { Icon: HandCoins, title: "business" },
    { Icon: HeartPulse, title: "health" },
    { Icon: Zap, title: "technology" },
]

export default function LandingPage() {
  const { t, language } = useLanguage();
  const title = t('hubTitle');
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"]
  });

  // Opacity transitions for each act
  const act1Opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const act2Opacity = useTransform(scrollYProgress, [0.15, 0.25, 0.35], [0, 1, 0]);
  const act3Opacity = useTransform(scrollYProgress, [0.35, 0.45, 0.55], [0, 1, 0]);
  const act4Opacity = useTransform(scrollYProgress, [0.55, 0.65, 0.75], [0, 1, 0]);
  const act5Opacity = useTransform(scrollYProgress, [0.75, 0.85], [0, 1]);

  // Orrery animation
  const orreryY = useTransform(scrollYProgress, [0, 0.15], [0, -150]);
  const orreryScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.5]);

  // Act II specific animations
  const chaosOpacity = useTransform(scrollYProgress, [0.2, 0.28], [1, 0]);
  const orderedOpacity = useTransform(scrollYProgress, [0.28, 0.35], [0, 1]);
  const act2TextOpacity = useTransform(scrollYProgress, [0.28, 0.35], [0, 1]);


  return (
    <div className={cn(language === 'fa' || language === 'ps' ? 'font-arabic' : '')}>
      <AppHeader />
      <div ref={scrollRef} className="relative z-0">
        <div className="h-[500vh]">
          <div className="sticky top-0 h-screen overflow-hidden">
            
            {/* Common Background Elements if any */}
            
            {/* ACT I: The Arrival */}
            <motion.section
              style={{ opacity: act1Opacity }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center p-4"
            >
              <div className="max-w-4xl flex flex-col items-center">
                <motion.div
                  className="mb-8"
                  style={{ scale: orreryScale, y: orreryY }}
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
                  className="text-5xl md:text-7xl font-headline font-bold tracking-tight mb-4 flex justify-center flex-wrap"
                  variants={letterContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {title.split("").map((char, index) => (
                    <motion.span
                      key={index}
                      variants={letterVariants}
                      className="inline-block"
                      style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.h1>

                <motion.p
                  className="text-xl md:text-2xl text-foreground/80 font-body max-w-3xl mx-auto mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1, transition: { delay: 0.5, duration: 0.8 } }}
                >
                  {t('hubSubtitle')}
                </motion.p>

                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 0.7, duration: 0.8 } }}>
                  <Link href="/hub" passHref>
                    <Button size="lg" className="group text-lg">
                      {t('enterHub')}
                    </Button>
                  </Link>
                </motion.div>

                <motion.div
                  className="absolute bottom-10"
                  animate={{
                    y: [0, 10, 0],
                    transition: {
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
                  }}
                >
                  <ArrowDown className="h-6 w-6 text-muted-foreground" />
                </motion.div>
              </div>
            </motion.section>

            {/* ACT II: The Promise of Clarity */}
            <motion.section
              style={{ opacity: act2Opacity }}
              className="absolute inset-0 h-screen w-full flex items-center justify-center pointer-events-none"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
                <div className="relative h-96 w-96">
                  <motion.div style={{ opacity: chaosOpacity }} className="absolute inset-0">
                    <ChaosComponent />
                  </motion.div>
                  <motion.div style={{ opacity: orderedOpacity }} className="absolute inset-0">
                    <OrderedMosaic />
                  </motion.div>
                </div>
                <motion.div style={{ opacity: act2TextOpacity }}>
                  <h2 className="text-5xl font-headline font-bold">{t('act2Title')}</h2>
                </motion.div>
              </div>
            </motion.section>

            {/* ACT III: The Pillars of Knowledge */}
            <motion.section
              style={{ opacity: act3Opacity }}
              className="absolute inset-0 h-screen w-full flex flex-col items-center justify-center text-center p-4 pointer-events-none"
            >
                <h2 className="text-4xl md:text-5xl font-headline font-bold mb-16">{t('act3Title')}</h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 w-full max-w-6xl">
                    {pillarIcons.map((pillar, index) => (
                        <motion.div 
                            key={pillar.title} 
                            className="flex flex-col items-center gap-4 p-4 rounded-lg border bg-card/50"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <pillar.Icon className="w-12 h-12 text-primary" />
                            <h3 className="text-xl font-headline font-semibold">{t(pillar.title)}</h3>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* ACT IV: The Foundation of Trust */}
            <motion.section
                style={{ opacity: act4Opacity }}
                className="absolute inset-0 h-screen w-full flex flex-col items-center justify-center text-center p-4 space-y-24 pointer-events-none"
            >
                <div className="max-w-4xl">
                    <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">{t('act4Title1')}</h2>
                    <p className="text-xl text-foreground/80">{t('act4Desc1')}</p>
                </div>
                <div className="max-w-4xl">
                    <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">{t('act4Title2')}</h2>
                    <p className="text-xl text-foreground/80">{t('act4Desc2')}</p>
                </div>
            </motion.section>

            {/* ACT V: The Invitation */}
            <motion.section
                style={{ opacity: act5Opacity }}
                className="absolute inset-0 h-screen w-full flex flex-col items-center justify-center text-center p-4 pointer-events-none"
            >
                 <motion.div
                  className="mb-8"
                  style={{ 
                      scale: useTransform(scrollYProgress, [0.85, 1], [0.5, 1]), 
                      y: useTransform(scrollYProgress, [0.85, 1], [-200, 0]) 
                  }}
                >
                  <BrainCircuit className="w-32 h-32 text-primary mx-auto" />
                </motion.div>
                <h2 className="text-5xl md:text-7xl font-headline font-bold mb-8">{t('act5Title')}</h2>
                 <Link href="/hub" passHref className='pointer-events-auto'>
                  <Button size="lg" variant="default" className="text-xl h-14 px-12 transform hover:scale-105 transition-transform duration-300">
                    {t('enterHub')}
                  </Button>
                </Link>
                 <div className="absolute bottom-8 flex gap-8 text-foreground/60">
                    <Link href="#" className="hover:text-primary transition-colors pointer-events-auto">{t('theVision')}</Link>
                    <Link href="#" className="hover:text-primary transition-colors pointer-events-auto">{t('theTechnology')}</Link>
                    <Link href="#" className="hover:text-primary transition-colors pointer-events-auto">{t('theHeritage')}</Link>
                </div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}
