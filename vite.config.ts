import * as path from 'path'
import {defineConfig} from 'vite';
import viteReact from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [viteReact()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})