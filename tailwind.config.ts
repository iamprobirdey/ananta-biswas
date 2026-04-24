import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eefbff",
          100: "#d8f4fd",
          200: "#b6ebfb",
          300: "#80def8",
          400: "#45caef",
          500: "#1db2df",
          600: "#1090be",
          700: "#11739a",
          800: "#165f7e",
          900: "#184f68",
        },
        accent: "#13b8a6",
        ink: "#14324a",
        mist: "#f5fbff",
      },
      boxShadow: {
        soft: "0 20px 60px rgba(15, 80, 104, 0.12)",
        card: "0 18px 40px rgba(16, 76, 99, 0.1)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top left, rgba(104, 214, 244, 0.35), transparent 40%), radial-gradient(circle at top right, rgba(19, 184, 166, 0.16), transparent 28%), linear-gradient(135deg, #f2fbff 0%, #ffffff 46%, #eef9ff 100%)",
      },
      fontFamily: {
        sans: ['"Avenir Next"', "Manrope", '"Segoe UI"', "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
