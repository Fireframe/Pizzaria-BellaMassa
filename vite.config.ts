
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Essencial para GitHub Pages (repositórios de subdiretório)
  build: {
    outDir: 'dist',
  }
});
