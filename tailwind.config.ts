import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { ink: "#08111f", panel: "#0e1b2d", line: "#20334c", signal: "#45e0b4", electric: "#5b8cff" },
      boxShadow: { glow: "0 0 50px rgba(69,224,180,.12)" }
    }
  },
  plugins: []
};
export default config;
