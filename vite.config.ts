import { defineConfig, UserConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPPaths()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/tests/setup.ts',
    coverage: {
      reporter: ['cobertura', 'text'],
      exclude: [
        'src/tests/*',
        'src/i18n.ts',
        'src/main.tsx',
        'src/vite.config.ts',
        '**/*.test.tsx',
        '**/*.test.ts',
        'eslint.config.js',
        'vite.config.ts',
        'src/vite-env.d.ts',
        'src/components/ui/*',
      ]
    }
  },
} as UserConfig)
