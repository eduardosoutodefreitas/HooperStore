const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      tablet: { max: '768px' },
      // => @media (max-width: 768px) { ... }

      smartphone: { max: '480px' }
      // => @media (max-width: 480px) { ... }
    },
    extend: {
      colors: {
        lightGray: '#f1f1f1',
        primary: '#202020'
      },
      fontFamily: {
        sans: ['var(--font-poppins)', ...defaultTheme.fontFamily.sans],
        special: 'var(--font-gloock)'
      }
    }
  },
  plugins: []
}
