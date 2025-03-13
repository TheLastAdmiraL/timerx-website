import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Existing CSS variable colors (if you use them in your globals.css)
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Custom TimerX colors:
        primary: "#393E46",   // Dark bluish-gray; ideal for primary elements (e.g., main backgrounds or text).
        secondary: "#16FF00", // green; perfect for highlights, success messages, or call-to-action accents.
        light: "#EEEEEE",     // Very light gray; useful for backgrounds, borders, or providing contrast against darker elements.
        accent: "#76EAD7",    // Vibrant turquoise; great for accent elements, buttons, or links.
        text2: "#FFED00",      // Yellow; ideal for text or icons that need to stand out against darker backgrounds.
        nav_bar_hover: "#0098fb", // Blue; ideal for hover effects on navigation bar items.
        nav_bar_active: "#FFED00", // Yellow; ideal for active navigation bar items.
      },
    },
  },
  plugins: [],
} satisfies Config;
