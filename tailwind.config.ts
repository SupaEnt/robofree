// tailwind.config.ts
import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          50: "#f1f8f3",
          700: "#0f5132",
          800: "#0a3d26",
          950: "#052014",
        },
      },
    },
  },
  plugins: [],
}
export default config