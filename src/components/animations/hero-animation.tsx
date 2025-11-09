
'use client';
import { motion } from 'framer-motion';
import React, { useMemo, useEffect, useState } from 'react';

const useWindowSize = () => {
    const [size, setSize] = useState([0, 0]);
    useEffect(() => {
      function updateSize() {
        if (typeof window !== 'undefined') {
            setSize([window.innerWidth, window.innerHeight]);
        }
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
};

const InteractiveHeroClient = () => {
  const [width] = useWindowSize();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Render a placeholder or nothing during SSR and initial client render
  if (!isClient) {
    return <div className="absolute inset-0 z-0" />;
  }

  return (
    <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-primary/10 [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_80%)]"></div>
    </div>
  );
};

export default function HeroAnimation() {
    return <InteractiveHeroClient />;
}
