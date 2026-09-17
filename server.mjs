/**
 * Servidor opcional para Railway (o cualquier host Node).
 * Sirve la carpeta dist/ generada por `npm run build` y redirige
 * www.<dominio> -> dominio canónico con 301.
 *
 * Uso:  npm run build && npm start
 * Variables: PORT (por defecto 3000), SITE_URL (por defecto la de src/config/site.ts)
 */
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import handler from 'serve-handler';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT) || 3000;
// Dominio canónico (puedes sobreescribirlo con la variable SITE_URL en Railway)
const SITE_URL = process.env.SITE_URL || 'https://www.ajvmultiservicios.com';
const canonicalHost = new URL(SITE_URL).host;

const server = http.createServer((req, res) => {
  const host = req.headers.host || '';

  // Redirección www -> dominio canónico (o viceversa según SITE_URL)
  if (host && host !== canonicalHost && host.replace(/^www\./, '') === canonicalHost.replace(/^www\./, '')) {
    res.writeHead(301, { Location: `${SITE_URL}${req.url}` });
    res.end();
    return;
  }

  return handler(req, res, {
    public: path.join(__dirname, 'dist'),
    cleanUrls: true,
    trailingSlash: true,
    directoryListing: false,
    headers: [
      {
        source: '_astro/**',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '**',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ],
  });
});

server.listen(PORT, () => {
  console.log(`Sirviendo dist/ en http://localhost:${PORT} (canónico: ${SITE_URL})`);
});
