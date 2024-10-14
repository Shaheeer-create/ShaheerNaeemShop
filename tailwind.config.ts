import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#C2EFD4',
        // navhovercolor: '#7D6F56',
        customDarkGreen: '#224F34',
        custompGreen: '#267D49',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        glow: '0 0 8px rgba(125, 111, 86, 0.8)', // Custom glow shadow
      },
    },
  },
  plugins: [],
};

export default config;
