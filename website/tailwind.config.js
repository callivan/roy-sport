/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'lg': { 'max': '1024px' },
      'md': { 'max': '744px' },
      's': { 'max': '595px' },
      'xs': { 'max': '390px' },
    },
    colors: {
      transparent: 'transparent',
      white: { 50: '#FFFFFF90', 900: '#FFFFFF' },
      gray: { 50: '#E1E3E670', 450: '#E1E3E6', 900: '#818A94' },
      black: { 50: '#38383870', 900: '#383838' },
      purple: { 50: '#CEC3FC', 450: '#8168F0' },
      pink: { 50: '#FF8CA1', 450: '#FF557E' },
    },
    spacing: {
      1: '0.5rem',
      2: '1rem',
      3: '1.5rem',
      4: '2rem',
      5: '3rem',
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
    fontSize: {
      body3: ['12px', '14px'],
      body2: ['16px', '20px'],
      body1: ['20px', '24px'],
      h2: ['24px', '28px'],
      h1: ['32px', '36px'],
    },
    extend: {
      boxShadow: {
        custom: '10px 10px 15px -3px rgb(0 0 0 / 0.1), 4px 4px 6px -4px rgb(0 0 0 / 0.1)',
      },
      width: {
        screen: ['100vw', '100dvw']
      },
      height: {
        screen: ['100vh', '100dvh']
      },
      gridTemplateColumns: {
        'rootLayout': 'max-content 1fr',
        'products': 'repeat(auto-fill, 250px)',
      },
      gridTemplateRows: {
        'rootLayout': 'max-content max-content 1fr',
      },
      gridAutoRows: {
        'products': '340px'
      }
    },
  },
  plugins: []
}
