import { cn } from "@/lib/utils";
import React from "react";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-10 h-10", className)}
    >
      <defs>
        <radialGradient id="logo-gradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </radialGradient>
        <filter id="logo-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
            <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
      </defs>
      
      {/* Outer Glow */}
      <circle cx="50" cy="50" r="40" fill="url(#logo-gradient)" opacity="0.5" />

      {/* Main Structure - Crystalline Brain */}
      <path
        d="M 50,10
           C 25,10 10,25 10,50
           C 10,75 25,90 50,90
           C 75,90 90,75 90,50
           C 90,25 75,10 50,10 Z
           M 50,20
           C 69.33,20 80,30.67 80,50
           C 80,69.33 69.33,80 50,80
           C 30.67,80 20,69.33 20,50
           C 20,30.67 30.67,20 50,20 Z"
        fill="none"
        stroke="hsl(var(--primary) / 0.2)"
        strokeWidth="2"
      />

      {/* Neural Connections */}
      <g stroke="hsl(var(--primary) / 0.6)" strokeWidth="1.5" filter="url(#logo-glow)">
        <path d="M 50,20 Q 40,35 50,50" fill="none" />
        <path d="M 50,20 Q 60,35 50,50" fill="none" />
        <path d="M 28,28 Q 40,40 50,50" fill="none" />
        <path d="M 72,28 Q 60,40 50,50" fill="none" />
        <path d="M 20,50 C 35,55 35,45 50,50" fill="none" />
        <path d="M 80,50 C 65,55 65,45 50,50" fill="none" />
        <path d="M 28,72 Q 40,60 50,50" fill="none" />
        <path d="M 72,72 Q 60,60 50,50" fill="none" />
        <path d="M 50,80 Q 40,65 50,50" fill="none" />
        <path d="M 50,80 Q 60,65 50,50" fill="none" />
      </g>
      
      {/* Central Node */}
       <circle cx="50" cy="50" r="5" fill="hsl(var(--primary))" stroke="hsl(var(--background))" strokeWidth="1.5"/>
    </svg>
  );
};
