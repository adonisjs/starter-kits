import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import adonisjs from '@adonisjs/vite/client'

export default defineConfig({
  plugins: [
    vue(),
    adonisjs({ entryPoints: ['inertia/app.ts'], reload: ['resources/views/**/*.edge'] }),
  ],

  resolve: {
    alias: {
      '~/': `${import.meta.dirname}/inertia/`,
      '@generated': `${import.meta.dirname}/.adonisjs/client/`,
    },
  },

  server: {
    watch: {
      ignored: ['**/storage/**', '**/tmp/**'],
    },
  },
})
