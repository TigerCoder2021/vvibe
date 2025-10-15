import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
          '@components': path.resolve(__dirname, './src/components'),
          '@screens': path.resolve(__dirname, './src/components/screens'),
          '@hooks': path.resolve(__dirname, './src/hooks'),
          '@services': path.resolve(__dirname, './src/services'),
          '@store': path.resolve(__dirname, './src/store'),
          '@types': path.resolve(__dirname, './src/types'),
          '@utils': path.resolve(__dirname, './src/utils'),
          '@constants': path.resolve(__dirname, './src/constants'),
          '@assets': path.resolve(__dirname, './src/assets'),
        }
      }
    };
});
