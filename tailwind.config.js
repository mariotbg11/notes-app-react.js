/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navyblue: "#002447",
        cream: "#FBECEB",
        cyan: "#53D3D1",
      },
      borderWidth: {
        1: "1px",
      },
      minHeight: {
        175: "175px",
      },
    },
  },
  plugins: [],
};
