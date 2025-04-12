import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPPaths()],
})
