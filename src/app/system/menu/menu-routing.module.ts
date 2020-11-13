import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path:'game-list',
        loadChildren:()=> import('../game-list/game-list.module').then(m=> m.GameListPageModule)
      },
      { 
        path: 'ubication',
        loadChildren: () => import('../ubication/ubication.module').then( m => m.UbicationPageModule)
      },
      {
        path: 'reciclate',
        loadChildren: () => import('../reciclate/reciclate.module').then( m => m.ReciclatePageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: 'home'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
