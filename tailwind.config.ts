import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: "#080610",
          surface1: "#0a0814",
          surface2: "#0f0b1d",
          card: "#140d24",
        },
        accent: {
          pink: "#ff008e",
          "pink-light": "#ff4dcb",
          purple: "#581de3",
          "purple-light": "#726eff",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.10)",
          hover: "rgba(255, 255, 255, 0.25)",
        },
      },
      fontFamily: {
        sans: [
          "Switzer",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "border-turn": "borderTurn 3s linear infinite",
      },
      keyframes: {
        borderTurn: {
          "0%": { transform: "translate(-50%, -50%) rotate(0deg)" },
          "100%": { transform: "translate(-50%, -50%) rotate(360deg)" },
        },
      },
      borderRadius: {
        pill: "62.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
