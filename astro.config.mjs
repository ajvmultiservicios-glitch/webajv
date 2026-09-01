// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import { SITE } from './src/config/site.ts';

// https://astro.build/config
export default defineConfig({
  // URL canónica del sitio (se toma de la única fuente de datos: src/config/site.ts)
  site: SITE.url,
  // Sitio 100 % estático: HTML pre-renderizado, sin servidor ni base de datos
  output: 'static',
  build: {
    // Genera /nosotros/index.html para obtener URLs limpias (/nosotros/)
    format: 'directory',
  },
  trailingSlash: 'always',
  // La antigua página /proyectos/ se fusionó con /servicios/
  redirects: {
    '/proyectos/': '/servicios/',
    // La antigua /equipo/ pasó a ser /equipos/ (página de maquinaria)
    '/equipo/': '/equipos/',
  },
  integrations: [
    sitemap(),
    icon({
      // Solo se incluyen los iconos MDI usados; se inyectan como SVG inline (sin CDN)
      include: {
        mdi: ['*'],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
