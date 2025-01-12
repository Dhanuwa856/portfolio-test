// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Adjust based on your project structure
  theme: {
    extend: {
      colors: {
        primary: "#994ff5", // Custom primary color
        secondary: "#ffc41f", // Custom secondary color
        mainColor: "#050c17",
      },
      backgroundImage: {
        "custom-gradient": "radial-gradient(circle,#994ff5,#ffc41f)",
      },
    },
  },
  plugins: [],
};
