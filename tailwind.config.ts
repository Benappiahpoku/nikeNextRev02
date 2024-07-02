import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
           'gradient-sidebar': 'linear-gradient(to bottom, #436568 10%, #01050F 92%)',
      },
      spacing: {
        '1': '0.1em',
        '2': '0.5rem',
        '72': '18rem',
        // Add as many as you need
      },
    },
  },
  plugins: [],
};
export default config;
