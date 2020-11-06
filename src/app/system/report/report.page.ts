import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Utils } from 'src/app/utils/ionic.utils';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

  private util: Utils;

  constructor(
    public navCtrl: NavController
  ) {
    this.util = new Utils(new LoadingController, new ToastController);
  }
 
  ngOnInit() {
  }

  generate(){
    this.util.presentLoading();
    setTimeout(() => {
      this.util.stopLoading();
      this.util.presentToast();
      this.navCtrl.back();
    }, 1000);
  }

}
