import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [ 
    tailwindcss(),
    react({
      include: ['**/*.jsx', '**/*.js'], // Добавляем обработку .js файлов как JSX
    }),]

})
