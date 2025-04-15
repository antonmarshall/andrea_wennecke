import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Der base-Pfad gibt an, unter welchem Unterverzeichnis deine App gehostet wird.
  // In deinem Fall: https://<username>.github.io/andrea-wennecke/
  base: '/andrea-wennecke/',
  plugins: [react()]
});
