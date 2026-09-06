import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Bespoke Artisanal Coffee Palette
        paper: {
          50: "#FCFAF7",
          100: "#F7F3EC",
          200: "#EFE8DC",
          300: "#E5DAC8",
          400: "#D3C3AC",
        },
        roast: {
          50: "#F5F2F0",
          100: "#EAE4E0",
          200: "#D4C7C0",
          300: "#B8A398",
          400: "#957D71",
          500: "#745E53",
          600: "#5A473D",
          700: "#44342C",
          800: "#31241E",
          900: "#211814",
          950: "#140E0C", // Deepest espresso ink
        },
        cherry: {
          50: "#FCF2F3",
          100: "#F9E5E7",
          200: "#F3CCD1",
          300: "#E8A3AC",
          400: "#D66F7C",
          500: "#BE4252",
          600: "#9E2938",
          700: "#7E1D2A", // Signature Cherry Roastery Red
          800: "#651822",
          900: "#50141C",
          950: "#300A10",
        },
        crema: {
          50: "#FDFBF5",
          100: "#FBF6E8",
          200: "#F5ECCB",
          300: "#EDDDA4",
          400: "#E0C774",
          500: "#CFA946",
          600: "#B38933",
          700: "#8F6726",
          800: "#6F4F21",
          900: "#573F1C",
        },
        olive: {
          50: "#F4F6F2",
          100: "#E6EBE1",
          200: "#CCD7C3",
          300: "#A9BDA0",
          400: "#839E79",
          500: "#638059",
          600: "#4D6644",
          700: "#3B4E34",
          800: "#2C3927",
          900: "#1E261B",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "Cambria", "Times New Roman", "serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        normal: "0em",
        wide: "0.04em",
        wider: "0.08em",
        widest: "0.15em",
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(20, 14, 12, 0.04), 0 1px 2px -1px rgba(20, 14, 12, 0.04)",
        card: "0 4px 16px -2px rgba(20, 14, 12, 0.05), 0 2px 4px -2px rgba(20, 14, 12, 0.03)",
        elevated: "0 12px 32px -4px rgba(20, 14, 12, 0.08), 0 4px 12px -2px rgba(20, 14, 12, 0.04)",
        diploma: "0 20px 48px -8px rgba(20, 14, 12, 0.12), 0 8px 16px -4px rgba(20, 14, 12, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
