
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AppHeader from '@/components/layout/header';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  Feather,
  Bot,
  MessageSquare,
  Server,
  Database,
  ShieldCheck,
  Globe,
  HeartHandshake,
  Lightbulb,
  Eye,
  Rocket,
  Cpu,
  LayoutPanelLeft,
  Pill,
  Combine,
  Sigma,
  GitBranch,
  Layers,
  Container,
  Goal,
  Wand2,
  Users,
  BadgeDollarSign,
  Recycle,
  BrainCircuit,
  Languages as LanguageIcon,
  Search,
  Map,
  Sparkles,
  Blocks,
  Settings,
  AppWindow
} from 'lucide-react';
import { useLanguage } from '@/lib/language';
import Image from 'next/image';
import placeholderData from '@/lib/placeholder-images.json';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import HeroAnimation from '@/components/animations/hero-animation';
import React from 'react';

const richFeatures = [
    {
        Icon: Combine,
        title: 'featureCognitiveCoreTitle',
        description: 'featureCognitiveCoreDesc',
    },
    {
        Icon: Eye,
        title: 'featureSensoryIntelTitle',
        description: 'featureSensoryIntelDesc',
    },
    {
        Icon: BrainCircuit,
        title: 'featureMemoryCoreTitle',
        description: 'featureMemoryCoreDesc',
    },
    {
        Icon: Search,
        title: 'featureRealWorldTitle',
        description: 'featureRealWorldDesc',
    },
    {
        Icon: LanguageIcon,
        title: 'featureCulturalSoulTitle',
        description: 'featureCulturalSoulDesc',
    },
    {
        Icon: BadgeDollarSign,
        title: 'featureCostEffectiveTitle',
        description: 'featureCostEffectiveDesc',
    }
];

const agenticCoreFeatures = [
    {
        Icon: Goal,
        title: 'agenticGoalTitle',
        description: 'agenticGoalDesc'
    },
    {
        Icon: Wand2,
        title: 'agenticToolTitle',
        description: 'agenticToolDesc'
    },
    {
        Icon: Users,
        title: 'agenticCollaborationTitle',
        description: 'agenticCollaborationDesc'
    },
    {
        Icon: GitBranch,
        title: 'agenticLearningTitle',
        description: 'agenticLearningDesc'
    }
];

const modularityFeatures = [
    {
        Icon: Layers,
        title: 'modularityAgentsTitle',
        description: 'modularityAgentsDesc'
    },
    {
        Icon: Blocks,
        title: 'modularityIntegrationTitle',
        description: 'modularityIntegrationDesc'
    },
    {
        Icon: AppWindow,
        title: 'modularityManagementTitle',
        description: 'modularityManagementDesc'
    },
    {
        Icon: Settings,
        title: 'modularityCustomizationTitle',
        description: 'modularityCustomizationDesc'
    }
];

const costFeatures = [
    {
        Icon: Container,
        title: 'costAllocationTitle',
        description: 'costAllocationDesc'
    },
    {
        Icon: Database,
        title: 'costCachingTitle',
        description: 'costCachingDesc'
    },
    {
        Icon: Sparkles,
        title: 'costModelTitle',
        description: 'costModelDesc'
    },
    {
        Icon: Recycle,
        title: 'costToolUsageTitle',
        description: 'costToolUsageDesc'
    }
];


const faqItems = [
    {
        q: 'faq1q',
        a: 'faq1a'
    },
    {
        q: 'faq2q',
        a: 'faq2a'
    },
    {
        q: 'faq3q',
        a: 'faq3a'
    },
    {
        q: 'faq4q',
        a: 'faq4a'
    },
    {
        q: 'faq5q',
        a: 'faq5a'
    },
    {
        q: 'faq6q',
        a: 'faq6a'
    }
];


