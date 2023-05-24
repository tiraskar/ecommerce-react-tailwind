/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sen', 'sans-serif'],
      },
      backgroundImage: {
        'registration-pattern':
          "url('https://img.freepik.com/free-photo/female-shopaholic-standing-boutique-taking-many-hangers-with-clothes-trying-looking-with-dreamy-expression-aside-deciding-what-take-keeping-modern-mobile-phone-other-hand_273609-757.jpg')",
        'login-patter':
          "url('https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?size=626&ext=jpg')",
      },
    },
  },
  plugins: [],
}
