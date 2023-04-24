import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { Mode, plugin } from 'vite-plugin-markdown';

// https://vitejs.dev/config/
export default defineConfig({
  Mode: 'development',
  plugins: [react(), plugin({ mode: [Mode.REACT] })],
});
