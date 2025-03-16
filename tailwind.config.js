// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#393E46",
        secondary: "#16FF00",
        light: "#EEEEEE",
        accent: "#76EAD7",
        text2: "#FFED00",
        nav_bar_hover: "#0098fb",
        nav_bar_active: "#FFED00",
      },
    },
  },
  plugins: [],
};
