/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      boxShadow: {
        '3xl': '0 0 10px 10px rgba(0, 0, 0, 0.3)',
      }
    }, 
    colors: {
      transparent: 'transparent',
      timberwolf: {
        DEFAULT: "#DAD2D8",
      },
      gunmetal: {
        DEFAULT: "#143642",
      },
      darkcyan: {
        DEFAULT: "#0F8B8D",
      },
      gamboge: {
        DEFAULT: "#EC9A29",
      },
      cornelred: {
        DEFAULT: "#A8201A",
      },
      white: {
        DEFAULT: "#FFFFFF",
      },
      black: {
        DEFAULT: "#000000",
      },
    }
  },
  plugins: [],
}