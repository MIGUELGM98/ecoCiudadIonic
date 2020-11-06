import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./system/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./system/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'bottle/:id',
    loadChildren: () => import('./system/bottle/bottle.module').then( m => m.BottlePageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./system/product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'covid',
    loadChildren: () => import('./system/covid/covid.module').then( m => m.CovidPageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./system/report/report.module').then( m => m.ReportPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
