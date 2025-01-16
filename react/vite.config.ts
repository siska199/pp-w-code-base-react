import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react(), svgr(), tsconfigPaths()],
  build: {
    sourcemap: true,
  },
  optimizeDeps: {
    exclude: ['js-big-decimal'],
  },
  server : {
    host: '0.0.0.0', 
    port: 5000,  
    watch : {
      usePolling : true
    }
  },
  
})