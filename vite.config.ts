import { defineConfig, UserConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPPaths()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/tests/setup.js'
  }
} as UserConfig)
