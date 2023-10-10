/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
            // inter: ["Inter", "sans-serif"],
            // rubik: ["Rubik", "sans-serif"],
            poppins: ["Poppins", "sans-serif"],
            bebas: ["Bebas Neue", "sans-serif"],
            kdam: ["Kdam Thmor Pro", "sans-serif"],
            katibeh: ["Katibeh", "cursive"],

            // bree: ["Bree Serif", "sans-serif"],

        },
      },
    },
    plugins: [],
  }