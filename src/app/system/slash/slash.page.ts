import { Component, OnInit } from '@angular/core';
import {  NavController } from '@ionic/angular';

@Component({
  selector: 'app-slash',
  templateUrl: './slash.page.html',
  styleUrls: ['./slash.page.scss'],
})
export class SlashPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }
  

  irALogin(){
    this.navCtrl.navigateRoot('/login', {animated: true});
  }

}
