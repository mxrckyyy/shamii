/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFF9F4',
        blush: '#F9E3E4',
        rose: '#E7A0A8',
        plum: '#5C3A5E',
        ink: '#33262F',
        gold: '#C9A227',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        handwriting: ['Caveat', 'cursive'],
      },
      fontSize: {
        display: ['2.5rem', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
        'display-lg': ['4.5rem', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
      },
      maxWidth: {
        prose: '65ch',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 4px 24px -8px rgba(92, 58, 94, 0.12)',
        card: '0 8px 32px -12px rgba(51, 38, 47, 0.18)',
      },
    },
  },
  plugins: [],
};
