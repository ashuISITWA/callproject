import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./node_modules/@shadcn/ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        herobg: "url('/assets/images/banner.jpg')", // ensure this file exists in public/assets/images/
      },
      colors: {
        primary: {
          DEFAULT: "#ef3024",
          light: "#ff6654", // optional lighter shade
          dark: "#b0221b", 
        },
      },
    },
  },
  plugins: [],
};

export default config;
