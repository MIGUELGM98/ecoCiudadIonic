import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UbicationPageRoutingModule } from './ubication-routing.module';

import { UbicationPage } from './ubication.page';
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UbicationPageRoutingModule
  ],
  declarations: [UbicationPage]
})
export class UbicationPageModule {}
