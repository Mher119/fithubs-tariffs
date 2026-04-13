import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-4px)" },
          "75%": { transform: "translateX(4px)" },
        },
        "blink-red": {
          "0%, 100%": { color: "#FFBB00" },
          "50%": { color: "#fe4d4d" },
        },
        // Կոճակի համար նախատեսված կտրուկ թարթումը
        // button with class "animate-blink" will have a background color that sharply changes between #fd972e and #ffaa4d, creating a blinking effect without a smooth transition. The step-end timing function ensures that the color change happens instantly at the end of each cycle.
        blink: {
          "0%, 100%": { backgroundColor: "#fd972e" }, // main color
          "50%": { backgroundColor: "#ffaa4d" },     // lighter shade for the blink effect 
        },
      },
      animation: {
        "blink-red": "blink-red 0.5s step-end infinite",
        shake: "shake 0.2s ease-in-out 2",
        // step-end-ը ապահովում է կտրուկ թարթումը (առանց սահուն անցման)
        // step-end ensures that the color change happens instantly at the end of each cycle, creating a sharp blinking effect ideal for attention-grabbing elements like buttons.
        blink: "blink 0.6s step-end infinite",
      },
    },
  },
  plugins: [],
};
export default config;