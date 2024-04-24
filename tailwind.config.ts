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
        primary: "#0135F0",
        secondary: "#5073F0",
        third: "#6700F0",
        black: "#040611",
        white: "#F2F2F2",
      },
    },
  },
  plugins: [],
};
export default config;
