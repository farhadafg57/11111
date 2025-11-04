'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AppHeader from '@/components/layout/header';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BrainCircuit,
  Zap,
  BookOpen,
  HandCoins,
  HeartPulse,
  Palette,
  Feather,
  BarChart,
  Code,
  MousePointerClick,
  Bot,
  MessageSquare,
} from 'lucide-react';
import { useLanguage } from '@/lib/language';
import Image from 'next/image';

const featureIcons = [
  {
    Icon: Palette,
    title: 'creativity',
    description: 'featureCreativity',
  },
  {
    Icon: BookOpen,
    title: 'education',
    description: 'featureEducation',
  },
  {
    Icon: HandCoins,
    title: 'business',
    description: 'featureBusiness',
  },
  {
    Icon: HeartPulse,
    title: 'health',
    description: 'featureHealth',
  },
  {
    Icon: Code,
    title: 'technology',
    description: 'featureTechnology',
  },
  {
    Icon: Feather,
    title: 'contentCreation',
    description: 'featureContentCreation',
  },
];

const howToSteps = [
    {
        Icon: MousePointerClick,
        title: 'howToStep1Title',
        description: 'howToStep1Desc'
    },
    {
        Icon: MessageSquare,
        title: 'howToStep2Title',
        description: 'howToStep2Desc'
    },
    {
        Icon: Bot,
        title: 'howToStep3Title',
        description: 'howToStep3Desc'
    }
]

export default function LandingPage() {
  const { t, language } = useLanguage();

  return (
    <div className={language === 'fa' || language === 'ps' ? 'font-arabic' : ''}>
      <AppHeader />

      {/* Hero Section */}
      <section className="text-center py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Image
                src="/logo.png"
                alt="AfghanAI Hub Logo"
                width={160}
                height={160}
                className="mx-auto mb-6"
                priority
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-6xl font-headline font-bold tracking-tight mb-4"
          >
            {t('hubTitle')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl text-foreground/80 font-body max-w-3xl mx-auto mb-8"
          >
            {t('hubSubtitle')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Link href="/hub" passHref>
              <Button size="lg" className="group text-lg h-12 px-8">
                {t('enterHub')}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
              {t('featuresTitle')}
            </h2>
            <p className="text-lg text-foreground/70 mb-12">
              {t('featuresSubtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureIcons.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-6 rounded-lg border shadow-sm hover:shadow-lg transition-shadow"
              >
                <feature.Icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-headline font-semibold mb-2">
                  {t(feature.title)}
                </h3>
                <p className="text-foreground/80 font-body">
                  {t(feature.description)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How to Use Section */}
      <section id="how-to-use" className="py-20 lg:py-24 bg-background">
         <div className="container mx-auto px-4">
             <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
                {t('howToUseTitle')}
                </h2>
                <p className="text-lg text-foreground/70 mb-12">
                {t('howToUseSubtitle')}
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
                 {howToSteps.map((step, index) => (
                     <motion.div 
                        key={step.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        className="flex flex-col items-center"
                     >
                        <div className="bg-primary/10 text-primary rounded-full p-4 mb-4">
                            <step.Icon className="w-10 h-10" />
                        </div>
                         <h3 className="text-xl font-headline font-semibold mb-2">{t(step.title)}</h3>
                         <p className="text-foreground/80 font-body max-w-xs">{t(step.description)}</p>
                     </motion.div>
                 ))}
            </div>
         </div>
      </section>

      {/* Founder Message Section */}
       <section id="founder" className="py-20 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                 <Image
                    src="https://picsum.photos/seed/founder/128/128"
                    alt="Founder"
                    width={128}
                    height={128}
                    className="rounded-full mx-auto mb-6 border-4 border-background shadow-md"
                    data-ai-hint="portrait man"
                 />
                <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
                  {t('founderMessageTitle')}
                </h2>
                 <p className="text-lg text-foreground/80 mb-8 font-body">
                    "{t('founderQuote')}"
                 </p>
                 <Button asChild variant="outline">
                    <Link href="/about">{t('readMore')}</Link>
                </Button>
              </div>
          </div>
       </section>

      {/* Final CTA Section */}
      <section id="cta" className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight mb-6">
              {t('act5Title')}
            </h2>
            <Link href="/hub" passHref>
              <Button size="lg" className="group text-xl h-14 px-12">
                {t('enterHub')}
                <ArrowRight className="ml-2 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
             <div className="mt-12 flex gap-8 justify-center text-foreground/60">
                <Link href="/vision" className="hover:text-primary transition-colors pointer-events-auto">{t('theVision')}</Link>
                <Link href="#" className="hover:text-primary transition-colors pointer-events-auto">{t('theTechnology')}</Link>
                <Link href="#" className="hover:text-primary transition-colors pointer-events-auto">{t('theHeritage')}</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t bg-muted/30">
        <div className="container mx-auto px-4 text-center text-foreground/60">
            <p>&copy; {new Date().getFullYear()} AfghanAI Hub. {t('footerRights')}</p>
        </div>
      </footer>
    </div>
  );
}
