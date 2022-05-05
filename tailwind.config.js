module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        newGray: {
          50: '#DBDBDB',
          700: '#1E1E1E'
        },
        newIndigo: {
          400: '#63BA90'
        }
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: ['@tailwindcss/forms'],
}