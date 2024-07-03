/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gujjar": "url('/images/customer.png')",
      },
    },
  },
  plugins: [],
};
