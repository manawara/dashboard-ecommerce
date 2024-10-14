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
        primary: "#ff6c2f",
        secondary: "#5d7186",
        green: "#22c55e",
        blue: "#4ecac2",
        red: "#ef5f5f",
        yellowLight: "rgba(255, 108, 47, 0.1)",
        yellow: "#f9b931",
        grayLightest: "#F8F7F7",
        grayLight: "#d8dfe7",
        gray: "#b0b0bb",
        grayDark: "#323a46",
        purple: "#7f56da",
        pink: "#ff86c8",
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
