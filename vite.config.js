import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    base: '/lorian-flamant-doc-PFE/',
    plugins: [
        tailwindcss(),
    ],
})