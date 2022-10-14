/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    animation: {
      slideshow: 'slideshow 1s ease-out',
    },
    keyframes: {
      slideshow: {
        '0%': {
          opacity: 0,
        },
        '100%': {
          opacity: 1,
        },
      },
    },
  },
  plugins: []
}
