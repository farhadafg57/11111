/**
 * Premium Modern Theme System
 * High-end design tokens, colors, and animation configurations
 */

export const themeConfig = {
  // Color Palette
  colors: {
    // Primary: Electric Blue
    primary: {
      50: 'hsl(219 90% 95%)',
      100: 'hsl(219 90% 90%)',
      200: 'hsl(219 90% 80%)',
      300: 'hsl(219 90% 70%)',
      400: 'hsl(219 90% 60%)',
      500: 'hsl(219 90% 50%)',
      600: 'hsl(219 90% 40%)',
      700: 'hsl(219 90% 30%)',
      800: 'hsl(219 90% 20%)',
      900: 'hsl(219 90% 15%)',
    },
    // Secondary: Neon Cyan
    secondary: {
      50: 'hsl(180 100% 95%)',
      500: 'hsl(180 100% 50%)',
      700: 'hsl(180 100% 30%)',
    },
    // Backgrounds
    background: {
      dark: 'hsl(222 50% 5%)',
      light: 'hsl(222 50% 10%)',
      lighter: 'hsl(222 50% 15%)',
    },
    // Foreground
    foreground: 'hsl(0 0% 98%)',
    // Status Colors
    success: 'hsl(120 80% 50%)',
    warning: 'hsl(45 95% 55%)',
    error: 'hsl(0 85% 55%)',
    info: 'hsl(180 100% 50%)',
  },

  // Gradients
  gradients: {
    primary: 'linear-gradient(to bottom right, hsl(219 90% 50%), hsl(260 80% 50%))',
    secondary: 'linear-gradient(to bottom right, hsl(180 100% 50%), hsl(219 90% 50%))',
    accent: 'linear-gradient(to right, hsl(280 100% 50%), hsl(180 100% 50%))',
    aurora: 'linear-gradient(to bottom right, hsl(219 90% 50%), hsl(280 100% 50%), hsl(340 100% 50%))',
    cyber: 'linear-gradient(to right, hsl(180 100% 50%), hsl(280 100% 50%))',
  },

  // Shadow System
  shadows: {
    elevation: {
      1: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
      2: '0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)',
      3: '0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.10)',
      4: '0 15px 25px rgba(0, 0, 0, 0.15), 0 5px 10px rgba(0, 0, 0, 0.05)',
    },
    glow: {
      primary: '0 0 20px rgba(0, 102, 255, 0.4), 0 0 40px rgba(0, 102, 255, 0.2)',
      'primary-lg': '0 0 40px rgba(0, 102, 255, 0.6), 0 0 80px rgba(0, 102, 255, 0.3)',
      accent: '0 0 30px rgba(0, 255, 255, 0.5), 0 0 60px rgba(0, 255, 255, 0.2)',
      neon: '0 0 20px rgba(0, 255, 255, 0.3), inset 0 0 20px rgba(0, 255, 255, 0.1)',
    },
  },

  // Typography
  typography: {
    fontFamily: {
      serif: "'Source Serif 4', serif",
      headline: "'Cormorant Garamond', serif",
      arabic: "'Noto Naskh Arabic', serif",
    },
    sizes: {
      h1: {
        size: 'clamp(2.5rem, 5vw, 4rem)',
        weight: 700,
        lineHeight: 1.2,
      },
      h2: {
        size: 'clamp(2rem, 4vw, 3rem)',
        weight: 700,
        lineHeight: 1.3,
      },
      h3: {
        size: 'clamp(1.5rem, 3vw, 2rem)',
        weight: 600,
        lineHeight: 1.4,
      },
      body: {
        size: '1rem',
        weight: 400,
        lineHeight: 1.6,
      },
    },
  },

  // Border Radius
  borderRadius: {
    none: '0',
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.875rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    full: '9999px',
  },

  // Spacing Scale
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },

  // Animation Durations
  animations: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
      verySlow: '1000ms',
    },
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeLinear: 'linear',
    },
  },

  // Breakpoints
  breakpoints: {
    xs: '0px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Z-Index Scale
  zIndex: {
    hide: -1,
    base: 0,
    dropdown: 1000,
    sticky: 1100,
    fixed: 1200,
    modalBackdrop: 1300,
    modal: 1400,
    popover: 1500,
    tooltip: 1600,
  },
};

/**
 * Framer Motion Animation Presets
 */
export const animationPresets = {
  // Fade animations
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 },
  },

  // Slide animations
  slideInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 },
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  },

  slideInDown: {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  },

  slideInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  },

  slideInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 30 },
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  },

  // Scale animation
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
    transition: { duration: 0.3, ease: 'easeOut' },
  },

  // Stagger container
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  },

  // Stagger item
  staggerItem: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 },
  },

  // Hover animations
  hoverScale: {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { duration: 0.2 },
  },

  hoverLift: {
    whileHover: { y: -8, boxShadow: '0 15px 25px rgba(0, 102, 255, 0.2)' },
    whileTap: { y: -4 },
    transition: { duration: 0.2 },
  },

  // Loading animation
  pulse: {
    animate: {
      opacity: [1, 0.5, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  },

  // Float animation
  float: {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  },

  // Page transition
  pageTransition: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 },
  },
};

/**
 * Get animation preset with custom duration
 */
export const getAnimationPreset = (
  name: keyof typeof animationPresets,
  duration?: number
) => {
  const preset = { ...animationPresets[name] };
  if (duration && 'transition' in preset && preset.transition) {
    preset.transition = { ...preset.transition, duration };
  }
  return preset;
};

/**
 * Combine multiple animation presets
 */
export const combineAnimations = (
  ...presets: Array<typeof animationPresets[keyof typeof animationPresets]>
) => {
  return { animate: presets.map((p) => p) };
};

export default themeConfig;
