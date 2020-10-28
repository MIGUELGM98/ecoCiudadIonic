import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  public informacion: boolean = true;

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  state(value){
    console.log(value);
    this.informacion =  value === 1 ? true : false;
  }

  openVideo(){
    window.open("https://www.youtube.com/watch?v=1skPkyiln2s");
  }

}
