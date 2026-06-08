import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    base: '/lorian-flamant-doc-PFE/',
    plugins: [
        tailwindcss(),
    ],
    build: {
        rollupOptions: {
          input: {
              main: 'index.html',
              'tests-utilisateurs': 'pages/tests-utilisateurs.html',
              'html-quality': 'pages/qualite-code.html',
          }
        },
        outDir: 'dist',
    },
})