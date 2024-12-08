import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import packageJson from '../../package.json';

export default defineConfig({
  root: __dirname,
  plugins: [react()],
  base: './',
  build: {
    outDir: '../../dist/renderer/',
  },
  define: {
    __APP_VERSION__: JSON.stringify(packageJson.version),
  },
});
