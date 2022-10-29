/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {},
    colors({ colors }) {
      return {
        ...colors,
        black: '#18212B',
        gray: '#546880',
        'gray-light': '#ECF0FA',
        purple: '#4F4CD4',
      };
    },
  },
  plugins: [],
};
