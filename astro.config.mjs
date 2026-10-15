// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// Astro + islas React (para 21st.dev/shadcn y Motion) + Tailwind v4 via plugin de Vite.
// Ver config/tools.config.json para la justificacion de cada eleccion.
export default defineConfig({
  // Dominio de produccion: Astro.site arma las URLs absolutas de canonical,
  // Open Graph, JSON-LD y sitemap.xml.
  site: 'https://www.conexionesgs.com',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
