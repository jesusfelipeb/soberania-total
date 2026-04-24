import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#050505",
          card: "#0f0f0f",
          light: "#151515",
          border: "#1a1a1a",
        },
        neon: {
          DEFAULT: "#00FF88",
          dim: "#00cc6a",
          bright: "#33ffaa",
          glow: "rgba(0, 255, 136, 0.15)",
        },
        muted: "#888888",
      },
      fontFamily: {
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
