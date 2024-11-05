import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xs": "375px",
        xs: "425px",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        heading: ["var(--font-heading)"],
      },
      colors: {
        kv: {
          black: "#0B1215",
          white: "#FCFCFC",
        },
        teamwork: {
          primary: {
            orange: "#ED6B1C",
          },
          secondary: {
            orange: "#FAD3BB",
          },
        },
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scroll: "scroll 35s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
