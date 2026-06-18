import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
// DEPLOYMENT NOTE:
//   - If deploying to https://USERNAME.github.io/REPOSITORY_NAME/
//     set base to '/REPOSITORY_NAME/'  (e.g. '/bright/')
//   - If deploying to https://USERNAME.github.io/ or a custom domain
//     set base to '/'
// The router uses hash history, so no server-side redirect config is needed.
export default defineConfig({
  plugins: [vue()],
  // Use root by default; override with VITE_BASE_PATH when deploying under a subpath.
  base: process.env.VITE_BASE_PATH || '/',
})

