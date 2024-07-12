/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",

    "./src/**/*.{js,ts,jsx,tsx}",

    "./src/**/**/*.{js,ts,jsx,tsx}",

    "./public/index.html",

    "./public/src/**/*.{js,ts,jsx,tsx}",

    "./public/src/**/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

