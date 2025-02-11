import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  content: ["./index.html", "./src/**/*.{jsx.js}"],
  theme: {
    extend: {
      fontFamiily: {
        inter: ['Inter', 'serif'],
      }
    }
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: "/PortfolioReact/",
})
