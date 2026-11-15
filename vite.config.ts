import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base должен совпадать с именем репозитория на GitHub:
// репозиторий personal-site -> https://<username>.github.io/personal-site/
export default defineConfig({
  base: '/personal-site/',
  plugins: [react(), tailwindcss()],
})
