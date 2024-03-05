import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // mainBgColorDark: '#010001',

        secondaryBgColorDark: '#191A1D',
        secondaryBgColorLight: '#F2F2F2',

        inputBgColorDark: '#191919',

        // tableBorderColorDark: '#232323',

        // iconBgColorDark: '#3C3F46',

        textHover: '#DE0404',

        // iconTextColorDark: '#a0a0a0',

        // // 
        mainTextDark: '#ffffff',
        secondTextDark: '#7f7f7f',
      }
    },
  },
  plugins: [],
};
export default config;
