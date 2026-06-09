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
              'opquast': 'pages/opquast.html',
              'accessibility' : 'pages/performance-et-accessibilite.html',
              'perf-server': 'pages/performance-serveur.html',
              'tests' : 'pages/tests.html',
              'javascript' : 'pages/javascript.html'
          }
        },
        outDir: 'dist',
    },
})