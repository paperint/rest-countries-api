/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "darkmode-element-DarkBlue": "hsl(209, 23%, 22%)",
        "darkmode-background-Very-Dark-Blue": "hsl(207, 26%, 17%)",
        "lightmode-text-Very-Dark-Blue": "hsl(200, 15%, 8%)",
        "lightmode-input-Dark-Gray": "hsl(0, 0%, 52%)",
        "lightmode-background-Very-Light-Gray": "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
