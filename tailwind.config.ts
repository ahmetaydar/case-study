import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/background.png')",
      },
      boxShadow: {
        sm: "2px 2px 8px 0px rgba(37, 14, 110, 0.60)",
        xs: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
      },

      colors: {
        primarypurple1: "#5234B2",

        primarydark: "#250E6E",
        formError: "#E11522",
        borderGrey: "#B3B3B3",
        primarypurpledisabled: "#DED3FF",
        darkpurple: "#3C1F99",
        purpleStroke: "#5234B2",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
export default config;
