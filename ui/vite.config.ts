/// <reference types="vitest/config" />

import react from '@vitejs/plugin-react-swc';
import { workspaceRoot } from 'nx/src/devkit-exports';
import { join } from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const uiDir = join(workspaceRoot, 'ui');

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths({
      root: uiDir,
      projects: ['./tsconfig.app.json', './tsconfig.spec.json'],
    }),
  ],
  server: {
    port: 3000,
  },
  dev: {},
  build: {
    outDir: '../../dist/ui',
    assetsDir: '',
    target: 'esnext',
  },
  test: {
    maxWorkers: 2,
    maxConcurrency: 2,
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setupTests.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['node_modules/', 'tests/'],
      thresholds: {
        lines: 0,
        functions: 0,
        branches: 0,
        statements: 0,
      },
    },
  },
});
