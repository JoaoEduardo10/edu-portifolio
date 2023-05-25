import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: [".test/setup.ts"],
    include: ["**/(*.)?{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    exclude: ["node_modules", "dist", ".idea", ".git", ".cache"],
    coverage: {
      provider: "c8",
      reporter: ["text", "json", "html"],
    },
  },
});
