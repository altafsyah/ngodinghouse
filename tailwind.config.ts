import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        black1: "#121212",
        green1: "##2B7858",
      },
      fontSize: {
        title: "4rem",
        subtitle: "1.875rem",
        description: "1.5rem",
        small: "1.125rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
