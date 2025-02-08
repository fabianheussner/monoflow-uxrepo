import { on } from "events";
import { text } from "stream/consumers";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist Sans", "Arial", "sans-serif"],
        mono: ["Geist Mono", "Courier New", "monospace"],
      },
      fontSize: {},
      colors: {
        primary: "rgba(var(--primary))",
        primaryHover: "rgba(var(--primary-hover))",
        onPrimary: "rgba(var(--on-primary))",
        tonal: "rgba(var(--tonal))",
        onTonal: "rgba(var(--on-tonal))",

        text: "rgba(var(--text))",
        textVariant: "rgba(var(--text-variant))",
        textInverse: "rgba(var(--text-inverse))",
        textVariantInverse: "rgba(var(--text-variant-inverse))",
        textOnImage: "rgba(var(--text-on-image))",
        textOnImageInverse: "rgba(var(--text-on-image-inverse))",

        border: "rgba(var(--border))",
        background: "rgba(var(--background))",
        backgroundVariant: "rgba(var(--background-variant))",
        backgroundInverse: "rgba(var(--background-inverse))",
        surface: "rgba(var(--surface))",
        surfaceVariant: "rgba(var(--surface-variant))",

        surfaceWarning: "rgba(var(--surface-warning))",
        onSurfaceWarning: "rgba(var(--on-surface-warning))",
      },
    },
  },
  plugins: [],
} satisfies Config;
