/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'gotham': ['Montserrat', 'system-ui', 'sans-serif'],
        'display': ['"Big Shoulders Display"', 'cursive'],
        'sans': ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        'brand-navy': '#022049',
        'brand-red': '#ca3433',
      },
    },
  },
  plugins: [],
};
