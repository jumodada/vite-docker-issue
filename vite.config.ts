import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    host: true,
    port: 8080,
    strictPort: true,
    hmr:{
      clientPort: 8080,
      port: 8081
    },
    watch: {
      usePolling: true
    }
  }
})
