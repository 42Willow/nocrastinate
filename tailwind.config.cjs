module.exports = {
  content: ['./src/**/*.{svelte,js,}'],
  plugins: [require("@tailwindcss/typography"),require('daisyui')],
  daisyui: {
    themes: true,
  }
};
