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
        primary: "#3864FF",
        secondary: "#FD3BE9",
        third: "#CA58FF",
        black: "#040611",
        white: "#F2F2F2",
      },
    },
  },
  plugins: [],
};
export default config;
