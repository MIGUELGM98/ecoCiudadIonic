import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, NavController, ToastController } from '@ionic/angular';
import { Utils } from 'src/app/utils/ionic.utils';
import { AuthService } from '../auth.service';


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
    private authService_: AuthService
  ) {
    this.Utils_ = new Utils(new LoadingController, new ToastController, undefined);
    this.isLoggin = false;
    // this.menu.enable(false);
    // this.menu.swipeGesture(false);
  }

  ionViewDidLeave(){
    // this.menu.enable(true);
    // this.menu.swipeGesture(true);
  }

  ngOnInit() {
  }

 
  logMe(){
    this.navCtrl.navigateRoot('menu/home', {animated: true});
  }

  // loginGoogle(){
  //   this.authService_.loginGoogle().then(
  //     res => {
  //       console.log(res);
  //     }
  //   ).catch(
  //     err => {
  //       console.log(err);
  //     }
  //   )
  // }

}
