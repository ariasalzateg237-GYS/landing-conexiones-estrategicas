// Pantalla de carga: logo + texto centrados durante un tiempo fijo
// (no una carga real), luego dispara la entrada en stagger del hero,
// con salida en cortina diagonal (transform, ya definido como estado
// CSS `.is-leaving` en Preloader.astro).

import { gsap } from 'gsap';

const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

const preloader = document.getElementById('preloader');
const heroItems = document.querySelectorAll<HTMLElement>('.hero-reveal-item');

function revealHero() {
  if (heroItems.length) {
    gsap.to(heroItems, { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out' });
  }
}

if (!preloader || prefersReducedMotion) {
  // Sin loader: el hero ya es visible por defecto (no hay nada que ocultar).
  preloader?.style.setProperty('display', 'none');
} else {
  // Hero arranca oculto — no lleva .gsap-section, así que scroll-story.ts
  // no lo toca; el ocultamiento inicial vive acá.
  gsap.set(heroItems, { opacity: 0, y: 24 });

  // Bloquea el scroll mientras el loader tapa la página: si no, la cortina
  // sale a mitad de página y la entrada del hero ocurre fuera de pantalla.
  // Se activa desde acá (no desde un script en <head>) para que, si este
  // módulo no llega a cargar, la página nunca quede bloqueada.
  document.documentElement.classList.add('is-loading');

  const TOTAL_DURATION = 3;
  const EXIT_DURATION = 0.9;
  const HOLD_DURATION = TOTAL_DURATION - EXIT_DURATION;

  const finish = () => {
    document.documentElement.classList.remove('is-loading');
    preloader.classList.add('is-leaving');
    setTimeout(revealHero, 500);
  };

  gsap.delayedCall(HOLD_DURATION, finish);
}
