import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/phase2-wk1-codeChallange/",
  plugins: [react()],
})
