import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@atoms',
        replacement: path.resolve(__dirname, 'src/components/atoms')
      },
      {
        find: '@molecules',
        replacement: path.resolve(__dirname, 'src/components/molecules')
      },
      {
        find: '@organisms',
        replacement: path.resolve(__dirname, 'src/components/organisms')
      },
      {
        find: '@templates',
        replacement: path.resolve(__dirname, 'src/components/templates')
      },
      {
        find: '@lib',
        replacement: path.resolve(__dirname, 'src/lib')
      },
      {
        find: '@store',
        replacement: path.resolve(__dirname, 'src/store')
      }
    ]
  }
});
