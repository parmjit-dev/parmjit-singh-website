import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// optional: SVG as components -> import { ReactComponent as Icon } from './icon.svg'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: { '@': '/src' } // match CRA-style absolute imports if you used them
  },
  server: { open: true }
})
