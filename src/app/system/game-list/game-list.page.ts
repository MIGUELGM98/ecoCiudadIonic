import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Utils } from 'src/app/utils/ionic.utils';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.page.html',
  styleUrls: ['./game-list.page.scss'],
})
export class GameListPage implements OnInit {

  public Util: Utils;

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController
  ) {
    this.Util = new Utils(undefined, undefined, this.modalCtrl);
  }

  ngOnInit() {
  }

  openGame(){
    this.Util.presentModal();
  }

}
