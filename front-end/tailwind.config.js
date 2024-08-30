/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      colors:{
        primary: '#3490DC',
        secondary: '#FFC107',
        success: '#4CAF50',
        warning: '#FF9800',
        danger: '#F44336',
        info: '#2196F3',
        light: '#F5F5F5',
        dark: '#455A64',

      },

      fontFamily:{

        'roboto': ['Roboto','sans-serif'],
        'nunito': ['Nunito Sans','sans-serif'],
        'orbitron': ['Orbitron','sans-serif'],
      },

    },
  },
  plugins: [],
}