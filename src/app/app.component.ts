import { Component } from '@angular/core';

import { LoadingController, MenuController, NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Utils } from './utils/ionic.utils';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public name: string;
  public email: string;

  private Utils_: Utils;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private navCtrl: NavController,
  ) {
    this.initializeApp();
    this.Utils_ = new Utils(new LoadingController, null, null);
    this.name = 'Invitado';
    this.email = 'contacto@fmodz.mx';
  } 

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString('#eaeaea');
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  exit(){
    this.menu.close();
  }

  logout(){

    this.Utils_.presentLoading();
    setTimeout(() => {
      this.navCtrl.navigateRoot('/login', {animated: true});
      this.Utils_.stopLoading();
    }, 1000);
      // this.nombre='';
      // this.gmail='';
  }

}
