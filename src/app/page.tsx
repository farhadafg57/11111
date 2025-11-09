
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AppHeader from '@/components/layout/header';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  Lightbulb,
  CheckCircle2,
  Package,
  BrainCircuit,
  Languages as LanguageIcon,
  Search,
  Database,
  ShieldCheck,
  Eye,
  Cpu,
  Combine,
  GitBranch,
  Layers,
  Container,
  Goal,
  Wand2,
  Users,
  BadgeDollarSign,
  Recycle,
  Sparkles,
  Blocks,
  Settings,
  AppWindow,
  Twitter,
  Linkedin,
  Github,
  MessageCircle as WhatsappIcon,
} from 'lucide-react';
import { useLanguage } from '@/lib/language';
import placeholderData from '@/lib/placeholder-images.json';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import HeroAnimation from '@/components/animations/hero-animation';
import React from 'react';
import Image from 'next/image';
import { HowItWorksDiagram1, HowItWorksDiagram2, HowItWorksDiagram3 } from '@/components/animations/diagrams';

const howItWorksSteps = [
    {
        Diagram: HowItWorksDiagram1,
        title: 'howItWorks1Title',
        description: 'howItWorks1Desc'
    },
    {
        Diagram: HowItWorksDiagram2,
        title: 'howItWorks2Title',
        description: 'howItWorks2Desc'
    },
    {
        Diagram: HowItWorksDiagram3,
        title: 'howItWorks3Title',
        description: 'howItWorks3Desc'
    }
];

const richFeatures = [
    {
        Icon: Cpu,
        title: 'featureCognitiveCoreTitle',
        description: 'featureCognitiveCoreDesc',
    },
    {
        Icon: Eye,
        title: 'featureSensoryIntelTitle',
        description: 'featureSensoryIntelDesc',
    },
    {
        Icon: Combine,
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
    },
];

const agenticCoreFeatures = [
    {
        Icon: Goal,
        title: 'agenticGoalTitle',
        description: 'agenticGoalDesc',
    },
    {
        Icon: Wand2,
        title: 'agenticToolTitle',
        description: 'agenticToolDesc',
    },
    {
        Icon: Users,
        title: 'agenticCollaborationTitle',
        description: 'agenticCollaborationDesc',
    },
    {
        Icon: GitBranch,
        title: 'agenticLearningTitle',
        description: 'agenticLearningDesc',
    },
];

const modularityFeatures = [
    {
        Icon: Layers,
        title: 'modularityAgentsTitle',
        description: 'modularityAgentsDesc',
    },
    {
        Icon: Combine,
        title: 'modularityIntegrationTitle',
        description: 'modularityIntegrationDesc',
    },
    {
        Icon: Settings,
        title: 'modularityManagementTitle',
        description: 'modularityManagementDesc',
    },
    {
        Icon: AppWindow,
        title: 'modularityCustomizationTitle',
        description: 'modularityCustomizationDesc',
    },
];

const costFeatures = [
    {
        Icon: Sparkles,
        title: 'costAllocationTitle',
        description: 'costAllocationDesc',
    },
    {
        Icon: Container,
        title: 'costCachingTitle',
        description: 'costCachingDesc',
    },
    {
        Icon: Blocks,
        title: 'costModelTitle',
        description: 'costModelDesc',
    },
    {
        Icon: Recycle,
        title: 'costToolUsageTitle',
        description: 'costToolUsageDesc',
    },
];


