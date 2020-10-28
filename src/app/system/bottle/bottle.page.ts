import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bottle',
  templateUrl: './bottle.page.html',
  styleUrls: ['./bottle.page.scss'],
})
export class BottlePage implements OnInit {

  public informacion: boolean;
  public content: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController
  ) {
    this.content = this.activatedRoute.snapshot.params.id;
    this.informacion = true;
  }

  ngOnInit() {
  }

  state(value){
    console.log(value);
    this.informacion =  value === 1 ? true : false;
  }

}
