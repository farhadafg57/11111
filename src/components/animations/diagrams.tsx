
'use client';
import { motion } from 'framer-motion';
import { Bot, Package, MousePointerClick } from 'lucide-react';
import React from 'react';

const DiagramBase = ({ children }: { children: React.ReactNode }) => (
    <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0" preserveAspectRatio="xMidYMid meet">
        {children}
    </svg>
);

const MemoizedDiagram1 = () => (
    <DiagramBase>
        <motion.g
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
            }}
        >
            <motion.foreignObject x="38" y="38" width="24" height="24"
                variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 20 } } }}>
                <MousePointerClick className="w-full h-full text-primary" />
            </motion.foreignObject>
            {[...Array(6)].map((_, i) => (
                <motion.circle
                    key={i}
                    cx="50"
                    cy="50"
                    r="8"
                    stroke="hsl(var(--primary))"
                    strokeWidth="1"
                    fill="none"
                    variants={{
                        hidden: { scale: 0, opacity: 0 },
                        visible: {
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0, 0],
                            transition: {
                                repeat: Infinity,
                                repeatType: 'loop',
                                duration: 2,
                                delay: i * 0.3,
                                ease: 'easeInOut',
                            },
                        },
                    }}
                />
            ))}
        </motion.g>
    </DiagramBase>
);

const MemoizedDiagram2 = () => (
     <DiagramBase>
        <motion.g
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
        >
            <motion.foreignObject x="38" y="38" width="24" height="24"
                variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1 }}}>
                <Bot className="w-full h-full text-primary" />
            </motion.foreignObject>
             <motion.path d="M 50 40 L 50 20" stroke="hsl(var(--primary) / 0.5)" strokeWidth="1" variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }} />
             <motion.path d="M 60 50 L 80 50" stroke="hsl(var(--primary) / 0.5)" strokeWidth="1" variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }} />
             <motion.path d="M 50 60 L 50 80" stroke="hsl(var(--primary) / 0.5)" strokeWidth="1" variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }} />
             <motion.path d="M 40 50 L 20 50" stroke="hsl(var(--primary) / 0.5)" strokeWidth="1" variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }} />
        </motion.g>
    </DiagramBase>
);

const MemoizedDiagram3 = () => (
     <DiagramBase>
        <motion.g
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
            }}
        >
            <motion.foreignObject x="38" y="38" width="24" height="24"
                variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { delay: 0.5 } }}}>
                <Package className="w-full h-full text-primary" />
            </motion.foreignObject>
            <motion.g
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { delay: 0.8 } }
                }}
            >
                <motion.rect x="35" y="35" width="30" height="30" rx="5"
                    stroke="hsl(var(--primary))"
                    strokeWidth="1"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                />
            </motion.g>
        </motion.g>
    </DiagramBase>
);

export const HowItWorksDiagram1 = React.memo(MemoizedDiagram1);
export const HowItWorksDiagram2 = React.memo(MemoizedDiagram2);
export const HowItWorksDiagram3 = React.memo(MemoizedDiagram3);

    