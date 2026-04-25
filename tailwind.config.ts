import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Oswald", "Impact", "sans-serif"],
        body: ["Archivo", "Inter", "system-ui", "sans-serif"],
        accent: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        // Iron-Brass palette tokens mapped to Tailwind
        bg: "hsl(220 45% 7%)",
        surface: "hsl(220 40% 10%)",
        "surface-raised": "hsl(220 35% 14%)",
        text: "hsl(40 30% 92%)",
        "text-muted": "hsl(40 15% 65%)",
        accent: "hsl(38 85% 55%)",
        "accent-hover": "hsl(38 90% 62%)",
        border: "hsl(220 30% 20%)",
      },
      borderRadius: {
        none: "0px",
        DEFAULT: "0px",
        sm: "0px",
        md: "0px",
        lg: "0px",
        xl: "0px",
        "2xl": "0px",
        "3xl": "0px",
        full: "9999px",
      },
    },
  },
  plugins: [],
} satisfies Config;
