import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#fbf6ee",
        cream: "#f4ead8",
        gold: { DEFAULT: "#b8923f", light: "#e3c887", dark: "#8a6a24" },
        rose: { DEFAULT: "#c9788a", light: "#f1c9d0", dark: "#9b4458" },
        maroon: { DEFAULT: "#5b1e2d", dark: "#3d1220" },
        sage: "#8ea58a",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        script: ["var(--font-script)", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
