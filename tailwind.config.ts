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
        primary: {
          DEFAULT: "#ff6c2f",
          hover: "#e6612a",
          soft: "rgba(255, 108, 47, 0.1)",
        },
        secondary: {
          DEFAULT: "#5d7186",
          hover: "#546679",
          soft: "rgba(93, 113, 134, 0.1)",
        },
        green: {
          DEFAULT: "#22c55e",
          hover: "#1fb155",
          soft: "rgba(34, 197, 94, 0.1)",
        },
        blue: {
          DEFAULT: "#4ecac2",
          hover: "#46b6af",
          soft: "rgba(78, 202, 194,0.1)",
          dark: {
            DEFAULT: "#313b5e",
          },
        },
        red: {
          DEFAULT: "#ef5f5f",
          hover: "#d75656",
        },
        yellow: {
          DEFAULT: "#f9b931",
          hover: "#e0a72c",
          soft: "rgba(249, 185, 49, 0.1)",
        },

        gray: {
          light: {
            DEFAULT: "#d8dfe7",
            300: "#F8F7F7",
          },
          DEFAULT: "#b0b0bb",
          dark: {
            DEFAULT: "#323a46",
          },
        },
        purple: {
          DEFAULT: "#7f56da",
          hover: "#724dc4",
        },
        pink: {
          DEFAULT: "#ff86c8",
          hover: "#e679b4",
        },
      },
      fontFamily: {
        play: ["var(--font-play)"],
        hanken: ["var(--font-hanken)"],
      },
      darkMode: "class",
    },
  },
  plugins: [],
};
export default config;
