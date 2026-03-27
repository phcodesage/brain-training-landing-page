/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
