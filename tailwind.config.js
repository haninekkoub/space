/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      boxShadow: {
        'base': '0 0 5px #7F8493',
        'hovred': '0 0 8px #B6A05B',
      },
      colors: {
        'background': '#222831',
        'primary': '#363C45',
        'secondary': '#B6A05B',
      },
      fontFamily: {
        DisketBold: ["DisketBold"],
        DisketRegular: ["DisketRegular"],
      },
    }

  },
  plugins: [],
}
