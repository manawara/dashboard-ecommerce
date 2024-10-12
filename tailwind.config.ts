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
        yellow: "#f9b931",
        grayLight: "#F8F7F7",
        gray: "#F7F8FB",
        grayDark: "#323a46",
        purple: "#7f56da",
        pink: "#ff86c8",
        orange: "#ff6c2f",
      },
      darkMode: "class",
    },
  },
  plugins: [],
};
export default config;
