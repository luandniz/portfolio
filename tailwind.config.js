/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      poppins: ["Poppins"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      gray: "#9ca3af",
      "gray-100": "##f3f4f6",
      "gray-200": "#e5e7eb",
      black: "#000000",
      "blue-400": "#3399ff",
      "blue-500": "#3399ff",
      "slate-100": "#f1f5f9",
      "slate-300": "#cbd5e1",
      "slate-800": "#1e293b",
      "slate-900": "#0f172a",
      "teal-400": "#2dd4bf",
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {},
  },
  plugins: [],
};
