/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // GRAY
        gray_light:      "#00b37E",
        gray_medium:     "#00875F",
        gray_dark:       "#015F43",
        // BLUE
        blue_light:      "#0C8CE9",
        blue_dark:       "#0A6DC2",
        // RED
        red_light:       "#F75A58",
        red_dark:        "#AA2834",
        // BLACK
        black_light:     "#323238",
        black_semiLight: "#29292E",
        black_medium:    "#202024",
        black_dark:      "#121214",
        // WHITE
        white_light:     "#FFFFFF",
        white_semiLight: "#E1E1E6",
        white_medium:    "#C4C4CC",
        white_dark:      "#7C7C8A",
      }
    },
  },
  plugins: [],
}

