/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom right, #14532d, #16a34a, #14532d)",
        "noise-texture": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E")`,
        "grid-lines":
        "linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",

      },
      
      backgroundSize: {
        grid: "40px 40px",
      },
      fontFamily: {
        font2: ["Alegreya Sans SC", "sans-serif"],
        customPD: ["PriceDown", "sans-serif"],
      },
      colors: {
        primary: "#000000",
        secondary: "#000000",
        text1: "#ffffff",
      },
      keyframes: {
        loadtwo: {
          "50%": {
            transform: "rotate(-80deg)",
          },
        },
        buzz: {
          "10%, 30%, 50%, 70%, 90%": {
            transform: "translateX(-2px)",
          },
          "20%, 40%, 60%, 80%": {
            transform: "translateX(2px)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        loadtwo: "loadtwo 1s ease-in-out infinite",
        buzz: "buzz 0.3s linear",
      },
    },
  },
  plugins: [],
};
