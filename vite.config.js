import tailwindcss from '@tailwindcss/vite' // ← BU QATOR BO‘LISHI KERAK
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [react(), tailwindcss()],
})
