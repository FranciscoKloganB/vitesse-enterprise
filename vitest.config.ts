import { defineConfig } from 'vitest/config'

// https://vitest.dev/config/
export default defineConfig({
  test: {
    clearMocks: true,
    deps: {
      inline: ['@vue', '@vueuse', 'vue-demi'],
    },
    environment: 'jsdom',
    globals: true,
    include: ['tests/unit/**/*.test.ts'],
    reporters: 'json',
    transformMode: {
      web: [/\.[jt]sx$/],
    },
  },
})
