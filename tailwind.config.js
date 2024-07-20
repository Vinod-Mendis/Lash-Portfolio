/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "desktop-gradient":
          "linear-gradient(to left, rgba(16, 16, 16, 1) , rgba(252, 252, 252, 0) 70%), linear-gradient(to top, rgba(16, 16, 16, 1), rgba(252, 252, 252, 0) 50%)",
        "mobile-gradient":
          "linear-gradient(to top, rgba(16, 16, 16, 1), rgba(252, 252, 252, 0) 50%)",
      },
    },
  },
  plugins: [],
};
