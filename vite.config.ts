import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['download.svg', 'preview-image.png'],
      manifest: false, // Disable auto-generated manifest since you have manual one
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png}'],
      },
      devOptions: {
        enabled: mode === 'development',
        type: 'module',
        navigateFallback: 'index.html'
      }
    }),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));