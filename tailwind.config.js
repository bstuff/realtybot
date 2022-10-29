/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {
      boxShadow: {
        up: '0px 24px 127px rgba(0, 0, 0, 0.05), 0px 10px 20px rgba(0, 0, 0, 0.16)',
      },
    },
    colors({ colors }) {
      return {
        ...colors,
        black: '#18212B',
        gray: '#546880',
        'gray-light': '#ECF0FA',
        'gray-lighter': '#F4F6FB',
        purple: '#4F4CD4',
      };
    },
  },
  plugins: [],
};
