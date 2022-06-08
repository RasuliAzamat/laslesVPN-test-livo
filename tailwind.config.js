module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        danger: '#F53838',
        gray: '#4F5665',
        dark: '#0B132A',
        success: '#2FAB73',
        gold: '#FEA250',
      },
      fontFamily: {
        mainFamily: ['Rubik', 'sans-serif'],
      },
      maxWidth: {
        appContainer: '1440px',
      },
    },
  },
  plugins: [],
}
