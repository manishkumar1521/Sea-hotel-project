/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        cinzel: ['"Cinzel"', 'serif'],
      },
      colors: {
        ocean: {
          950: '#060d17',
          900: '#0B192C',
          800: '#132A4A',
          700: '#1E3E62',
          600: '#2C5784',
          500: '#3D74A6',
          400: '#5A94C8',
        },
        gold: {
          300: '#FDE68A',
          400: '#FBBF24',
          500: '#D4AF37',
          600: '#C5A880',
          700: '#9B7B4F',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'float': 'float 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(6, 182, 212, 0.4)' },
          '50%': { boxShadow: '0 0 30px rgba(6, 182, 212, 0.8)' },
        },
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.25)',
        'luxury': '0 20px 40px -15px rgba(11, 25, 44, 0.3)',
        'gold-glow': '0 10px 25px -5px rgba(212, 175, 55, 0.35)',
        'cyan-glow': '0 10px 25px -5px rgba(6, 182, 212, 0.4)',
      },
    },
  },
  plugins: [],
};

