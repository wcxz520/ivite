import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import {resolve} from 'path'
import { inspectorServer } from 'react-dev-inspector/plugins/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), inspectorServer()],
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') },
      { find: '@pages', replacement: resolve(__dirname, 'src/pages') },
      { find: '@components', replacement: resolve(__dirname, 'src/components') },
      { find: '@styles', replacement: resolve(__dirname, 'src/styles') },
      { find: '@wrappers', replacement: resolve(__dirname, 'src/wrappers') },
    ]
  },
  server: {
    // port: 8000,
    proxy: {
      '/apis/': {
        target: 'https://test.powertrade.lumicable.cn/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/apis/, '')
      },
    }
  },
})
