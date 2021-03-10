require('dotenv').config();

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production' || false,
    content: ['./apps/**/*.html', './libs/**/*.html'],
    options: {
      safelist: [],
      blocklist: [/^debug-/],
      keyframes: true,
      fontFace: true,
    },
  },
  darkMode: 'media',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-debug-screens')],
  corePlugins: {
    outline: false,
  },
};
