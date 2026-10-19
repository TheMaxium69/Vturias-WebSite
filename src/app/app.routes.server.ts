import { RenderMode, ServerRoute } from '@angular/ssr';
import { TALENTS } from './data/talents.data';

// Pré-rendu (SSG) : chaque route est générée en HTML statique au build (en français et en /en/)
export const serverRoutes: ServerRoute[] = [
  {
    path: 'talent/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => TALENTS.map(t => ({ slug: t.slug })),
  },
  {
    path: 'en/talent/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => TALENTS.map(t => ({ slug: t.slug })),
  },
  { path: '**', renderMode: RenderMode.Prerender },
];
