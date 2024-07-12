/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",

    "./src/**/*.{js,ts,jsx,tsx}",

    "./src/**/**/*.{js,ts,jsx,tsx}",

    "./public/index.html",
  ],
  purge: [
    "./src/components/**/*.{js,jsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

