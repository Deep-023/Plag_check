/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#3b82f6',
        customGreen: '#10b981',
        customGray: '#6b7280',
        customRed: '#ef4444',
      },
    },
  },
  plugins: [require("daisyui")],
}
