import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReciclatePage } from './reciclate.page';

const routes: Routes = [
  {
    path: '',
    component: ReciclatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReciclatePageRoutingModule {}
