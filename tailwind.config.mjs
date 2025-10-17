/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Sans 3', 'Noto Sans JP', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
      },
      colors: {
        // Minimal warm-greige palette inspired by thought-lite
        warm: {
          50: '#fefefe',
          100: '#fdfdfc',
          200: '#faf9f7',
          300: '#f5f4f2',
          400: '#edeae6',
          500: '#d4d0ca',
          600: '#a8a29d',
          700: '#6b6560',
          800: '#44403c',
          900: '#1c1917',
          950: '#0c0a09',
        },
        // Dark mode variants - warm anthracite to off-white
        dark: {
          50: '#1a1814',  // Much deeper warm anthracite background
          100: '#252118', // Deep warm anthracite
          200: '#332e26', // Medium anthracite for borders/cards
          300: '#423d33', // Lighter anthracite for subtle borders
          400: '#544f44', // Mid-tone warm grey
          500: '#6b6560', // Neutral warm grey
          600: '#8b877e', // Light warm grey
          700: '#a8a39a', // Very light warm grey
          800: '#d4d0ca', // Warm off-white
          900: '#f0ede8', // Soft off-white for text
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#44403c',
            lineHeight: '1.7',
            maxWidth: 'none',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};