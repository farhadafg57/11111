'use client';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

type ShapeInfo = {
  isShape: boolean;
  size: number;
  duration: number;
  isCircle: boolean;
  opacity: number;
  animateX: string[];
  animateY: string[];
  animateRotate: number[];
  char: string;
};

export function ChaosComponent() {
  const [shapes, setShapes] = useState<ShapeInfo[] | null>(null);

  useEffect(() => {
    // Generate shapes only on the client-side to avoid hydration mismatch
    const generatedShapes = Array.from({ length: 50 }).map(() => ({
      isShape: Math.random() > 0.3,
      size: Math.random() * 30 + 5,
      duration: Math.random() * 5 + 3,
      isCircle: Math.random() > 0.5,
      opacity: Math.random() * 0.5 + 0.2,
      animateX: [
        `${Math.random() * 100}%`,
        `${Math.random() * 100}%`,
        `${Math.random() * 100}%`,
      ],
      animateY: [
        `${Math.random() * 100}%`,
        `${Math.random() * 100}%`,
        `${Math.random() * 100}%`,
      ],
      animateRotate: [
        Math.random() * 360,
        Math.random() * 360,
        Math.random() * 360,
      ],
      char: letters[Math.floor(Math.random() * letters.length)],
    }));
    setShapes(generatedShapes);
  }, []); // Empty dependency array ensures this runs once on mount

  // Render nothing on the server and during the initial client render
  if (!shapes) {
    return <div className="relative w-full h-full" />;
  }

  return (
    <div className="relative w-full h-full">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: shape.isShape ? shape.size : 'auto',
            height: shape.size,
            borderRadius: shape.isShape ? (shape.isCircle ? '50%' : '2px') : 0,
            backgroundColor: shape.isShape ? 'hsl(var(--primary))' : 'transparent',
            color: shape.isShape ? 'transparent' : 'hsl(var(--foreground))',
            opacity: shape.opacity,
            fontSize: `${shape.size * 0.8}px`,
          }}
          animate={{
            x: shape.animateX,
            y: shape.animateY,
            rotate: shape.animateRotate,
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {!shape.isShape && shape.char}
        </motion.div>
      ))}
    </div>
  );
}
