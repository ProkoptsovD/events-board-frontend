import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        brand: {
          100: "#2B293D",
          200: "#2b293d81",
          300: "#2D2C3C",
          400: "#1F1D2E",
          500: "#413F53",
          600: "#5A5A5A81",
          700: "#5A5A5A",
        },
        accent: {
          100: "#FFE047",
          200: "#EBCC33",
        },
        alt: {
          100: "#4539B4",
        },
        choice: {
          100: "#1F9D55",
        },
      },
      rotate: {
        "30": "30deg",
        "-30": "-30deg",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
export default config;
