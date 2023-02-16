import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [],
  test: {
    globals: true,
    coverage: {
      reporter: ['json-summary', 'text-summary'], // change this property to the desired output
    },
  },
});
