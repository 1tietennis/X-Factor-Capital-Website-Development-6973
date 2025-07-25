/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'electric-blue': '#00D4FF',
        'neon-green': '#39FF14',
        'cyber-green': '#00FF41',
        'dark-bg': '#0A0A0A',
        'glass-black': '#1A1A1A',
      },
      fontFamily: {
        'cyber': ['Orbitron', 'monospace'],
        'futuristic': ['Exo 2', 'sans-serif'],
      },
      animation: {
        'lightning': 'lightning 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'countdown': 'countdown 1s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'typing': 'typing 3.5s steps(40, end)',
      },
      keyframes: {
        lightning: {
          '0%, 100%': { opacity: '0.3', transform: 'translateX(-100px)' },
          '50%': { opacity: '1', transform: 'translateX(100px)' },
        },
        'pulse-glow': {
          '0%': { boxShadow: '0 0 20px #00D4FF' },
          '100%': { boxShadow: '0 0 40px #00D4FF, 0 0 80px #00D4FF' },
        },
        countdown: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
}