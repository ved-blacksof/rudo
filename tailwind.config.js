module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        navBar: "0 4px 15px hsl(0deg 0% 75% / 30%);",
        inputShadow: "0 0 5px #ffa100",
      },
      fontFamily: {
        "vanio-light": ["vanio-light", "sans-serif"],
        vanio: ["vanio", "sans-serif"],
        "vanio-bold": ["vanio-bold", "sans-serif"],

        epilogue: ["epilogue", "sans-serif"],
      },
      animation: {
        marquee: "marquee 35s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      colors: {
        darkGreen: "#006445",
        green: "#4ABE9A",
        red: "#E75553",
        darkRed: "#E75553",
        blue: "#173588",
        gray: "#6D6E71",
        dark: "#070504",
        paleGreen: "#7CC8C2",
        pink: "#F87F7F",
        orange: "#ED8663",
        cream: "#FAFDF0",
        headerPink: "#F8918E",
        headerWhite: "#FDE5D3",
        footerBg: "#FCF1E7",
        btnLeft: "#ed8663",
        btnRight: "#e75553",
        formBg: "#FFE4B6",
      },
    },
  },
  plugins: [],
};
