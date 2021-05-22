module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        amazon_blue : {
          light : "#232f3E",
          DEFAULT : "#121921"
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
