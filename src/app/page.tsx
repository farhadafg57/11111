import AppHeader from '@/components/layout/header';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import HeroAnimation from '@/components/animations/hero-animation';

export default function LandingPage() {
  return (
    <div className="flex flex-col h-screen bg-background">
      <AppHeader />
      <main className="flex-1 relative flex items-center justify-center text-center">
        <HeroAnimation />
        <div className="z-10">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-4 text-foreground animate-fade-in-down">
            AfghanAI Hub
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-muted-foreground animate-fade-in-up">
            A sovereign AI ecosystem, fine-tuned from a synthesis of Anthropic,
            OpenAI, and Gemini models. An entire digital civilization, at your
            command.
          </p>
          <Link href="/hub" passHref>
            <Button size="lg" className="group text-lg h-14 px-10 animate-scale-in">
              Enter the Hub
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
