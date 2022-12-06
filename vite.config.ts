import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],
    server: { port: 4500 },
    resolve: {
      alias: { '@': '/src' },
    },

    build: {
      outDir: 'dist',
      emptyOutDir: true,
    },
  }
})

// how to setup environment variables in vite.config.ts
// https://vitejs.dev/guide/env-and-mode.html#env-files
