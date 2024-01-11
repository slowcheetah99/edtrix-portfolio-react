/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      title: ["Magnat Head Regular", "Red Hat Display", "serif"],
      body: ["Jost", "Red Hat Text", "sans-serif"],
    },
    colors: {
      background: "#F1EFE9",
      dark: "#00030F",
      violet: "#9523C8",
      violetLight: "#AA8CF9",
      blue: "#5011F2",
      blueDark: "#010823",
      pink: "#F4CDFE",
    },
  },
  plugins: [],
};
