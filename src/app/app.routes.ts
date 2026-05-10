import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'productos', loadComponent: () => import('./productos/productos').then(m => m.Productos) },
  { path: 'servicios', loadComponent: () => import('./servicios/servicios').then(m => m.Servicios) },
  { path: 'nosotros', loadComponent: () => import('./nosotros/nosotros').then(m => m.Nosotros) },
  { path: 'contacto', loadComponent: () => import('./contacto/contacto').then(m => m.Contacto) },
  { path: '**', redirectTo: '' },
];
