import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, NavController, ToastController } from '@ionic/angular';
import {AngularFireAuth} from "@angular/fire/auth";
import  firebase  from 'firebase/app';
import { AuthService } from '../auth.service';
import { Utils } from 'src/app/utils/ionic.utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public isLoggin: boolean;
  private Utils_: Utils;

  constructor(
    public menu: MenuController,
    private navCtrl: NavController,
    public afAuth:AngularFireAuth,
    private authService:AuthService
  ) {
    this.Utils_ = new Utils(new LoadingController, new ToastController, undefined);
    this.isLoggin = false;
    this.menu.enable(false);
    this.menu.swipeGesture(false);
  }

  ngOnInit() {
    this.getLogged();
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
      .catch(
        err => {
          //Manejo de errores
          this.Utils_.presentToast("danger", "Operación cancelada por el usuario");
          console.log("Error");
        }
      )
    // this.getLogged();
  }

  getLogged(){
    this.authService.isAuth().subscribe(
      res => {
        if(res){ 
          this.Utils_.presentLoading();
          setTimeout(() => {
            console.log(res);
            this.Utils_.stopLoading();
            this.navCtrl.navigateRoot('/menu', {animated: true});
          }, 1000);
        }
      }
    );
  }

}
