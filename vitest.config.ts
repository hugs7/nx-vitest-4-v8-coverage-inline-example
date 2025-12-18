import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    projects: ['./ui/vite.config.ts'],
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'html', 'lcov'],
    },
  },
});
