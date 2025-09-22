/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Tottenham Colors
        spurs: {
          navy: '#132257',
          blue: '#1a237e',
          silver: '#c0c0c0',
          white: '#ffffff',
        },
        // French Flag Colors
        french: {
          blue: '#0055a4',
          white: '#ffffff',
          red: '#ef4135',
        },
        // Primary brand colors
        primary: {
          50: '#f0f4ff',
          100: '#e0e7ff',
          500: '#132257',
          600: '#0f1a45',
          700: '#0d1538',
          800: '#0a112a',
          900: '#070d1d',
        },
        accent: {
          blue: '#0055a4',
          red: '#ef4135',
          silver: '#c0c0c0',
        }
      },
      fontFamily: {
        // Primary UI/body font
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'Apple Color Emoji', 'Segoe UI Emoji'],
        // Display for H1/H2/H3, hero, big numbers
        display: ['Sora', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
