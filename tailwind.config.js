// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
        "2xl": "1400px",
      },
    },
    fontFamily: {
      // Define your custom font family with fallbacks
      primary: ["var(--font-jetbrains-mono)", "JetBrains Mono", "monospace"],
    },
    extend: {
      colors: {
        background: "#1c1c22", // Define background color
        accent: {
          DEFAULT: "#00ff99", // Accent color (default)
          hover: "#00e187", // Accent hover color
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
