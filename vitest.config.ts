import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    projects: ['./ui/vite.config.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
    },
  },
});
