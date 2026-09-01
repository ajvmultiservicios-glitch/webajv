/**
 * =====================================================================
 *  CONFIGURACIÓN CENTRAL DEL SITIO — ÚNICA FUENTE DE DATOS DE LA EMPRESA
 * =====================================================================
 *  Todos los componentes y páginas leen de este archivo. Para cambiar
 *  un teléfono, una dirección, una red social o un servicio, edita aquí
 *  y el cambio se refleja en todo el sitio.
 *
 *  Los valores marcados con "TODO:" son provisionales y deben
 *  reemplazarse con la información real de la empresa.
 * =====================================================================
 */

// ---------------------------------------------------------------------
//  Tipos (interfaces) — describen la forma de cada bloque de datos
// ---------------------------------------------------------------------

/** Enlace de navegación (menú principal y pie de página). */
export interface NavItem {
  /** Texto visible del enlace. */
  label: string;
  /** Ruta interna con barras, p. ej. "/nosotros/". */
  href: string;
}

/** Red social de la empresa. */
export interface RedSocial {
  /** Nombre de la red (se usa como texto accesible). */
  nombre: string;
  /** URL completa del perfil. */
  url: string;
  /** Nombre del icono MDI (astro-icon), p. ej. "mdi:facebook". */
  icono: string;
}

/** Sede / local físico de la empresa. */
export interface Sede {
  /** Nombre de la sede, p. ej. "Sede principal". */
  nombre: string;
  /** Dirección completa (calle, número, distrito). */
  direccion: string;
  /** Ciudad y región/departamento. */
  ciudad: string;
  /** País. */
  pais: string;
  /** Teléfono fijo o celular de esta sede (formato legible). */
  telefono: string;
  /** Horario de atención en texto libre. */
  horario: string;
  /** URL "embed" de Google Maps (Compartir > Insertar un mapa > src del iframe). */
  mapaEmbed: string;
  /** Enlace para abrir la ubicación en Google Maps (botón "Cómo llegar"). */
  mapaLink: string;
  /** Coordenadas para el JSON-LD (opcional). */
  coordenadas?: { lat: number; lng: number };
}

/** Servicio que ofrece la empresa (resumen para tarjetas; el detalle vive en src/content/servicios). */
export interface Servicio {
  /** Identificador único; debe coincidir con el nombre del archivo .md en src/content/servicios. */
  slug: string;
  /** Nombre del servicio. */
  titulo: string;
  /** Descripción corta (1-2 líneas) para tarjetas. */
  descripcion: string;
  /** Icono MDI, p. ej. "mdi:wrench". */
  icono: string;
}

/** Producto o repuesto que comercializa la empresa. */
export interface Producto {
  /** Identificador único (para anclas y claves). */
  id: string;
  /** Nombre del producto. */
  nombre: string;
  /** Categoría para agrupar/filtrar. */
  categoria: string;
  /** Descripción breve. */
  descripcion: string;
  /** Nombre de archivo de la imagen dentro de src/assets/productos/ (opcional). */
  imagen?: string;
  /** Icono MDI de respaldo cuando no hay imagen. */
  icono: string;
}

/** Cliente para el carrusel de logos. */
export interface Cliente {
  /** Nombre de la empresa cliente (texto alternativo del logo). */
  nombre: string;
  /** Nombre de archivo del logo dentro de src/assets/clientes/ (opcional). */
  logo?: string;
}

/** Foto de galería. */
export interface FotoGaleria {
  /** Nombre de archivo dentro de src/assets/galeria/. */
  archivo: string;
  /** Texto alternativo descriptivo (accesibilidad y SEO). */
  alt: string;
  /** Categoría para filtrar en la galería. */
  categoria: string;
}

/** Cifra destacada para la franja de estadísticas animadas. */
export interface Cifra {
  /** Valor numérico final de la animación. */
  valor: number;
  /** Sufijo que se muestra después del número, p. ej. "+", "%", " años". */
  sufijo?: string;
  /** Etiqueta descriptiva. */
  etiqueta: string;
  /** Icono MDI. */
  icono: string;
}

/** Valor corporativo (página Nosotros). */
export interface Valor {
  titulo: string;
  descripcion: string;
  icono: string;
}

/** Hito de la línea de tiempo (historia de la empresa). */
export interface Hito {
  /** Año del hito. */
  anio: string;
  titulo: string;
  descripcion: string;
}

/** Pregunta frecuente. */
export interface Pregunta {
  pregunta: string;
  respuesta: string;
}

