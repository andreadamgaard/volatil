import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FFF6F5",
        primary: "#A80A44",
        hover: "#DA2B6B",
        textSale: "#A80A4466",
        secondary: "#FFDEEB",
        focus: "#DD4F83",
        Vblue: {
          50: "#457BFF",
          100: "#1458FF",
        },
      },
      gridTemplateColumns: {
        gridContent: "[full-start] var(--full) [feature-start] var(--feature) [content-start] var(--content) [content-end] var(--feature) [feature-end] var(--full) [full-end]",
      },

      fontFamily: {
        hackney: ["hackney", "Arial", "sans-serif"],
        abel: ["var(--font-abel)"],
      },
      aspectRatio: {
        "3/4": "3 / 4",
        "4/3": "4 / 3",
        "4/5": "4 / 5",
        "9/16": "9 / 16",
        swiper: "6 / 3",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".bg-svg": {
          backgroundImage: "url('/images/branches.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundSize: "90%" /* Standard */,
        },
        "@media (min-width: 768px)": {
          ".bg-svg": {
            backgroundSize: "65%" /* Medium skærme */,
          },
        },
        "@media (min-width: 1024px)": {
          ".bg-svg": {
            backgroundSize: "55%" /* Store skærme */,
          },
        },
      });
    }),
    require("@tailwindcss/line-clamp"),
  ],
} satisfies Config;
