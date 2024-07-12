/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",

    "./src/**/*.{js,ts,jsx,tsx}",

    "./src/**/**/*.{js,ts,jsx,tsx}",

    "./public/assets/*.{js,ts,jsx,tsx}",

    ".public/**/*.{js,ts,jsx,tsx}",

    ".public/**/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

