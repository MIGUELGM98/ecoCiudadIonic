import { Component, OnInit } from '@angular/core';
import {  NavController } from '@ionic/angular';

@Component({
  selector: 'app-slash',
  templateUrl: './slash.page.html',
  styleUrls: ['./slash.page.scss'],
})
export class SlashPage {

  public slideOpts: {};

  constructor(
    public navCtrl:NavController
  ) {
    this.slideOpts = {
      initialSlide: 0,
      speed: 400
    }
  }

  finish(){
    this.navCtrl.navigateRoot('/login', {animated: true});
  }

}
