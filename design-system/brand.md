# Brand & dirección creativa

> Este archivo lo llena la skill `brainstorming` en la fase 1 y lo leen
> todas las skills siguientes antes de tomar decisiones. Si vas a empezar
> un proyecto nuevo, bórralo o muévelo a un archivo aparte primero —no
> arrastres el brief de un proyecto anterior sin darte cuenta.

## Cliente

**G&S Conexiones Estratégicas** — empresa familiar de transporte de
mercancía, con más de 37 años de experiencia logística, fundada por Gentil y Santiago (padre e
hijo). Base de operaciones en Antioquia (área metropolitana y oriente);
cobertura nacional bajo requerimiento. Cliente principal actual: ~2500
toneladas/mes de botellas PET transportadas (cadena de reciclaje).

**Eslogan:** "Conectamos tu negocio, optimizamos tu camino."

## Big idea

G&S es el eslabón logístico familiar que mantiene en movimiento la
economía circular del PET en Antioquia — cada tonelada transportada es
una tonelada que no termina en un relleno sanitario.

## Audiencia

- Empresas industriales, manufactureras y gestoras de residuos/reciclaje
  en Antioquia (y ocasionalmente a nivel nacional).
- Decisión tomada por gerencia de logística/operaciones.
- Intención tibia: buscan un transportista confiable y con trayectoria,
  no necesariamente el más barato.

## Tono de voz

Sólido, cercano, técnico, confiable, comprometido.

Ejemplo de titular: *"37 años moviendo lo que la industria no puede
detener."*

## Mapa del sitio

<!-- Estructura aprobada por el cliente — sustituye el orden de 7 beats
por defecto de landing-page-storytelling. Fase 2 (visual-hierarchy)
debe remapear esta lista a componentes .astro concretos, incluyendo
Header y Footer como piezas nuevas fuera de la lista de 7 beats. -->

| Sección | Propósito de conversión |
|---|---|
| Header | Accesos directos (navegación, logo, atajo a WhatsApp) |
| Hero | Propuesta de valor (eslogan) + CTA principal a WhatsApp |
| Cifras / respaldo | Años de experiencia y toneladas transportadas — construye confianza con datos duros antes de explicar el servicio |
| Qué hacemos | Servicios de la empresa (qué tipo de carga y operación resuelve G&S) |
| Base de operaciones | Detalle geográfico de la cobertura (Valle de Aburrá, Oriente Antioqueño, resto del país bajo requerimiento) — responde "¿operan donde yo estoy?" con precisión, no solo con la palabra "cobertura" |
| Por qué G&S | Atributos de marca / diferenciadores (trayectoria, cercanía familiar, compromiso ambiental) |
| Impacto | Datos concretos del aporte ambiental del transporte de PET — profundiza el atributo ambiental de la sección anterior con cifras, no solo la menciona |
| Cómo trabajamos | Proceso en pasos (contacto → cotización → recolección → entrega) |
| Nuestra historia | Línea de tiempo con al menos 4 hitos de la compañía (origen familiar → hoy) |
| CTA final | Botón de WhatsApp |
| Footer | Derechos reservados y accesos |

**Nota:** esta estructura no incluye un beat explícito de "problema /
tensión" ni de FAQ. La ausencia de tensión se compensa llevando el
mensaje de urgencia ambiental ("lo que no se transporta a tiempo se
acumula como contaminación") al copy de Hero o Qué hacemos, en vez de
dedicarle una sección propia — decisión explícita del cliente, no un
descuido.

## Referencias

| Sitio | Qué tomar de ahí | Qué NO copiar |
|---|---|---|
| [Schneider](https://schneider.com) | Navegación clara con acción directa desde el hero, balance entre solidez corporativa y claridad de acción | Su escala de flota/tecnología no aplica a una operación familiar de un solo cliente |
| [Prime Inc.](https://primeinc.com) | Narrativa de origen tejida con mensajes de sostenibilidad a lo largo del sitio, no aislada en una sección | Tono muy corporativo-masivo; no encaja con el ángulo familiar/cercano de G&S |
| [ArcBest](https://arcb.com) | Uso de reconocimientos externos de sostenibilidad como prueba social objetiva | Portafolio de servicios muy amplio; G&S no necesita esa complejidad de navegación |

## Restricciones

- Presupuesto de motion: medio (fade + slide-up al scroll, tratamiento
  default del repo — sin parallax ni animaciones elaboradas).
- Deadline: por definir.
- Assets de marca ya existentes: logo completo (variantes horizontal/
  vertical, azul/blanco/negro/verde) en `assets/brand/logo/`. Paleta:
  primario azul `#002A41`, primario verde `#94C23D`, con variaciones.
  Tipografía: Galvji (títulos) — fuente de sistema Apple, requiere
  fallback web; Lato (párrafos) — disponible en Google Fonts.
- Canal único de contacto: WhatsApp (sin carrito ni pasarela de pagos).
