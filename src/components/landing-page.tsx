
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AppHeader from '@/components/layout/header';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  HandCoins,
  Palette,
  Feather,
  Code,
  MousePointerClick,
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
  Siren,
  Pill,
  Combine,
  Sigma,
} from 'lucide-react';
import { useLanguage } from '@/lib/language';
import Image from 'next/image';
import placeholderData from '@/lib/placeholder-images.json';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import HeroAnimation from './animations/hero-animation';
import React from 'react';


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
    Icon: Pill,
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
];

const techStack = [
    {
        Icon: LayoutPanelLeft,
        title: 'techNextJs',
        description: 'techNextJsDesc'
    },
    {
        Icon: Cpu,
        title: 'techGenkit',
        description: 'techGenkitDesc'
    },
    {
        Icon: Database,
        title: 'techFirebase',
        description: 'techFirebaseDesc'
    }
];

const hubExcellency = [
    {
        Icon: Combine,
        title: 'hubExcellencyOrchestrationTitle',
        description: 'hubExcellencyOrchestrationDesc'
    },
    {
        Icon: Cpu,
        title: 'hubExcellencyDualTitle',
        description: 'hubExcellencyDualDesc'
    },
    {
        Icon: Rocket,
        title: 'hubExcellencyOptimizationTitle',
        description: 'hubExcellencyOptimizationDesc'
    }
];

const principles = [
    {
        Icon: ShieldCheck,
        title: 'principlePrivacy',
        description: 'principlePrivacyDesc'
    },
    {
        Icon: Globe,
        title: 'principleCulture',
        description: 'principleCultureDesc'
    },
    {
        Icon: HeartHandshake,
        title: 'principleAccessibility',
        description: 'principleAccessibilityDesc'
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

      {/* Global AI Synthesis Section */}
      <section id="synthesis" className="py-20 lg:py-24 bg-muted/30 overflow-hidden">
          <div className="container mx-auto px-4 text-center">
              <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={itemVariants}
                  className="max-w-3xl mx-auto"
              >
                  <Sigma className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
                      {t('synthesisTitle')}
                  </h2>
                  <p className="text-lg text-foreground/70">
                      {t('synthesisSubtitle')}
                  </p>
              </motion.div>
          </div>
      </section>

      {/* Hub Excellency Section */}
        <section id="hub-excellency" className="py-20 lg:py-24 bg-background overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={itemVariants}
                    className="text-center max-w-3xl mx-auto">
                    <Rocket className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
                        {t('hubExcellencyTitle')}
                    </h2>
                    <p className="text-lg text-foreground/70 mb-12">
                        {t('hubExcellencySubtitle')}
                    </p>
                </motion.div>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    {hubExcellency.map((tech) => (
                        <motion.div
                            key={tech.title}
                            variants={itemVariants}
                            className="bg-background p-6 rounded-lg border shadow-sm"
                        >
                            <tech.Icon className="w-10 h-10 text-primary mb-4 mx-auto" />
                            <h3 className="text-xl font-headline font-semibold mb-2">{t(tech.title)}</h3>
                            <p className="text-foreground/80 font-body">{t(tech.description)}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>

      {/* Features Section */}
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
              {t('featuresTitle')}
            </h2>
            <p className="text-lg text-foreground/70 mb-12">
              {t('featuresSubtitle')}
            </p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {featureIcons.map((feature) => (
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
      
      {/* How to Use Section */}
      <section id="how-to-use" className="py-20 lg:py-24 bg-background overflow-hidden">
         <div className="container mx-auto px-4">
             <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={itemVariants}
                className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
                {t('howToUseTitle')}
                </h2>
                <p className="text-lg text-foreground/70 mb-12">
                {t('howToUseSubtitle')}
                </p>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
                 {howToSteps.map((step, index) => (
                     <motion.div 
                        key={step.title}
                        variants={itemVariants}
                        className="flex flex-col items-center"
                     >
                        <div className="flex items-center justify-center bg-primary/10 text-primary rounded-full size-16 mb-4">
                            <step.Icon className="size-8" />
                        </div>
                         <h3 className="text-xl font-headline font-semibold mb-2">{t(step.title)}</h3>
                         <p className="text-foreground/80 font-body max-w-xs">{t(step.description)}</p>
                     </motion.div>
                 ))}
            </motion.div>
         </div>
      </section>
      
       {/* Tech Stack Section */}
        <section id="tech-stack" className="py-20 lg:py-24 bg-muted/30 overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={itemVariants}
                    className="text-center max-w-3xl mx-auto">
                    <Server className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
                        {t('techTitle')}
                    </h2>
                    <p className="text-lg text-foreground/70 mb-12">
                        {t('techSubtitle')}
                    </p>
                </motion.div>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    {techStack.map((tech) => (
                        <motion.div
                            key={tech.title}
                            variants={itemVariants}
                            className="bg-background p-6 rounded-lg border shadow-sm"
                        >
                            <tech.Icon className="w-10 h-10 text-primary mb-4 mx-auto" />
                            <h3 className="text-xl font-headline font-semibold mb-2">{t(tech.title)}</h3>
                            <p className="text-foreground/80 font-body">{t(tech.description)}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
        
        {/* Principles Section */}
        <section id="principles" className="py-20 lg:py-24 bg-background overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={itemVariants}
                    className="text-center max-w-3xl mx-auto">
                    <Lightbulb className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
                        {t('principlesTitle')}
                    </h2>
                    <p className="text-lg text-foreground/70 mb-12">
                        {t('principlesSubtitle')}
                    </p>
                </motion.div>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    {principles.map((principle) => (
                        <motion.div
                            key={principle.title}
                            variants={itemVariants}
                            className="bg-background p-6 rounded-lg"
                        >
                            <principle.Icon className="w-10 h-10 text-primary mb-4" />
                            <h3 className="text-xl font-headline font-semibold mb-2">{t(principle.title)}</h3>
                            <p className="text-foreground/80 font-body">{t(principle.description)}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>

      {/* Founder Message Section */}
       <section id="founder" className="py-20 lg:py-24 bg-muted/30 overflow-hidden">
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
       
       {/* Community Section */}
        <section id="community" className="py-20 lg:py-24 bg-background overflow-hidden">
            <div className="container mx-auto px-4 text-center">
                 <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={itemVariants}
                >
                    <HeartHandshake className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
                        {t('communityTitle')}
                    </h2>
                    <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                        {t('communitySubtitle')}
                    </p>
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

    