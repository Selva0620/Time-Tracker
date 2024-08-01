import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Your other aliases
      'bootstrap': 'bootstrap/dist/css/bootstrap.min.css'
    }
  }
})
