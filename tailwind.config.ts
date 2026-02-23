import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  plugins: [
    require("daisyui")({
      themes: ["light", "dark"], // limit themes
    }),
  ],
};

export default config;