export default function LandingPage() {
  const { t, language } = useLanguage();
  const founderImage = placeholderData.images.find(img => img.id === 'founder-landing');
  const targetRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });

  const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 0.5, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.4], ['0%', '-50%']);
  const subtitleOpacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 0.5, 0]);
  const subtitleY = useTransform(scrollYProgress, [0, 0.5], ['0%', '-100%']);
  const buttonOpacity = useTransform(scrollYProgress, [0, 0.4, 0.6], [1, 0.5, 0]);
  const buttonY = useTransform(scrollYProgress, [0, 0.6], ['0%', '-150%']);
  const animationOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };


  return (
    <div className={language === 'fa' || language === 'ps' ? 'font-arabic' : ''}>
      <AppHeader />

      {/* Hero Section */}
      <section ref={targetRef} className="relative text-center h-[100svh] py-20 lg:py-32 bg-background overflow-hidden">
        <motion.div style={{ opacity: animationOpacity }} className="absolute inset-0">
            <HeroAnimation />
        </motion.div>
        <div className="relative container mx-auto px-4 z-10 flex flex-col items-center justify-center h-full">
          <motion.h1
            style={{ y: titleY, opacity: titleOpacity }}
            className="text-5xl md:text-8xl font-headline font-bold tracking-tight mb-8"
          >
            AfghanAI
          </motion.h1>
          <motion.div
            style={{ y: buttonY, opacity: buttonOpacity }}
          >
            <Link href="/hub" passHref>
              <Button size="lg" className="group text-lg h-14 px-10 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow duration-300">
                {t('enterHub')}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      
       {/* Vision Section */}
      <section id="vision" className="py-20 lg:py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
             <div className="grid md:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={itemVariants}
                  >
                      <Eye className="w-16 h-16 text-primary mb-4" />
                      <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">{t('visionTitle')}</h2>
                      <p className="text-lg text-foreground/70 mb-6">{t('visionSubtitle')}</p>
                       <Button asChild variant="outline">
                          <Link href="/vision">{t('visionButton')}</Link>
                      </Button>
                  </motion.div>
                   <motion.div 
                     initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                     className="relative h-64 md:h-80 bg-muted rounded-lg p-8 flex items-center justify-center overflow-hidden"
                   >
                     <p className="text-2xl md:text-3xl font-headline font-semibold text-center z-10">"{t('visionQuote')}"</p>
                     <div className="absolute inset-0 bg-grid-primary/10 [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
                   </motion.div>
             </div>
          </div>
      </section>

      {/* Rich Features Section */}
      <section id="features" className="py-20 lg:py-24 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
              {t('richFeaturesTitle')}
            </h2>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {richFeatures.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
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
          </motion.div>
        </div>
      </section>

      {/* Agentic Core Section */}
      <section id="agentic-core" className="py-20 lg:py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto"
          >
            <Bot className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
              {t('agenticCoreTitle')}
            </h2>
            <p className="text-lg text-foreground/70 mb-12">
              {t('agenticCoreDesc')}
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {agenticCoreFeatures.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="bg-background p-6 rounded-lg border shadow-sm"
              >
                <feature.Icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-headline font-semibold mb-2">{t(feature.title)}</h3>
                <p className="text-foreground/80 font-body">{t(feature.description)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modularity Section */}
      <section id="modularity" className="py-20 lg:py-24 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto"
          >
            <Cpu className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
              {t('modularityTitle')}
            </h2>
            <p className="text-lg text-foreground/70 mb-12">
              {t('modularityDesc')}
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {modularityFeatures.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="bg-background p-6 rounded-lg border shadow-sm"
              >
                <feature.Icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-headline font-semibold mb-2">{t(feature.title)}</h3>
                <p className="text-foreground/80 font-body">{t(feature.description)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cost-Effectiveness Section */}
      <section id="cost-effectiveness" className="py-20 lg:py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto"
          >
            <Rocket className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
              {t('costTitle')}
            </h2>
            <p className="text-lg text-foreground/70 mb-12">
              {t('costDesc')}
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {costFeatures.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="bg-background p-6 rounded-lg border shadow-sm"
              >
                <feature.Icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-headline font-semibold mb-2">{t(feature.title)}</h3>
                <p className="text-foreground/80 font-body">{t(feature.description)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
        
      {/* Mission Section */}
      <section id="mission" className="py-20 lg:py-24 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
             <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={itemVariants}
                className="max-w-3xl mx-auto"
            >
                <Lightbulb className="w-16 h-16 text-primary mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
                    {t('missionTitle')}
                </h2>
                <p className="text-lg text-foreground/70">
                    {t('missionDesc')}
                </p>
            </motion.div>
        </div>
      </section>

      {/* Founder Message Section */}
       <section id="founder" className="py-20 lg:py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={itemVariants}
                className="max-w-4xl mx-auto text-center"
              >
                {founderImage && (
                    <Image
                        src={founderImage.src}
                        alt="Founder"
                        width={founderImage.width}
                        height={founderImage.height}
                        className="rounded-full mx-auto mb-6 border-4 border-background shadow-md"
                        data-ai-hint={founderImage.hint}
                    />
                )}
                <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
                  {t('founderMessageTitle')}
                </h2>
                 <div className="text-lg text-foreground/80 mb-8 font-body">
                    "{t('founderQuote')}"
                 </div>
                 <Button asChild variant="outline">
                    <Link href="/about">{t('readMore')}</Link>
                </Button>
              </motion.div>
          </div>
       </section>
        
        {/* FAQ Section */}
        <section id="faq" className="py-20 lg:py-24 bg-muted/30 overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={itemVariants}
                    className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold mb-12">
                        {t('faqTitle')}
                    </h2>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={itemVariants}
                    className="max-w-3xl mx-auto"
                >
                    <Accordion type="single" collapsible className="w-full">
                        {faqItems.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-lg font-headline font-semibold text-left">{t(item.q)}</AccordionTrigger>
                                <AccordionContent className="font-body text-foreground/80">
                                    {t(item.a)}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>


      {/* Final CTA Section */}
      <section id="cta" className="py-20 lg:py-32 bg-background overflow-hidden">
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
                <Link href="#features" className="hover:text-primary transition-colors pointer-events-auto">{t('theTechnology')}</Link>
                <Link href="/about" className="hover:text-primary transition-colors pointer-events-auto">{t('theHeritage')}</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t bg-muted/30">
        <div className="container mx-auto px-4 text-center text-foreground/60">
          <div>&copy; {new Date().getFullYear()} AfghanAI. {t('footerRights')}</div>
        </div>
      </footer>
    </div>
  );
}
