import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'register',
    loadComponent: () => import('./user/register/register.page').then(m => m.RegisterPage)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },


  {
    path: 'login',
    loadComponent: () => import('./user/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'productlist',
    loadComponent: () => import('./admin/productlist/productlist.page').then( m => m.ProductlistPage)
  },
];
