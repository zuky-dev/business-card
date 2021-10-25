module.exports = {
    mode: "jit",
    purge: [
        "./*.{html,js}",
        "./assets/vue/*.vue",
        "./assets/vue/routes/*.vue"
    ],
    theme: {
      extend: {
        width: {
          '192': '48rem'
         }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  };