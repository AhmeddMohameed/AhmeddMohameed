/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cairo', 'Tajawal', 'sans-serif'],
      },
      colors: {
        ai: {
          dark: '#0a0a0f',
          darker: '#050508',
          card: '#13141f',
          primary: '#00f0ff',
          secondary: '#ff003c',
          accent: '#8a2be2',
          text: '#e2e8f0',
          muted: '#94a3b8'
        }
      },
      boxShadow: {
        'glow-primary': '0 0 15px rgba(0, 240, 255, 0.5)',
        'glow-accent': '0 0 15px rgba(138, 43, 226, 0.5)',
        'glow-secondary': '0 0 15px rgba(255, 0, 60, 0.5)',
      }
    },
  },
  plugins: [],
}
