
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AppHeader from '@/components/layout/header';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Bird, Zap, BookOpen, HandCoins, HeartPulse, Palette } from 'lucide-react';
import { ChaosComponent } from '@/components/animations/chaos';
import { OrderedMosaic } from '@/components/animations/ordered';
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/lib/language';

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

  // Act I -> Act II
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.8]);
  
  // Orrery animation
  const orreryY = useTransform(scrollYProgress, [0, 0.15, 0.2], [0, -150, -200]);
  const orreryScale = useTransform(scrollYProgress, [0, 0.15, 0.2], [1, 0.5, 0.3]);
  const orreryX = useTransform(scrollYProgress, [0.15, 0.2], [0, 150]);


  // Act II animations
  const act2Opacity = useTransform(scrollYProgress, [0.15, 0.25, 0.35], [0, 1, 0]);
  const chaosOpacity = useTransform(scrollYProgress, [0.2, 0.28], [1, 0]);
  const orderedOpacity = useTransform(scrollYProgress, [0.28, 0.35], [0, 1]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.35], [0, 1]);

  // Act III animations
  const act3Opacity = useTransform(scrollYProgress, [0.35, 0.45, 0.55], [0, 1, 0]);

  // Act IV animations
  const act4Opacity = useTransform(scrollYProgress, [0.55, 0.65, 0.75], [0, 1, 0]);

  // Act V animations
  const act5Opacity = useTransform(scrollYProgress, [0.75, 0.85], [0, 1]);
  const finalOrreryScale = useTransform(scrollYProgress, [0.8, 0.9], [0.5, 1]);
  const finalOrreryY = useTransform(scrollYProgress, [0.8, 0.9], [-200, 0]);


  return (
    <div className={cn("flex flex-col min-h-[500vh] bg-background text-foreground overflow-x-hidden", language === 'fa' || language === 'ps' ? 'font-arabic' : '')} ref={scrollRef}>
      <AppHeader />

      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
        {/* ACT I */}
        <motion.main
          style={{ opacity: heroOpacity, scale: heroScale, display: useTransform(scrollYProgress, v => v > 0.2 ? 'none' : 'flex') }}
          className="w-full flex-1 flex flex-col items-center justify-center text-center p-4"
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
              <Bird className="w-24 h-24 text-primary mx-auto" />
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
                  style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
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
              {t('hubSubtitle')}
            </motion.p>

            <motion.div variants={itemVariants} initial="hidden" animate="visible">
              <Link href="/hub" passHref>
                <Button size="lg" className="group text-lg">
                  {t('enterHub')}
                </Button>
              </Link>
            </motion.div>

            <motion.div
              className="absolute bottom-10"
              variants={itemVariants}
              initial="hidden"
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
        </motion.main>

        {/* ACT II */}
        <motion.section
          style={{ opacity: act2Opacity, display: useTransform(scrollYProgress, v => (v > 0.15 && v < 0.4) ? 'flex' : 'none') }}
          className="h-screen w-full flex items-center justify-center absolute inset-0"
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
            <motion.div style={{ opacity: textOpacity }}>
              <h2 className="text-5xl font-headline font-bold">{t('act2Title')}</h2>
            </motion.div>
          </div>
        </motion.section>

        {/* ACT III */}
        <motion.section
          style={{ opacity: act3Opacity, display: useTransform(scrollYProgress, v => (v > 0.35 && v < 0.6) ? 'flex' : 'none') }}
          className="h-screen w-full flex flex-col items-center justify-center absolute inset-0 text-center p-4"
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

        {/* ACT IV */}
        <motion.section
            style={{ opacity: act4Opacity, display: useTransform(scrollYProgress, v => (v > 0.55 && v < 0.8) ? 'flex' : 'none') }}
            className="h-screen w-full flex flex-col items-center justify-center absolute inset-0 text-center p-4 space-y-24"
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

        {/* ACT V */}
        <motion.section
            style={{ opacity: act5Opacity, display: useTransform(scrollYProgress, v => v > 0.75 ? 'flex' : 'none') }}
            className="h-screen w-full flex flex-col items-center justify-center absolute inset-0 text-center p-4"
        >
             <motion.div
              className="mb-8"
              style={{ scale: finalOrreryScale, y: finalOrreryY }}
            >
              <Bird className="w-32 h-32 text-primary mx-auto" />
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-headline font-bold mb-8">{t('act5Title')}</h2>
             <Link href="/hub" passHref>
              <Button size="lg" variant="default" className="text-xl h-14 px-12 transform hover:scale-105 transition-transform duration-300">
                {t('enterHub')}
              </Button>
            </Link>
             <div className="absolute bottom-8 flex gap-8 text-foreground/60">
                <Link href="#" className="hover:text-primary transition-colors">{t('theVision')}</Link>
                <Link href="#" className="hover:text-primary transition-colors">{t('theTechnology')}</Link>
                <Link href="#" className="hover:text-primary transition-colors">{t('theHeritage')}</Link>
            </div>
        </motion.section>

      </div>
    </div>
  );
}
