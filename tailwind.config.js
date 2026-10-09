/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brass: {
          light: '#f1d289',
          DEFAULT: '#c69c4d',
          dark: '#85621e',
          shadow: '#4d370e',
        },
        copper: {
          light: '#e0985c',
          DEFAULT: '#b87333',
          dark: '#7e4518',
        },
        bronze: {
          light: '#cfa076',
          DEFAULT: '#a36b3e',
          dark: '#58361b',
        },
        steamAmber: {
          glow: '#ff9d2e',
          bright: '#ffbe5b',
          dim: '#9e5200',
        },
        steampunk: {
          darkest: '#090807',
          dark: '#120f0d',
          card: '#191512',
          cardHover: '#231d18',
          metal: '#2c2520',
          border: '#453526',
          parchment: '#f5ecd5',
          parchmentDark: '#dcd0b1',
          ink: '#271f18',
        }
      },
      fontFamily: {
        cinzel: ['"Cinzel Decorative"', '"Cinzel"', 'serif'],
        celt: ['"Cinzel"', 'serif'],
        schematic: ['"Courier Prime"', 'Courier', 'monospace'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'steampunk-box': '0 10px 30px -5px rgba(0, 0, 0, 0.8), inset 0 1px 2px rgba(241, 210, 137, 0.25), inset 0 -2px 4px rgba(0, 0, 0, 0.8)',
        'steampunk-inset': 'inset 0 3px 8px rgba(0, 0, 0, 0.9), inset 0 0 15px rgba(0, 0, 0, 0.6)',
        'brass-glow': '0 0 25px rgba(198, 156, 77, 0.45)',
        'amber-glow': '0 0 25px rgba(255, 157, 46, 0.55), 0 0 50px rgba(255, 100, 0, 0.2)',
        'copper-glow': '0 0 25px rgba(184, 115, 51, 0.45)',
      },
      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        'gauge-flutter': {
          '0%, 100%': { transform: 'rotate(var(--rotation, 25deg))' },
          '20%': { transform: 'rotate(calc(var(--rotation, 25deg) + 3deg))' },
          '40%': { transform: 'rotate(calc(var(--rotation, 25deg) - 2deg))' },
          '60%': { transform: 'rotate(calc(var(--rotation, 25deg) + 4deg))' },
          '80%': { transform: 'rotate(calc(var(--rotation, 25deg) - 1deg))' },
        },
        'steam-vent': {
          '0%': { opacity: '0.2', transform: 'translateY(0) scale(0.8)' },
          '50%': { opacity: '0.7', transform: 'translateY(-20px) scale(1.2)' },
          '100%': { opacity: '0', transform: 'translateY(-40px) scale(1.5)' },
        },
        'amber-pulse': {
          '0%, 100%': { opacity: '0.7', filter: 'drop-shadow(0 0 8px rgba(255,157,46,0.6))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 20px rgba(255,157,46,0.95))' },
        }
      },
      animation: {
        'spin-slow': 'spin 35s linear infinite',
        'spin-reverse-slow': 'spin-reverse 28s linear infinite',
        'spin-medium': 'spin 18s linear infinite',
        'gauge-flutter': 'gauge-flutter 3.5s ease-in-out infinite',
        'steam-vent': 'steam-vent 2.8s ease-out infinite',
        'amber-pulse': 'amber-pulse 2.5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
