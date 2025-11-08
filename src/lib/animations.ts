/**
 * Premium Animation Utilities and Helpers
 * Framer Motion animation functions and effects
 */

import { Variants, TargetAndTransition } from 'framer-motion';

/**
 * Stagger animation for lists
 */
export const createStaggerVariants = (
  itemDelay = 0.1,
  containerDelay = 0.1
): {
  container: Variants;
  item: Variants;
} => ({
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: itemDelay,
        delayChildren: containerDelay,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  },
});

/**
 * Scroll-triggered animation
 */
export const scrollVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 50,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

/**
 * Page transition variants
 */
export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
};

/**
 * Modal animation variants
 */
export const modalVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: {
      duration: 0.2,
    },
  },
};

/**
 * Tab animation variants
 */
export const tabVariants: Variants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

/**
 * Card hover effect variants
 */
export const cardHoverVariants: Variants = {
  rest: {
    scale: 1,
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12)',
  },
  hover: {
    scale: 1.02,
    boxShadow: '0 10px 20px rgba(0, 102, 255, 0.15)',
  },
};

/**
 * Button animation variants
 */
export const buttonVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

/**
 * Input focus animation
 */
export const inputFocusVariants: Variants = {
  rest: {
    borderColor: 'rgba(255, 255, 255, 0.1)',
    boxShadow: '0 0 0 0 rgba(0, 102, 255, 0)',
  },
  focus: {
    borderColor: 'rgba(0, 102, 255, 0.5)',
    boxShadow: '0 0 0 3px rgba(0, 102, 255, 0.1)',
  },
};

/**
 * Loading skeleton variants
 */
export const skeletonVariants: Variants = {
  animate: {
    backgroundPosition: ['200% 0', '-200% 0'],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

/**
 * Tooltip animation variants
 */
export const tooltipVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: -5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
};

/**
 * Alert/Toast animation variants
 */
export const toastVariants: Variants = {
  initial: {
    opacity: 0,
    x: 400,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    x: 400,
    transition: {
      duration: 0.2,
    },
  },
};

/**
 * Dropdown menu animation
 */
export const dropdownVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -10,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: {
      duration: 0.15,
    },
  },
};

/**
 * Sidebar animation
 */
export const sidebarVariants: Variants = {
  hidden: {
    x: -300,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  exit: {
    x: -300,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

/**
 * Floating action button animation
 */
export const fabVariants: Variants = {
  hidden: {
    scale: 0,
    rotate: -180,
  },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
    },
  },
};

/**
 * Hero animation (combined effects)
 */
export const heroVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
};

/**
 * Text reveal animation
 */
export const textRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

/**
 * Container for text reveal
 */
export const textRevealContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

/**
 * Number counter animation target
 */
export const createCounterAnimation = (
  targetValue: number
): { transition: Record<string, unknown> } => ({
  transition: {
    duration: 2,
    ease: 'easeOut',
  },
});

/**
 * Combined hover and tap animations
 */
export const createInteractiveVariants = (
  hoverScale = 1.05,
  tapScale = 0.95
): Variants => ({
  rest: {
    scale: 1,
  },
  hover: {
    scale: hoverScale,
  },
  tap: {
    scale: tapScale,
  },
});

/**
 * Gradient shift animation
 */
export const gradientShiftVariants: Variants = {
  animate: {
    backgroundPosition: ['0% 0%', '100% 100%'],
    transition: {
      duration: 8,
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
};

/**
 * Pulse glow animation
 */
export const pulseGlowVariants: Variants = {
  animate: {
    boxShadow: [
      '0 0 20px rgba(0, 102, 255, 0.3)',
      '0 0 40px rgba(0, 102, 255, 0.6)',
      '0 0 20px rgba(0, 102, 255, 0.3)',
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

/**
 * Rotate animation
 */
export const rotateVariants: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

/**
 * Float animation (up and down)
 */
export const floatVariants: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

/**
 * Bounce animation
 */
export const bounceVariants: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

/**
 * Shimmer animation for loading states
 */
export const shimmerVariants: Variants = {
  animate: {
    backgroundPosition: ['200% 0', '-200% 0'],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

export default {
  createStaggerVariants,
  scrollVariants,
  pageVariants,
  modalVariants,
  tabVariants,
  cardHoverVariants,
  buttonVariants,
  inputFocusVariants,
  skeletonVariants,
  tooltipVariants,
  toastVariants,
  dropdownVariants,
  sidebarVariants,
  fabVariants,
  heroVariants,
  textRevealVariants,
  textRevealContainer,
  createCounterAnimation,
  createInteractiveVariants,
  gradientShiftVariants,
  pulseGlowVariants,
  rotateVariants,
  floatVariants,
  bounceVariants,
  shimmerVariants,
};
