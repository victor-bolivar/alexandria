import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'blue-800': '#21323C',
      'blue-700': '#2a3e49',
      'blue-600': '#3E5665',
      'blue-400': '#4F6E81',
      'blue-300': '#738793',
    },
    extend: {
      colors: {
        primary: "#2C3E50",
        secondary: "#F8F4E3",
        accent: "#D4AF37",
      },
    },
  },
  plugins: [],
} satisfies Config;
