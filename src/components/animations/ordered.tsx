'use client';
import { motion } from 'framer-motion';
import React from 'react';

const gridItems = Array.from({ length: 144 }); // 12x12 grid

export function OrderedMosaic() {
  return (
    <div className="grid grid-cols-12 grid-rows-12 w-full h-full gap-1 p-4">
      {gridItems.map((_, i) => (
        <motion.div
          key={i}
          className="w-full h-full rounded-sm"
          style={{
            backgroundColor: 'hsl(var(--primary))',
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: Math.random() * 0.3 + 0.1,
            scale: 1,
          }}
          transition={{
            delay: Math.random() * 1.5,
            duration: 0.5,
          }}
        />
      ))}
    </div>
  );
}
