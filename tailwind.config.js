/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        vsm: "500px",
        xmd: "850px",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, #FFFFFF 0%, #898989 118.38%)",
        "custom-gradient2": "linear-gradient(90deg, #00FFD1 0%, #8062FF 100%)",
        "article-gradient":
          "linear-gradient(266.72deg, #5629EA -5.79%, #00FFD1 115.6%)",
      },
    },
  },
  plugins: [],
};
