import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { join } from 'node:path'

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  // root: join(__dirname, 'src/ui'),
  root: join(process.cwd(), 'src/ui'),
  base: isProduction ? 'https://example.com/' : '/',
  plugins: [react()],
  define: {
    'process.env': {
    }
  },
  build: {
    outDir: join(process.cwd(), 'dist/ui'),
  },
  server: {
    // port: +process.env.PORT ?? 4000,
  }
})
