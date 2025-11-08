/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        body: ['var(--font-body)', 'serif'],
        headline: ['var(--font-headline)', 'serif'],
        code: ['monospace'],
        arabic: ['var(--font-arabic)', 'serif'],
      },
      colors: {
        background: 'hsl(var(--background))',
        'background-light': 'hsl(var(--background-light))',
        'background-lighter': 'hsl(var(--background-lighter))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
          light: 'hsl(var(--card-light))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          50: 'hsl(var(--primary-50))',
          100: 'hsl(var(--primary-100))',
          200: 'hsl(var(--primary-200))',
          300: 'hsl(var(--primary-300))',
          400: 'hsl(var(--primary-400))',
          500: 'hsl(var(--primary-500))',
          600: 'hsl(var(--primary-600))',
          700: 'hsl(var(--primary-700))',
          800: 'hsl(var(--primary-800))',
          900: 'hsl(var(--primary-900))',
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          50: 'hsl(var(--secondary-50))',
          500: 'hsl(var(--secondary-500))',
          700: 'hsl(var(--secondary-700))',
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        success: 'hsl(var(--success))',
        warning: 'hsl(var(--warning))',
        error: 'hsl(var(--error))',
        info: 'hsl(var(--info))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      backdropFilter: {
        none: 'none',
        blur: 'blur(10px)',
        'blur-sm': 'blur(4px)',
        'blur-md': 'blur(12px)',
        'blur-lg': 'blur(20px)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 102, 255, 0.4), 0 0 40px rgba(0, 102, 255, 0.2)',
        'glow-lg': '0 0 40px rgba(0, 102, 255, 0.6), 0 0 80px rgba(0, 102, 255, 0.3)',
        'glow-accent': '0 0 30px rgba(0, 255, 255, 0.5), 0 0 60px rgba(0, 255, 255, 0.2)',
        'glow-neon': '0 0 20px rgba(0, 255, 255, 0.3), inset 0 0 20px rgba(0, 255, 255, 0.1)',
        'elevation-1': '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
        'elevation-2': '0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)',
        'elevation-3': '0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.10)',
        'elevation-4': '0 15px 25px rgba(0, 0, 0, 0.15), 0 5px 10px rgba(0, 0, 0, 0.05)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fade-out': {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        'slide-in-up': {
          from: {
            transform: 'translateY(24px)',
            opacity: '0',
          },
          to: {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        'slide-in-down': {
          from: {
            transform: 'translateY(-24px)',
            opacity: '0',
          },
          to: {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        'slide-in-left': {
          from: {
            transform: 'translateX(-24px)',
            opacity: '0',
          },
          to: {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        'slide-in-right': {
          from: {
            transform: 'translateX(24px)',
            opacity: '0',
          },
          to: {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        'scale-in': {
          from: {
            transform: 'scale(0.95)',
            opacity: '0',
          },
          to: {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        'bounce-in': {
          '0%': {
            transform: 'scale(0.3)',
            opacity: '0',
          },
          '50%': {
            opacity: '1',
          },
          '70%': {
            transform: 'scale(1.05)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)',
          },
        },
        'shimmer': {
          '0%': {
            backgroundPosition: '-1000px 0',
          },
          '100%': {
            backgroundPosition: '1000px 0',
          },
        },
        'gradient-shift': {
          '0%, 100%': {
            backgroundPosition: '0% center',
          },
          '50%': {
            backgroundPosition: '100% center',
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-12px)',
          },
        },
        'rotate-slow': {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(360deg)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'fade-out': 'fade-out 0.3s ease-out',
        'slide-in-up': 'slide-in-up 0.4s ease-out',
        'slide-in-down': 'slide-in-down 0.4s ease-out',
        'slide-in-left': 'slide-in-left 0.4s ease-out',
        'slide-in-right': 'slide-in-right 0.4s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
        'bounce-in': 'bounce-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'gradient-shift': 'gradient-shift 4s ease infinite',
        'float': 'float 3s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(to bottom right, hsl(219 90% 50%), hsl(260 80% 50%))',
        'gradient-secondary': 'linear-gradient(to bottom right, hsl(180 100% 50%), hsl(219 90% 50%))',
        'gradient-accent': 'linear-gradient(to right, hsl(280 100% 50%), hsl(180 100% 50%))',
        'gradient-aurora': 'linear-gradient(to bottom right, hsl(219 90% 50%), hsl(280 100% 50%), hsl(340 100% 50%))',
        'gradient-cyber': 'linear-gradient(to right, hsl(180 100% 50%), hsl(280 100% 50%))',
        'gradient-premium': 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
        'gradient-warm': 'linear-gradient(135deg, #f59e0b 0%, #ec4899 100%)',
        'gradient-cool': 'linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%)',
      },
      backgroundSize: {
        'bg-shimmer': '1000px 100%',
      },
      transitionTimingFunction: {
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
