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
        rose: { DEFAULT: "#4f8f6a", light: "#cfe6d6", dark: "#2f6b4a" },
        maroon: { DEFAULT: "#0f3d2e", dark: "#082a1f" },
        sage: "#2f6b4a",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        script: ["var(--font-script)", "cursive"],
        arabic: ["var(--font-arabic)", "serif"],
        bismillah: ["var(--font-bismillah)", "var(--font-arabic)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;