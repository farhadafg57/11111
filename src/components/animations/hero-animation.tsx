
'use client';
import { motion } from 'framer-motion';
import React, { useMemo, useEffect, useState } from 'react';
import { agents } from '@/lib/agents';
import type { LucideIcon } from 'lucide-react';
import { GanttChartSquare, BotMessageSquare, Repeat, Flag, Gamepad, Feather, Brush, Footprints, ChefHat, Scissors, Medal, FilePen, Zap, Mountain, Utensils, ThumbsUp } from 'lucide-react';


const useWindowSize = () => {
    const [size, setSize] = useState([0, 0]);
    useEffect(() => {
      if (typeof window === 'undefined') return;
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
};

// A simple hash function to get a deterministic but unique-looking value
const simpleHash = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0; // Convert to 32bit integer
    }
    return Math.abs(hash);
};


const InteractiveHeroClient = () => {
  const [width] = useWindowSize();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const orbitingAgents = useMemo(() => {
      if (!isClient) return [];
      
      // Add a few more interesting and visually distinct icons to the exclusion list if needed
      const excludedIcons: LucideIcon[] = [GanttChartSquare, BotMessageSquare, Repeat, Flag, Gamepad, Feather, Brush, Footprints, ChefHat, Scissors, Medal, FilePen, Zap, Mountain, Utensils, ThumbsUp];
      
      const coreAgents = agents
        .filter(a => a.Icon && !excludedIcons.includes(a.Icon))
        .sort((a, b) => simpleHash(a.slug) - simpleHash(b.slug)) // Deterministic shuffle
        .slice(0, 10);

      return coreAgents.map((agent, i) => {
        const angle = (i / coreAgents.length) * 2 * Math.PI;
        const radius = width > 768 ? Math.min(width * 0.35, 300) : Math.min(width * 0.4, 150);
        return {
          ...agent,
          angle,
          radius,
          size: width > 768 ? 40 : 32,
        };
      });
  }, [width, isClient]);

  if (!isClient) {
    return <div className="absolute inset-0 z-0" />;
  }

  return (
    <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-primary/10 [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_80%)]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ transformStyle: 'preserve-3d' }}>
         {orbitingAgents.map((agent, i) => {
             const x = agent.radius * Math.cos(agent.angle);
             const y = agent.radius * Math.sin(agent.angle);
             return (
                <motion.div
                    key={agent.slug}
                    className="absolute top-1/2 left-1/2 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-full border border-primary/20 shadow-lg"
                    style={{
                        width: agent.size,
                        height: agent.size,
                        x: '-50%',
                        y: '-50%',
                    }}
                    initial={{ transform: `translate3d(${x}px, ${y}px, 0px) scale(0)`, opacity: 0}}
                    animate={{ transform: `translate3d(${x}px, ${y}px, 0px) scale(1)`, opacity: 1}}
                    transition={{
                        delay: 1 + i * 0.1,
                        duration: 0.5,
                        ease: 'easeOut'
                    }}
                >
                    <agent.Icon className="text-primary" style={{ width: agent.size * 0.5, height: agent.size * 0.5 }} />
                </motion.div>
             )
         })}
      </div>
    </div>
  );
};


export default function HeroAnimation() {
    return <InteractiveHeroClient />;
}
