module.exports = {
    darkMode: "class", // Enables dark mode manually via a class
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: { extend: { animation: {
      wiggle: "wiggle 1s ease-in-out infinite",
    },
    keyframes: {
      wiggle: {
        "0%, 100%": { transform: "rotate(-3deg)" },
        "50%": { transform: "rotate(3deg)" },
      },
    },} },
    plugins: [],
  };
  