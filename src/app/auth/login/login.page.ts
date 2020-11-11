import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import {AngularFireAuth} from "@angular/fire/auth";

import  firebase  from 'firebase/app';
import { AuthService } from '../auth.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  isLoggin:boolean=false;
  constructor(
    public menu: MenuController,
    private navCtrl: NavController,
    public afAuth:AngularFireAuth,
    private authService:AuthService
  ) {
    this.menu.enable(false);
    this.menu.swipeGesture(false);
  }

  ngOnInit() {
  }

  ionViewWillLeave(){
    this.menu.enable(true);
    this.menu.swipeGesture(true);
  }

  navigate(){
    this.navCtrl.navigateRoot('/menu', {animated: true});
  }
 
  loginWithFacebook(){
    this.afAuth.signInWithPopup( new firebase.auth.FacebookAuthProvider())
    this.getLogged();
  }

  getLogged(){
    this.authService.isAuth().subscribe(auth=>{
      if(auth){ 
        console.log(auth.photoURL)  
        console.log(auth.getIdToken.name)
     
        this.navCtrl.navigateRoot('/menu', {animated: true});
      }
    })
  }

}
