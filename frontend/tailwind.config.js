import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "lofi",
      "pastel",
      "fantasy",
      "dracula",
      "autumn",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "sunset",
    ],
  },
};
