import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { TalentPage } from './pages/talent/talent';
import { TyroUiForbidden, TyroUiNotFound } from 'tyrolium-ui';

export const routes: Routes = [
  { path: '',              component: Home },
  { path: 'talent/:slug',  component: TalentPage },
  { path: '403',           component: TyroUiForbidden },
  { path: '**',            component: TyroUiNotFound },
];
