const plugin = require('tailwindcss/plugin');

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

        '93a3b4': '#93A3B4',
        dcdde8: '#DCDDE8',
        e2f9eb: '#E2F9EB',
      };
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.btn-sm': {
          '@apply h-8 rounded-lg px-2 text-sm font-medium': '',
        },
        '.btn-md': {
          '@apply h-[42px] rounded-xl px-2 rb-text-14 font-medium': '',
        },
        '.btn-primary': {
          '@apply bg-purple text-white': '',
        },
        '.btn-secondary': {
          '@apply bg-gray-lighter text-purple': '',
        },
        '.rb-content-container': {
          '@apply px-5': '',
        },
        '.rb-text-11': {
          '@apply text-[11px] leading-[14px]': '',
        },
        '.rb-text-12': {
          '@apply text-[12px] leading-[14px]': '',
        },
        '.rb-text-14': {
          '@apply text-[14px] leading-[18px]': '',
        },
        '.rb-text-16': {
          '@apply text-[16px] leading-5': '',
        },
        '.rb-text-heading': {
          '@apply text-xl font-semibold leading-6': '',
        },
      });
    }),
  ],
};
