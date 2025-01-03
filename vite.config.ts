import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import Sitemap from 'vite-plugin-sitemap';
import fs from 'fs-extra';

const ensureFiles = () => {
  return {
    name: 'ensure-special-files',
    closeBundle: async () => {
      const files = {
        'CNAME': 'sergio-pinto.com',
        'google59a3430da8619343.html': 'google-site-verification: google59a3430da8619343.html',
        'robots.txt': `User-agent: *
Allow: /
Sitemap: https://sergio-pinto.com/sitemap.xml`
      };

      for (const [filename, content] of Object.entries(files)) {
        const filepath = `dist/${filename}`;
        await fs.writeFile(filepath, content);
        console.log(`Created ${filepath}`);
      }
    }
  };
};

function getPages() {
  return [
    '/'
  ];
}

export default defineConfig(({ mode }) => ({
  base: '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    Sitemap({
      hostname: 'https://sergio-pinto.com',
      dynamicRoutes: getPages(),
      outDir: 'dist',
      changefreq: 'daily',
      priority: 1.0,
      lastmod: new Date(),
      readable: true
    }),
    ensureFiles()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));