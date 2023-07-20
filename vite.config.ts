import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fileLoader from 'file-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
     react(),
    fileLoader(),
  ],
});
