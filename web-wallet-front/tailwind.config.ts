import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderRadius: {
      max: '160px',
      rd32: '32px',
      rd20: '20px',
      circle: '300px'
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        maincolor: '#f97316',
        whitebg: '#fffff',
        primaryblue: '#3833ff',
        creambg: '#f9f8f5',
        graytxt: '#808080',
        redbg: "#ef4444"
      },
    },
  },
  plugins: [],
};
export default config;
