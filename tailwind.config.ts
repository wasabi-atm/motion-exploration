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
        editorial: {
          bg: "#faf8fc",
          canvas: "#ffffff",
          surface: "#f5f0fa",
          ink: "#0e0a20",
          muted: "#5e5a73",
          border: "#eae3f2",
          purple: "#581de3",
          pink: "#ff008e",
          "pink-light": "#ff4dcb",
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
        serif: [
          '"Instrument Serif"',
          "Instrument Serif",
          "Georgia",
          "serif",
        ],
        instrument: [
          '"Instrument Serif"',
          "Instrument Serif",
          "Georgia",
          "serif",
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
