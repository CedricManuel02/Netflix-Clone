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
        'font-black': '#000000',
        customColor: "rgba(0,0,0,0.5)",
        customColors: "rgba(0,0,0,0.5)",
        navy: {
          800: '#002436',
          900: '#000024',
        },
      },
      gradientColorStops: {
        'transparent-black': 'rgba(0,0,0,0)',
      },
      linearGradientColors: {
        'custom-gradient': ['var(--font-black)', 'var(--gradient-color-stops-transparent-black)'],
      },
      scrollbar: ['dark', 'rounded'],
    },
  },
  plugins: [require('daisyui'),require('tailwind-scrollbar-daisyui')] ,
};
export default config;
