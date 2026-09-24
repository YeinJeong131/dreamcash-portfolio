import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative asset paths keep the build working on GitHub project pages
  // regardless of the repository name.
  base: './',
})
