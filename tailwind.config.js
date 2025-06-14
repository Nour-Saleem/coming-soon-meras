/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    /^bg-/,
    /^text-/,
  ],
  darkMode: 'class',   
  content: [
    './src/**/*.{html,ts}',
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      colors: {
        // Light Theme Colors
        lightBg: '#ffffff',
        textDark: '#000000',
        primaryLight: '#0c4a6e',
        secondaryLight: '#171717',
        accentLight: '#b45309',
        softBgLight: '#fff7ed',
        // Dark Theme Colors
        darkBg: '#1A1A1A', 
        textLight: '#ffffff', 
        primaryDark: '#0c4a6e', 
        secondaryDark: '#171717', 
        accentDark: '#b45309', 
        softBgDark: '#fff7ed', 
        Blue:'#01447B'
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'], 
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
      },
    },
  },
   safelist: [
  {
    pattern: /^(bg|text|border)-(red|blue|green|gray)-(100|200|300|400|500|600|700)$/,
  }
]
,
  plugins: [
    require('preline/plugin'),
  ],
};
