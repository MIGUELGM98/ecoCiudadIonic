import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlashPage } from './slash.page';

const routes: Routes = [
  {
    path: '',
    component: SlashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlashPageRoutingModule {}
