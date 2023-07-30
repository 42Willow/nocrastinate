module.exports = {
  content: ['./src/**/*.{svelte,js,}'],
  plugins: [require('daisyui')],
  daisyui: {
    prefix: "daisy-", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
  },
};
