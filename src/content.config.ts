/**
 * Colecciones de contenido (Astro Content Layer).
 * El cliente puede editar los archivos .md de src/content/ sin tocar código.
 *
 *  - servicios: una ficha detallada por servicio (src/content/servicios/<slug>.md)
 *  - politicas: textos legales (src/content/politicas/<slug>.md)
 */
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const servicios = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/servicios' }),
  schema: z.object({
    /** Nombre del servicio (título de la página). */
    titulo: z.string(),
    /** Resumen corto para listados y meta description. */
    resumen: z.string(),
    /** Icono MDI, p. ej. "mdi:cog-outline". */
    icono: z.string().default('mdi:check-circle-outline'),
    /** Orden de aparición (menor primero). */
    orden: z.number().default(99),
    /** Lista de beneficios/características destacadas. */
    beneficios: z.array(z.string()).default([]),
    /** Si es false, no se muestra en el sitio. */
    publicado: z.boolean().default(true),
  }),
});

const politicas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/politicas' }),
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    /** Fecha de la última actualización del documento. */
    actualizado: z.coerce.date(),
  }),
});

export const collections = { servicios, politicas };
