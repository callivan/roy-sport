import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  resolve: {
    alias: {
      '@app/*': path.resolve(__dirname, 'src/app/*'),
      '@processes': path.resolve(__dirname, 'src/processes/index.ts'),
      '@pages': path.resolve(__dirname, 'src/pages/index.ts'),
      '@widgets': path.resolve(__dirname, 'src/widgets/index.ts'),
      '@features': path.resolve(__dirname, 'src/features/index.ts'),
      '@entities': path.resolve(__dirname, 'src/entities/index.ts'),
      '@shared': path.resolve(__dirname, 'src/shared/index.ts'),
    },
  },
  plugins: [react(), eslint()],
});