/** Estructura completa de la configuración del sitio. */
export interface SiteConfig {
  /** Razón social / nombre completo de la empresa. */
  nombre: string;
  /** Nombre corto comercial (se usa en el header, títulos, etc.). */
  nombreCorto: string;
  /** Sigla o acrónimo. */
  sigla: string;
  /** URL canónica de producción, sin barra final. */
  url: string;
  /** Eslogan breve (aparece en el hero). */
  eslogan: string;
  /** Lema o frase institucional (aparece en footer / nosotros). */
  lema: string;
  /** Descripción general de la empresa (meta description por defecto, máx. ~160 caracteres). */
  descripcion: string;
  /** Palabras clave SEO. */
  keywords: string[];
  /** Idioma del sitio (atributo lang). */
  idioma: string;
  /** Año de fundación. */
  anioFundacion: number;
  /** RUC / identificación tributaria (opcional). */
  ruc?: string;
  /** Teléfonos de contacto (formato legible). */
  telefonos: string[];
  /** WhatsApp: número en formato internacional sin "+" ni espacios, y mensaje predeterminado. */
  whatsapp: {
    numero: string;
    mensaje: string;
  };
  /** Correos electrónicos de contacto. */
  emails: string[];
  /** Redes sociales. */
  redes: RedSocial[];
  /** Sedes físicas. */
  sedes: Sede[];
  /** Navegación principal del header. */
  navegacion: NavItem[];
  /** Enlaces legales del footer (políticas). */
  navegacionLegal: NavItem[];
  /** Servicios principales. */
  servicios: Servicio[];
  /** Productos / repuestos. */
  productos: Producto[];
  /** Clientes destacados (logos). */
  clientes: Cliente[];
  /** Fotos de la galería. */
  galeria: FotoGaleria[];
  /** Cifras para la franja de estadísticas. */
  cifras: Cifra[];
  /** Misión, visión y valores. */
  mision: string;
  vision: string;
  valores: Valor[];
  /** Historia (línea de tiempo). */
  historia: Hito[];
  /** Preguntas frecuentes. */
  faq: Pregunta[];
  /** Video institucional (ID de YouTube). Si está vacío no se muestra la sección. */
  videoYoutubeId: string;
  /** Endpoint del formulario de contacto (Formspree, Getform, etc.). Vacío = usa mailto. */
  formEndpoint: string;
}

// ---------------------------------------------------------------------
//  Datos de la empresa
// ---------------------------------------------------------------------

