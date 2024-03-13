import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: "#000000",
            primary: "#002E62"
          }
        },
        yellow: {
          colors: {
            background: "#000000",
            foreground: "#FFFFFF",
            primary: "#F5A524",
            secondary: "#920B3A",
            success: "#17c964",
            warning: "#f5a524",
            danger: "#f31260"
          }
        }
      }
    })
  ],
};
export default config;
