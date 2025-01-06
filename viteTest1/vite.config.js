import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ghPages } from 'vite-plugin-gh-pages';

// https://vite.dev/config/
export default defineConfig({
  base: "/testVite1/",
  plugins: [
    react(),
    ghPages(),],
  server: {
    port: 3000, // Replace 3000 with your desired port
  },
})
