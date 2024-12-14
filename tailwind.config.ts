import type { Config } from "tailwindcss";

export default {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FFFBFD",
        primary: "#A80A44",
        hover: "#DA2B6B",
        textSale: "#A80A4466",
        secondary: "#FFDEEB",
        Vblue: {
          50: "#457BFF",
          100: "#1458FF",
        },
      },
      fontFamily: {
        hackney: ["hackney", "sans-serif"],
        DINCondensed: ["DIN Condensed", "sans-serif"],
        abel: ["var(--font-abel)"],
      },
      aspectRatio: {
        "3/4": "3 / 4",
        "4/3": "4 / 3",
        "4/5": "4 / 5",
        "9/16": "9 / 16",
        "16/10": "16 / 10",
      },
    },
  },
  plugins: [],
} satisfies Config;
