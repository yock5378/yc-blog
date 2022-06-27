module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      zIndex: {
        '-10': '-10',
      },
      backgroundImage: {
        home: 'url("@/assets/bg-home.jpg")',
        mountain: 'url("@/assets/bg-mountain.jpg")',
        food: 'url("@/assets/bg-food.jpg")',
      },
      minWidth: {
        logo: '12rem',
      },
    },
  },
  plugins: [],
};
