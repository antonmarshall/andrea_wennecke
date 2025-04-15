
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Dynamic base path based on the environment
const getBase = () => {
  // In GitHub Pages environment, use the repository name as base
  // In Lovable or development environment, use root path
  return process.env.NODE_ENV === 'production' && !process.env.LOVABLE ? '/andrea-wennecke/' : '/';
};

export default defineConfig({
  base: getBase(),
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    port: 8080
  }
});
