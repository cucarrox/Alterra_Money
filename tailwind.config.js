/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    data: {
      radio_transiction_checked: 'state~="checked"',
      radio_transiction_unchecked: 'state~="unchecked"'
    },
    extend: {
      colors: {
        // GREEN
        green_100: "#00B37E",
        green_200: "#00875F",
        green_300: "#015F43",
        // BLUE
        blue_100:  "#0C8CE9",
        blue_200:  "#0A6DC2",
        // RED
        red_100:   "#F75A68",
        red_200:   "#AB222E",
        red_300:   "#7A1921",
        // GRAY
        gray_100:  "#E1E1E6",
        gray_200:  "#C4C4CC",
        gray_300:  "#8D8D99",
        gray_400:  "#7C7C8A",
        gray_500:  "#323238",
        gray_600:  "#29292E",
        gray_700:  "#202024",
        gray_800:  "#121214",
        // RGBA
        modalBackground: "rgba(0, 0, 0, 0.75)"
      },
    },
  },
  plugins: [],
};
