import { Component } from '@angular/core';

import { MenuController, NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import  firebase  from 'firebase/app';
import { AuthService } from './auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  nombre:string;
  gmail:string;
  urlphoto:string;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private navCtrl: NavController,
    public afAuth:AngularFireAuth,
    public authService:AuthService
  ) {
    this.initializeApp();

    this.getData();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString("#FFFFFF");
      // this.statusBar.
      this.splashScreen.hide();
    });
  }

  exit(){
    this.menu.close();
  }

  logout(){
      this.afAuth.signOut();
      this.navCtrl.navigateRoot('/login', {animated: true})
      this.nombre='';
      this.gmail='';

  }

  getData(){
    this.authService.isAuth().subscribe(auth=>{
      if(auth){
        this.urlphoto=auth.photoURL;
        this.gmail=auth.email;
        this.nombre=auth.displayName;
      }
    })
  }
 
}
