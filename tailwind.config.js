/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color:{
        "dark-purple": "#08A51",
        'light-while': 'rgba(255,255,255,0.18)'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

