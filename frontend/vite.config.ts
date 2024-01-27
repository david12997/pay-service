import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define:{
    'process.env': {
      //'API_URL': 'http://localhost:3001/api/v1',
      'API_URL': 'https://paylinks.apps.aipus.co/api/v1',
      'GOOGLE_XCODE': '938285238',
    }
  }
})
