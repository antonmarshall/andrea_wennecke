
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { componentTagger } from "lovable-tagger";

// Dynamic base path based on the environment
const getBase = () => {
  // In GitHub Pages environment, use the repository name as base
  // In Lovable or development environment, use root path
  return process.env.NODE_ENV === 'production' && !process.env.LOVABLE ? '/andrea-wennecke/' : '/';
};

export default defineConfig(({ mode }) => ({
  base: getBase(),
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
}));
