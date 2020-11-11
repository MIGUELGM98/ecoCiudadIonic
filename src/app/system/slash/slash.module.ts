import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlashPageRoutingModule } from './slash-routing.module';

import { SlashPage } from './slash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlashPageRoutingModule
  ],
  declarations: [SlashPage]
})
export class SlashPageModule {}
