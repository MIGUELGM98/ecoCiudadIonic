import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReciclatePageRoutingModule } from './reciclate-routing.module';

import { ReciclatePage } from './reciclate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReciclatePageRoutingModule
  ],
  declarations: [ReciclatePage]
})
export class ReciclatePageModule {}
