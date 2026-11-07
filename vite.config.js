import { copyFileSync, existsSync } from 'fs';
import { resolve } from 'path';
import { defineConfig } from 'vite';

const copyStaticScriptsPlugin = () => ({
  name: 'copy-static-scripts',
  closeBundle() {
    const staticFiles = [
      'equipe.js',
      'projetos.js',
      'transitions.js',
      'intro.js',
      'site.css',
      'LEIA-ME.txt',
    ];
    for (const file of staticFiles) {
      const src = resolve(__dirname, file);
      const dest = resolve(__dirname, 'dist', file);
      if (existsSync(src)) {
        copyFileSync(src, dest);
      }
    }
  },
});

export default defineConfig({
  plugins: [copyStaticScriptsPlugin()],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  preview: {
    host: '0.0.0.0',
    port: 3000,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        principal: resolve(__dirname, 'principal.html'),
        boasVindas: resolve(__dirname, 'boas-vindas.html'),
        sitesEntregues: resolve(__dirname, '6.html'),
        portfolio: resolve(__dirname, '7.html'),
        planos: resolve(__dirname, '8.html'),
        orcamento: resolve(__dirname, '9.html'),
        gabriel: resolve(__dirname, 'gabriel.html'),
        susana: resolve(__dirname, 'susana.html'),
        hubert: resolve(__dirname, 'hubert.html'),
        andrey: resolve(__dirname, 'andrey.html'),
        benjamin: resolve(__dirname, 'benjamin.html'),
        perola: resolve(__dirname, 'perola.html'),
      },
    },
  },
});
