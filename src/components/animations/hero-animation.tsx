'use client';
import { motion, useTransform, useScroll } from 'framer-motion';
import React, { useRef, useMemo, useEffect, useState } from 'react';
import { agents } from '@/lib/agents';

const useWindowSize = () => {
    const [size, setSize] = useState([0, 0]);
    useEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
};

const InteractiveHeroClient = () => {
  const [width, height] = useWindowSize();
  const numNodes = width > 768 ? 40 : 20;

  const nodes = useMemo(() => {
    if (width === 0) return []; // Ensure we don't generate nodes until we have a width
    return Array.from({ length: numNodes }).map((_, i) => ({
      id: i,
      x: Math.random() * width,
      y: Math.random() * height * 1.2,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.3 + 0.1,
    }));
  }, [numNodes, width, height]);
  
  const orbitingAgents = useMemo(() => {
      if (width === 0) return [];
      const coreAgents = agents.filter(a => a.Icon && !['Oracle', 'Plant Diagnoser', 'Video Generator'].includes(a.name)).slice(0, 10);
      return coreAgents.map((agent, i) => {
        const angle = (i / coreAgents.length) * 2 * Math.PI;
        const radius = Math.min(width * 0.35, 250);
        return {
          ...agent,
          angle,
          radius,
          size: width > 768 ? 32 : 24,
        };
      });
  }, [width]);


  return (
    <div className="absolute inset-0 z-0">
      <svg className="absolute inset-0">
        <g>
          {nodes.map((node, i) => (
            <React.Fragment key={`frag-${i}`}>
              {nodes.slice(i + 1).map((otherNode) => {
                const distance = Math.hypot(node.x - otherNode.x, node.y - otherNode.y);
                if (distance < 200) {
                  return (
                    <motion.line
                      key={`${node.id}-${otherNode.id}`}
                      x1={node.x}
                      y1={node.y}
                      x2={otherNode.x}
                      y2={otherNode.y}
                      className="stroke-primary/20"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 - distance / 200 }}
                      transition={{ duration: 1 }}
                    />
                  );
                }
                return null;
              })}
            </React.Fragment>
          ))}
        </g>
      </svg>
      {nodes.map(node => (
        <motion.circle
          key={node.id}
          cx={node.x}
          cy={node.y}
          r={node.size}
          className="fill-primary/80"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: node.opacity, scale: 1 }}
          transition={{ duration: 1.5, delay: Math.random() * 1 }}
        />
      ))}
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