export const SITE: SiteConfig = {
  nombre: 'AJV Multiservicios e Ingeniería',
  nombreCorto: 'AJV',
  sigla: 'AJV',
  // TODO: confirmar dominio final (se asume el de los correos del brochure)
  url: 'https://www.ajvingenieria.com',
  eslogan: 'Ingeniería, fabricación y montaje metalmecánico para la industria y la minería',
  lema: 'Calidad, costo y tiempo, garantizando CERO ACCIDENTES.',
  descripcion:
    'AJV Multiservicios e Ingeniería: diseño, fabricación, montaje, reparación y mecanizado de estructuras y componentes metalmecánicos para el sector industrial y minero del Perú.',
  keywords: [
    'AJV',
    'AJV Multiservicios e Ingeniería',
    'metalmecánica',
    'estructuras metálicas',
    'blindaje de cucharones',
    'blindaje de blade',
    'mecanizado in situ',
    'grating metálico',
    'montaje de estructuras',
    'minería',
    'Perú',
  ],
  idioma: 'es',
  // TODO: confirmar año de fundación real
  anioFundacion: 2015,
  // TODO: RUC real (déjalo como undefined si no quieres mostrarlo)
  ruc: undefined,

  telefonos: ['936 763 532', '987 180 419'],
  whatsapp: {
    numero: '51936763532',
    mensaje: 'Hola AJV, quisiera información sobre sus servicios metalmecánicos.',
  },
  emails: [
    'administracion@ajvingenieria.com',
    'operaciones@ajvingenieria.com',
    'logistica@ajvingenieria.com',
  ],

  // TODO: URLs reales de redes sociales (elimina las que no apliquen)
  redes: [
    { nombre: 'Facebook', url: 'https://facebook.com/', icono: 'mdi:facebook' },
    { nombre: 'LinkedIn', url: 'https://linkedin.com/', icono: 'mdi:linkedin' },
  ],

  sedes: [
    {
      nombre: 'Taller y oficina principal',
      direccion: 'Av. Berlín Nro. 303, P.J. Hunter',
      ciudad: 'Arequipa',
      pais: 'Perú',
      telefono: '936 763 532',
      horario: 'Lunes a viernes: 8:00 a.m. – 6:00 p.m. · Sábados: 8:00 a.m. – 1:00 p.m.',
      mapaEmbed:
        'https://maps.google.com/maps?q=Av.+Berlin+303,+Jacobo+Hunter,+Arequipa,+Peru&z=16&hl=es&output=embed',
      mapaLink: 'https://maps.google.com/?q=Av.+Berlin+303,+Jacobo+Hunter,+Arequipa,+Perú',
    },
  ],

  navegacion: [
    { label: 'Inicio', href: '/' },
    { label: 'Nosotros', href: '/nosotros/' },
    { label: 'Servicios', href: '/servicios/' },
    { label: 'Galería', href: '/galeria/' },
    { label: 'Equipos', href: '/equipos/' },
    { label: 'Contacto', href: '/contacto/' },
  ],

  navegacionLegal: [
    { label: 'Política de privacidad', href: '/politicas/privacidad/' },
    { label: 'Términos y condiciones', href: '/politicas/terminos/' },
    { label: 'Libro de reclamaciones', href: '/politicas/libro-de-reclamaciones/' },
  ],

  // El detalle de cada servicio está en src/content/servicios/<slug>.md
  servicios: [
    {
      slug: 'diseno',
      titulo: 'Diseño e ingeniería',
      descripcion: 'Ingeniería de precisión de estructuras metálicas con software Tekla y ANSYS.',
      icono: 'mdi:drawing-box',
    },
    {
      slug: 'fabricacion',
      titulo: 'Fabricación',
      descripcion: 'Producción de estructuras metalmecánicas con maquinaria avanzada y soldadura especializada.',
      icono: 'mdi:factory',
    },
    {
      slug: 'montaje',
      titulo: 'Montaje',
      descripcion: 'Montaje de estructuras y coberturas bajo estrictos estándares de seguridad y calidad.',
      icono: 'mdi:crane',
    },
    {
      slug: 'reparacion',
      titulo: 'Reparación y blindaje',
      descripcion: 'Recuperación, blindaje y reconstrucción de cucharones, blades y componentes mineros.',
      icono: 'mdi:shield-half-full',
    },
    {
      slug: 'mecanizado',
      titulo: 'Mecanizado',
      descripcion: 'Mecanizado de piezas industriales, barrenado in situ y corte por plasma CNC.',
      icono: 'mdi:cog-sync-outline',
    },
  ],

  // Proyectos / trabajos destacados (imágenes en src/assets/productos/)
  productos: [
    {
      id: 'blade-844h',
      nombre: 'Reparación y blindaje de blade – Cargador 844H',
      categoria: 'Reparación y blindaje',
      descripcion: 'Blindaje interior y exterior, control de soldadura en uniones, cambio de GETs y protectores laterales, control de calidad.',
      imagen: 'blade-cargador-844h.jpg',
      icono: 'mdi:shield-half-full',
    },
    {
      id: 'blade-d11t',
      nombre: 'Blindaje de blade – Bulldozer D11T',
      categoria: 'Reparación y blindaje',
      descripcion: 'Blindaje interior y exterior, refuerzo de cartelas en parrilla superior, cambio de GETs y protectores laterales.',
      imagen: 'blade-bulldozer-d11t.jpg',
      icono: 'mdi:shield-half-full',
    },
    {
      id: 'cucharon-390f',
      nombre: 'Reparación y blindaje de cucharón – Excavadora 390F',
      categoria: 'Reparación y blindaje',
      descripcion: 'Blindaje interior y exterior, control de soldadura, cambio de GETs, barrenado de alojamientos y control de calidad.',
      imagen: 'cucharon-excavadora-390f.jpg',
      icono: 'mdi:shield-half-full',
    },
    {
      id: 'estructuras',
      nombre: 'Fabricación de estructuras',
      categoria: 'Fabricación',
      descripcion: 'Estructuras metálicas pesadas fabricadas en taller con control dimensional y acabado anticorrosivo.',
      imagen: 'fabricacion-estructuras.jpg',
      icono: 'mdi:factory',
    },
    {
      id: 'plataformas',
      nombre: 'Fabricación de plataformas con barandas',
      categoria: 'Fabricación',
      descripcion: 'Plataformas de acceso y barandas fabricadas y montadas según norma.',
      imagen: 'plataformas-barandas.jpg',
      icono: 'mdi:stairs',
    },
    {
      id: 'grating',
      nombre: 'Fabricación de grating metálico',
      categoria: 'Fabricación',
      descripcion: 'Parrillas metálicas (piso grating) para plantas industriales y mineras.',
      imagen: 'grating-metalico.jpg',
      icono: 'mdi:grid',
    },
    {
      id: 'coberturas',
      nombre: 'Estructuras con cobertura',
      categoria: 'Diseño y montaje',
      descripcion: 'Naves industriales y coberturas metálicas: desde el modelo 3D hasta el montaje en obra.',
      imagen: 'nave-industrial.jpg',
      icono: 'mdi:warehouse',
    },
    {
      id: 'tijerales',
      nombre: 'Montaje de tijerales y coberturas',
      categoria: 'Diseño y montaje',
      descripcion: 'Montaje de tijerales metálicos para coberturas de gran luz.',
      imagen: 'tijerales-cobertura.jpg',
      icono: 'mdi:crane',
    },
    {
      id: 'mecanizado-insitu',
      nombre: 'Mecanizado y barrenado in situ',
      categoria: 'Mecanizado',
      descripcion: 'Recuperación de alojamientos y ejes mediante mecanizado en campo con equipos portátiles.',
      imagen: 'mecanizado-in-situ.jpg',
      icono: 'mdi:cog-sync-outline',
    },
  ],

  clientes: [
    { nombre: 'HP&K', logo: 'hpk.png' },
    { nombre: 'ICC Repuestos, Equipos y Servicios', logo: 'icc.png' },
    { nombre: 'Unimaq — The Cat Rental Store (Ferreycorp)', logo: 'unimaq.png' },
    { nombre: 'Metso', logo: 'metso.png' },
  ],

  galeria: [
    { archivo: 'soldadura-estructuras.jpg', alt: 'Soldador de AJV fabricando estructura metálica', categoria: 'Fabricación' },
    { archivo: 'fabricacion-estructuras.jpg', alt: 'Estructuras metálicas pesadas fabricadas por AJV', categoria: 'Fabricación' },
    { archivo: 'blade-cargador-844h.jpg', alt: 'Blade de cargador 844H reparado y blindado', categoria: 'Reparación y blindaje' },
    { archivo: 'blade-bulldozer-d11t.jpg', alt: 'Blade de bulldozer D11T con blindaje', categoria: 'Reparación y blindaje' },
    { archivo: 'cucharon-excavadora-390f.jpg', alt: 'Cucharón de excavadora 390F reparado y blindado', categoria: 'Reparación y blindaje' },
    { archivo: 'plataformas-barandas.jpg', alt: 'Plataforma metálica con barandas', categoria: 'Fabricación' },
    { archivo: 'grating-metalico.jpg', alt: 'Fabricación de grating metálico en taller', categoria: 'Fabricación' },
    { archivo: 'diseno-estructura-3d.jpg', alt: 'Modelo 3D de nave industrial diseñado en Tekla', categoria: 'Diseño' },
    { archivo: 'nave-industrial.jpg', alt: 'Nave industrial con estructura metálica y cobertura', categoria: 'Montaje' },
    { archivo: 'montaje-estructura.jpg', alt: 'Montaje de estructura metálica en obra', categoria: 'Montaje' },
    { archivo: 'tijerales-cobertura.jpg', alt: 'Tijerales metálicos para cobertura', categoria: 'Montaje' },
    { archivo: 'mecanizado-ejes.jpg', alt: 'Mecanizado de ejes y alojamientos', categoria: 'Mecanizado' },
    { archivo: 'mecanizado-in-situ.jpg', alt: 'Barrenado in situ con equipo portátil', categoria: 'Mecanizado' },
    { archivo: 'cargador-frontal.jpg', alt: 'Cargador frontal en operación minera', categoria: 'Minería' },
  ],

  // TODO: cifras reales
  cifras: [
    { valor: 10, sufijo: '+', etiqueta: 'Años de experiencia', icono: 'mdi:calendar-check' },
    { valor: 150, sufijo: '+', etiqueta: 'Proyectos ejecutados', icono: 'mdi:briefcase-check-outline' },
    { valor: 0, sufijo: '', etiqueta: 'Accidentes: nuestra meta permanente', icono: 'mdi:shield-check-outline' },
    { valor: 100, sufijo: '%', etiqueta: 'Compromiso con calidad, costo y tiempo', icono: 'mdi:clock-check-outline' },
  ],

  mision:
    'Diseñar, fabricar y proveer lo mejor en infraestructura de metal para cumplir con las expectativas de nuestros clientes, ayudar a nuestro equipo a crecer y contribuir al bienestar social.',
  vision:
    'Ser reconocidos como la principal empresa del país en ofrecer servicios de ingeniería, fabricación, montaje y mantenimiento de estructuras metalmecánicas, siempre bajo estrictos estándares de seguridad, calidad y regulaciones.',
  valores: [
    { titulo: 'Ética', descripcion: 'Actuamos con honestidad moral, consideración, fidelidad y profesionalismo.', icono: 'mdi:scale-balance' },
    { titulo: 'Honestidad', descripcion: 'Cualidad que nos conduce a pensar, sentir y actuar en relación con nuestros clientes.', icono: 'mdi:handshake-outline' },
    { titulo: 'Excelencia', descripcion: 'Nos comprometemos con la obligación de esforzarnos por innovar y mejorar constantemente.', icono: 'mdi:medal-outline' },
    { titulo: 'Orientación al cliente', descripcion: 'Dedicación en cada etapa con nuestros clientes.', icono: 'mdi:account-heart-outline' },
    { titulo: 'Seguridad y salud', descripcion: 'Nuestro personal es lo más valioso que tenemos; cuidamos su salud y bienestar porque son nuestro recurso principal.', icono: 'mdi:shield-check-outline' },
  ],

  // TODO: historia real (hitos provisionales basados en el brochure)
  historia: [
    { anio: '2015', titulo: 'Inicio de operaciones', descripcion: 'AJV nace como empresa de servicios metalmecánicos para la industria y la minería.' },
    { anio: '2018', titulo: 'Ingeniería de precisión', descripcion: 'Incorporamos software Tekla y ANSYS para el diseño de estructuras metálicas.' },
    { anio: '2021', titulo: 'Reparación y blindaje', descripcion: 'Consolidamos la línea de reparación y blindaje de componentes de maquinaria pesada.' },
    { anio: '2024', titulo: 'Mecanizado in situ', descripcion: 'Ampliamos el servicio de mecanizado y barrenado en campo con equipos portátiles.' },
    { anio: '2026', titulo: 'Presente', descripcion: 'Atendemos a las principales empresas mineras e industriales del país con la meta de CERO ACCIDENTES.' },
  ],

  faq: [
    {
      pregunta: '¿Qué servicios metalmecánicos ofrece AJV?',
      respuesta: 'Diseño e ingeniería (Tekla y ANSYS), fabricación y montaje de estructuras metálicas y coberturas, reparación y blindaje de componentes de maquinaria pesada (cucharones, blades, tolvas), mecanizado de piezas industriales, barrenado in situ, corte por plasma CNC y fabricación de grating, plataformas y barandas.',
    },
    {
      pregunta: '¿Trabajan en unidades mineras y plantas industriales?',
      respuesta: 'Sí. Nuestro personal está capacitado en planta de concentración, operaciones y mantenimiento mecánico, y contamos con políticas, procedimientos y protocolos verificados en diversas plantas e industrias.',
    },
    {
      pregunta: '¿Cómo solicito una cotización?',
      respuesta: 'Escríbenos por WhatsApp, completa el formulario de contacto o envía tu requerimiento a administracion@ajvingenieria.com. Respondemos en menos de 24 horas hábiles.',
    },
    {
      pregunta: '¿Cómo garantizan la seguridad en sus trabajos?',
      respuesta: 'Cumplimos con todos los parámetros y requisitos de evaluación, seguridad laboral y supervisión de calidad, con la meta permanente de CERO ACCIDENTES.',
    },
    {
      pregunta: '¿Realizan trabajos de mecanizado en campo?',
      respuesta: 'Sí, contamos con equipos portátiles para barrenado y mecanizado in situ, lo que evita desmontar y trasladar componentes de gran tamaño.',
    },
    {
      pregunta: '¿Emiten factura electrónica?',
      respuesta: 'Sí, emitimos facturas electrónicas de acuerdo con la normativa vigente.',
    },
  ],

  // TODO: ID del video de YouTube institucional (vacío = no se muestra)
  videoYoutubeId: '',

  // TODO: endpoint de Formspree/Getform u otro (vacío = el formulario abre el correo con mailto)
  formEndpoint: '',
};

/** Enlace directo de WhatsApp ya armado con el mensaje predeterminado. */
export const WHATSAPP_URL = `https://wa.me/${SITE.whatsapp.numero}?text=${encodeURIComponent(SITE.whatsapp.mensaje)}`;

/** Devuelve la URL absoluta de una ruta interna (para canonical / Open Graph). */
export function absoluta(ruta: string): string {
  return new URL(ruta, SITE.url).toString();
}
