/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 1.2s linear infinite',
        'pulse-once': 'pulse 1s linear 1',
      },
      screens: {
        '1920': '1920px',
        // => @media (min-width: 640px) { ... }
  
        // 'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        // 'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}
