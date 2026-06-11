import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { TalentPage } from './pages/talent/talent';
import { TyroUiNotFound } from 'tyrolium-ui';

export const routes: Routes = [
  { path: '',              component: Home },
  { path: 'talent/:slug',  component: TalentPage },
  { path: '**',            component: TyroUiNotFound },
];
