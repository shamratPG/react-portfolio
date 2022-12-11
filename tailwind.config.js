module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#0a192f",
          "secondary": "#D82878",
          "accent": "#8892b0",
          "neutral": "#ccd6f6",
        },
      },
    ],
  },
}
