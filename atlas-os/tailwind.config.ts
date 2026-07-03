import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        atlasBg: "#020617",
        atlasPanel: "#0f172a",
        atlasCard: "#111827",
        atlasPink: "#ff2e88",
        atlasPurple: "#8b5cf6",
        atlasTeal: "#22d3ee",
      },
      boxShadow: {
        glow: "0 0 40px rgba(255, 46, 136, 0.18)",
      },
    },
  },
  plugins: [],
};
export default config;
