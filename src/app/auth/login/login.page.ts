import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public menu: MenuController,
    private navCtrl: NavController
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

}
