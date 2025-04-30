import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { configDefaults } from 'vitest/config' 
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
    exclude: [...configDefaults.exclude, 'node_modules'],
  },
  theme:{
    extend: {
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-700px 0' },
          '100%': { backgroundPosition: '700px 0' },
        },
      },
      animation: {
        shimmer: 'shimmer 2s infinite linear',
      },
    },
  }
})