import { Component, OnInit } from '@angular/core';
import {  NavController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-slash',
  templateUrl: './slash.page.html',
  styleUrls: ['./slash.page.scss'],
})
export class SlashPage implements OnInit {

  public slideOpts: {};
  public logged: boolean;

  constructor(
    public navCtrl: NavController
  ) {
    this.logged = true;
    this.slideOpts = {
      initialSlide: 0,
      speed: 400
    }
  }

  ngOnInit(): void{
    if(localStorage.getItem("ecoCiudad__welcome")=== '1'){
      this.navCtrl.navigateRoot("/login");
    }else{
      this.logged = false;
    }
  }

  finish(){
    localStorage.setItem("ecoCiudad__welcome", '1');
    this.navCtrl.navigateRoot('/login', {animated: true});
  }

}
