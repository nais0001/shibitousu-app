import { defineConfig } from 'vite'

export default defineConfig({
  define: {
    '__DEFINES__': '{}',
    'global.__DEFINES__': '{}',
    'process.env': {}
  }
})