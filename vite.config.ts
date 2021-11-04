import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import * as path from 'path'
// TODO(mike): Using imports with the VITE prefix in the website is a bit of an
// inconvenience since everything else uses process.env. We should feed the data
// here somehow.

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh()
  ],
  server: {
    port: 8080
  },
  publicDir: path.resolve(__dirname, './packages/website/public'),
  root: path.resolve(__dirname, './packages/website'),
  build: {
    outDir: path.resolve(__dirname, './dist/website'),
    emptyOutDir: true
  },
  resolve: {
    alias: {
      '@shared': path.resolve(__dirname, './packages/shared'),
      process: 'process/browser',
      stream: 'stream-browserify',
      zlib: 'browserify-zlib',
      util: 'util'
    }
  }
})
