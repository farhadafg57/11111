'use client';
import { motion } from 'framer-motion';
import React from 'react';

const shapes = Array.from({ length: 50 });
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function ChaosComponent() {
  return (
    <div className="relative w-full h-full">
      {shapes.map((_, i) => {
        const isShape = Math.random() > 0.3;
        const size = Math.random() * 30 + 5;
        const duration = Math.random() * 5 + 3;

        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: isShape ? size : 'auto',
              height: size,
              borderRadius: isShape ? (Math.random() > 0.5 ? '50%' : '2px') : 0,
              backgroundColor: isShape ? 'hsl(var(--primary))' : 'transparent',
              color: isShape ? 'transparent' : 'hsl(var(--foreground))',
              opacity: Math.random() * 0.5 + 0.2,
              fontSize: `${size * 0.8}px`
            }}
            animate={{
              x: [
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
              ],
              y: [
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
              ],
              rotate: [
                Math.random() * 360,
                Math.random() * 360,
                Math.random() * 360,
              ],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {!isShape && letters[Math.floor(Math.random() * letters.length)]}
          </motion.div>
        );
      })}
    </div>
  );
}
