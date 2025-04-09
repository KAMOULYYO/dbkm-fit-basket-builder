import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Spécifie la base pour GitHub Pages (IMPORTANT !)
  base: "/dbkm-fit-basket-builder/",

  // Configuration du serveur local
  server: {
    host: "::",     // accessible sur le réseau local
    port: 8080,     // port de développement
  },

  // Plugins utilisés
  plugins: [
    react(), // plugin React avec SWC
    mode === "development" && componentTagger(), // tagger uniquement en dev
  ].filter(Boolean), // enlève les `false`

  // Alias pour raccourcir les imports
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // permet d’utiliser "@/monfichier"
    },
  },
}));
