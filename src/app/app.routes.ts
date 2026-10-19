import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { TalentPage } from './pages/talent/talent';
import { tyroUiErrorRoutes, TyroUiSeo, tyroUiLocalizedRoutes } from 'tyrolium-ui';

/* ─── SEO (titre + description par page, FR / EN) ─────────────────────── */

const SEO_HOME: TyroUiSeo = {
  fullTitle:   { fr: 'Vturias - Agence de VTubing Française', en: 'Vturias - French VTubing Agency' },
  description: { fr: 'Vturias est une agence de VTubing française dédiée à la création, la promotion et le développement des talents virtuels. Une filiale de Tyrolium, née du partenariat avec la VTubeuse AuroreTVv.', en: 'Vturias is a French VTubing agency dedicated to creating, promoting and developing virtual talents. A Tyrolium subsidiary, born from the partnership with VTuber AuroreTVv.' },
};

export const routes: Routes = tyroUiLocalizedRoutes([
  { path: '',              component: Home, data: { seo: SEO_HOME } },
  { path: 'talent/:slug',  component: TalentPage },
  ...tyroUiErrorRoutes(),
]);
