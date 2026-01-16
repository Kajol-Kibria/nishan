/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'host-grotesk': ['var(--font-host-grotesk)', 'sans-serif'],
        'fustat': ['var(--font-fustat)', 'sans-serif'],
      },
      colors: {
        primary: '#063231',
        secondary: '#cbff54',
      },
      animation: {
        'pulse': 'pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