const pricingTiers = [
    {
        name: 'Free',
        price: '$0',
        period: 'per month',
        description: 'For individuals and hobbyists starting their journey with AI.',
        features: [
            'Access to 10+ core agents',
            'Limited daily commands',
            'Community support',
            'Anonymous access'
        ],
        cta: 'Start for Free',
        href: '/hub'
    },
    {
        name: 'Pro',
        price: '$20',
        period: 'per month',
        description: 'For professionals and teams requiring advanced capabilities.',
        features: [
            'Access to all 120+ agents',
            'Unlimited commands',
            'Priority support',
            'Persistent memory & project history',
            'Advanced analytics'
        ],
        cta: 'Get Started with Pro',
        href: '/login',
        featured: true
    }
]


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
  const visionImage = placeholderData.images.find(img => img.id === 'vision-landing');


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
      <AppHeader showSidebarTrigger={false} />

      {/* Hero Section */}
      <section className="relative text-center h-[90svh] py-20 lg:py-32 bg-background overflow-hidden">
        <div className="absolute inset-0">
            <HeroAnimation />
        </div>
        <motion.div 
            className="relative container mx-auto px-4 z-10 flex flex-col items-center justify-center h-full"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-headline font-bold tracking-tight mb-6"
          >
            {t('heroTitle')}
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-10"
          >
            {t('heroSubtitle')}
          </motion.p>
          <motion.div
             variants={itemVariants}
             className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/hub" passHref>
              <Button size="lg" className="group text-lg h-14 px-10 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow duration-300 w-full sm:w-auto">
                {t('getStartedFree')}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
             <Link href="/login" passHref>
                <Button size="lg" variant="outline" className="text-lg h-14 px-10 w-full sm:w-auto">
                    {t('login')}
                </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
      
       {/* How It Works Section */}
        <section id="how-it-works" className="py-20 lg:py-24 bg-muted/30 overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={itemVariants}
                    className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold mb-12">
                        {t('howItWorksTitle')}
                    </h2>
                </motion.div>
                 <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    {howItWorksSteps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            variants={itemVariants}
                            className="relative flex flex-col items-center text-center"
                        >
                            <div className="relative h-40 w-full mb-6 flex items-center justify-center">
                                <step.Diagram />
                            </div>
                            <h3 className="text-xl font-headline font-semibold mb-2">
                                {t(step.title)}
                            </h3>
                            <p className="text-foreground/80 font-body">
                                {t(step.description)}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>

        {/* Rich Features Section */}
        <section id="features" className="py-20 lg:py-24 bg-background">
            <div className="container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={itemVariants}
                    className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">{t('richFeaturesTitle')}</h2>
                </motion.div>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={containerVariants}
                >
                    {richFeatures.map(feature => (
                        <motion.div key={feature.title} variants={itemVariants} className="bg-card p-6 rounded-lg border border-border">
                            <feature.Icon className="w-10 h-10 text-primary mb-4" />
                            <h3 className="text-xl font-headline font-semibold mb-2">{t(feature.title)}</h3>
                            <p className="text-foreground/70">{t(feature.description)}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>

        {/* Agentic Core Section */}
        <section id="agentic-core" className="py-20 lg:py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                 <motion.div
                    className="grid md:grid-cols-2 gap-12 items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants}>
                        <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">{t('agenticCoreTitle')}</h2>
                        <p className="text-lg text-foreground/70 mb-6">{t('agenticCoreDesc')}</p>
                        <div className="space-y-4">
                           {agenticCoreFeatures.map(feature => (
                                <div key={feature.title} className="flex items-start gap-4">
                                    <div className="bg-background rounded-full p-2 border border-primary/20 mt-1">
                                        <feature.Icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg">{t(feature.title)}</h4>
                                        <p className="text-foreground/70">{t(feature.description)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div variants={itemVariants} className="relative aspect-square">
                        <BrainCircuit className="w-full h-full text-primary/10" />
                    </motion.div>
                </motion.div>
            </div>
        </section>

         {/* Vision Section */}
        <section id="vision" className="py-20 lg:py-24 bg-background">
            <div className="container mx-auto px-4">
                <motion.div
                    className="grid md:grid-cols-2 gap-12 items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants}>
                        <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">{t('visionTitle')}</h2>
                        <p className="text-lg text-foreground/70 mb-6">{t('visionSubtitle')}</p>
                        <blockquote className="border-l-4 border-primary pl-4 italic text-xl text-foreground/90 my-6">
                            {t('visionQuote')}
                        </blockquote>
                        <Link href="/vision" passHref>
                          <Button size="lg" variant="outline" className="group text-lg">
                            {t('visionButton')}
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                          </Button>
                        </Link>
                    </motion.div>
                    <motion.div variants={itemVariants} className="relative aspect-square">
                        {visionImage && (
                            <Image
                                src={visionImage.src}
                                alt="Vision"
                                fill
                                className="object-cover rounded-2xl shadow-glow-primary"
                                data-ai-hint={visionImage.hint}
                            />
                        )}
                    </motion.div>
                </motion.div>
            </div>
        </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 lg:py-24 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
              {t('pricingTitle')}
            </h2>
            <p className="text-lg text-foreground/70 mb-12">
                {t('pricingSubtitle')}
            </p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {pricingTiers.map((tier) => (
              <motion.div
                key={tier.name}
                variants={itemVariants}
                className={`bg-card p-8 rounded-2xl border flex flex-col ${tier.featured ? 'border-primary shadow-glow-primary' : 'border-border'}`}
              >
                <h3 className="text-2xl font-headline font-semibold mb-2">
                  {tier.name}
                </h3>
                <p className="text-foreground/70 mb-6">{tier.description}</p>
                <div className="mb-6">
                    <span className="text-5xl font-bold">{tier.price}</span>
                    <span className="text-foreground/70 ml-2">{tier.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                    {tier.features.map(feature => (
                        <li key={feature} className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
                <div className="mt-auto">
                    <Button asChild size="lg" className={`w-full text-lg ${!tier.featured && 'bg-secondary hover:bg-secondary/80'}`}>
                        <Link href={tier.href}>{tier.cta}</Link>
                    </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

        {/* Modularity Section */}
        <section id="modularity" className="py-20 lg:py-24 bg-background">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={itemVariants}
                    className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">{t('modularityTitle')}</h2>
                    <p className="text-lg text-foreground/70 mb-12">{t('modularityDesc')}</p>
                </motion.div>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={containerVariants}
                >
                    {modularityFeatures.map(feature => (
                        <motion.div key={feature.title} variants={itemVariants} className="text-center">
                            <div className="inline-block bg-card p-4 rounded-full border border-primary/20 mb-4">
                               <feature.Icon className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-headline font-semibold mb-2">{t(feature.title)}</h3>
                            <p className="text-foreground/70">{t(feature.description)}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>

        {/* Cost Section */}
        <section id="cost" className="py-20 lg:py-24 bg-muted/30">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={itemVariants}
                    className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">{t('costTitle')}</h2>
                    <p className="text-lg text-foreground/70 mb-12">{t('costDesc')}</p>
                </motion.div>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={containerVariants}
                >
                    {costFeatures.map(feature => (
                        <motion.div key={feature.title} variants={itemVariants} className="text-center">
                             <div className="inline-block bg-card p-4 rounded-full border border-primary/20 mb-4">
                               <feature.Icon className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-headline font-semibold mb-2">{t(feature.title)}</h3>
                            <p className="text-foreground/70">{t(feature.description)}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 lg:py-24 bg-background overflow-hidden">
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
                <Link href="#how-it-works" className="hover:text-primary transition-colors pointer-events-auto">{t('theTechnology')}</Link>
                <Link href="/about" className="hover:text-primary transition-colors pointer-events-auto">{t('theHeritage')}</Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* WhatsApp Floating Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5, ease: "easeOut" }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button asChild size="icon" className="rounded-full h-14 w-14 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-shadow duration-300">
            <a href="https://wa.me/93778893772" target="_blank" rel="noopener noreferrer" aria-label="Contact on WhatsApp">
                <WhatsappIcon className="h-7 w-7" />
            </a>
        </Button>
      </motion.div>

      {/* Footer */}
        <footer className="bg-muted/30 border-t border-border/50 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-headline font-semibold mb-4">{t('footerAboutTitle')}</h3>
                        <p className="text-foreground/70 text-sm">{t('footerAboutText')}</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-headline font-semibold mb-4">{t('footerExploreTitle')}</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#features" className="text-foreground/70 hover:text-primary transition-colors">{t('features')}</Link></li>
                            <li><Link href="#pricing" className="text-foreground/70 hover:text-primary transition-colors">{t('pricing')}</Link></li>
                            <li><Link href="/vision" className="text-foreground/70 hover:text-primary transition-colors">{t('theVision')}</Link></li>
                            <li><Link href="/about" className="text-foreground/70 hover:text-primary transition-colors">{t('theHeritage')}</Link></li>
                        </ul>
                    </div>
                     <div>
                        <h3 className="text-lg font-headline font-semibold mb-4">{t('footerLegalTitle')}</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">{t('footerPrivacy')}</a></li>
                            <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">{t('footerTerms')}</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-headline font-semibold mb-4">{t('footerConnectTitle')}</h3>
                        <div className="flex gap-4">
                            <a href="#" aria-label="Twitter" className="text-foreground/70 hover:text-primary transition-colors"><Twitter /></a>
                            <a href="#" aria-label="LinkedIn" className="text-foreground/70 hover:text-primary transition-colors"><Linkedin /></a>
                            <a href="#" aria-label="GitHub" className="text-foreground/70 hover:text-primary transition-colors"><Github /></a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-border/50 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-foreground/60">
                    <p>&copy; {new Date().getFullYear()} AfghanAI. {t('footerRights')}</p>
                    <p className="mt-4 sm:mt-0">{t('footerWhatsapp')}: <a href="https://wa.me/93778893772" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">+93 77 889 3772</a></p>
                </div>
            </div>
        </footer>
    </div>
  );
}

    