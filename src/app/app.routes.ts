import { ParentComp } from './components/parent-comp/parent-comp';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/parent-comp/parent-comp').then(m => m.ParentComp) },
];
